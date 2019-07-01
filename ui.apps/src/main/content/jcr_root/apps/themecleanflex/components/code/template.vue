<template>
  <themecleanflex-components-block v-bind:model="model">
    <pre v-bind:class="'language-'+model.language+ ((model.classes) ? ' '+model.classes : '')"><code v-bind:class="'language-'+model.language" v-html="code"></code></pre>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        computed: {
          code() {
            let lang = this.model.language;
            if(window.Prism) {
              if(!lang || !Prism.languages[lang]) {
                lang = 'javascript';
              }
              return Prism.highlight(this.model.text ? this.model.text : '', Prism.languages[lang], lang)
            } else {
              return this.model.text;
            }
          }
        },
        mounted: function() {
          if(Prism) {
            Prism.highlightAllUnder(this.$el)
          }
        },
        updated: function() {
          if(Prism) {
            Prism.highlightAllUnder(this.$el)
          }
        }
    }
</script>

