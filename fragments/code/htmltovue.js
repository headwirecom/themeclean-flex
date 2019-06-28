module.exports = {
    convert: function($, f) {
        // make the element a block
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        // inject the code
        f.bindAttribute($.find('code').first(), "class", "model.language")
        f.mapField($.find('code').first(), "code")

    }
}