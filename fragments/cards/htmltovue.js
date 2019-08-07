module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        let widths = `{
            'w-full': model.cardsperrow == 1,
            'w-full md:w-1/2 lg:w-1/2': model.cardsperrow == 2,
            'w-full sm:w-1/2 md:w-1/2 lg:w-1/3': model.cardsperrow == 3,
            'w-full sm:w-1/2 md:w-1/3 lg:w-1/4': model.cardsperrow == 4,
            'w-full sm:w-1/2 md:w-1/4 lg:w-1/5': model.cardsperrow == 5,
            'w-full sm:w-1/2 md:w-1/3 lg:w-1/6': model.cardsperrow == 6,
        }`

        //Card Width
        f.bindAttribute($.find('div.card').first(), 'class', widths, false);

        //Card
        let cardClasses = `{
            'bg-dark': model.customcardcolor !== 'true' && model.colorscheme === 'light',
            'bg-light': model.customcardcolor !== 'true' &&  model.colorscheme === 'dark',
            'text-dark': (model.showcard === 'false' && model.colorscheme === 'light') || (model.showcard === 'true' && model.colorscheme === 'dark'),
            'text-light': (model.showcard === 'false' && model.colorscheme === 'dark') || (model.showcard === 'true' && model.colorscheme === 'light'),
        }`

        f.addFor($.find('div.card').first(), 'model.cards')
        f.addStyle($.find('div.card > div').first(), 'background-color', "model.customcardcolor === 'true' && model.showcard === 'true' ? model.cardcolor: ''")
        f.bindAttribute($.find('div.card > div').first(), 'class', cardClasses, false)

        let cardBodyClasses = `{
            'p-3': model.showcard === 'true'
        }`
        f.bindAttribute($.find('div.card>div>div').eq(1), 'class', cardBodyClasses, false)

        f.bindAttribute($.find('div.card>div>div').eq(0), 'style', '{width: item.imagewidth + "%"}')
        //Image
        f.replace($.find('img'), '<v-lazy-image></v-lazy-image>')
        f.bindAttribute($.find('v-lazy-image').first(), 'class', "model.showcard == 'true' ? 'card-img pb-1' : 'card-img pb-3'")
        f.bindAttribute($.find('v-lazy-image').first(), 'src', f.pathToUrl('item.image'))
        f.bindAttribute($.find('v-lazy-image').first(), 'alt', 'item.imagealttext')
        f.addIf($.find('v-lazy-image').first(), 'item.image')

        //Title
        f.addIf($.find('h1').first(), 'model.showtitle == \'true\'')
        f.mapRichField($.find('h1').first(), "item.title")
        f.addStyle($.find('h1').first(), 'color', 'item.color')

        //Text
        f.addIf($.find('p').first(), 'model.showtext == \'true\'')
        f.mapRichField($.find('p').first(), "item.text")

        //Button
        let aClasses = `{
            'btn-lg': item.buttonsize === 'large',
            'btn-sm': item.buttonsize === 'small',
            'btn-blue': item.buttoncolor === 'primary',
            'btn-white border border-blue': item.buttoncolor === 'secondary',
            'btn-green': item.buttoncolor === 'success',
            'btn-red': item.buttoncolor === 'danger',
            'btn-orange': item.buttoncolor === 'warning',
            'btn-white': item.buttoncolor === 'light',
            'btn-black': item.buttoncolor === 'dark'
        }`

        let a = $.find('a.btn')
        f.addIf($.find('div.text-center').first(), 'item.buttontext')
        f.addIf( a, 'model.showbutton == \'true\'')
        f.bindAttribute( a, 'href', f.pathToUrl('item.buttonlink'))
        f.bindAttribute( a, 'class', aClasses, false)
        f.mapRichField( a, "item.buttontext")

        f.addElse($);
        $.parent().prepend('<div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>')
    }
}
