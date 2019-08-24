<template>
  <themecleanflex-components-block v-bind:model="model">
    <h1>{{model.title}}</h1>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model']
    }
</script>

