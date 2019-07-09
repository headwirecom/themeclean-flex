module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')
        f.mapRichField( $.find('div'), 'model.text')

        const quoteClasses = `{
            'border-l-8': model.blockquote === "true",
            'border-t-2 border-b-4': model.blockquote === "false",
            'border-gray-800': model.colorscheme === "light",
            'border-gray-200': model.colorscheme === "dark"
        }`

        f.bindAttribute( $.find('div'), 'class', quoteClasses, false)

		$.parent().append('<div v-if="isEditAndEmpty">no content defined for component</div>')
    }
}
