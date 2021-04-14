module.exports = {
	convert: function ($, f) {
		f.wrap($, "themecleanflex-components-block");
		f.bindAttribute($.parent(), "model", "model");
		f.bindPath($);
	},
};
