module.exports = {
    convert: function($, f) {
        //f.bindPath($)
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')
        f.addIf($.find('a').first(), 'model.logo')
        let navclasses = "{" +
            "'navbar-expand-lg': model.collapsed === 'false'," +
            "'navbar-light': model.colorscheme === 'light'," +
            "'navbar-dark': model.colorscheme === 'dark'" +
        "}"
        f.bindAttribute($, 'class', navclasses, false)

        f.bindAttribute($.find('a').first(), 'href', f.pathToUrl('model.logourl'))
    	f.bindAttribute($.find('img').first(), 'src', f.pathToUrl('model.logo'))
    	f.bindAttribute($.find('img').first(), 'alt', 'model.logoalttext')
        f.addStyle($.find('img').first(), 'height', 'parseInt(model.logosize)', 'px')


    	f.replace( $.find('nav>div>div div:nth-child(1)'), '<themecleanflex-components-textlinks v-bind:model="model"></themecleanflex-components-textlinks>')
        f.replace( $.find('nav>div>div div:nth-child(2)'), '<themecleanflex-components-menubuttons v-bind:model="model"></themecleanflex-components-menubuttons>')

        f.bindEvent( $.find('nav>div>div:nth-child(3)'), 'click', 'toggleMenu')

        f.addStyle( $.find('nav>div:nth-child(2)'), 'height', "menuActive ? menuHeight + 'px' : '0px'")

    	f.replace( $.find('nav>div:nth-child(2) div>div:nth-child(1)'), '<themecleanflex-components-textlinks v-bind:model="model"></themecleanflex-components-textlinks>')
        f.replace( $.find('nav>div:nth-child(2) div>div:nth-child(2)'), '<themecleanflex-components-menubuttons v-bind:model="model"></themecleanflex-components-menubuttons>')
    }
}
