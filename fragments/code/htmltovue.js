module.exports = {
    convert: function($, f) {
        // make the element a block
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        // inject the code
        f.bindAttribute($.find('code').first(), "class", "'language-'+model.language+ ((model.classes) ? ' '+model.classes : '')")
        f.mapRichField($.find('code').first(), "code")

    }
}