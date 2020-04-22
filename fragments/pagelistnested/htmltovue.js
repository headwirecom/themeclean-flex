module.exports = {
    convert: function($, f) {
        //f.bindPath($)
        f.addFor($.find('li.children').first(), 'model.childrenPages', 'child')
        f.bindAttribute($.find('li.children a').first(),'href',f.pathToUrl('child.path'))
        f.mapField($.find('li.children a').first(),'child.title')
        f.replace( $.find('ul.nested').eq(0), '<themecleanflex-components-pagelistnested v-bind:model="child"></themecleanflex-components-pagelistnested>')
        f.addIf($.find('themecleanflex-components-pagelistnested').first(), 'child.hasChildren && child.childrenPages && child.childrenPages.length > 0')

        f.replace( $.find('.reference').eq(0), '<div v-for="ref in child.references" v-bind:is="ref.htmlElement" v-bind:class="ref.cssClass" v-html="ref.value" v-bind:key="ref.key"></div>')

    }
}