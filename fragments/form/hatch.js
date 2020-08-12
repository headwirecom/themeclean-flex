module.exports = {
    convert: function($, f) {
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        const el = $.find('div').first()
        f.replace(el, '<vue-form-generator></vue-form-generator>')
        
        const form = $.find('vue-form-generator').first()
        f.bindAttribute(form,'model','formModel')
        f.bindAttribute(form,'schema','schema')
        f.bindAttribute(form,'options','formOptions')

        f.bindPath($)
    }
}