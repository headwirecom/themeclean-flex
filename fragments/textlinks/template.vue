<template>
  <ul class="list-reset flex flex-col items-center md:flex-row">
    <li v-for="(item,i) in model.links" :key="i">
      <a class="no-underline p-4 hover:underline" v-bind:href="$helper.pathToUrl(item.link)"
      v-html="item.text" v-bind:class="{'text-dark' : model.colorscheme === 'light','text-light' : model.colorscheme === 'dark',activeClass}"></a>
    </li>
  </ul>
</template>

<script>
    export default {
        props: ['model'],
        computed: {
          activeClass (url) {
            return {'font-bold': this.$data.path === url}
          }
        }
    }
</script>

