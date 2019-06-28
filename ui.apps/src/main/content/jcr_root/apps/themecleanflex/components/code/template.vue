<template>
  <themecleanflex-components-block v-bind:model="model">
    <pre>
      <code v-bind:class="model.language">{{code}}</code>
    </pre>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        computed: {
          code() {
            if(Prism) {
              return Prism.highlight(this.model.text ? this.model.text : '', Prism.languages.javascript, 'javascript')
            } else {
              return this.model.text;
            }
          }
        }
    }
</script>

