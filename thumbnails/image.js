const fs = require('fs');
const url = require('url');

const Jimp = require('jimp');
const puppeteer = require('puppeteer');

const filter = process.argv.length > 2 ? process.argv[2] : '*';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function assetify(json) {
  for(key in json) {
    if(typeof json[key] === 'object') {
      assetify(json[key]);
    } else if(typeof json[key] === 'string' && json[key].startsWith('/content/asset')) {
      json[key] = '../ui.apps/src/main/content/jcr_root' + json[key];
    }
  }
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  page.emulate({ viewport: { width: 1024, height: 768, deviceScaleFactor: 1}, userAgent: '' })
  const files = fs.readdirSync('../fragments');
  for(let i = 0; i < files.length; i++) {    
    const component = files[i];
    if(fs.lstatSync('../fragments/'+component).isDirectory()) {
      const cmpFiles = fs.readdirSync('../fragments/'+component);
      for(let j = 0; j < cmpFiles.length; j++) {
        const file = cmpFiles[j];
        if(file.startsWith('sample') && file.endsWith('.json')) {
          const data = fs.readFileSync('../fragments/'+component+'/'+file).toString();
          const json = JSON.parse(data);

          assetify(json);

          if(json.group && json.group !== '.hidden') {
            const Component = component.charAt(0).toUpperCase()+component.substring(1);
            const componentVar = 'cmpThemecleanflexComponents'+Component;
            const componentScript = 'themecleanflexComponents'+Component;
            const componentName = 'themecleanflex-components-'+component;
            const thumbnail = component+'/thumbnail-'+file.replace('.json', '.png');
            let out = fs.readFileSync('template.html').toString();
            out = out.replace(/\[\[COMPONENT-VAR\]\]/g, componentVar);
            out = out.replace(/\[\[COMPONENT-SCRIPT\]\]/g, componentScript);
            out = out.replace(/\[\[COMPONENT-NAME\]\]/g, componentName);
            out = out.replace(/\[\[SAMPLE\]\]/g, JSON.stringify(json));
            if(filter === '*' || filter === component) {
              fs.writeFileSync('index.html', out);
              await page.goto(url.pathToFileURL('./index.html'), { waitUntil: 'networkidle0'});
              const imgpath = 'target/components/'+thumbnail;
              if(!fs.existsSync('target')) fs.mkdirSync('target');
              if(!fs.existsSync('target/components')) fs.mkdirSync('target/components');
              if(!fs.existsSync('target/components/'+component)) fs.mkdirSync('target/components/'+component);
              await screenshotDOMElement(page, '#peregrine-app', imgpath, 2);
              await Jimp.read(imgpath)
    .then(img => {
      return img
        .resize(280, Jimp.AUTO) // resize
        .write(imgpath); // save
    })
    .catch(err => {
      console.error(err);
    });
              } else {
              console.log('skip', component,file);
            }
          }
        }
      }
    }
  }

  await browser.close();
})();


async function screenshotDOMElement(page, selector, file, padding = 0) {
  const rect = await page.evaluate(selector => {
    const element = document.querySelector(selector);
    const {x, y, width, height} = element.getBoundingClientRect();
    return {left: x, top: y, width, height, id: element.id};
  }, selector);

  return await page.screenshot({
    path: file,
    clip: {
      x: rect.left - padding,
      y: rect.top - padding,
      width: rect.width*2 + padding * 2,
      height: rect.height*2 + padding * 2
    }
  });
}