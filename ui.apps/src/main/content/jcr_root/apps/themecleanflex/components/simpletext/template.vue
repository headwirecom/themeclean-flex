<template>
  <component v-bind:data-per-path="model.path" v-bind:is="model.element"
  v-bind:class="{
            'text-2xl font-semibold': model.element === 'h1',
            'text-xl font-semibold': model.element === 'h2',
            'text-xl': model.element === 'h3',
            'text-lg font-semibold': model.element === 'h4',
            'text-lg': model.element === 'h5',
        }">{{model.text}}</component>
</template>

<script>
    export default {
        props: ['model']
    }
</script>

