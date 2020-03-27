<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>
    <component v-bind:is="model.element"
    v-html="model.text" data-per-inline-property="model.text" data-per-inline-is-rich="false"
    v-bind:class="{
            'text-4xl font-semibold': model.element === 'h1',
            'text-3xl font-semibold': model.element === 'h2',
            'text-2xl': model.element === 'h3',
            'text-xl font-semibold': model.element === 'h4',
            'text-lg': model.element === 'h5',
        }" v-else></component>
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

