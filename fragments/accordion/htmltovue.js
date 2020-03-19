module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        //Header
    	f.addIf($.find('h2').first(), 'model.showtitle == \'true\'')
        f.mapInlinedRichField($.find('h2').first(), "model.title")

        //Content Container
        let containerClasses = `{
            'lg:flex-row': model.mediaposition === 'before',
            'lg:flex-row-reverse': model.mediaposition === 'after'
        }`

        let contentDiv = $.find('.flex').first()
        f.bindAttribute( contentDiv,  'class', containerClasses, false)

        let accordionClasses = `{
            'bg-white' : model.colorscheme === 'light',
            'bg-gray-800' : model.colorscheme === 'dark',
            'border border-solid border-gray-300': model.colorscheme === 'light' && model.cardborder === 'true',
            'border border-solid border-gray-900': model.colorscheme === 'dark' && model.cardborder === 'true',
            'rounded-none': model.roundedcorners == 'none',
            'rounded-sm': model.roundedcorners == 'small',
            'rounded': model.roundedcorners == 'medium',
            'rounded-lg': model.roundedcorners == 'large',
            'rounded-full': model.roundedcorners == 'full'
        }`
        let accordionDiv = contentDiv.find('.accordion-container').first()
        f.bindAttribute( accordionDiv, 'class', accordionClasses, false)

        let mediaClasses = `{
            'img-wrapper rounded-none': model.roundedcorners == 'none',
            'img-wrapper rounded-sm': model.roundedcorners == 'small',
            'img-wrapper rounded': model.roundedcorners == 'medium',
            'img-wrapper rounded-lg': model.roundedcorners == 'large',
            'img-wrapper rounded-full': model.roundedcorners == 'full'
        }`
        //Media
        let mediaDiv  = contentDiv.find('.img-wrapper').first()
        f.addIf( mediaDiv, "model.showmedia === 'true'")
        f.bindAttribute( mediaDiv, 'style', "{flex:`0 0 ${model.mediawidth}%`}")
        f.bindAttribute( mediaDiv, 'class', mediaClasses, false)
        f.replace( mediaDiv.find('img'), '<themecleanflex-components-media :model="model"></themecleanflex-components-media>')

        let accordionContainerClasses = `{
            'border-b border-solid border-gray-300': model.colorscheme === 'light' && model.cardborder === 'true',
            'border-b border-solid border-gray-900': model.colorscheme === 'dark' && model.cardborder === 'true'
        }`

        //Accordion Container
        let accordionContainer = $.find('div:nth-child(1)').eq(1)
        f.addFor(accordionContainer, 'model.accordiontoggle')
        f.bindAttribute( accordionContainer, 'id', "`accordion${_uid}${parseInt(i) + 1}`")
        f.bindAttribute( accordionContainer, 'class', accordionContainerClasses, false)

        //Accordion Item Title Bar
        let a = $.find('a').first()
        f.bindEvent( a, 'click', "toggleItem(i)")
        f.mapRichField( a.find('h3'), "item.title")

        //Accordion Item Body
        let cardContent = $.find('div.card-content > div').first()
        f.mapRichField(cardContent, "item.text")
        f.bindAttribute(cardContent, 'ref', "`cardContent${i}`")
        f.addStyle($.find('div.card-content').first(), 'height', "active[i] ? heights[i] + 'px' : '0px'")
        f.addStyle($.find('svg').first(), 'transform', "active[i] ? 'rotate(180deg)': 'rotate(0)'")

        f.addElse($);
        $.parent().prepend('<div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>')

    }
}
