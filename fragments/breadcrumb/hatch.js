module.exports = {
    convert: function($, f) {
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        let span = $.find('span').first()
        f.addFor( span, 'model.links' )
        f.bindAttribute( span, 'class', "{'font-bold': i === model.links.length - 1}", false)

        let aClasses = `{
            'text-blue-700': model.linkcolor === 'primary',
            'text-green-700': model.linkcolor === 'success',
            'text-red-700': model.linkcolor === 'danger',
            'text-orange-700': model.linkcolor === 'warning',
            'text-white': model.linkcolor === 'light',
            'text-black': model.linkcolor === 'dark'
        }`

        let anchor = $.find('a')
        f.addIf( anchor, "i + 1 < model.links.length" )
        f.bindAttribute( anchor, 'href', "item.link + '.html'")
        f.mapField( anchor, "item.text")

        f.bindAttribute(anchor, 'class', aClasses, false)

        let spanInner = span.find('span')
        f.addIf( spanInner, "i+1 === model.links.length" )
        f.mapField( spanInner, "item.text")

        f.addElse($);
        $.parent().prepend('<div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>')

    }
}
