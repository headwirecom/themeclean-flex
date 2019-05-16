module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
    	f.addIf($.find('.perIsEditAndEmpty').first(), 'isEditAndEmpty')
        f.bindAttribute($.parent(),'model','model')
        
        let a1Classes = `{
            'btn-lg': model.buttonsize === 'large',
            'btn-sm': model.buttonsize === 'small',
            'btn-blue': model.buttoncolor === 'primary',
            'btn-white border border-blue': model.buttoncolor === 'secondary',
            'btn-green': model.buttoncolor === 'success',
            'btn-red': model.buttoncolor === 'danger',
            'btn-orange': model.buttoncolor === 'warning',
            'btn-white': model.buttoncolor === 'light',
            'btn-black': model.buttoncolor === 'dark',
            'disabled': model.previous === 'unknown',
        }`

        let a2Classes = `{
            'btn-lg': model.buttonsize === 'large',
            'btn-sm': model.buttonsize === 'small',
            'btn-blue': model.buttoncolor === 'primary',
            'btn-white border border-blue': model.buttoncolor === 'secondary',
            'btn-green': model.buttoncolor === 'success',
            'btn-red': model.buttoncolor === 'danger',
            'btn-orange': model.buttoncolor === 'warning',
            'btn-white': model.buttoncolor === 'light',
            'btn-black': model.buttoncolor === 'dark',
            'disabled': model.next === 'unknown',
        }`
        
        let a1 =$.find('a').eq(0)
        let a2 =$.find('a').eq(1)

        f.mapField( a1, 'model.prevlabel')
        f.bindAttribute(a1, 'href', f.pathToUrl('model.previous'))
        f.bindAttribute( a1, 'class', a1Classes, false)
        
        f.mapField(a2, 'model.nextlabel')
        f.bindAttribute(a2, 'href', f.pathToUrl('model.next'))
        f.bindAttribute( a2, 'class', a2Classes, false)
    }
}
