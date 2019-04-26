<template>
  <themecleanflex-components-block v-bind:model="model">
    <div v-html="model.text"></div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model']
    }
</script>

