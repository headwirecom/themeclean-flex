module.exports = {
    convert: function($, f) {
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        const selectedContainer = $.find('div.selected').eq(0)
        const selectedContainerClasses = `{
            'hidden': active.filter(element => element === true).length === 0,
        }`
        f.bindAttribute(selectedContainer, 'class', selectedContainerClasses, false)
        const selectedText = selectedContainer.find('.selected-text').eq(0)
        f.mapField(selectedText, '`${active.filter(element =&gt; element === true).length} selected`', false)
        const actionDelete = selectedContainer.find('svg').eq(0)
        f.bindEvent(actionDelete, 'click', 'deleteAction');

        const desktopContainer = $.find('div.overflow-x-hidden').eq(0);
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
        f.mapField(th.find('span.header-text'), 'col.header', false)

        const innerHeaderDiv = th.find('div').eq(0);
        f.addIf(innerHeaderDiv, "model.selectable === 'true' && i === 0")

        f.addIf(th.find('span.header-text').eq(1), "model.selectable !== 'true' || i !== 0" ) ;
        f.addIf(th.find('.unchecked'), '(!active.every(element => element === true) || active.length === 0)');
        f.addElse(th.find('.checked'));
        f.bindEvent(th.find('.action').eq(0), 'click', 'toggleAllRows');

        const tbody = $.find('tbody').first()
        const tr = tbody.find('tr').first()
        const td = tr.find('td').first()
        tr.attr('v-for', `(data, j) in storageData`)
        tr.attr(':key', `data.path || j`)

        f.addFor(td, 'model.columns', 'col')
        f.mapField(td.find('span.item-text'), 'data[col.value]', false)

        const tdClasses = `{
            'border': model.cellborders === 'true',
            'p-3': model.densetable !== 'true',
            'p-1': model.densetable === 'true'
        }`    
        f.bindAttribute(td, 'class', tdClasses, false)
        f.addStyle(td, 'background', "active[j] ? 'var(--color-red-500) !important' : ''")

        const innerBodyDiv = td.find('div').eq(0);
        f.addIf(innerBodyDiv, "model.selectable === 'true' && i === 0")

        f.bindEvent(innerBodyDiv.find('.action').eq(0), 'click', 'toggleRow(j)');
        f.addStyle(td.find('span.item-text'), 'color',"active[j] ? 'var(--text-secondary-color) !important' : ''");

        f.addIf(td.find('span.item-text').eq(1), "model.selectable !== 'true' || i !== 0" );

        f.addIf(td.find('.unchecked'), '!active[j]');
        f.addIf(td.find('.checked'), 'active[j]');
        f.addStyle(td.find('.checked'), 'fill',"active[j] ? 'var(--text-secondary-color) !important' : ''");

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

        f.addElse($);
        $.parent().prepend('<div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>')
    }
}