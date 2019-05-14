module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')
        f.bindAttribute($ ,'is','model.element')
        f.mapField( $, 'model.text')
    }
}