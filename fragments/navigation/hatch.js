module.exports = {
    convert: function($, f) {
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        let navClasses = `{
            'justify-start': model.justifyitems === 'start',
            'justify-center': model.justifyitems === 'center',
            'justify-end': model.justifyitems === 'end',
            'md:flex-row': !model.showmobilemenuontablet,
            'lg:flex-row': model.showmobilemenuontablet
        }`

        f.bindAttribute($, 'class', navClasses, false);

        f.bindAttribute($.find('ul'), 'class', `{ 'flex' : menuActive, 'hidden md:flex' : ( !menuActive && !model.showmobilemenuontablet ), 'hidden lg:flex' : ( !menuActive && model.showmobilemenuontablet ), 'md:flex-row md:flex-wrap': !model.showmobilemenuontablet, 'lg:flex-row lg:flex-wrap': model.showmobilemenuontablet}`, false);
        f.bindAttribute($.find('ul'), 'style', "`list-style-type: none;padding: 0px;`", false);
        f.bindAttribute($.find('ul'), 'ref', "`parent`");

        f.addFor($.find('li.children').first(), 'model.childrenPages', 'child')
        f.bindAttribute($.find('li.children').first(), 'ref', "`directChildren`");
        f.bindAttribute($.find('li.children').first(),'class', "`${active[i] ? 'active' : ''}`", false)
        f.bindAttribute($.find('li.children > div').first(),'class', "`${active[i] ? 'bg-secondary' : ''}`", false)
        f.bindAttribute($.find('li.children a').first(),'href',f.pathToUrl('child.path'))
        f.bindAttribute($.find('li.children a').first(),'class',"`${active[i] ? 'active' : ''}`", false)
        f.mapField($.find('li.children a').first(),'child.title')

        f.replace( $.find('ul.nested').eq(0), '<themecleanflex-components-navigationnested v-bind:model="child" v-bind:parentmodel="model" style="list-style-type: none;padding: 0px;"></themecleanflex-components-navigationnested>')
        f.addIf($.find('li.children themecleanflex-components-navigationnested').first(), 'child.hasChildren && child.childrenPages && child.childrenPages.length > 0');
        f.bindAttribute($.find('li.children themecleanflex-components-navigationnested').first(), 'class', "`${active[i] ? 'lg:hidden' : 'hidden'}`", false)
        f.bindAttribute($.find('li.children themecleanflex-components-navigationnested').first(), 'toggleitem', "toggleItem")

        let nestedArrow = $.find('svg');
        f.bindAttribute(nestedArrow, "style", "`${active[i] ? 'transform:rotate(180deg);' : 'transform:rotate(0deg);'}`")
        f.bindEvent(nestedArrow, 'click', "(e) => { toggleItem(i, e, active); }")
        f.addIf(nestedArrow, 'child.hasChildren && child.childrenPages && child.childrenPages.length > 0');

        f.addElse($);
        $.parent().prepend('<div class="p-5" v-if="isEditAndEmpty">{{isEditAndEmpty}}</div>')

        let hamburgerClasses = `{
            'self-start': model.justifyitems === 'start',
            'self-end': model.justifyitems === 'end',
            'md:hidden': !model.showmobilemenuontablet,
            'lg:hidden': model.showmobilemenuontablet
        }`

        let hamburger = `<div class="font-bold text-xl cursor-pointer block transform-rotate-90 m-3" v-bind:class="${hamburgerClasses}" style="width:24px;" v-on:click="toggleMenu">|||</div>`
        $.prepend(hamburger)
    }
}
