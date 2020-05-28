<template>
  <ul class="list-none flex flex-col items-center md:flex-row p-0">
    <li class="m-2" v-for="(item, i) in model.links" :key="i">
      <a class="no-underline p-3 hover:underline" v-bind:href="$helper.pathToUrl(item.link)"
      v-html="item.text" v-bind:class="{
            'text-blue-700': model.linkcolor === 'primary',
            'text-green-700 hover:text-green-600': model.linkcolor === 'success',
            'text-red-700 hover:text-red-600': model.linkcolor === 'danger',
            'text-orange-700 hover:text-orange-600': model.linkcolor === 'warning',
            'text-white hover:text-white': model.linkcolor === 'light',
            'text-gray-800 hover:text-black': model.linkcolor === 'dark',
            'font-bold' : $data.path === $helper.pathToUrl(item.link)
        }" v-on:click="toggle"></a>
    </li>
  </ul>
</template>

<script>
    export default {
        props: {
          model: Object, 
          tog: Function
        },
        computed: {
          activeClass (url) {
            return {'font-bold': this.$data.path === url}
          }
        },
        methods: {
          toggle: function() {
            this.$emit('tog');
          }
        }
    }
</script>

