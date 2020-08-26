module.exports = {
    convert: function($, f) {
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        let heading = $.find('th span').first()

        let dropdownArrow = $.find('svg').first()
        let dropdownArrowClasses = `{
            'rotate-0': active,
            'rotate-180': !active,
            'hidden': !model.sortable
        }`
        f.bindAttribute(dropdownArrow, 'class', dropdownArrowClasses, false)
        f.bindEvent(dropdownArrow, 'click', "toggleSort(i)");

        f.mapField(heading, 'storageData')
    }
}