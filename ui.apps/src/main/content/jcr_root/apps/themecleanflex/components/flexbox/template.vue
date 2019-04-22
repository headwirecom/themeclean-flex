<template>
  <div v-bind:data-per-path="model.path" v-bind:class="model.direction">flexbox</div>
</template>

<script>
    export default {
        props: ['model']
    }
</script>

