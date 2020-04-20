module.exports = {
    convert: function($, f) {
        f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        f.addIf($.find('ul.root'), 'model.includeroot === \'true\'')

        f.bindAttribute($.find('li.root a').first(),'href',f.pathToUrl('model.rootPageLink'))
        f.mapField($.find('li.root a').first(),'model.rootPageTitle')
        f.addFor($.find('li.children').first(), 'model.childrenPages', 'child')
        f.bindAttribute($.find('li.children a').first(),'href',f.pathToUrl('child.path'))
        f.mapField($.find('li.children a').first(),'child.title')

        f.replace( $.find('div.reference').eq(0), '<div v-for="ref in child.references" v-bind:is="ref.htmlElement" v-bind:class="ref.cssClass" v-html="ref.value" v-bind:key="ref.key"></div>')
        f.replace( $.find('.noroot .reference').eq(0), '<div v-for="ref in child.references" v-bind:is="ref.htmlElement" v-bind:class="ref.cssClass" v-html="ref.value" v-bind:key="ref.key"></div>')
        f.replace( $.find('.root .children .reference').eq(0), '<div v-for="ref in child.references" v-bind:is="ref.htmlElement" v-bind:class="ref.cssClass" v-html="ref.value" v-bind:key="ref.key"></div>')

        f.replace( $.find('ul.nested').eq(0), '<themecleanflex-components-pagelistnested v-bind:model="child"></themecleanflex-components-pagelistnested>')
        f.addIf($.find('li.children themecleanflex-components-pagelistnested').first(), 'child.hasChildren && child.childrenPages && child.childrenPages.length > 0')

        f.addElse($.find('ul.noroot').first());

        f.addFor($.find('li.childrennoroot').first(), 'model.childrenPages', 'child')
        f.bindAttribute($.find('li.childrennoroot a').first(),'href',f.pathToUrl('child.path'))
        f.mapField($.find('li.childrennoroot a').first(),'child.title')
        f.replace( $.find('ul.nestednoroot').eq(0), '<themecleanflex-components-pagelistnested v-bind:model="child"></themecleanflex-components-pagelistnested>')
        f.addIf($.find('li.childrennoroot themecleanflex-components-pagelistnested').first(), 'child.hasChildren && child.childrenPages && child.childrenPages.length > 0')

        f.addElse($);
        $.parent().prepend('<div class="p-5" v-if="isEditAndEmpty">{{isEditAndEmpty}}</div>')
    }
}
