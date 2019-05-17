<template>
  <themecleanflex-components-block v-bind:model="model">
    <carousel class="w-full" v-bind:autoplay="model.autoplay === 'true'"
    v-bind:navigationEnabled="model.controls === 'true'" v-bind:paginationEnabled="model.indicators === 'true'"
    v-bind:autoplayHoverPause="model.pause === 'true'" v-bind:centerMode="true"
    v-bind:loop="model.wrap === 'true'" v-bind:autoplayTimeout="model.interval * 1000"
    v-bind:perPage="1">
      <slide v-for="(item,i) in model.slides" :key="i">
        <div class="relative" v-bind:style="`height:${model.carouselheight}vh;`">
          <img class="flex-grow object-cover object-center" v-if="item.imagepath"
          v-bind:src="item.imagepath" v-bind:alt="item.alt">
          <figcaption class="absolute bottom-0 p-4 text-white text-xl w-full" v-if="item.text"
          v-html="item.text" v-bind:class="{'bg-gray-700': model.captionbg === 'true'}"></figcaption>
        </div>
      </slide>
    </carousel>
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
