module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        f.replace( $.find('img'), '<themecleanflex-components-media :model="model"></themecleanflex-components-media>')

        let imageDiv = $.find('div.w-auto').first()
        f.addIf( imageDiv, 'model.showmedia == \'true\'')

        let containerClasses = `{
            'flex-row': model.mediaposition === 'before',
            'flex-row-reverse': model.mediaposition === 'after'

        }`
        f.bindAttribute($.find('div.flex').first(), 'class', containerClasses, false)

        f.bindAttribute($.find('div.flex > div').first(), 'style', "{width:`${model.mediawidth}%`}")
    	f.addIf($.find('h2').first(), 'model.showtitle == \'true\' && model.title')
        f.mapRichField($.find('h2').first(), "model.title")
        f.addIf($.find('h3').first(), 'model.showsubtitle == \'true\' && model.subtitle')
        f.mapRichField($.find('h3').first(), "model.subtitle")

        f.addFor($.find('li.nav-item').first(), 'tabs')
        let a = $.find('a').first()

        let aClasses = `{
            'bg-blue text-white': item.active === true,
            'bg-primary': model.tabcolor === 'primary',
            'bg-secondary': model.tabcolor === 'secondary',
            'bg-success': model.tabcolor === 'success',
            'bg-danger': model.tabcolor === 'danger',
            'bg-warning': model.tabcolor === 'warning',
            'bg-info': model.tabcolor === 'info',
            'bg-light': model.tabcolor === 'light',
            'bg-dark': model.tabcolor === 'dark'
        }`

    	f.bindAttribute( a, 'class', aClasses, false)
    	f.bindAttribute( a, 'id', '`tab-control-${_uid}${parseInt(i)+1}`')
    	f.bindAttribute( a, 'aria-controls', '`tab${_uid}${parseInt(i)+1}`')
    	f.bindEvent( a, 'click', 'toggleActive(i)')
        f.mapRichField( a, "item.title")

    	let tabPanel = $.find('[role="tabpanel"]').first()
    	f.addFor( tabPanel, 'tabs')
    	f.bindAttribute(tabPanel, 'id', '`tab${_uid}${parseInt(i)+1}`')
        f.bindAttribute(tabPanel, 'aria-labelledby', '`tablabel${_uid}${parseInt(i)+1}`')
    	f.bindAttribute(tabPanel, 'class', "item.active ? 'block' : 'hidden'", false)
        f.mapRichField(tabPanel, "item.text")
    }
}
