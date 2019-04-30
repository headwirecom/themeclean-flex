<template>
  <themecleanflex-components-block v-bind:model="model">
    <div v-bind:style="`height:${model.carouselheight}vh;`">
      <carousel :perpage="1" v-bind:autoPlay="model.autoplay" v-bind:autoPlayTimeout="model.interval"
      v-bind:navigationEnabled="true">
        <slide v-for="(item,i) in model.slides" :key="i">
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
