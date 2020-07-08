<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="flex-grow md:px-3" v-html="model.text" data-per-inline="model.text" v-bind:data-per-path="model.path"></div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        computed: {
          isEditAndEmpty() {
              if(!$peregrineApp.isAuthorMode()) return false
              return this.$helper.areAllEmpty(this.model.text)
          }
        }
    }
</script>

