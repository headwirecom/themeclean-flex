module.exports = {
    convert: function($, f) {
        //f.bindPath($)
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')
        //f.mapField( $.find('h1'), 'model.title')
        f.mapField( $, 'model.title')
    }
}