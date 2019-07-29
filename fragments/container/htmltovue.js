module.exports = {
    convert: function($, f) {
        f.bindPath($)
        f.addChildren($)
        f.addPlaceholders($)
        f.bindAttribute( $, 'is', 'model.htmlelement || "div"')
        f.bindAttribute( $, 'class', 'model.width');
    }
}
