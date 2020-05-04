<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>
    <div class="w-full p-6" v-html="model.text"
    data-per-inline="model.text" data-per-inline-is-rich="true" v-bind:class="[
            {'border-l-8': model.blockquote === 'true'},
            {'border-t-2 border-b-4': model.blockquote === 'false'},
            model.colorscheme === 'dark' ? 'border-gray-200' : 'border-gray-800'
        ]" v-else></div>
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

