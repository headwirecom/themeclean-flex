module.exports = {
	convert: function ($, f) {
		f.wrap($, "themecleanflex-components-block");
		f.bindAttribute($.parent(), "model", "model");

		//Content Container
		let containerClasses = `{
            'md:flex-row': model.mediaposition === 'before',
            'md:flex-row-reverse': model.mediaposition === 'after',
            'enlarge-text': model.isprimary === 'true'
        }`;
		f.bindAttribute($, "class", containerClasses, false);

		//Media
		let mediaDiv = $.find(".img-wrapper").first();
		f.addIf(mediaDiv, "model.showmedia === 'true'");
		f.bindAttribute(mediaDiv, "style", "{flex:`0 0 ${model.mediawidth}%`}");
		f.replace(
			$.find("img"),
			'<themecleanflex-components-media :model="model"></themecleanflex-components-media>'
		);

		//Text
		let textClasses = `{
            'text-left': model.aligncontent === 'left',
            'text-center': model.aligncontent === 'center',
            'text-right': model.aligncontent === 'right',
            'self-start': model.aligncontent === 'left',
            'self-center': model.aligncontent === 'center',
            'self-end': model.aligncontent === 'right'
        }`;

		let textDiv = $.find("div>div>div").first();
		f.bindAttribute(textDiv, "class", textClasses, false);
		f.addStyle(textDiv, "width", "model.textwidth", "%");

		let title = $.find("h1").first();
		let titleClasses = `{
            'mb-6': model.isprimary === 'true',
            'mb-3': model.isprimary !== 'true'
        }`;

		f.addIf(title, "model.showtitle === 'true'");
		f.bindAttribute(title, "class", titleClasses, false);
		f.mapField(title, "model.title");

		let subTitle = $.find(".teaser-subtitle").first();
		let subTitleClasses = `{
            'mb-6': model.isprimary === 'true' && model.showtitle === 'false',
            'my-6': model.isprimary === 'true' && model.showtitle === 'true',
            'mb-3': model.isprimary !== 'true' && model.showtitle === 'false',
            'my-3': model.isprimary !== 'true' && model.showtitle === 'true'
        }`;

		f.addIf(subTitle, "model.showsubtitle === 'true'");
		f.bindAttribute(subTitle, "class", subTitleClasses, false);
		f.mapField(subTitle, "model.subtitle");

		let teaserText = $.find(".teaser-text").first();
		f.addIf(teaserText, "model.showtext === 'true'");
		f.mapRichField(teaserText, "model.text");

		//Buttons
		let buttonsDiv = $.find(".teaser-actions").first();
		let link = buttonsDiv.find("a").first();
		let buttonsClasses = `{
            'justify-start': model.alignbuttons === 'start',
            'justify-center': model.alignbuttons === 'center',
            'justify-end': model.alignbuttons === 'end'
        }`;
		let aClasses = `{
            'btn-lg': model.buttonsize === 'large',
            'btn-sm': model.buttonsize === 'small',
            'btn-primary': item.buttoncolor === 'primary',
            'btn-secondary': item.buttoncolor === 'secondary',
            'btn-success': item.buttoncolor === 'success',
            'btn-danger': item.buttoncolor === 'danger',
            'btn-warning': item.buttoncolor === 'warning',
            'btn-light': item.buttoncolor === 'light',
            'btn-dark': item.buttoncolor === 'dark'
        }`;

		f.addFor(link, "model.buttons");
		f.bindAttribute(link, "href", f.pathToUrl("item.buttonlink"));
		f.bindAttribute(link, "class", aClasses, false);
		f.mapField(link, "item.buttontext", "model.buttons", "buttontext");
		f.addStyle(link, "backgroundColor", "item.buttoncolor");
		f.addStyle(link, "borderColor", "item.buttoncolor");

		f.addIf(buttonsDiv, "model.showbutton == 'true'");
		f.bindAttribute(buttonsDiv, "class", buttonsClasses, false);

		f.addElse($);
		$.parent().prepend(
			'<div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>'
		);
	},
};
