module.exports = {
  convert: function ($, f) {
    f.wrap($, "themecleanflex-components-block");
    f.bindPath($);
    f.addChildren($);
    f.addPlaceholders($);
    f.bindAttribute($.parent(), "model", "model");
    f.bindAttribute($, "class", "model.alignitems", false);
  },
};
