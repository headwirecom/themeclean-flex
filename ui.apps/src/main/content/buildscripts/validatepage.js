const fs = require('fs');
const path = require('path');

const puppeteer = require('puppeteer');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

const out_path = 'target/out';

let out = [];
const queue = [];
const visited = [];

function diff(name) {
  try {
    const img2 = PNG.sync.read(fs.readFileSync(`${out_path}/${name}`));
    if(!fs.existsSync(`approved/${name}`)) {
      fs.writeFileSync(`approved/${name}`, PNG.sync.write(img2));
    }
    const img1 = PNG.sync.read(fs.readFileSync(`approved/${name}`));
    const {width, height} = img1;
    const diff = new PNG({width, height});
    
    pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.1});
    
    fs.writeFileSync(`${out_path}/diff/${name}`, PNG.sync.write(diff));
  } catch( error ) {
    console.error(error);
  }
}

function report(url, version, name) {
  out.push({url, version, name})
}

function generateReport(name) {
  console.log('writing report for', name);
  const data = [];
  data.push('<table width="100%">');
  out.forEach( entry => {
    data.push(`<tr><td colspan="3"><h2>${entry.version} ${entry.url}</h2></td></tr>`);
    data.push(`<tr>`);
    data.push(`<td style="width: 30%"><img style="max-width: 100%" src="${entry.name}"></td>`);
    data.push(`<td style="width: 30%"><img style="max-width: 100%" src="../../approved/${entry.name}"></td>`);
    data.push(`<td style="width: 30%"><img style="max-width: 100%" src="diff/${entry.name}"></td>`);
    data.push(`</tr>`);
  })
  data.push(`</table`);
  fs.writeFileSync(`${out_path}/${name}.html`, data.join('\n'));
}

async function screenShotAt(url, page, width, version, name) {
  console.log('screenshot:',url,width, version);
  await page.setViewport( { width: width, height: 1024 } );
  await page.screenshot({ path: `${out_path}/${name}-${version}.png`, fullPage: true});
  diff(`${name}-${version}.png`);
  report(url, version, `${name}-${version}.png`);
}

async function makeRenditions(base, path) {
  visited.push(path);
  const name = path.substring(base.length+1).replace(/[\.\/]/g, '-');
  if(name.split('-').length > 3) {
    return;
  }
  const browser = await puppeteer.launch({ headless: true, defaultViewport: null });
  const page = await browser.newPage();
  try {
    await page.goto(path, { waitUntil: 'networkidle0'});
  } catch (err) {
    console.log(err);
  }
  await screenShotAt(path, page, 320, 'mobile', name);
  await screenShotAt(path, page, 768, 'tablet', name);
  await screenShotAt(path, page, 1024, 'desktop', name);
  await screenShotAt(path, page, 1600, 'desktop-wide', name);
  
  const hrefs = await page.$$eval('a', as => as.map(a => a.href));
  hrefs.forEach( url => {
    if(visited.indexOf(url) < 0 && queue.indexOf(url) < 0 && url.startsWith(base)) {
      if(url !== base+'.html' && url.endsWith('.html')) {
        queue.push(url);
      }
    }    
  });
  console.log(queue)
  console.log(queue.length, 'items to go')

  await browser.close();
  generateReport(name);
  out = [];

};

function makeDirs(relpath) {
  const segments = relpath.split('/');
  for(let i = 0; i < segments.length; i++) {
    const s = segments.slice(0, i+1).join('/');
    if(!fs.existsSync(s)) {
      fs.mkdirSync(s);
    }
  }
}

(async () => {
  makeDirs('target/out/diff');
  makeDirs('approved');
  console.log('vaildatepage <url> [single]');
  const url = process.argv[2]
  const single = process.argv[3]
  const parent = url.substring(0, url.lastIndexOf('/'));
  if(process.argv.length >= 3) {
    queue.push(url);
    let ps = [];
    while(queue.length > 0) {
      while(ps.length < 8 && queue.length > 0) {
        const href = queue.pop();
        console.log('processing', href);
        
        ps.push(new Promise(async (res, rej) => {
          await makeRenditions(parent, href);
          res();
        }))
      }
      await Promise.all(ps);
      ps = [];
      if(single) { break; }
    }
  }
})();
