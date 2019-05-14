<template>
  <themecleanflex-components-block v-bind:model="model">
    <component v-bind:is="model.element">{{model.text}}</component>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model']
    }
</script>

