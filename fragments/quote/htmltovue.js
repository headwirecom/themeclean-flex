module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')
        f.mapRichField( $.find('div'), 'model.text')

        const quoteClasses = `{
            'p-4 border-gray-500 border-l-8': model.blockquote === "true",
            'p-4 border-gray-500 border-t-2 border-b-4': model.blockquote === "false",
        }`

        f.bindAttribute( $.find('div'), 'class', quoteClasses)

		$.parent().append('<div v-if="isEditAndEmpty">no content defined for component</div>')
    }
}
