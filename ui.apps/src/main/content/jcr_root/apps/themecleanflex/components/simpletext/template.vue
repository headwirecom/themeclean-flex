<template>
  <themecleanflex-components-block v-bind:model="model">
    <component v-bind:is="model.element" v-bind:class="{
            'text-2xl font-semibold': model.element === 'h1',
            'text-xl font-semibold': model.element === 'h2',
            'text-xl': model.element === 'h3',
            'text-lg font-semibold': model.element === 'h4',
            'text-lg': model.element === 'h5',
        }">{{model.text}}</component>
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

