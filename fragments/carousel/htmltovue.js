module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        f.addStyle( $, 'height', 'model.carouselheight', 'vh')

        let carousel = $.find('carousel').first();
        f.bindAttribute(carousel, "autoplay", "model.autoplay === 'true'")
        f.bindAttribute(carousel, "navigationEnabled", "model.controls === 'true'")
        f.bindAttribute(carousel, "paginationEnabled", "model.indicators === 'true'")
        f.bindAttribute(carousel, "autoplayHoverPause", "model.pause === 'true'")
        f.bindAttribute(carousel, "loop", "model.loop === 'true'")
        f.bindAttribute(carousel, "autoplayTimeout", "model.interval * 1000")
        f.bindAttribute(carousel, "perPage", 1)


        let slide = $.find('slide').first();
        f.addFor(slide, "model.slides");

        let image = $.find('img').first()

        f.addIf(image, "item.imagepath")
        f.bindAttribute(image, "src", "item.imagepath")
        f.bindAttribute(image, "alt", "item.alt")

        let p = $.find('p').first()
        f.addIf(p, "item.text")
        f.mapRichField(p, "item.text")

        //
        
        // let firstLi = $.find('li').first()
        // f.addIf($.find('ol').first(), "model.indicators === 'true'")
        // f.addFor(firstLi, 'model.slides')
        // f.bindAttribute(firstLi, "data-target", "`#${name}`")
        // f.bindAttribute(firstLi, "data-slide-to", "i")
        // f.bindAttribute(firstLi, "class", "{active: i === 0}")
        
        // let slideCaption = $.find('.percms-carousel-text').first()
        // let h3 = $.find('h3').first()

        // f.bindAttribute(firstSlide, "class", "{active: i === 0}", false)
        // f.addIf(slideCaption, "item.heading || item.text")
        // f.addIf(h3, "item.heading")
        // f.mapRichField(h3, "item.heading")
        // f.bindAttribute( slideCaption, 'class', "{'percms-caption-bg': model.captionbg === 'true'}", false)
        
        // let link1 = $.find('a').eq(0)
        // let link2 = $.find('a').eq(1)
        // f.addIf(link1, "model.controls === 'true'")
        // f.bindAttribute(link1, "href", "`#${name}`")
        // f.bindAttribute( link1.find('div'), 'class', "{'percms-caption-bg': model.captionbg === 'true'}", false)
        // f.addIf(link2, "model.controls === 'true'")
        // f.bindAttribute(link2, "href", "`#${name}`")
        // f.bindAttribute( link2.find('div'), 'class', "{'percms-caption-bg': model.captionbg === 'true'}", false)
    }
}
