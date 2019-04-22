module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')
        f.addIf($.find('.perIsEditAndEmpty').first(), 'isEditAndEmpty')

        f.bindAttribute($,  'class', "model.mediaposition === 'after' ? 'flex-row-reverse': 'flex-row'", false)

        f.bindAttribute($.find('div').first(), 'style', "{width: `${model.mediawidth}%`}")
        f.replace( $.find('img'), '<themecleanflex-components-media v-bind:model="model"></themecleanflex-components-media>')

        f.mapRichField( $.find('div').eq(1), "model.text")
    }
}