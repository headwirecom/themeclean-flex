<template>
  <div class="flex justify-end items-center md:flex-row flex-col">
    <a class="btn m-2" v-for="(item, i) in model.buttons" :key="i" v-bind:href="$helper.pathToUrl(item.buttonlink)"
    v-bind:class="{
            'btn-lg': model.buttonsize === 'large',
            'btn-sm': model.buttonsize === 'small',
            'btn-primary': item.buttoncolor === 'primary',
            'text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white': item.buttoncolor === 'secondary',
            'btn-green': item.buttoncolor === 'success',
            'btn-red': item.buttoncolor === 'danger',
            'btn-orange': item.buttoncolor === 'warning',
            'btn-white': item.buttoncolor === 'light',
            'btn-black': item.buttoncolor === 'dark'
        }" v-on:click="toggle" v-html="item.buttontext"></a>
  </div>
</template>
<script>
    export default {
        props: {
          model: Object, 
          tog: Function
        },
        methods: {
          toggle: function() {
            this.$emit('tog');
          }
        }
    }
</script>