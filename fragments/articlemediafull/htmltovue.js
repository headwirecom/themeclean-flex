module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')
        f.replace( $.find('img'), '<themecleanflex-components-media :model="model"></themecleanflex-components-media>')
        f.bindAttribute($.find('div').eq(1), 'style', "{flexBasis:`${model.mediawidth}%`}")
        f.addIf($.find('.perIsEditAndEmpty').first(), 'isEditAndEmpty')
    }
}