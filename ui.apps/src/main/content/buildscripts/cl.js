const fs = require('fs-extra');

const clfrags = require('./cl-fragments.js');

const compvars = require('./variations.js');

function outSample(name, sample, variation=null) {
    const data = fs.readJSONSync('../fragments/'+name+'/'+sample);
    let out = ""
    out += clfrags.subtitle(`${data.title} (${data.group})`);
    const attrs = [['jcr:primaryType', 'nt:unstructured'], ['sling:resourceType','themecleanflex/components/'+name]];
    const children = [];
    if(variation) {
        const withoutName = Object.assign({}, variation);
        delete withoutName.name;
        Object.assign(data.model, withoutName);
    }
    for(let prop in data.model) {
        if(typeof data.model[prop] === 'string') {
            attrs.push( [prop, data.model[prop]] );
        } else {
            const ret = ['<'+prop+' jcr:primaryType="nt:unstructured">'];
            const list = data.model[prop];
            for(let i = 0; i < list.length; i++) {
                const child = list[i];
                const attrs = [['jcr:primaryType', 'nt:unstructured']];
                for(let prop in child) {
                    if(typeof child[prop] === 'string') {
                        attrs.push( [prop, child[prop]] );
                    }
                }
                ret.push(clfrags.tag('c',attrs));
            }
            ret.push('</'+prop+'>');
            children.push(ret.join(''));
        }
    }
    out += clfrags.tag(name, attrs, children);
    return out;
}


function buildPage(target, name, samples, readme, variations) {
    
    const targetFolder = target+'/'+name;
    fs.mkdirsSync(targetFolder);
    const out = fs.createWriteStream(targetFolder + '/.content.xml');
    out.write(clfrags.header(name));
    out.write(clfrags.home());
    out.write(clfrags.pager());

    let readmeContent = ""
    if( readme ) {
        let md = fs.readFileSync('../fragments/' + name + '/readme.md', 'utf-8');
        readmeContent = clfrags.intro(md);
    }

    const samplesContent = samples.reduce( (val, sample) => val + outSample(name,sample), readmeContent )
    out.write(clfrags.container('main', samplesContent));
    out.write(clfrags.footer());
    out.close();
    buildVariationPages(target, name, samples, variations);
}

function buildVariationPages(target, name, samples, variations) {
    const targetRoot = target+'/'+name;
    samples.forEach((sample) => {
        variations.forEach((variation) => {
            const sampleName = sample.substring(0,sample.length - 5);
            const variationName = variation.name;
            const targetFolder = targetRoot + '/' + sampleName + variationName;
            //console.log(targetFolder);
            fs.mkdirsSync(targetFolder);
            const out = fs.createWriteStream(targetFolder + '/.content.xml');
            out.write(clfrags.header(name+sampleName+variationName));
            out.write(clfrags.home());
            out.write(clfrags.pager());
            const sampleContent = outSample(name, sample, variation);
            out.write(clfrags.container('main', sampleContent));
            out.write(clfrags.footer());
            out.close();
        });
    });
}

function buildIndexPage(target, pages) {
    
    const targetFolder = target;
    fs.mkdirsSync(targetFolder);
    const out = fs.createWriteStream(targetFolder + '/.content.xml');
    out.write(clfrags.header('component library'));
    out.write(clfrags.pager());

    let mainContent = ""
    mainContent += clfrags.title('component library');

    let cards = pages.map( page => ({
        title: page.name,
        text: fs.readFileSync('../fragments/' + page.name + '/readme.md', 'utf-8'),
        link: `library/${page.name}.html`
    }))

    mainContent += clfrags.cards(cards);

    out.write(clfrags.container('main',mainContent));
    out.write(clfrags.footer());
    out.close();
}

function forEachComponent(target = 'src/main/content/jcr_root/content/sites/themecleanflex/library', root = '../fragments/') {
    const pages = [];
    const components = fs.readdirSync(root);
    const variations = compvars.getVariations();
    console.log(variations);
    components.forEach( (name) => {
        const entry = fs.statSync(root+name);
        if(entry.isDirectory()) {
            const page = {};
            page.name = name;
            const files = fs.readdirSync(root+name);
            let hasEmptySample = false;
            const samples = files.filter( (name) => { 
                if (name == 'sample-empty.json') {
                    hasEmptySample = true;
                    return false;
                }
                return name.startsWith('sample') && name.endsWith('.json');
            } );
            if (hasEmptySample) samples.push('sample-empty.json');
            const readme = files.includes( 'readme.md' );
            page.readme = readme;
            console.log('name: ' + name);
            console.log('samples:');
            console.log(samples);
            console.log('variations:');
            console.log(variations);
            console.log('');
            buildPage(target, name, samples, readme, variations);
            pages.push(page);
        }
    });
    buildIndexPage(target, pages);
}

forEachComponent();
