const fs = require('fs-extra');
const puppeteer = require('puppeteer');
const PNG = require('pngjs').PNG;
const url = require('url');

fs.mkdirsSync('./target/previews');

const FRAGMENTS = '../fragments';

const html = fs.readFileSync('./src/main/content/buildscripts/preview.html').toString();

async function createScreenshot(folder, name, sample) {
  const DATA = fs.readFileSync(folder + '/' + sample).toString().replace(/"\/content\/assets\//g, '"http://localhost:8080/content/assets/' );
  const NAME = name.charAt(0).toUpperCase() + name.substring(1);

  console.log(folder, NAME, sample);
  const out = html.replace(/@@DATA@@/g, DATA).replace(/@@NAME@@/g, NAME).replace(/@@name@@/g, name);
  fs.writeFileSync('./test.html', out);

  const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
  const page = await browser.newPage();
  try {
    await page.goto(url.pathToFileURL('./test.html'), { waitUntil: 'networkidle0'});

  await page.setViewport( { width: 1024, height: 800 } );

  const rect = await page.evaluate(selector => {
    const element = document.querySelector(selector);
    if (!element)
        return null;
    const {x, y, width, height} = element.getBoundingClientRect();
    return {left: x, top: y, width, height, id: element.id};
  }, '#app');

  await page.screenshot({ path: `./target/previews/${name}-${sample.replace('.json', '')}.png`, clip: {
    x: rect.left,
    y: rect.top,
    width: rect.width,
    height: rect.height
}
}
);

} catch (err) {
  console.log(err);
}
await browser.close();
  return 1;

}

const work = [];

let count = 0;
function performAll() {
  // fetch all fragments
  const folders = fs.readdirSync(FRAGMENTS);
  folders.forEach( async (entry) => {
    const fragmentFolder = FRAGMENTS+'/'+entry;
    if(fs.statSync(fragmentFolder).isDirectory()) {
      // fetch all samples
      const files = fs.readdirSync(FRAGMENTS+'/'+entry);
      const samples = files.filter( e => e.startsWith('sample') );
      samples.forEach( async (sample) =>  {
        work.push({fragmentFolder, entry, sample});
      });
    }
  })
}

async function makeScreenshots() {
  for(let i = 0; i < work.length; i++) {
    const item = work[i];
    await createScreenshot(item.fragmentFolder, item.entry, item.sample);
  }
}

// performAll();
// makeScreenshots();

createScreenshot('../fragments/accordion', 'accordion', 'sample-accordionmedia.json')