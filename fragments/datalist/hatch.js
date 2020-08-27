module.exports = {
    convert: function($, f) {
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        const th = $.find('th').first()
        f.addFor(th, 'model.columns', 'col')
        const heading = $.find('th span').first()
        f.mapField(heading, 'col.header', false)

        let dropdownArrow = $.find('svg').first()
        let dropdownArrowClasses = `{
            'rotate-0': active,
            'rotate-180': !active,
            'hidden': !model.sortable
        }`
        f.bindAttribute(dropdownArrow, 'class', dropdownArrowClasses, false)
        f.bindEvent(dropdownArrow, 'click', "toggleSort(i)");

        const tbody = $.find('tbody').first()
        const tr = tbody.find('tr').first()
        const td = tr.find('td').first()
        f.addFor(tr, 'storageData', 'data')
        f.addFor(td, 'model.columns', 'col')
        f.mapField(td, 'data[col.value]', false)
    }
}