module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        let widths = `{
            'lg:w-full': model.cardsperrow == 1,
            'lg:w-1/2': model.cardsperrow == 2,
            'lg:w-1/3': model.cardsperrow == 3,
            'lg:w-1/4': model.cardsperrow == 4,
            'lg:w-1/5': model.cardsperrow == 5,
            'lg:w-1/6': model.cardsperrow == 6,
            'md:w-full': model.cardsperrowtab == 1,
            'md:w-1/2': model.cardsperrowtab == 2,
            'md:w-1/3': model.cardsperrowtab == 3,
            'md:w-1/4': model.cardsperrowtab == 4,
            'md:w-1/5': model.cardsperrowtab == 5,
            'md:w-1/6': model.cardsperrowtab == 6,
            'w-full': model.cardsperrowmobile == 1,
            'w-1/2': model.cardsperrowmobile == 2,
            'w-1/3': model.cardsperrowmobile == 3,
            'w-1/4': model.cardsperrowmobile == 4,
            'w-1/5': model.cardsperrowmobile == 5,
            'w-1/6': model.cardsperrowmobile == 6,
        }`

        //Card Width
        f.bindAttribute($.find('div.card').first(), 'class', widths, false);

        //Card
        let cardClasses = `{
            'bg-secondary': model.showcard === 'true' && model.customcardcolor !== 'true',
            'border border-solid': (model.customcardcolor !== 'true') && model.cardborder === 'true',
            'rounded-none': model.roundedcorners == 'none',
            'rounded-sm': model.roundedcorners == 'small',
            'rounded': model.roundedcorners == 'medium',
            'rounded-lg': model.roundedcorners == 'large'
        }`

        f.addFor($.find('div.card').first(), 'model.cards')
        f.addStyle($.find('div.card > div').first(), 'background-color', "model.customcardcolor === 'true' && model.showcard === 'true' ? model.cardcolor: ''")
        f.bindAttribute($.find('div.card > div').first(), 'class', cardClasses, false)

        let cardBodyClasses = `{
            'p-6': model.showcard === 'true' || model.cardborder === 'true'
        }`
        f.bindAttribute($.find('div.card>div>div').eq(1), 'class', cardBodyClasses, false)

        f.bindAttribute($.find('div.card>div>div').eq(0), 'style', '{width: item.imagewidth + "%"}')
        //Image
        f.replace($.find('img'), '<v-lazy-image></v-lazy-image>')
        f.bindAttribute($.find('v-lazy-image').first(), 'class', "model.showcard === 'true' ||  model.cardborder === 'true' ? 'card-img w-full' : 'card-img mb-3 w-full'")
        f.bindAttribute($.find('v-lazy-image').first(), 'src', f.pathToUrl('item.image'))
        f.bindAttribute($.find('v-lazy-image').first(), 'alt', 'item.imagealttext')
        f.addIf($.find('v-lazy-image').first(), 'item.image')

        //Title
        f.addIf($.find('h2').first(), 'model.showtitle == \'true\'')
        f.mapRichField($.find('h2').first(), "item.title", 'model.cards', 'title')
        f.addStyle($.find('h2').first(), 'color', 'item.color')

        //Text
        f.addIf($.find('h2 + div').first(), 'model.showtext == \'true\'')
        f.mapRichField($.find('h2 + div').first(), "item.text", 'model.cards', 'text')

        //Button
        let aClasses = `{
            'btn-lg': item.buttonsize === 'large',
            'btn-sm': item.buttonsize === 'small',
            'btn-primary': item.buttoncolor === 'primary',
            'btn-secondary': item.buttoncolor === 'secondary',
            'btn-success': item.buttoncolor === 'success',
            'btn-danger': item.buttoncolor === 'danger',
            'btn-warning': item.buttoncolor === 'warning',
            'self-start': item.buttonalign === 'left',
            'self-center': item.buttonalign === 'center',
            'self-end': item.buttonalign === 'right',
            'my-3': model.cardborder !== 'true' && model.showcard !== 'true'
        }`

        let a = $.find('a.btn')
        f.addIf($.find('div.text-center').first(), 'item.buttontext')
        f.addIf( a, 'showbutton(item)')
        f.bindAttribute( a, 'href', f.pathToUrl('item.buttonlink'))
        f.bindAttribute( a, 'class', aClasses, false)
        f.mapRichField( a, "item.buttontext", 'model.cards', 'buttontext')

        f.addElse($);
        $.parent().prepend('<div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>')
    }
}
