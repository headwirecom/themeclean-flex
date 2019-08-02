module.exports = {
    convert: function($, f) {
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        let rootItem = $.find('div').eq(0);
        f.addFor( rootItem, 'model.childrenPages', 'child' );
        f.bindEvent(rootItem, 'mouseover', 'showDropDown(i)');
        f.bindEvent(rootItem, 'mouseout', 'hideDropDown(i)');

        let rootLink = $.find('a');
        f.mapField(rootLink, 'child.title');
        f.bindAttribute(rootLink, 'href', 'child.path');
        
        let nested = $.find('ul');
        f.addIf(nested, 'child.hasChildren && child.childrenPages && child.childrenPages.length > 0')
        f.bindAttribute( nested, 'class', "active[i] ? 'visible':'invisible'", false)

        let nestedLink = $.find('a').eq(1);
        f.addFor( nestedLink, 'child.childrenPages', 'subchild' );
        f.mapField( nestedLink, 'subchild.title' );
        f.bindAttribute(nestedLink, 'href', 'subchild.path');

		$.append('<div v-if="isEditAndEmpty">no content defined for component</div>')
    }
}
