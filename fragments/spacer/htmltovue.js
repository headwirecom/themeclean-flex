module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')
        f.addStyle($.find("div").first(), 'height', 'model.height', 'vh')
        
        $.append('<div v-if="isEditAndEmpty">height needs to be greater than 0</div>')
    }
}