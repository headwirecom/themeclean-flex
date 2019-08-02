module.exports = {
    convert: function($, f) {
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        let rootItem = $.find('div').eq(0);
        f.addFor( rootItem, 'model.childrenPages', 'child' );

        let rootLink = $.find('a');
        f.mapField(rootLink, 'child.title');
        f.bindAttribute(rootLink, 'href', 'child.path');
        
        let nested = $.find('ul');
        f.addFor( nested, 'child.childrenPages', 'subchild' );
        f.addIf(nested, 'child.hasChildren && child.childrenPages && child.childrenPages.length > 0')

        let nestedLink = $.find('a').eq(1);
        f.mapField(nestedLink, 'subchild.title');
        f.bindAttribute(nestedLink, 'href', 'subchild.path');

		$.append('<div v-if="isEditAndEmpty">no content defined for component</div>')
    }
}
