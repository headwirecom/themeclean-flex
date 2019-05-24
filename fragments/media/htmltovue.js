module.exports = {
    convert: function($, f) {
        f.bindPath($);
        f.bindAttribute($.parent(),'model','model')
        f.bindPath($)
    }
}
