module.exports = {
    convert: function($, f) {
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        let heading = $.find('th').first()
        f.mapField(heading, 'storageData')
    }
}