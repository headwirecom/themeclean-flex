module.exports = {
    convert: function($, f) {
        f.bindAttribute( $, 'data-per-path', 'model.path')
        f.bindAttribute( $.find('component'), 'is', 'getLoadedComponent(refModel.component)')
        f.bindAttribute( $.find('component'), 'model', 'refModel')
    }
}
