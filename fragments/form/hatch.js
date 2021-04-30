module.exports = {
  convert: function ($, f) {
    f.wrap($, 'themecleanflex-components-block');
    f.addIf($.parent(), 'isReady');
    f.bindAttribute($.parent(), 'model', 'model');

    const messageContainer = $.find('div').eq(0);
    f.addIf(messageContainer, '( schemaError || uischemaError )');

    const schemaErrorP = $.find('p').eq(0);
    f.mapField(schemaErrorP, 'schemaError', false);
    f.addIf(schemaErrorP, 'schemaError');

    const uischemaErrorP = $.find('p').eq(1);
    f.mapField(uischemaErrorP, 'uischemaError', false);
    f.addIf(uischemaErrorP, 'uischemaError');

    const submit = $.find('input').first();
    f.bindAttribute(submit, 'value', 'model.submittext');

    const formContainer = $.find('form').eq(0);
    let formContainerClasses = `{
            'justify-button-start': model.submitalignment === 'start',
            'justify-button-center': model.submitalignment === 'center',
            'justify-button-end': model.submitalignment === 'end',
            'normal-button': model.submitsize === 'normal',
            'sm-button': model.submitsize === 'small',
            'lg-button': model.submitsize === 'large',
            'full-button': model.submitsize === 'full',
        }`;
    f.bindAttribute(formContainer, 'class', formContainerClasses, false);

    const div2 = $.find('#json-forms');
    f.replace(div2, '<json-forms></json-forms>');

    const formEl = $.find('form');
    f.bindEvent(formEl, 'submit.prevent.stop', 'onSubmit');

    const jsonForms = $.find('json-forms').first();
    f.bindAttribute(jsonForms, 'class',
        '`w-full mb-4 md:flex md:flex-wrap md:justify-between`', false);
    f.bindAttribute(jsonForms, 'ref', '`jsonForms`');
    f.bindAttribute(jsonForms, 'key', 'jsonFormsKey');
    f.bindAttribute(jsonForms, 'data', 'form');
    f.bindAttribute(jsonForms, 'schema', 'schema');
    f.bindAttribute(jsonForms, 'uischema', 'uischema');
    f.bindAttribute(jsonForms, 'renderers', 'renderers');
    f.bindEvent(jsonForms, 'change', 'onChange');

  }
};