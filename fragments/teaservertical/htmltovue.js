module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        //Container
        let textContainerClasses = `{
            'justify-start': model.aligncontent === 'left',
            'justify-center': model.aligncontent === 'center',
            'justify-end': model.aligncontent === 'right'
        }`
        // f.bindAttribute( $, 'class', containerClasses ,false)

        //Text
        let textClasses = `{
            'text-left': model.aligncontent === 'left',
            'text-center': model.aligncontent === 'center',
            'text-right': model.aligncontent === 'right',
            'text-3xl': model.isprimary === 'true'
        }`
        let textContainer = $.find('div>div').eq(0)
        let textDiv = $.find('div>div>div').first()
        f.bindAttribute( textContainer, 'class', textContainerClasses, false)
        f.bindAttribute( textDiv, 'class', textClasses, false)
        f.addStyle( textDiv, 'width', 'model.textwidth', '%')
    	f.addIf($.find('h1').first(), "model.showtitle === 'true'")
        f.addIf($.find('h2').first(), "model.showsubtitle === 'true'")
        f.addIf($.find('p').first(), "model.showtext === 'true'")
        f.mapRichField($.find('h1').first(), "model.title")
        f.mapRichField($.find('h2').first(), "model.subtitle")
        f.mapRichField($.find('p').first(), "model.text")

        //Buttons
        let buttonsDiv = $.find('.flex-wrap').first()
        let link = buttonsDiv.find('a').first()
        let buttonsClasses = `{
            'justify-start': model.alignbuttons === 'start',
            'justify-center': model.alignbuttons === 'center',
            'justify-end': model.alignbuttons === 'end'
        }`
        let aClasses = `{
            'btn btn-lg': model.buttonsize === 'large',
            'btn btn-sm': model.buttonsize === 'small',
            'btn btn-blue': item.buttoncolor === 'primary',
            'btn btn-white border border-blue': item.buttoncolor === 'secondary',
            'btn btn-green': item.buttoncolor === 'success',
            'btn btn-red': item.buttoncolor === 'danger',
            'btn btn-orange': item.buttoncolor === 'warning',
            'btn btn-white': item.buttoncolor === 'light',
            'btn btn-black': item.buttoncolor === 'dark',
            'p-0 font-bold hover:text-blue-900 no-underline hover:underline': item.buttoncolor === 'info',
            'elevation-5': model.buttonshadow === 'true'
        }`

        f.addFor( link, 'model.buttons')
        f.bindAttribute( link, 'href', f.pathToUrl('item.buttonlink'))
        f.bindAttribute( link, 'class', aClasses, false)
        f.mapRichField( link, "item.buttontext")
        f.addStyle( link, 'backgroundColor', 'item.buttoncolor')
        f.addStyle( link, 'borderColor', 'item.buttoncolor')

        f.addIf( buttonsDiv, 'model.showbutton == \'true\'')
        f.bindAttribute( buttonsDiv, 'class', buttonsClasses, false)

        f.addElse($)
        $.parent().prepend('<div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>')
    }
}
