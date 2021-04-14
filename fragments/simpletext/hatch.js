module.exports = {
  convert: function ($, f) {
    f.wrap($, "themecleanflex-components-block");
    f.bindAttribute($.parent(), "model", "model");
    f.bindAttribute($, "is", "model.element");
    f.mapField($, "model.text");

    let classes = `{
            'text-4xl font-semibold': model.element === \'h1\',
            'text-3xl font-semibold': model.element === \'h2\',
            'text-2xl': model.element === \'h3\',
            'text-xl font-semibold': model.element === \'h4\',
            'text-lg': model.element === \'h5\',
        }`;

    f.bindAttribute($, "class", classes, false);

    f.addElse($);
    $.parent().prepend(
      '<div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>'
    );
  },
};
