module.exports = {
    convert: function($, f) {
    	f.addFor($.find('li').first(), 'model.links')
        f.bindAttribute($.find('a').first(), 'href', f.pathToUrl('item.link'))
        f.mapRichField($.find('a').first(), "item.text")

        let aClasses = `{
            'text-blue-700': model.linkcolor === 'primary',
            'text-green-700': model.linkcolor === 'success',
            'text-red-700': model.linkcolor === 'danger',
            'text-orange-700': model.linkcolor === 'warning',
            'text-white': model.linkcolor === 'light',
            'text-black': model.linkcolor === 'dark',
            'font-bold' : $data.path === $helper.pathToUrl(item.link)
        }`

        f.bindAttribute($.find('a').first(), 'class', aClasses, false)
    }
}
