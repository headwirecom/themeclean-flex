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

        const th = $.find('th').first()
        f.addFor(th, 'model.columns', 'col')
        const thClasses = `{
            'p-3': model.densetable !== 'true',
            'p-1': model.densetable === 'true',
            'sticky': model.stickyheader === 'true',
            'top-0': model.stickyheader === 'true'
        }`
        f.bindAttribute(th, 'class', thClasses, false)

        const heading = $.find('th span').first()
        f.mapField(heading, 'col.header', false)

        let dropdownArrow = $.find('svg').first()
        let dropdownArrowClasses = `{
            'rotate-0': active,
            'rotate-180': !active,
            'hidden': model.makesortable === 'false' || !model.makesortable
        }`
        f.bindAttribute(dropdownArrow, 'class', dropdownArrowClasses, false)
        f.bindEvent(dropdownArrow, 'click', "toggleSort(i)");


        const tbody = $.find('tbody').first()
        const tr = tbody.find('tr').first()
        const td = tr.find('td').first()
        f.addFor(tr, 'storageData', 'data')
        f.addFor(td, 'model.columns', 'col')
        f.mapField(td, 'data[col.value]', false)

        const tdClasses = `{
            'border': model.cellborders === 'true',
            'p-3': model.densetable !== 'true',
            'p-1': model.densetable === 'true'
        }`    
        f.bindAttribute(td, 'class', tdClasses, false)

        const tfoot = $.find('tfoot').first()
        const pagination = tfoot.find('.table-pagination')
        const paginationClasses = `{
            'hidden': model.pagination !== 'true',
            'justify-start': model.paginationalignment === 'left',
            'justify-center': model.paginationalignment === 'center',
            'justify-end': model.paginationalignment === 'right',
        }`
        f.bindAttribute(pagination, 'class', paginationClasses, false)

        const caption = $.find('caption').first()
        const captionClasses = `{
            'text-left': model.captionalignment === 'left',
            'text-center': model.captionalignment === 'center',
            'text-right': model.captionalignment === 'right',
            'p-3': model.densetable !== 'true',
            'p-1': model.densetable === 'true',
            'hidden': model.caption !== 'true'
        }`
        f.bindAttribute(caption, 'class', captionClasses, false)
        f.addStyle(caption, 'caption-side', "model.captionplacement", false);
        f.mapField(caption, 'model.captiontext')
    }
}