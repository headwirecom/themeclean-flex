module.exports = {
    convert: function($, f) {
        f.bindAttribute($, 'style', "`list-style-type: none;padding: 0px;`", false)
        f.addFor($.find('li.children').first(), 'model.childrenPages', 'child')
        f.bindAttribute($.find('li.children a').first(),'href',f.pathToUrl('child.path'))
        f.mapField($.find('li.children a').first(),'child.title')
        f.replace( $.find('ul.nested').eq(0), '<themecleanflex-components-navigationnested v-bind:model="child" class="z-10" style="top:0; left: 100%;list-style-type: none; padding: 0px"></themecleanflex-components-navigationnested>')
        f.addIf($.find('themecleanflex-components-navigationnested').first(), 'child.hasChildren && child.childrenPages && child.childrenPages.length > 0')

        let nestedArrow = $.find('svg').eq(0);
        f.addIf(nestedArrow, 'child.hasChildren && child.childrenPages && child.childrenPages.length > 0');
        f.bindAttribute(nestedArrow, "style", "`transform:rotate(180deg);`")
        f.bindEvent(nestedArrow, 'click', "(e) => { toggleItem(i, e) }")
    }
}