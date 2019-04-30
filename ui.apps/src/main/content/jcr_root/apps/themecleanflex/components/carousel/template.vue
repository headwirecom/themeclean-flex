<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="flex items-center" v-bind:style="`height:${model.carouselheight}vh;`">
      <carousel v-bind:autoplay="model.autoplay === 'true'" v-bind:navigationEnabled="model.controls === 'true'"
      v-bind:paginationEnabled="model.indicators === 'true'" v-bind:autoplayHoverPause="model.pause === 'true'"
      v-bind:loop="model.loop === 'true'" v-bind:autoplayTimeout="model.interval * 1000"
      v-bind:perPage="1">
        <slide class="min-w-full max-w-full" v-for="(item,i) in model.slides"
        :key="i">
          <img v-if="item.imagepath" v-bind:src="item.imagepath" v-bind:alt="item.alt">
          <p v-if="item.text" v-html="item.text"></p>
        </slide>
      </carousel>
    </div>
  </themecleanflex-components-block>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    props: ['model'],
    computed: {
      name() {
          return this.model.path.split('/').slice(1).join('-').slice(4)
      }
    },
    components: {
      Carousel,
      Slide
    },
  }
</script>
