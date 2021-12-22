module.exports = {
    convert: function($, f) {
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        const selectedContainer = $.find('div.selected').eq(0)
        const selectedContainerClasses = `{
            'hidden': active.filter(element => element === true).length === 0,
        }`
        f.bindAttribute(selectedContainer, 'class', selectedContainerClasses, false)
        const mobileSelectAction = selectedContainer.find('.action').eq(0)
        f.addIf(mobileSelectAction, '(model.mobiletablestyle === "" || model.mobiletablestyle === "default") && isMobile' )
        f.bindEvent(mobileSelectAction, 'click', 'toggleAllRows');
        f.addIf(mobileSelectAction.find('.unchecked'), '(!active.every(element => element === true) || active.length === 0)');
        f.addElse(mobileSelectAction.find('.checked'));
        const selectedText = selectedContainer.find('.selected-text').eq(0)
        f.mapField(selectedText, '`${active.filter(element =&gt; element === true).length} selected`', false)
        const actionDelete = selectedContainer.find('.selected-actions svg').eq(0)
        f.bindEvent(actionDelete, 'click', 'deleteAction');

        const desktopContainer = $.find('div.overflow-x-scroll').eq(0);
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

        //default mobile style
        const mobileDefaultBody = mobileContainer.find('tbody').eq(0);
        f.addIf(mobileDefaultBody, 'model.mobiletablestyle === "" || model.mobiletablestyle === "default"' )

        const mobileDefaultTr =  mobileContainer.find('tr.item-row').eq(0)
        f.addFor(mobileDefaultTr, 'model.columns', 'col')
        mobileDefaultTr.attr(':key', `data.path || j`)
        f.addStyle(mobileDefaultTr, 'background', "active[j] ? 'var(--color-red-500) !important' : ''")

        const mobileDefaultAction = mobileDefaultBody.find('td.action-head').eq(0)
        f.addStyle(mobileDefaultAction, 'background', "active[j] ? 'var(--color-red-500) !important' : ''")
        f.addIf(mobileDefaultAction, 'i === 0')
        f.addIf(mobileDefaultAction.find('.unchecked'), '!active[j]');
        f.addIf(mobileDefaultAction.find('.checked'), 'active[j]')
        f.addStyle(mobileDefaultAction.find('.checked'), 'fill',"active[j] ? 'var(--text-secondary-color) !important' : ''");
        f.bindEvent(mobileDefaultAction.find('.action').eq(0), 'click', 'toggleRow(j)');

        const mobileDefaultActionSpacer = mobileDefaultBody.find('td.mobile-action-spacer').eq(0)
        f.addIf(mobileDefaultActionSpacer, 'i !== 0')
        f.addStyle(mobileDefaultActionSpacer, 'background', "active[j] ? 'var(--color-red-500) !important' : ''")

        f.mapField(mobileDefaultBody.find('td.mobile-header').eq(0), 'col.header', false)
        mobileDefaultBody.find('td.mobile-header').eq(0).attr(':key', `col.path || i`)
        
        f.mapField(mobileDefaultBody.find('td.mobile-item').eq(0), 'data[col.value]', false)
        f.addStyle(mobileDefaultBody.find('td.mobile-item').eq(0), 'background', "active[j] ? 'var(--color-red-500) !important' : ''")
        f.addStyle(mobileDefaultBody.find('td.mobile-item').eq(0), 'color',"active[j] ? 'var(--text-secondary-color) !important' : ''");
        
        f.wrap(mobileDefaultTr, 'template')

        const mobileTemplate = mobileDefaultBody.find('template').first();
        mobileTemplate.attr('v-for', `(data, j) in storageData`)
        f.addIf(mobileTemplate, 'rowHasData(data,model.columns)')

        //scroll mobile style
        const scrollMobileBody = mobileContainer.find('tbody').eq(1)
        f.addElse(scrollMobileBody)
        const mobileScrollActionTr = scrollMobileBody.find('tr.action-row').eq(0)
        const mobileScrollAction = scrollMobileBody.find('td.action-item').eq(0)
        f.addFor(mobileScrollAction, 'storageData', 'data')
        f.addIf(mobileScrollAction, 'rowHasData(data,model.columns)')
        f.addIf(mobileScrollAction.find('.unchecked'), '!active[i]');
        f.addIf(mobileScrollAction.find('.checked'), 'active[i]');
        f.addStyle(mobileScrollAction, 'background', "active[i] ? 'var(--color-red-500) !important' : ''")
        f.addStyle(mobileScrollAction.find('.checked'), 'fill',"active[i] ? 'var(--text-secondary-color) !important' : ''");
        f.bindEvent(mobileScrollAction.find('.action').eq(0), 'click', 'toggleRow(i)');

        const mobileScrollActionAll = mobileScrollActionTr.find('td.action-item-all').eq(0)
        f.addIf(mobileScrollActionAll.find('.unchecked'), '(!active.every(element => element === true) || active.length === 0)');
        f.addElse(mobileScrollActionAll.find('.checked'));
        f.bindEvent(mobileScrollActionAll.find('.action').eq(0), 'click', 'toggleAllRows');

        const mobileScrollBodyTr = scrollMobileBody.find('tr.item-row').first()
        f.addFor(mobileScrollBodyTr, 'model.columns', 'col')

        const mobileScrollTd = mobileScrollBodyTr.find('td').first()
        mobileScrollTd.attr('v-for', `(data, j) in storageData`)
        mobileScrollTd.attr(':key', `data.path || j`)
        f.addIf(mobileScrollTd, 'rowHasData(data,model.columns)')
        f.mapField(mobileScrollTd, 'data[col.value]', false)
        f.addStyle(mobileScrollTd, 'background', "active[j] ? 'var(--color-red-500) !important' : ''")

        mobileScrollBodyTr.prepend("<td class='mobile-header'>{{col.header}}</td>")
        
        const mobileTdClasses = `{
            'border': model.cellborders === 'true', 
            'p-3': model.densetable !== 'true', 
            'p-1': model.densetable === 'true',
            'align-top':  model.rowalignment === 'top' ||  model.rowalignment === '',
            'align-center':  model.rowalignment === 'center',
            'align-bottom':  model.rowalignment === 'bottom'
        }`
        f.bindAttribute($.find('.mobile-table td'), 'class', mobileTdClasses, false)

        //desktop
        const table = $.find('table')
        const tableClasses = `{
            'striped': model.stripedrows === 'true'
        }`
        f.bindAttribute(table, 'class', tableClasses, false)

        const thRowActionText = table.find('th.header-row-actions').first()
        console.log(`TH Row Action Text: ${thRowActionText}`)

        const thText = $.find('th.header-item').first()
        console.log(`TH Row Text: ${thText}`)

        f.addFor(thText, 'model.columns', 'col')
        const thTextClasses = `{
            'p-3': model.densetable !== 'true',
            'p-1': model.densetable === 'true',
            'sticky': model.stickyheader === 'true',
            'top-0': model.stickyheader === 'true',
            'text-left':  (col && col.textalignment === 'left') ||  (col && col.textalignment === ''),
            'text-center': col && col.textalignment === 'center',
            'text-right':  col && col.textalignment === 'right',
        }`
        f.bindAttribute(thText, 'class', thTextClasses, false)
        f.mapField(thText.find('span'), 'col.header', false)

        f.bindAttribute(thRowActionText, 'class', thTextClasses, false)

        const thAction = $.find('th.action-head').first()
        f.addIf(thAction, "model.selectable === 'true'")
        f.addIf(thAction.find('.unchecked'), '(!active.every(element => element === true) || active.length === 0)');
        f.addElse(thAction.find('.checked'));
        f.bindEvent(thAction.find('.action').eq(0), 'click', 'toggleAllRows');
        f.bindAttribute(thAction, 'class', thTextClasses, false)

        const tbody = $.find('tbody').first()
        const tr = tbody.find('tr').first()
        console.log(`TR: ${tr}`)
        const tdActionColumn = tr.find('td.action-column').first()
        console.log(`TD Action Column: ${tdActionColumn}`)
        const tdItem = tr.find('td.item').first()
        tr.attr('v-for', `(data, j) in storageData`)
        tr.attr(':key', `data.path || j`)
        f.addIf(tr, 'rowHasData(data,model.columns)')

        f.addFor(tdItem, 'model.columns', 'col')
        f.mapField(tdItem.find('span.item-text'), 'data[col.value]', false)

        const tdClasses = `{
            'border': model.cellborders === 'true',
            'p-3': model.densetable !== 'true',
            'p-1': model.densetable === 'true',
            'text-left':  (col && col.textalignment === 'left') ||  (col && col.textalignment === ''),
            'text-center':  col && col.textalignment === 'center',
            'text-right':  col && col.textalignment === 'right',
            'align-top':  model.rowalignment === 'top' ||  model.rowalignment === '',
            'align-center':  model.rowalignment === 'center',
            'align-bottom':  model.rowalignment === 'bottom'
        }`    
        f.bindAttribute(tdItem, 'class', tdClasses, false)
        f.addStyle(tdItem, 'background', "active[j] ? 'var(--color-red-500) !important' : ''")

        f.addStyle(tdItem.find('span.item-text'), 'color',"active[j] ? 'var(--text-secondary-color) !important' : ''");
        
        const tdAction = $.find('td.action-item').first()
        console.log(`TD Action Item: ${tdAction}`)
        f.addStyle(tdAction, 'background', "active[j] ? 'var(--color-red-500) !important' : ''")
        f.addIf(tdAction, "model.selectable === 'true'")
        f.addIf(tdAction.find('.unchecked'), '!active[j]');
        f.addIf(tdAction.find('.checked'), 'active[j]');
        f.addStyle(tdAction.find('.checked'), 'fill',"active[j] ? 'var(--text-secondary-color) !important' : ''");
        f.bindEvent(tdAction.find('.action').eq(0), 'click', 'toggleRow(j)');
        f.bindAttribute(tdAction, 'class', tdClasses, false)

        const divActionRow = tdActionColumn.find('.selected-row-actions').eq(0);
        console.log(`Div Action Row: ${divActionRow}`)
        f.addIf(tdActionColumn, "true")
        f.bindAttribute(tdActionColumn, 'class', tdClasses, false)
        f.bindEvent(tdActionColumn.find('.selected-row-actions').eq(0), 'click', 'loadDetailsFunction(j)');

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