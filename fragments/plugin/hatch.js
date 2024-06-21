module.exports = {
    convert: function($, f) {
        f.wrap($, 'themecleanflex-components-block');
        f.bindAttribute($.parent(), 'model', 'model');
        f.bindAttribute($, 'ref', '`target`');
        f.addElse($);
        $.parent().prepend('<div class="p-5" v-if="isEditAndEmpty">no functions defined for component</div>');
    }
}