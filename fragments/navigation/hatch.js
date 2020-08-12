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

        let rootItem = $.find('div').eq(0);
        f.addFor( rootItem, 'model.childrenPages', 'child' );

        let rootLink = $.find('a').eq(0);
        f.bindAttribute( rootLink, "aria-expanded", "`active[i] ? 'true' : 'false'`")

        let allLinks = $.find('a');
        f.mapField(allLinks, 'child.title', "model.childrenPages", "title");
        f.bindAttribute(allLinks, 'href', "child.childrenPages.length > 0 ? false : child.path +'.html'");
        f.bindAttribute(allLinks, 'class', "model.colorscheme === 'dark' ? 'text-gray-200 hover:bg-gray-200 hover:text-black' : 'text-black hover:bg-black hover:text-gray-200'",false);
        
        let nested = $.find('div').eq(0);
        f.bindAttribute( nested, 'class', `{ 'bg-secondary': active[i] }`, false);

        let nestedArrow = $.find('svg').eq(0);
        f.addIf(nestedArrow, 'child.hasChildren && child.childrenPages && child.childrenPages.length > 0')
        f.bindEvent(nestedArrow, 'click', "toggleItem(i)")
        f.bindAttribute(nestedArrow, "style", "`transform:${active[i] ? 'rotate(180deg)': 'rotate(0)'};`")

        let nestedListContainer = $.find("div").eq(2);
        f.bindAttribute(nestedListContainer, "style", "`height:${active[i] ? heights[i] + 'px' : '0px'};`")

        let nestedList = $.find("div").eq(3);
        f.bindAttribute(nestedList, "ref", "`tabContent${i}`")

        let nestedLink = $.find('a').eq(1);
        f.addFor( nestedLink, 'child.childrenPages', 'subchild' );
        f.mapField( nestedLink, 'subchild.title' );
        f.bindAttribute(nestedLink, 'href', "subchild.path + '.html'");
        f.bindAttribute(nestedLink, 'class', "model.colorscheme === 'dark' ? 'text-gray-200 hover:bg-gray-200 hover:text-black' : 'text-black hover:bg-black hover:text-gray-200'",false);

        f.addElse($);
        $.parent().prepend('<div class="p-5" v-if="isEditAndEmpty">{{isEditAndEmpty}}</div>')
    }
}
