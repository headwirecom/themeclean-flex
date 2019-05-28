module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')
        f.mapRichField( $, 'model.text')

		$.parent().append('<div v-if="isEditAndEmpty">no content defined for component</div>')
    }
}
