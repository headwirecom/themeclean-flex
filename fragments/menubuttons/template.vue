<template>
  <div class="flex justify-end items-center md:flex-row flex-col" v-bind:data-per-path="model.path">
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
        }" v-html="item.buttontext" v-bind:data-per-inline-property="`model.buttons.${i}.buttontext`"
    data-per-inline-is-rich="false"></a>
  </div>
</template>

<script>
    export default {
        props: ['model']
    }
</script>

