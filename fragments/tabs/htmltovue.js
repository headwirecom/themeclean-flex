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
        f.addFor(a, 'model.tabs')

        let aClasses = `{
            'text-white' : active === i,
            'bg-blue-700' : active === i && model.tabcolor === 'blue',
            'bg-green-700' : active === i && model.tabcolor === 'green',
            'bg-red-700' : active === i && model.tabcolor === 'red',
            'bg-orange-700' : active === i && model.tabcolor === 'orange',
            'bg-light-700' : active === i && model.tabcolor === 'light',
            'bg-dark' : active === i && model.tabcolor === 'dark',
            'text-blue-700' : active !== i  && model.tabcolor === 'blue',
            'text-green-700' : active !== i && model.tabcolor === 'green',
            'text-red-700' : active !== i && model.tabcolor === 'red',
            'text-orange-700' : active !== i && model.tabcolor === 'orange',
            'text-light' : active !== i && model.tabcolor === 'light' || active === i && model.tabcolor === 'dark',
            'text-dark' : active !== i && model.tabcolor === 'dark' || active === i && model.tabcolor === 'light',
        }`

    	f.bindAttribute( a, 'class', aClasses, false)
    	f.bindAttribute( a, 'id', '`tab-control-${_uid}${parseInt(i)+1}`')
    	f.bindAttribute( a, 'aria-controls', '`tab${_uid}${parseInt(i)+1}`')
    	f.bindAttribute( a, 'aria-selected', 'active === i')
    	f.bindEvent( a, 'click', 'toggleActive(i)')
        f.mapRichField( a, "item.title")

    	const tabPanel = $.find('[role="tabpanel"]').first()
    	f.addFor(tabPanel, 'model.tabs')
    	f.bindAttribute(tabPanel, 'id', '`tab${_uid}${parseInt(i)+1}`')
        f.bindAttribute(tabPanel, 'aria-labelledby', '`tab-control-${_uid}${parseInt(i)+1}`')
    	f.bindAttribute(tabPanel, 'class', "active === i ? 'block opacity-100' : 'hidden'", false)
        f.mapInlineRichField(tabPanel, 'model.tabs', 'text')

        f.addElse($);
        $.parent().prepend('<div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>')
    }
}
