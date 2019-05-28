module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')
        f.bindAttribute($ ,'is','model.element')
        f.mapField( $, 'model.text')

        let classes = `{
            'text-2xl font-semibold': model.element === \'h1\',
            'text-xl font-semibold': model.element === \'h2\',
            'text-xl': model.element === \'h3\',
            'text-lg font-semibold': model.element === \'h4\',
            'text-lg': model.element === \'h5\',
        }`

        f.bindAttribute($, 'class', classes, false);

		$.append('<div v-if="isEditAndEmpty">no content defined for component</div>')
    }
}
