<template>
  <themecleanflex-components-block v-bind:model="model">
    <pre>
      <code v-bind:class="model.language">{{model.text}}</code>
    </pre>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model']
    }
</script>

