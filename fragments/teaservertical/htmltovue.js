module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        //Content Container
        let containerClasses = `{
            'md:flex-row': model.mediaposition === 'before',
            'md:flex-row-reverse': model.mediaposition === 'after',
        }`
        f.bindAttribute(  $,  'class', containerClasses, false)

        //Container
        let textContainerClasses = `{
            'justify-start': model.aligncontent === 'left',
            'justify-center': model.aligncontent === 'center',
            'justify-end': model.aligncontent === 'right'
        }`
        // f.bindAttribute( $, 'class', containerClasses ,false)

        //Media
        let mediaDiv  = $.find('.img-wrapper').first()
        f.addIf( mediaDiv, "model.showmedia === 'true'")
        f.bindAttribute( mediaDiv, 'style', "{flex:`0 0 ${model.mediawidth}%`}")
        f.replace( $.find('img'), '<themecleanflex-components-media :model="model"></themecleanflex-components-media>')

        //Text
        let textClasses = `{
            'text-left': model.aligncontent === 'left',
            'text-center': model.aligncontent === 'center',
            'text-right': model.aligncontent === 'right',
            'text-2xl': model.isprimary === 'true'
        }`
        let textContainer = $.find('div>div').eq(0)
        let textDiv = $.find('div>div>div').first()
        f.bindAttribute( textContainer, 'class', textContainerClasses, false)
        f.bindAttribute( textDiv, 'class', textClasses, false)
        f.addStyle( textDiv, 'width', 'model.textwidth', '%')

        f.addIf($.find('h1').first(), "model.showtitle === 'true'")
        f.bindAttribute( $.find('h1').first(), 'class', "{'text-5xl': model.isprimary==='true'}", false)

        f.addIf($.find('h2').first(), "model.showsubtitle === 'true'")
        f.bindAttribute( $.find('h2').first(), 'class', "{'text-4xl': model.isprimary==='true'}", false)

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
            'btn-lg': model.buttonsize === 'large',
            'btn-sm': model.buttonsize === 'small',
            'btn-blue': item.buttoncolor === 'primary',
            'btn-white border border-blue': item.buttoncolor === 'secondary',
            'btn-green': item.buttoncolor === 'success',
            'btn-red': item.buttoncolor === 'danger',
            'btn-orange': item.buttoncolor === 'warning',
            'btn-white': item.buttoncolor === 'light',
            'btn-black': item.buttoncolor === 'dark'
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
