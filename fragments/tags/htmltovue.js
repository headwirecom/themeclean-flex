module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')
        f.addFor($.find('a'), 'tags')
        f.mapField($.find('a'), 'item.name')

        let styles = `{
            'bg-blue-600': model.tagcolor === "blue",
            'bg-green-600': model.tagcolor === "green",
            'bg-orange-600': model.tagcolor === "orange",
            'bg-red-600': model.tagcolor === "red",
            'bg-yellow-600': model.tagcolor === "yellow"
        }`;

        f.bindAttribute($.find('a'), 'class', styles, false);
        $.parent().prepend('<div v-if="isEditAndEmpty">no content defined for component</div>')
    }
}
