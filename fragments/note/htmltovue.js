module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block');
        f.bindAttribute($.parent(),'model','model');

        f.mapField( $.find('p'), 'model.notetype.charAt(0).toUpperCase() + model.notetype.slice(1) + ":"' );
        f.mapRichField( $.find('span'), 'model.text');

        let styles = `{
            'bg-blue-200 border-blue-500': model.notetype === "note",
            'bg-green-200 border-green-500': model.notetype === "tip",
            'bg-orange-200 border-orange-500': model.notetype === "warning",
            'bg-red-200 border-red-500': model.notetype === "important",
            'bg-yellow-200 border-yellow-500': model.notetype === "caution"
        }`;

        f.bindAttribute($, 'class', styles, false);
    }
}
