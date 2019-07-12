module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block');
        f.bindAttribute($.parent(),'model','model');

        f.mapRichField( $.find('div'), 'model.text');

        let styles = `{
            'bg-blue-200 border-blue-500': model.notecolor === "blue",
            'bg-green-200 border-green-500': model.notecolor === "green",
            'bg-orange-200 border-orange-500': model.notecolor === "orange",
            'bg-red-200 border-red-500': model.notecolor === "red",
            'bg-yellow-200 border-yellow-500': model.notecolor === "yellow"
        }`;

        f.bindAttribute($.find('div'), 'class', styles, false);
    }
}
