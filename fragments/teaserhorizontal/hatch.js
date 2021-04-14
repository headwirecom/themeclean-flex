module.exports = {
  convert: function ($, f) {
    f.wrap($, "themecleanflex-components-block");
    f.bindAttribute($.parent(), "model", "model");

    //Container
    let containerClasses = `{
            'md:flex-row-reverse': model.buttonside === 'left',
            'md:flex-row': model.buttonside === 'right',
            'enlarge-text': model.isprimary === 'true'
        }`;
    f.bindAttribute($, "class", containerClasses, false);

    //Text
    let textClasses = `{
            'text-left': model.aligncontent === 'left',
            'text-center': model.aligncontent === 'center',
            'text-right': model.aligncontent === 'right'
        }`;
    let textDiv = $.find("div").eq(0);
    f.bindAttribute(textDiv, "class", textClasses, false);
    f.addStyle(textDiv, "flex-basis", "model.textwidth", "%");

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
    f.mapField($.find(".teaser-subtitle").first(), "model.subtitle");

    let teaserText = $.find(".teaser-text").first();
    f.addIf(teaserText, "model.showtext === 'true'");
    f.mapRichField(teaserText, "model.text");

    //Buttons
    let buttonsDiv = $.find(".teaser-actions").first();
    let link = buttonsDiv.find("a");
    let buttonsClasses = `{
            'md:justify-end': model.buttonside === 'right',
            'md:justify-start': model.buttonside === 'left',
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
    f.addIf(buttonsDiv, "model.showbutton === 'true'");
    f.bindAttribute(buttonsDiv, "class", buttonsClasses, false);
    f.addFor(link, "model.buttons");
    f.bindAttribute(link, "href", f.pathToUrl("item.buttonlink"));
    f.bindAttribute(link, "class", aClasses, false);
    f.mapField(link, "item.buttontext", "model.buttons", "buttontext");
    f.addStyle(link, "backgroundColor", "item.buttoncolor");
    f.addStyle(link, "borderColor", "item.buttoncolor");

    f.addElse($);
    $.parent().prepend(
      '<div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>'
    );
  },
};
