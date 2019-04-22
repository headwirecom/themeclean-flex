<template>
  <themecleanflex-components-block v-bind:model="model">
    <div v-bind:style="`height:${model.carouselheight}vh;`" v-bind:id="name">
      <ol class="text-center flex" v-if="model.indicators === 'true'"></ol>
      <div class>
        <div class>
          <div class="flex flex-column justify-center">
            <img class v-if="item.imagepath" v-bind:src="item.imagepath" v-bind:alt="item.alt">
          </div>
          <div class="p-3">
            <h3 v-if="item.heading" v-html="item.heading"></h3>
            <p v-if="item.text" v-html="item.text"></p>
          </div>
        </div>
      </div>
    </div>
  </themecleanflex-components-block>
</template>

<script>
  export default {
    props: ['model'],
    mounted() {
      $(this.$refs.pcmscarousel).carousel({
        ride: this.model.autoplay === 'true' ? 'carousel' : false,
        interval: this.model.autoplay === 'true' ? parseInt(this.model.interval) * 1000: 0,
        pause: this.model.pause === 'true' ? 'hover' : false,
        wrap: this.model.wrap === 'true',
        keyboard: this.model.keyboard === 'true'
      })
    },
    computed: {
      name() {
          return this.model.path.split('/').slice(1).join('-').slice(4)
      }
    }
  }
</script>
