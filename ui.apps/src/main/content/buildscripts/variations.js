const fs = require('fs-extra');

let f = (a, b) => [].concat(...a.map(a => b.map(b => [].concat(a, b))));
let cartesian = (a, b, ...c) => b ? cartesian(f(a, b), ...c) : a;

function objectify(array) {
    const obj = array.map(optionObjectsArr => {
        let combinedName = optionObjectsArr.reduce((combinedName, optionObject) => {
            return combinedName ? (combinedName + '; ' + optionObject.name) : optionObject.name;
        }, "");
        return Object.assign({}, ...optionObjectsArr, {name: combinedName});
    });
    return obj;
}

function createVariationMap(root = '../variation-fragments/') {
    const variations = [];
    const folders = fs.readdirSync(root);
    folders.forEach((name) => {
        const entry = fs.statSync(root+name);
        if(entry.isDirectory()) {
            const variation = [];
            const options = fs.readdirSync(root+name);
            options.forEach((optionName) => {
               if(optionName.endsWith('.json')) {
                   const optionJson = fs.readJSONSync(root+name+'/'+optionName);
                   let optionLabel = optionName.substring(0,optionName.length - 5);
                   optionLabel = optionLabel.replace("-", ": ");
                   optionJson.name = optionLabel;
                   variation.push(optionJson);
               }
            });
            variations.push(variation);
        }
    });
    return variations;
}

module.exports = {
    getVariations() {
        let variations = createVariationMap();
        let cartified = cartesian(...variations);
        let objectified = objectify(cartified);
        return objectified;
    }
}

//delete object.name;