module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        //Container
        let containerClasses = `{
            'md:flex-row-reverse': model.buttonside === 'left',
            'md:flex-row': model.buttonside === 'right',
            'enlarge-text': model.isprimary === 'true'
        }`
        f.bindAttribute( $, 'class', containerClasses ,false)

        //Text
        let textClasses = `{
            'text-left': model.aligncontent === 'left',
            'text-center': model.aligncontent === 'center',
            'text-right': model.aligncontent === 'right'
        }`
        let textDiv = $.find('div').eq(0)
        f.bindAttribute( textDiv, 'class', textClasses,false)
        f.addStyle( textDiv, 'flex-basis', 'model.textwidth', '%')
        
    	f.addIf($.find('h1').first(), "model.showtitle === 'true'")
        f.addIf($.find('h2').first(), "model.showsubtitle === 'true'")
        f.addIf($.find('p').first(), "model.showtext === 'true'")
        f.mapRichField($.find('h1').first(), "model.title")
        f.mapRichField($.find('h2').first(), "model.subtitle")
        f.mapRichField($.find('p').first(), "model.text")
        
        //Buttons
        let buttonsDiv = $.find('div').eq(1)
        let link = buttonsDiv.find('a')
        let buttonsClasses = `{
            'md:justify-end': model.buttonside === 'right',
            'md:justify-start': model.buttonside === 'left',
        }`

        let aClasses = `{
            'btn-lg': model.buttonsize === 'large',
            'btn-sm': model.buttonsize === 'small',
            'btn-primary': item.buttoncolor === 'primary',
            'btn-secondary': item.buttoncolor === 'secondary',
            'btn-green': item.buttoncolor === 'success',
            'btn-red': item.buttoncolor === 'danger',
            'btn-orange': item.buttoncolor === 'warning',
            'btn-white': item.buttoncolor === 'light',
            'btn-black': item.buttoncolor === 'dark'
        }`
        f.addIf( buttonsDiv, 'model.showbutton == \'true\'')
        f.bindAttribute( buttonsDiv, 'class', buttonsClasses,false)
        f.addFor( link, 'model.buttons')
        f.bindAttribute( link, 'href', f.pathToUrl('item.buttonlink'))
        f.bindAttribute( link, 'class', aClasses, false)
        f.mapRichField( link, "item.buttontext")
        f.addStyle( link, 'backgroundColor', 'item.buttoncolor')
        f.addStyle( link, 'borderColor', 'item.buttoncolor')

        f.addElse($)
        $.parent().prepend('<div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>')
    }
}
