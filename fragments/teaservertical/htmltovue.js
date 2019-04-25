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
            'text-right': model.aligncontent === 'right'
        }`
        let textContainer = $.find('div>div').eq(0)
        let textDiv = textContainer.find('div').first()
        f.bindAttribute( textContainer, 'class', textContainerClasses, false)
        f.bindAttribute( textDiv, 'class', textClasses, false)
        f.addStyle( textDiv, 'width', 'model.textwidth', '%')
    	f.addIf($.find('h2').first(), "model.showtitle === 'true'")
        f.addIf($.find('h4').first(), "model.showsubtitle === 'true'")
        f.addIf($.find('p').first(), "model.showtext === 'true'")
        f.mapRichField($.find('h2').first(), "model.title")
        f.mapRichField($.find('h4').first(), "model.subtitle")
        f.mapRichField($.find('p').first(), "model.text")

        //Buttons
        let buttonsDiv = $.find('div .flex-wrap').first()
        let link = buttonsDiv.find('a').first()
        let buttonsClasses = `{
            'justify-start': model.alignbuttons === 'start',
            'justify-center': model.alignbuttons === 'center',
            'justify-end': model.alignbuttons === 'end'
        }`
        let aClasses = `{
            'btn-lg': model.buttonsize === 'large',
            'btn-sm': model.buttonsize === 'small',
            'btn-p': item.buttoncolor === 'primary',
            'btn-white border border-blue': item.buttoncolor === 'secondary',
            'btn-green': item.buttoncolor === 'success',
            'btn-red': item.buttoncolor === 'danger',
            'btn-orange': item.buttoncolor === 'warning',
            'btn-light': item.buttoncolor === 'light',
            'btn-dark': item.buttoncolor === 'dark'
        }`

        f.addFor( link, 'model.buttons')
        f.bindAttribute( link, 'href', f.pathToUrl('item.buttonlink'))
        f.bindAttribute( link, 'class', aClasses, false)
        f.mapRichField( link, "item.buttontext")
        f.addStyle( link, 'backgroundColor', 'item.buttoncolor')
        f.addStyle( link, 'borderColor', 'item.buttoncolor')

        f.addIf( buttonsDiv, 'model.showbutton == \'true\'')
        f.bindAttribute( buttonsDiv, 'class', buttonsClasses, false)
    }
}
