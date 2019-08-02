module.exports = {
    convert: function($, f) {
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        let rootItem = $.find('div').eq(0);
        f.addFor( rootItem, 'model.childrenPages', 'child' );

        let single = $.find('a');
        
        let nested = $.find('ul');
        f.replace( nested, '<themecleanflex-components-navnested v-bind:model="child"></themecleanflex-components-navnested>')
        f.addIf($.find('themecleanflex-components-navnested'), 'child.hasChildren && child.childrenPages && child.childrenPages.length > 0')

		$.append('<div v-if="isEditAndEmpty">no content defined for component</div>')
    }
}