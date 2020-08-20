module.exports = {
    convert: function($, f) {
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        const failureP = $.find('p').eq(0)
        f.mapField(failureP,'failureText',false)
        const schemaErrorP = $.find('p').eq(1)
        f.mapField(schemaErrorP,'schemaError',false)

        const div2 = $.find('div').eq(1)
        f.replace(div2, '<vue-form-generator></vue-form-generator>')

        const formEl = $.find('form')
        f.bindEvent(formEl,'submit.prevent.stop','onSubmit')
        
        const form = $.find('vue-form-generator').first()
        f.bindAttribute(form,'model','formModel')
        f.bindAttribute(form,'schema','schema')
        f.bindAttribute(form,'options','formOptions')

        f.bindPath($)
    }
}