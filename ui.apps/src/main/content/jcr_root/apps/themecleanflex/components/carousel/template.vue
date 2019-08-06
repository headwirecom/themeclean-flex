<template>
  <themecleanflex-components-block v-bind:model="model">
    <carousel class="w-full" v-bind:autoplay="model.autoplay === 'true'"
    v-bind:navigationEnabled="model.controls === 'true'" v-bind:paginationEnabled="model.indicators === 'true'"
    v-bind:autoplayHoverPause="model.pause === 'true'" v-bind:centerMode="true"
    v-bind:loop="model.wrap === 'true'" v-bind:autoplayTimeout="model.interval * 1000"
    v-bind:perPage="model.itemsperpage">
      <slide v-for="(item,i) in model.slides" :key="i">
        <div class="relative overflow-hidden" v-bind:style="`height:${model.carouselheight}vh;maxHeight:${model.carouselheight}vh;`">
          <a class="absolute inset-0 z-10" v-if="item.slidelink" v-bind:href="item.slidelink"></a>
          <v-lazy-image class="w-full h-full object-center" v-if="item.imagepath"
          v-bind:src="item.imagepath" v-bind:alt="item.alt" v-bind:class="item.imagefit === 'cover' ? 'object-cover' : 'object-contain'"></v-lazy-image>
          <figcaption class="absolute bottom-0 p-4 text-white text-xl w-full"
          v-if="item.text" v-html="item.text" v-bind:class="{'bg-gray-700': model.captionbg === 'true', 'pb-12': model.indicators === 'true'}"></figcaption>
        </div>
      </slide>
      <div v-if="isEditAndEmpty">no content defined for component</div>
    </carousel>
  </themecleanflex-components-block>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';
  import VLazyImage from 'v-lazy-image';

  export default {
    props: ['model'],
    computed: {
      name() {
          return this.model.path.split('/').slice(1).join('-').slice(4)
      },
      isEditAndEmpty() {
          if(!$peregrineApp.isAuthorMode()) return false
          //return (this.model.cards.length === 0)
          return this.$helper.areAllEmpty(this.model.slides)
      }
    },
    components: {
      Carousel,
      Slide,
      VLazyImage
    },
  }
</script>
