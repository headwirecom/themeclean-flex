<template>
  <themecleanflex-components-block v-bind:model="model">
    <div data-per-inline="storageData">{{storageData}}</div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        data() {
          return {
            storageData: JSON.parse(localStorage.getItem('list'))
          }
        },
        mounted() {
          // interesting aspect :-) if another tab on the same computer
          // has the same page open it actually updates
           window.addEventListener('storage', () => {
            this.storageData = JSON.parse(localStorage.getItem('list'))
           });
        }
    }
</script>
