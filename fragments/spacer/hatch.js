module.exports = {
  convert: function ($, f) {
    f.wrap($, "themecleanflex-components-block");
    f.bindAttribute($.parent(), "model", "model");
    f.addStyle($.find("div").first(), "height", "model.height", "vh");

    f.addElse($);
    $.parent().prepend(
      '<div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>'
    );
  },
};
