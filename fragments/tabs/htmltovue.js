module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        f.replace( $.find('img'), '<themecleanflex-components-media :model="model"></themecleanflex-components-media>')

        let imageDiv = $.find('div.img-wrapper').first()
        f.addIf( imageDiv, 'model.showmedia == \'true\'')

        let containerClasses = `{
            'lg:flex-row': model.mediaposition === 'before',
            'lg:flex-row-reverse': model.mediaposition === 'after'

        }`
        f.bindAttribute($.find('div.flex').first(), 'class', containerClasses, false)

        f.bindAttribute($.find('div.flex > div').first(), 'style', "{'flex':`0 0 ${model.mediawidth}%`}")
    	f.addIf($.find('h1').first(), 'model.showtitle == \'true\' && model.title')
        f.mapRichField($.find('h1').first(), "model.title")
        f.addIf($.find('h2').first(), 'model.showsubtitle == \'true\' && model.subtitle')
        f.mapRichField($.find('h2').first(), "model.subtitle")

        let a = $.find('a').first()
        f.addFor(a, 'tabs')

        let aClasses = `{
            'text-white hover:text-white' : item.active === true,
            'bg-blue-700' : item.active  && model.tabcolor === 'blue',
            'bg-green-700' : item.active && model.tabcolor === 'green',
            'bg-red-700' : item.active && model.tabcolor === 'red',
            'bg-orange-700' : item.active && model.tabcolor === 'orange',
            'bg-light-700' : item.active && model.tabcolor === 'light',
            'bg-dark' : item.active && model.tabcolor === 'dark',
            'text-blue-700' : !item.active  && model.tabcolor === 'blue',
            'text-green-700' : !item.active && model.tabcolor === 'green',
            'text-red-700' : !item.active && model.tabcolor === 'red',
            'text-orange-700' : !item.active && model.tabcolor === 'orange',
            'text-light' : !item.active && model.tabcolor === 'light' || item.active && model.tabcolor === 'dark',
            'text-dark' : !item.active && model.tabcolor === 'dark' || item.active && model.tabcolor === 'light',
        }`

    	f.bindAttribute( a, 'class', aClasses, false)
    	f.bindAttribute( a, 'id', '`tab-control-${_uid}${parseInt(i)+1}`')
    	f.bindAttribute( a, 'aria-controls', '`tab${_uid}${parseInt(i)+1}`')
    	f.bindAttribute( a, 'aria-selected', 'item.active')
    	f.bindEvent( a, 'click', 'toggleActive(i)')
        f.mapRichField( a, "item.title")

    	let tabPanel = $.find('[role="tabpanel"]').first()
    	f.addFor( tabPanel, 'tabs')
    	f.bindAttribute(tabPanel, 'id', '`tab${_uid}${parseInt(i)+1}`')
        f.bindAttribute(tabPanel, 'aria-labelledby', '`tab-control-${_uid}${parseInt(i)+1}`')
    	f.bindAttribute(tabPanel, 'class', "item.active ? 'block opacity-100' : 'hidden'", false)
        f.mapRichField(tabPanel, "item.text")

        f.addElse($);
        $.parent().prepend('<div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>')
    }
}
