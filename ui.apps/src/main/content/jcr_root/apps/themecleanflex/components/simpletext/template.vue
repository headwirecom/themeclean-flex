<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">No content defined for component</div>
    <component class='w-full flex md:flex-row' v-bind:is="model.element" data-per-inline="model.text" v-bind:class="{
            'text-4xl font-semibold': model.element === 'h1',
            'text-3xl font-semibold': model.element === 'h2',
            'text-2xl': model.element === 'h3',
            'text-xl font-semibold': model.element === 'h4',
            'text-lg': model.element === 'h5',
        }" v-else>
        <div class='flex flex-col px-5'><themecleanflex-components-socialicons v-bind:model="model"></themecleanflex-components-socialicons></div>
        <div class='flex flex-col'>{{model.text}}</div>
    </component>
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

