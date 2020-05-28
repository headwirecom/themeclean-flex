module.exports = {
    convert: function($, f) {
    	f.addFor($.find('li').first(), 'model.links')
        f.bindAttribute($.find('a').first(), 'href', f.pathToUrl('item.link'))
        f.mapRichField($.find('a').first(), "item.text")

        let aClasses = `{
            'text-blue-700': model.linkcolor === 'primary',
            'text-green-700 hover:text-green-600': model.linkcolor === 'success',
            'text-red-700 hover:text-red-600': model.linkcolor === 'danger',
            'text-orange-700 hover:text-orange-600': model.linkcolor === 'warning',
            'text-white hover:text-white': model.linkcolor === 'light',
            'text-gray-800 hover:text-black': model.linkcolor === 'dark',
            'font-bold' : $data.path === $helper.pathToUrl(item.link)
        }`

        f.bindAttribute($.find('a').first(), 'class', aClasses, false)

        f.bindEvent( $.find('a').first(), 'click', 'toggle');
    }
}
