module.exports = {
  convert: function ($, f) {
    f.bindAttribute(
      $,
      "class",
      "'language-'+model.language+ ((model.classes) ? ' '+model.classes : '')",
      false
    );

    // make the element a block
    f.wrap($, "themecleanflex-components-block");
    f.bindAttribute($.parent(), "model", "model");

    // inject the code
    f.bindAttribute(
      $.find("code").first(),
      "class",
      "'language-'+model.language"
    );
    f.mapRichField($.find("code").first(), "code", false);

    f.addElse($);
    $.parent().prepend(
      '<div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>'
    );
  },
};
