module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')
        f.mapRichField( $.find('div'), 'model.text')

        const quoteClasses = `{
            'p-4 border-gray-800 border-l-8': model.blockquote === "true",
            'p-4 border-gray-800 border-t-2 border-b-4': model.blockquote === "false",
            'p-4 border-gray-800 border-l-8': model.blockquote === "true" && model.colorscheme === "light",
            'p-4 border-gray-800 border-t-2 border-b-4': model.blockquote === "false" && model.colorscheme === "light",
            'p-4 border-gray-200 border-l-8': model.blockquote === "true" && model.colorscheme === "dark",
            'p-4 border-gray-200 border-t-2 border-b-4': model.blockquote === "false" && model.colorscheme === "dark",
        }`

        f.bindAttribute( $.find('div'), 'class', quoteClasses)

		$.parent().append('<div v-if="isEditAndEmpty">no content defined for component</div>')
    }
}
