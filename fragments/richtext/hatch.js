module.exports = {
  convert: function ($, f) {
    f.wrap($, "themecleanflex-components-block");
    f.bindAttribute($.parent(), "model", "model");
    f.mapRichField($.find("div").eq(1), "model.text");

    //Content Container
    let containerClasses = `{
            'md:flex-row': model.mediaposition === 'before',
            'md:flex-row-reverse': model.mediaposition === 'after'
        }`;
    f.bindAttribute($, "class", containerClasses, false);

    //Media
    let mediaDiv = $.find(".img-wrapper").first();
    f.addIf(mediaDiv, "model.showmedia === 'true'");
    f.bindAttribute(mediaDiv, "style", "{flex:`0 0 ${model.mediawidth}%`}");
    f.replace(
      $.find("img"),
      '<themecleanflex-components-media :model="model"></themecleanflex-components-media>'
    );

    f.addElse($);
    $.parent().prepend(
      '<div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>'
    );
  },
};
