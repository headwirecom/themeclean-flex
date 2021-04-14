module.exports = {
  convert: function ($, f) {
    f.bindAttribute($, "data-per-path", "model.path");
    f.bindAttribute(
      $.find("component"),
      "is",
      "getLoadedComponent(refModel.component)"
    );
    f.bindAttribute($.find("component"), "model", "refModel");
    f.addIf($.find(".absolute"), "maskReference");
    f.bindAttribute($.find(".absolute"), "style", "overlayStyle");

    f.addElse($.find(".relative"));
    $.prepend(
      '<div class="container mx-auto p-5" v-if="isEditAndEmpty">{{isEditAndEmpty}}</div>'
    );
  },
};
