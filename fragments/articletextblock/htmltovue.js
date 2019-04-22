module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')
        f.mapRichField( $.find('div.col-12>div').first() , 'model.text')
        $.append('<div v-if="isEditAndEmpty">no content defined for component</div>')
    }
}