module.exports = {
    convert: function($, f) {
        f.bindAttribute( $, 'class', '[classes, colors, model.component]', false)
        f.bindAttribute( $, 'style', '[styles, sticky]', false)
        f.bindAttribute( $, 'data-per-path', 'model.path')
        f.bindAttribute( $, 'is', 'model.htmlelement || "div"')

        f.bindAttribute( $, 'id', 'model.anchorname')

        f.addIf( $.find('div.embed-responsive').first(), "model.custombackground === 'true' && model.backgroundtype == 'video' && model.bgvideo" )
        f.bindAttribute( $.find('iframe').first(), 'src', "videoSource" )
        f.addStyle( $.find('div.embed-responsive').first(), 'position', "'absolute'")
        f.addStyle( $.find('div.embed-responsive').first(), 'pointer-events', "'none'")
        f.addStyle( $.find('div.embed-responsive').first(), 'z-index', "'-1'")
        $.find('div.flex').append( '<slot>')

        let containerClasses = `{
            'container mx-auto' : model.blockwidth === 'default',
            'w-full max-w-3xl mx-auto' : model.blockwidth === 'article'
        }`
        f.bindAttribute( $.find('div.flex').first(), 'class', containerClasses, false)
    }
}
