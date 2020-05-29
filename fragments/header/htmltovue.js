module.exports = {
    convert: function($, f) {
        //f.bindPath($)
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')
        f.addIf($.find('a').first(), 'model.logo')

        f.bindAttribute($.find('a').first(), 'href', f.pathToUrl('model.logourl'))
    	f.bindAttribute($.find('img').first(), 'src', f.pathToUrl('model.logo'))
    	f.bindAttribute($.find('img').first(), 'alt', 'model.logoalttext')
        f.addStyle($.find('img').first(), 'height', 'parseInt(model.logosize)', 'px')

        let mainMenu = $.find('nav>div>div:nth-child(2)')
        f.bindAttribute(mainMenu, 'class', "{'md:hidden': model.collapsed === 'true'}", false)

    	f.replace( $.find('nav>div:first-of-type>div div:nth-child(1)'), '<themecleanflex-components-textlinks v-bind:model="model"></themecleanflex-components-textlinks>')
        f.replace( $.find('nav>div:first-of-type>div div:nth-child(2)'), '<themecleanflex-components-menubuttons v-bind:model="model"></themecleanflex-components-menubuttons>')

        let collapseButton = $.find('nav>div>div:nth-child(3)')
        f.bindEvent( collapseButton, 'click', 'toggleMenu')
        f.addIf(collapseButton, 'model.buttons && model.buttons.length > 0 || model.links &&  model.links.length > 0')
        f.bindAttribute(collapseButton, 'style', "{display: model.collapsed === 'true' ? 'flex': false}", false)

        f.addStyle( $.find('nav>div:nth-child(2)'), 'height', "menuActive ? menuHeight + 'px' : '0px'")
        f.bindAttribute( $.find('nav>div:nth-child(2)'), 'class', "{'invisible': !menuActive}")

    	f.replace( $.find('nav>div:last-of-type>div>div:nth-child(1)'), '<themecleanflex-components-textlinks v-bind:model="model"></themecleanflex-components-textlinks>')
        f.replace( $.find('nav>div:last-of-type>div>div:nth-child(2)'), '<themecleanflex-components-menubuttons v-bind:model="model"></themecleanflex-components-menubuttons>')
        
        f.addElse($);
        $.parent().prepend('<div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>')
    }
}
