<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>
    <pre class="overflow-x-auto" v-bind:class="'language-'+model.language+ ((model.classes) ? ' '+model.classes : '')"
    v-else><code v-bind:class="'language-'+model.language" v-html="code"></code>
    </pre>
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
          },
        	isEditAndEmpty() {
            if(!$peregrineApp.isAuthorMode()) return false
            return this.$helper.areAllEmpty(this.model.text);
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

