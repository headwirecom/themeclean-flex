let marked = require('marked')

let idx = 0;

function escape(text) {
    return text.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

module.exports = {
    header(name) {
        idx = 0;
        return `<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0" xmlns:jcr="http://www.jcp.org/jcr/1.0" xmlns:nt="http://www.jcp.org/jcr/nt/1.0"
            jcr:primaryType="per:Page"
            jcr:title="tf-cl | ${name}"
            jcr:description="${name} themecleanflex component library"
>
    <jcr:content
        jcr:primaryType="per:PageContent"
        sling:resourceType="themecleanflex/components/page"
        jcr:title="${name}"
        brand="themecleanflex"
        template="/content/templates/themecleanflex"
            >`;
    },

    footer() {
        return `</jcr:content></jcr:root>`
    },

    title(title) {
return `<title${idx} jcr:primaryType="nt:unstructured" 
    sling:resourceType="themecleanflex/components/richtext" 
    text="${escape('<h1>'+title+'</h1>')}">
</title${idx++}>`
    },

    subtitle(title) {
        return `<title${idx} jcr:primaryType="nt:unstructured" 
            sling:resourceType="themecleanflex/components/richtext" 
            toppadding="25"
            bottompadding="25"
            custombackground="true"
            backgroundtype="color"
            bgcolor="#eeeeee"
            text="${escape('<h2>'+title+'</h2>')}">
        </title${idx++}>`
            },

    text(text) {
        return `<text${idx} jcr:primaryType="nt:unstructured" 
            sling:resourceType="themecleanflex/components/richtext" 
            text="${escape(text)}">
        </text${idx++}>`
            },

    listChildren(path, children) {
        const text = `<ul>
${children.map((child => `<li><a href="${path}${child}.html">${child}</a></li>`)).join('')}
</ul>`;
        return this.text(text);
    },

    tag(name, attrs, children = []) {
        return `<${name}${idx}
        ${attrs.map( (attr) => attr[0]+'="'+escape(attr[1])+'"').join(' ')}>${children.join('\n')}
        </${name}${idx++}>`
    },

    home() {
        return this.text('<p><a href="/content/sites/themecleanflex/library.html">component library home</a></p>');
    },

    intro(md) {
        return `
        <intro${idx} jcr:primaryType="nt:unstructured" 
            sling:resourceType="themecleanflex/components/richtext" 
            bottompadding="25"
            toppadding="25"
            htmlelement="main"
            custombackground="true"
            backgroundtype="color"
            bgcolor="#eeeeee"
            text="${escape(marked(md))}">
        </intro${idx++}>
        `
    }

}
