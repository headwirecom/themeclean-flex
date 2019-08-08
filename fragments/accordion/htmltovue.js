module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        //Header
    	f.addIf($.find('h1').first(), 'model.showtitle == \'true\'')
        f.mapRichField($.find('h1').first(), "model.title")

        //Content Container
        let containerClasses = `{
            'lg:flex-row': model.mediaposition === 'before',
            'lg:flex-row-reverse': model.mediaposition === 'after'
        }`
        let contentDiv = $.find('.flex').first()
        f.bindAttribute(  contentDiv,  'class', containerClasses, false)

        //Media
        let mediaDiv  = contentDiv.find('.img-wrapper').first()
        f.addIf( mediaDiv, "model.showmedia === 'true'")
        f.bindAttribute( mediaDiv, 'style', "{flex:`0 0 ${model.mediawidth}%`}")
        f.replace( mediaDiv.find('img'), '<themecleanflex-components-media :model="model"></themecleanflex-components-media>')

        //Accordion Container
        let accordionContainer = $.find('div:nth-child(1)').eq(1)
        f.addFor(accordionContainer, 'model.accordiontoggle')
        f.bindAttribute( accordionContainer, 'id', "`accordion${_uid}${parseInt(i)+1}`")

        //Accordion Item Title Bar
        let a = $.find('a').first()
        f.bindEvent( a, 'click', "toggleItem(i)")
        f.mapRichField( a.find('h2'), "item.title")

        //Acocordion Item Body
        f.mapRichField($.find('div.card-content > div').first(), "item.text")
        f.bindAttribute($.find('div.card-content > div').first(), 'ref', "`cardContent${i}`")
        f.addStyle($.find('div.card-content').first(), 'height', "active[i] ? heights[i] + 'px' : '0px'")
        f.addStyle($.find('svg').first(), 'transform', "active[i] ? 'rotate(180deg)': 'rotate(0)'")

        f.addElse($);
        $.parent().prepend('<div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>')

    }
}
