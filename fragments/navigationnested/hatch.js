module.exports = {
    convert: function($, f) {
        f.bindAttribute($, 'style', "`list-style-type: none;padding: 0px;`", false)
        let nestedListClasses = `{
            'md:absolute': !parentmodel.showmobilemenuontablet,
            'lg:absolute': parentmodel.showmobilemenuontablet,
            'transparent': ( (windowWidth < 768 && parentmodel.mobiledropdownbg) ||  (windowWidth < 1024 && parentmodel.mobiledropdownbg && parentmodel.showmobilemenuontablet))
        }`

        f.bindAttribute($, 'class', nestedListClasses, false);

        let nestedChildrenClasses = `{
            'md:ml-0': !parentmodel.showmobilemenuontablet,
            'lg:ml-0': parentmodel.showmobilemenuontablet,
            'active': active[i]
        }`
        
        f.addFor($.find('li.children').first(), 'model.childrenPages', 'child')
        f.bindAttribute($.find('li.children').first(), 'class', nestedChildrenClasses, false);
        f.bindAttribute($.find('li.children > div').first(),'class', "`${active[i] ? 'bg-secondary' : ''}`", false)

        f.bindAttribute($.find('li.children a').first(),'href',f.pathToUrl('child.path'))
        f.bindAttribute($.find('li.children a').first(),'class',"`${active[i] ? 'active' : ''}`", false)
        f.mapField($.find('li.children a').first(),'child.title')

        f.replace( $.find('ul.nested').eq(0), '<themecleanflex-components-navigationnested v-bind:model="child" v-bind:parentmodel="parentmodel" class="z-10" style="top:0; left: 100%;list-style-type: none; padding: 0px"></themecleanflex-components-navigationnested>')
        f.bindAttribute($.find('themecleanflex-components-navigationnested').first(), 'class', "`${active[i] ? 'lg:hidden' : 'hidden'}`", false)
        f.bindAttribute($.find('li.children themecleanflex-components-navigationnested').first() , 'toggleitem', "toggleitem")
        f.addIf($.find('themecleanflex-components-navigationnested').first(), 'child.hasChildren && child.childrenPages && child.childrenPages.length > 0')

        let nestedArrow = $.find('svg').eq(0);
        f.addIf(nestedArrow, 'child.hasChildren && child.childrenPages && child.childrenPages.length > 0');
        
        let arrowClasses = `{
            'transform': true,
            'transform-rotate-270': ( windowWidth > 768 && !parentmodel.showmobilemenuontablet && !active[i]),
            'rotate-180': ( (windowWidth <= 768 && active[i]) || (parentmodel.showmobilemenuontablet && active[i])),
            'rotate-90': ( windowWidth > 768 && !parentmodel.showmobilemenuontablet && active[i]),
            'rotate-0': ( (windowWidth <= 768 && !active[i]) || (parentmodel.showmobilemenuontablet && !active[i])),
        }`;
        f.bindAttribute(nestedArrow, "class", arrowClasses, false)

        f.bindEvent(nestedArrow, 'click', "(e) => { toggleitem(i, e, active); }")
    }
}