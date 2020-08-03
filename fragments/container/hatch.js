module.exports = {
    convert: function($, f) {
        f.bindPath($)
        f.addChildren($)
        f.addPlaceholders($)
        f.bindAttribute( $, 'is', 'model.htmlelement || "div"')

        let widthClass = `{
            'lg:flex-grow': model.width === 'auto',
            'lg:w-full': model.width === 'custom' && model.colspan == 12,
            [\`lg:w-\${model.colspan}/12 lg:flex-grow-0\`]: model.width === 'custom' && model.colspan < 12,
            'md:flex-grow': model.tabletwidth === 'auto',
            'md:w-full': model.tabletwidth === 'custom' && model.tabletcolspan == 12,
            [\`md:w-\${model.tabletcolspan}/12 md:flex-grow-0\`]: model.tabletwidth === 'custom' && model.tabletcolspan < 12,
            'flex-grow': model.mobilewidth === 'auto',
            'w-full': model.mobilewidth === 'custom' && model.mobilecolspan == 12,
            [\`w-\${model.mobilecolspan}/12 flex-grow-0\`]: model.mobilewidth === 'custom' && model.mobilecolspan < 12,
            [\`\${model.component}\`]: model.component
        }`
        
        f.bindAttribute( $, 'class', widthClass);
    }
}
