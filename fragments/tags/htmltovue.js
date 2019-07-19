module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        let styles = `{
            'bg-blue-600': model.tagcolor === "blue",
            'bg-green-600': model.tagcolor === "green",
            'bg-orange-600': model.tagcolor === "orange",
            'bg-red-600': model.tagcolor === "red",
            'bg-yellow-600': model.tagcolor === "yellow"
        }`;

        let link = $.find('component');
        f.addFor(link, 'tags')
        f.mapField(link, 'item.name')
        f.bindAttribute(link, 'class', styles, false);
        f.bindAttribute(link, 'href', 'model.pagelink ? model.pagelink + \'.html\' + item.value : false');
        f.bindAttribute(link, 'is', 'model.pagelink ? "a":"div"');


        let label = $.find('span');
        f.mapField(label, 'model.tagslabel')
        f.addIf(label, 'model.tagslabel')

        $.parent().prepend('<div v-if="isEditAndEmpty">no content defined for component</div>')
    }
}
