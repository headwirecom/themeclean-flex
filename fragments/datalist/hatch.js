module.exports = {
    convert: function($, f) {
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        const desktopContainer = $.find('div').eq(0);
        const desktopContainerClasses = `{
            'overflow-y-scroll': model.scrollabletable === 'true',
            'hidden': isMobile,
        }`
        f.bindAttribute(desktopContainer, 'class', desktopContainerClasses, false)
        f.addStyle(desktopContainer, 'height', "(model.scrollabletable === 'true') ? model.tableheight + 'px' : 'auto'", false)
        
        const mobileContainer = $.find('div.mobile-table').eq(0);
        const mobileContainerClasses = `{
            'hidden': !isMobile,
        }`
        f.bindAttribute(mobileContainer, 'class', mobileContainerClasses, false)

        const mobileTr = mobileContainer.find('tr').first()
        f.addFor(mobileTr, 'model.columns', 'col')

        const mobileTd = mobileContainer.find('td').first()
        f.addFor(mobileTd, 'storageData', 'data')
        f.mapField(mobileTd, 'data[col.value]', false)

        mobileTr.prepend("<td class='mobile-header'>{{col.header}}</td>")
        f.bindAttribute($.find('.mobile-table td'), 'class', `{ 'border': model.cellborders === 'true', 'p-3': model.densetable !== 'true', 'p-1': model.densetable === 'true'}`, false)

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
        f.mapField(th, 'col.header', false)

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

        const caption = $.find('caption')
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

        const pagination = $.find('.table-pagination')
        const paginationClasses = `{
            'hidden': model.pagination !== 'true',
            'justify-start': model.paginationalignment === 'left',
            'justify-center': model.paginationalignment === 'center',
            'justify-end': model.paginationalignment === 'right',
        }`
        f.bindAttribute(pagination, 'class', paginationClasses, false)

        const options = pagination.find('option');
        f.addFor(options, 'model.paginationoptions', 'option')
        f.mapField(options, 'option', false)
        f.bindAttribute(options, 'value', '`${option}`')

        const select = pagination.find('select');
        select.append('<option value="-1">All</option>')
    }
}