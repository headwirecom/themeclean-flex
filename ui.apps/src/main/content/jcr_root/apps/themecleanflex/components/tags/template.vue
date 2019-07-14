<template>
  <div v-bind:data-per-path="model.path">
    <ul>
      <li>title</li>
      <ul>
        <li>tag</li>
      </ul>
    </ul>
  </div>
</template>

<script>
    export default {
        props: ['model']
    }
</script>

