module.exports = {
    convert: function($, f) {

        //Button
        let aClasses = `{
            'btn-lg': model.buttonsize === 'large',
            'btn-sm': model.buttonsize === 'small',
            'btn-primary': item.buttoncolor === 'primary',
            'text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white': item.buttoncolor === 'secondary',
            'btn-green': item.buttoncolor === 'success',
            'btn-red': item.buttoncolor === 'danger',
            'btn-orange': item.buttoncolor === 'warning',
            'btn-white': item.buttoncolor === 'light',
            'btn-black': item.buttoncolor === 'dark'
        }`

        let a = $.find('a')
    	f.addFor( a, 'model.buttons')
        f.bindAttribute( a, 'href', f.pathToUrl('item.buttonlink'))
        f.bindAttribute( a, 'class', aClasses, false)
        f.mapRichField( a, "item.buttontext")
    }
}
