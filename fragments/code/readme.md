# Code

This component renders the text as `<pre><code class="language-{{language}} {{classes}}">{{text}}</code></pre>`

If the base template includes prism.js it will be used to generate the markup of the code.

## Configuring Prism

_Please note: Using Prism will impact your site's accessibility and mobile performance score. This is not an issue with Peregrine, rather a consequence of using Prism._

If you wish to use [https://prismjs.com/](Prism) with the code component, perform the following steps:

1. Visit the Prism [download page](https://prismjs.com/download.html) and download `prism.js` and `prism.css` with the options that you need.

2. Upload `prism.js` and `prism.css` to `Assets`. It is recommended that you create folders for `/content/_tenant_/assets/css/` and `/content/_tenant_/assets/js/` first, then upload `prism.js` and `prism.css` to their respective folders.

3. Click on the `Template` tile from the home screen, then click on the page icon for your tenant.

4. Click `page start`.

5. (optional) If you enabled the `Copy to Clipboard button` when you downloaded Prism, add `https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js` to `Site JS Files`.

6. Add `/content/_tenant_/assets/js/prism.js` to `Site JS Files`.

7. Add `/content/_tenant_/assets/css/prism.css` to `Site CSS Files`.

8. Navigate to your site, edit a page and place a _Code_ component on the page. Enter your language without the `language-` prefix (e.g., ruby, script, java, etc). You can add additional classes to the `classes` property. For example, adding `line-numbers` will enable line numbers if you included the line number plugin when you downloaded Prism.

## Pending Features & Issues

- Add support for defining Prism data attributes
- Update the code component to be less plugin dependent
