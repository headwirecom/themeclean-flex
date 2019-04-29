module.exports = {
    convert: function($, f) {
    	f.addFor($.find('li').first(), 'model.links')
        f.bindAttribute($.find('a').first(), 'href', f.pathToUrl('item.link'))
        f.mapRichField($.find('a').first(), "item.text")


        let linkClasses = 
        "{'text-dark' : model.colorscheme === 'light'," +
        "'text-light' : model.colorscheme === 'dark'," +
        "'font-bold' : $data.path === $helper.pathToUrl(item.link)}"
        f.bindAttribute($.find('a').first(), 'class', linkClasses, false)
    }
}