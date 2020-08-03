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
		let col = $.find('.footer-col').first()
		let coltitle = col.find('h2').first()
		let colcontent = col.find('div').first()
		f.addFor( col, "model.columns")
		f.addIf( coltitle, "item.title !== ''")
		f.mapField( coltitle, "item.title", "model.clolumns", "title")
		f.addIf( colcontent, "item.text !== ''")
		f.mapRichField( colcontent, "item.text", "model.clolumns", "text")

		//Copyright
		f.mapField($.find('p').eq(0), "model.copyright")


		f.addElse($);
		$.parent().prepend('<div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>')

    }
}
