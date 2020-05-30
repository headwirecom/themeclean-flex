module.exports = {
    convert: function($, f) {
        f.bindAttribute($,'data-per-path','model.path')
        f.bindAttribute($,'data-per-empty','isEditAndEmpty')
        f.bindAttribute($.find('div') ,'is',"'vue-form-generator'")
        f.bindAttribute( $.find('div'), 'model', 'formModel')
        f.bindAttribute( $.find('div'), 'schema', 'formSchema')
        f.bindAttribute( $.find('div'), 'options', 'formOptions')
    }
}