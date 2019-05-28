module.exports = {
    convert: function($, f) {
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')
        f.replace( $.find('img').first(), '<themecleanflex-components-media v-bind:model="model"></themecleanflex-components-media>')
        f.bindAttribute($, 'style', "{flexBasis:`${model.mediawidth}%`}")

        $.append('<div v-if="isEditAndEmpty">no content defined for component</div>')
    }
}
