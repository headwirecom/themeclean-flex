let marked = require('marked')

let idx = 0;

function escape(text) {
    return text.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function card(title, text, link) {
    return `<card${idx}
        jcr:primaryType="nt:unstructured"
        buttontext="See ${title}"
        buttonlink="${link}"
        buttoncolor="primary"
        title="${title}"
        text="${escape(marked(text))}">
        </card${idx++}>
    `
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
        description="${name} themecleanflex component library"
        brand="themecleanflex"
        template="/content/templates/themecleanflex"
            ><clheader
            jcr:primaryType="nt:unstructured" sling:resourceType="themecleanflex/components/header" htmlelement="header" backgroundtype="color" bgcolor="#eeeeee" colorscheme="light" toppadding="10" bottompadding="10" bgvideo="https://www.youtube.com/embed/Ju86mknumYM" collapsed="false" logo="/content/assets/themecleanflex/samples/peregrine-logo.png" logoalttext="Peregrine CMS Logo" logourl="/content/sites/themecleanflex/library.html" logosize="60" buttonsize="default"><elevation jcr:primaryType="nt:unstructured"></elevation>
    <links jcr:primaryType="nt:unstructured"></links>
    <buttons jcr:primaryType="nt:unstructured"></buttons>
            </clheader>`;
    },

    footer() {
        return `
        <clfooter
        jcr:primaryType="nt:unstructured" sling:resourceType="themecleanflex/components/footer" htmlelement="footer" backgroundtype="color" bgcolor="#eeeeee" bottompadding="0" toppadding="30" colorscheme="light" showlogo="true" logo="/content/assets/themecleanflex/samples/peregrine-logo.png" logourl="/content/sites/themecleanflex/library.html" logoalttext="Peregrine CMS Logo" logosize="60" copyright="Copyright 2019 Peregrine - All Rights Reserved">
        <columns jcr:primaryType="nt:unstructured">
        <c3
        jcr:primaryType="nt:unstructured" title="" text="">
        </c3><c4
        jcr:primaryType="nt:unstructured" title="Contact" text="&lt;p&gt;info@headwire.com&lt;br&gt;&lt;/p&gt;">
        </c4><c5
        jcr:primaryType="nt:unstructured" title="Location" text="&lt;p&gt;23293 S Pointe Drive, Laguna Hills, CA 92653&lt;/p&gt;">
        </c5></columns>
<icons jcr:primaryType="nt:unstructured"></icons>
        </clfooter>        
        </jcr:content></jcr:root>`
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
        return `<clbreadcrumb
        colorscheme="light"
        custombackground="false"
        backgroundtype="color"
        bgcolor="#eeeeee"
        htmlelement="nav"
        jcr:primaryType="nt:unstructured" sling:resourceType="themecleanflex/components/breadcrumb" level="2"><toppadding jcr:primaryType="nt:unstructured"></toppadding>
        <bottompadding jcr:primaryType="nt:unstructured"></bottompadding>
        </clbreadcrumb>`;
        // return this.text('<p><a href="/content/sites/themecleanflex/library.html">component library home</a></p>');
    },

    intro(md) {
        return `
        <intro${idx} jcr:primaryType="nt:unstructured" 
            sling:resourceType="themecleanflex/components/richtext" 
            bottompadding="25"
            toppadding="25"
            htmlelement="banner"
            custombackground="true"
            backgroundtype="color"
            bgcolor="#eeeeee"
            text="${escape(marked(md))}">
        </intro${idx++}>
        `
    },

    container(el, content) {
        return `<container${idx}
            jcr:primaryType="nt:unstructured"
            sling:resourceType="themecleanflex/components/container"
            htmlelement="${el}">
            ${content}
        </container${idx++}>`
    },


    cards(cards) {
        let cardNum = idx;
        idx++;
        return (
        `<cards${cardNum}
            jcr:primaryType="nt:unstructured"
            sling:resourceType="themecleanflex/components/cards"
            bgcolor="#ffffff" bottompadding="20"
            showbutton="true"
            showtext="true"
            showtitle="false"
            showcard="true"
            toppadding="20"
            cardsperrow="4"
            customcardcolor="true"
            cardcolor="#eeeeee">
                <cards jcr:primaryType="nt:unstructured">
                    ${cards.reduce( (cards, {title,text,link}) => cards + card(title,text,link), "")}
                </cards>
        </cards${cardNum}>
        `)
    }

}
