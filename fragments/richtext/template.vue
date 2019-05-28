<template>
  <themecleanflex-components-block v-bind:model="model">
    <div v-html="model.text"></div>
    <div v-if="isEditAndEmpty">no content defined for component</div>
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

