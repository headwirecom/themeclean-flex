module.exports = {
    convert: function ($, f) {
      f.wrap($, 'themecleanflex-components-block');
      f.bindAttribute($.parent(), 'model', 'model');
  
      const submit = $.find('input').first();
      f.bindAttribute(submit, 'value', 'model.submittext'); 
      f.bindEvent(submit, 'click.prevent.stop', 'onClick');
    }
  };