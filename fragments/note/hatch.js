module.exports = {
	convert: function ($, f) {
		f.wrap($, "themecleanflex-components-block");
		f.bindAttribute($.parent(), "model", "model");

		f.mapRichField($.find("div"), "model.text");

		let styles = `{
            'note-note': model.notetype === "note",
            'note-tip': model.notetype === "tip",
            'note-warning': model.notetype === "warning",
            'note-important': model.notetype === "important",
            'note-caution': model.notetype === "caution"
        }`;

		f.bindAttribute($, "class", styles, false);
	},
};
