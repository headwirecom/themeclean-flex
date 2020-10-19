<template>
  <div class="component-menubuttons flex justify-end items-center md:flex-row flex-col">
    <a class="btn m-2" v-for="(item, i) in model.buttons" :key="item.path || i"
    v-bind:href="$helper.pathToUrl(item.buttonlink)" v-bind:class="{
            'btn-lg': model.buttonsize === 'large',
            'btn-sm': model.buttonsize === 'small',
            'btn-primary': item.buttoncolor === 'primary',
            'text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white': item.buttoncolor === 'secondary',
            'btn-success': item.buttoncolor === 'success',
            'btn-danger': item.buttoncolor === 'danger',
            'btn-warning': item.buttoncolor === 'warning',
            'btn-light': item.buttoncolor === 'light',
            'btn-dark': item.buttoncolor === 'dark'
        }" v-bind:data-per-inline="`model.buttons.${i}.buttontext`">{{item.buttontext}}</a>
  </div>
</template>

<script>
    export default {
        props: ['model']
    }
</script>

