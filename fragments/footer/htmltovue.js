module.exports = {
    convert: function($, f) {
        f.wrap($, 'themecleanflex-components-block')
		f.bindAttribute($.parent(),'model','model')

		//Logo
		f.addIf($.find('a').first(), "model.showlogo === 'true' && model.logo")
    	f.bindAttribute($.find('a').first(), 'href', f.pathToUrl('model.logourl'))
    	f.bindAttribute($.find('img').first(), 'src', f.pathToUrl('model.logo'))
    	f.bindAttribute($.find('img').first(), 'alt', 'model.logoalttext')
		f.addStyle($.find('img').first(), 'height', 'parseInt(model.logosize)', 'px')

		//Columns
		const col = $.find('.footer-col').first()
		const coltitle = col.find('h2').first()
		const colcontent = col.find('div').first()
		f.addFor(col, "model.columns")
		f.addIf(coltitle, "item.title !== ''")
		f.mapInlineRichField(coltitle, "model.columns", "title")
		f.addIf(colcontent, "item.text !== ''")
		f.mapInlineRichField(colcontent, "model.columns", "text")

		//Copyright
		f.mapInlineRichField($.find('p').eq(0), "model.copyright")

		f.addElse($);
		$.parent().prepend('<div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>')

    }
}
