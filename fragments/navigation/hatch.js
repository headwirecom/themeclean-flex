module.exports = {
    convert: function($, f) {
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        let justify = `{
            'justify-start': model.justifyitems === 'start',
            'justify-center': model.justifyitems === 'center',
            'justify-end': model.justifyitems === 'end'
        }`

        f.bindAttribute($, 'class', justify, false);

        f.bindAttribute($.find('ul'), 'class', `{ 'flex' : menuActive, 'hidden md:flex' : !menuActive }`, false);
        f.bindAttribute($.find('ul'), 'style', "`list-style-type: none;padding: 0px;`", false);

        f.addFor($.find('li.children').first(), 'model.childrenPages', 'child')
        f.bindAttribute($.find('li.children a').first(),'href',f.pathToUrl('child.path'))
        f.mapField($.find('li.children a').first(),'child.title')

        f.replace( $.find('ul.nested').eq(0), '<themecleanflex-components-navigationnested v-bind:model="child" style="list-style-type: none;padding: 0px;"></themecleanflex-components-navigationnested>')
        f.addIf($.find('li.children themecleanflex-components-navigationnested').first(), 'child.hasChildren && child.childrenPages && child.childrenPages.length > 0');

        let nestedArrow = $.find('svg');
        f.bindAttribute(nestedArrow, "style", "`transform:rotate(180deg);`")
        f.bindEvent(nestedArrow, 'click', "(e) => { toggleItem(i, e) }")
        f.addIf(nestedArrow, 'child.hasChildren && child.childrenPages && child.childrenPages.length > 0');

        f.addElse($);
        $.parent().prepend('<div class="p-5" v-if="isEditAndEmpty">{{isEditAndEmpty}}</div>')
        $.prepend('<div class="font-bold text-xl cursor-pointer block md:hidden transform-rotate-90 self-end m-3" style="width:24px;" v-on:click="toggleMenu">|||</div>')
    }
}
