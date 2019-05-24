module.exports = {
    convert: function($, f) {
    	f.bindPath($);
        f.bindAttribute($.parent(),'model','model')

        f.addStyle( $.find('div'), 'height', 'model.carouselheight', 'vh')

        let carousel = $;
        f.bindAttribute(carousel, "autoplay", "model.autoplay === 'true'")
        f.bindAttribute(carousel, "navigationEnabled", "model.controls === 'true'")
        f.bindAttribute(carousel, "paginationEnabled", "model.indicators === 'true'")
        f.bindAttribute(carousel, "autoplayHoverPause", "model.pause === 'true'")
        f.bindAttribute(carousel, "centerMode", "true")
        f.bindAttribute(carousel, "loop", "model.wrap === 'true'")
        f.bindAttribute(carousel, "autoplayTimeout", "model.interval * 1000")
        f.bindAttribute(carousel, "perPage", 1)


        let slide = $.find('slide').first();
        f.addFor(slide, "model.slides");

        let image = $.find('v-lazy-image').first()

        f.addIf(image, "item.imagepath")
        f.bindAttribute(image, "src", "item.imagepath")
        f.bindAttribute(image, "alt", "item.alt")

        let figcaption = $.find('figcaption').first()
        f.addIf(figcaption, "item.text")
        f.mapRichField(figcaption, "item.text")
        f.bindAttribute( figcaption, 'class', "{'bg-gray-700': model.captionbg === 'true'}", false)

    }
}
