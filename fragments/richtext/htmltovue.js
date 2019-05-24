module.exports = {
    convert: function($, f) {
        f.bindPath($);
        f.mapRichField( $, 'model.text')
    }
}
