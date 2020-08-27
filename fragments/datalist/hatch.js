module.exports = {
    convert: function($, f) {
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        f.bindAttribute($, 'class', `{'overflow-y-scroll': model.scrollabletable === 'true'}`, false)
        f.addStyle($, 'height', "(model.scrollabletable === 'true') ? model.tableheight + 'px' : 'auto'", false)

        const table = $.find('table')
        const tableClasses = `{
            'striped': model.stripedrows === 'true'
        }`
        f.bindAttribute(table, 'class', tableClasses, false)
        //&& model.tableheight > 100

        // const header = $.find('thead').first()
        // const headerClasses = `{
        //     'fixed': model.fixedheader === 'true',
        // }`
        // f.bindAttribute(header, 'class', headerClasses, false)


        let heading = $.find('th span').first()
        f.mapField(heading, 'storageData', false)

        let dropdownArrow = $.find('svg').first()
        let dropdownArrowClasses = `{
            'rotate-0': active,
            'rotate-180': !active,
            'hidden': model.makesortable === 'false' || !model.makesortable
        }`
        f.bindAttribute(dropdownArrow, 'class', dropdownArrowClasses, false)
        f.bindEvent(dropdownArrow, 'click', "toggleSort(i)");

        const headRows = $.find('th');
        const headRowsClasses = `{
            'p-3': model.densetable === 'false' || !model.densetable,
            'p-1': model.densetable === 'true',
            'sticky': model.stickyheader === 'true',
            'top-0': model.stickyheader === 'true'
        }`
        for (let i = 0; i < headRows.length; i++) 
            f.bindAttribute(headRows.eq(i), 'class', headRowsClasses, false)

        const cells = $.find('td');
        const cellClasses = `{
            'border': model.cellborders === 'true',
            'p-3': model.densetable === 'false' || !model.densetable,
            'p-1': model.densetable === 'true'
        }`    

        for (let i = 0; i < cells.length; i++) 
            f.bindAttribute(cells.eq(i), 'class', cellClasses, false)

        const caption = $.find('caption').first()
        const captionClasses = `{
            'text-left': model.captionalignment === 'left',
            'text-center': model.captionalignment === 'center',
            'text-right': model.captionalignment === 'right',
            'p-3': model.densetable === 'false' || !model.densetable,
            'p-1': model.densetable === 'true'
        }`
        f.bindAttribute(caption, 'class', captionClasses, false)
        f.addStyle(caption, 'caption-side', "model.captionplacement", false);
        f.mapField(caption, 'model.captiontext')
    }
}