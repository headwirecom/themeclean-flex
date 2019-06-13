module.exports = {
    convert: function($, f) {
        let a = $.find('a').first()
        f.addFor( a, 'model.icons')
        f.bindAttribute( a, 'href', f.pathToUrl('item.url'))
        f.bindAttribute( a, 'aria-label', 'item.iconalttext')
        f.addStyle( a, 'color', "model.iconcustomcolor === 'true' ? model.iconcolor : 'inherit'")

        f.addStyle( $.find('svg'), 'width', 'model.iconsize', 'px')

        f.bindAttribute( $.find('use'), '', '{\'xlink:href\':`#${item.icon}`}')
        f.bindAttribute( $.find('use'), 'href', '`#${item.icon}`')
    }
}
