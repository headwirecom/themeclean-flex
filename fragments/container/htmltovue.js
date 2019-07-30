module.exports = {
    convert: function($, f) {
        f.bindPath($)
        f.addChildren($)
        f.addPlaceholders($)
        f.bindAttribute( $, 'is', 'model.htmlelement || "div"')

        let widthClass = "model.width === 'custom'? model.colspan == 12 ? 'w-full' : \`w-\${model.colspan}/12\` : 'flex-grow'"
        
        f.bindAttribute( $, 'class', widthClass);
    }
}
