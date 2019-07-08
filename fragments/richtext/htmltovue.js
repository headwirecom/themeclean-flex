module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')
        f.mapRichField( $.find('div').eq(1), 'model.text')
        f.bindAttribute($.find('div').eq(1),'class',"{'px-4': model.showmedia === 'true'}")

        //Content Container
        let containerClasses = `{
            'lg:flex-row': model.mediaposition === 'before',
            'lg:flex-row-reverse': model.mediaposition === 'after'
        }`
        f.bindAttribute(  $,  'class', containerClasses, false)

        //Media
        let mediaDiv  = $.find('.img-wrapper').first()
        f.addIf( mediaDiv, "model.showmedia === 'true'")
        f.bindAttribute( mediaDiv, 'style', "{flex:`0 0 ${model.mediawidth}%`}")
        f.replace( $.find('img'), '<themecleanflex-components-media :model="model"></themecleanflex-components-media>')

		$.parent().append('<div v-if="isEditAndEmpty">no content defined for component</div>')
    }
}
