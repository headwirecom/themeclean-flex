module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        //Card
        let cardClasses = `{
            'bg-dark': model.customcardcolor !== 'true' && model.colorscheme === 'light',
            'bg-light': model.customcardcolor !== 'true' &&  model.colorscheme === 'dark',
            'text-dark': (model.showcard === 'false' && model.colorscheme === 'light') || (model.showcard === 'true' && model.colorscheme === 'dark'),
            'text-light': (model.showcard === 'false' && model.colorscheme === 'dark') || (model.showcard === 'true' && model.colorscheme === 'light'),
        }`
        f.addFor($.find('div.card').first(), 'model.cards')
        f.addStyle($.find('div.card').first(), 'background-color', "model.customcardcolor === 'true' && model.showcard === 'true' ? model.cardcolor: ''")
        f.bindAttribute($.find('div.card').first(), 'class', cardClasses, false)

        let cardBodyClasses = `{
            'p-3': model.showcard === 'true'
        }`
        f.bindAttribute($.find('div.card>div').first(), 'class', cardBodyClasses, false)

        //Image
        f.bindAttribute($.find('img').first(), 'class', "model.showcard == 'true' ? 'card-img pb-1' : 'card-img pb-3'")
        f.bindAttribute($.find('img').first(), 'src', f.pathToUrl('item.image'))
        f.bindAttribute($.find('img').first(), 'alt', 'item.imagealttext')
        f.addIf($.find('img').first(), 'item.image')

        //Title
        f.addIf($.find('h5').first(), 'model.showtitle == \'true\'')
        f.mapRichField($.find('h5').first(), "item.title")
        f.addStyle($.find('h5').first(), 'color', 'item.color')

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

        f.addIf($.find('.perIsEditAndEmpty').first(), 'isEditAndEmpty')
        f.addIf($.find('h1').first(), 'editAndEmpty')
    }
}
