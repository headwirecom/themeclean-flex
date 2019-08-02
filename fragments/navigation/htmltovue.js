module.exports = {
    convert: function($, f) {
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        let rootItem = $.find('div').eq(0);
        f.addFor( rootItem, 'model.childrenPages', 'child' );

        let rootLink = $.find('a');
        f.mapField(rootLink, 'child.title');
        f.bindAttribute(rootLink, 'href', 'child.path');
        f.bindAttribute(rootLink, 'class', "model.colorscheme === 'dark' ? 'hover:bg-gray-200 hover:text-black' : 'hover:bg-black hover:text-gray-200'",false);
        
        let nested = $.find('div').eq(1);
        f.addIf(nested, 'child.hasChildren && child.childrenPages && child.childrenPages.length > 0')

        f.bindAttribute($.find('div').eq(2), 'class', "model.colorscheme === 'dark' ? 'theme-dark': 'theme-light'", false)

        let nestedLink = $.find('a').eq(1);
        f.addFor( nestedLink, 'child.childrenPages', 'subchild' );
        f.mapField( nestedLink, 'subchild.title' );
        f.bindAttribute(nestedLink, 'href', 'subchild.path');
        f.bindAttribute(nestedLink, 'class', "model.colorscheme === 'dark' ? 'hover:bg-gray-200 hover:text-black' : 'hover:bg-black hover:text-gray-200'",false);

		$.append('<div v-if="isEditAndEmpty">no content defined for component</div>')
    }
}
