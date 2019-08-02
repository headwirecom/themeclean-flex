module.exports = {
    convert: function($, f) {
        let nested = $.find('ul');
        f.replace( nested, '<themecleanflex-components-navnested v-bind:model="child"></themecleanflex-components-navnested>')
        f.addIf($.find('themecleanflex-components-navnested'), 'child.hasChildren && child.childrenPages && child.childrenPages.length > 0')
    }
}