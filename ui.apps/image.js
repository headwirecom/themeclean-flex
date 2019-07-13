const fs = require('fs');
const url = require('url');

const puppeteer = require('puppeteer');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function assetify(json) {
  for(key in json) {
    if(typeof json[key] === 'object') {
      assetify(json[key]);
    } else if(typeof json[key] === 'string' && json[key].startsWith('/content/asset')) {
      json[key] = 'src/main/content/jcr_root' + json[key];
    }
  }
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

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
            fs.writeFileSync('index.html', out);
            await page.goto(url.pathToFileURL('./index.html'), { waitUntil: 'networkidle0'});
            await screenshotDOMElement(page, '#app', 'src/main/content/jcr_root/apps/themecleanflex/components/'+thumbnail, 2);
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
      width: rect.width + padding * 2,
      height: rect.height + padding * 2
    }
  });
}