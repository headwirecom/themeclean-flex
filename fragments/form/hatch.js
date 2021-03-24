module.exports = {
    convert: function($, f) {
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')
        //f.addIf($.parent(), "isReady");

        const failureP = $.find('p').eq(0)
        f.mapField(failureP,'failureText',false)
        f.addIf(failureP, "failureText");
        const schemaErrorP = $.find('p').eq(1)
        f.mapField(schemaErrorP,'schemaError',false)
        f.addIf(schemaErrorP, "schemaError");

        const messageContainer = $.find('div').eq(0);
        f.addIf(messageContainer, "( failureText || schemaError )");

        const submit = $.find('input').first()
        f.bindAttribute(submit,'value','model.submittext')

        const formContainer = $.find('form').eq(0);
        let formContainerClasses = `{
            'justify-button-start': model.submitalignment === 'start',
            'justify-button-center': model.submitalignment === 'center',
            'justify-button-end': model.submitalignment === 'end',
            'normal-button': model.submitsize === 'normal',
            'sm-button': model.submitsize === 'small',
            'lg-button': model.submitsize === 'large',
            'full-button': model.submitsize === 'full',
        }`
        f.bindAttribute(formContainer, 'class', formContainerClasses, false);

        const div2 = $.find('div').eq(1)
        f.replace(div2, '<json-forms></json-forms>')

        const formEl = $.find('form')
        f.bindEvent(formEl,'submit.prevent.stop','onSubmit')
        
        const form = $.find('json-forms').first()
        f.bindAttribute(form,'class','`w-full`', false)
        f.bindAttribute(form,'data','form')
        f.bindAttribute(form,'schema','schema')
        f.bindAttribute(form,'uischema','uischema')
        f.bindAttribute(form, 'renderers', 'renderers')
        f.bindEvent(form, 'change', 'onChange')

        f.bindPath($)
    }
}