<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>
    <carousel class="w-full" v-bind:autoplay="model.autoplay === 'true'"
    v-bind:navigationEnabled="model.controls === 'true'" v-bind:paginationEnabled="model.indicators === 'true'"
    v-bind:autoplayHoverPause="model.pause === 'true'" v-bind:centerMode="true"
    v-bind:loop="model.wrap === 'true'" v-bind:autoplayTimeout="model.interval * 1000"
    v-bind:perPage="model.itemsperpage" v-else="">
      <slide v-for="(item, i) in model.slides" :key="item.path || i">
        <div class="relative overflow-hidden flex flex-col justify-center" v-bind:style="`height:${model.carouselheight}vh;maxHeight:${model.carouselheight}vh;`"
        v-bind:class="{
            'theme-dark': item.colorscheme === 'dark',
            'theme-light': item.colorscheme === 'light',
        }">
          <a class="absolute inset-0 z-10" v-if="item.slidelink" v-bind:href="item.slidelink"></a>
          <v-lazy-image class="absolute top-0 w-full h-full object-center" v-if="item.imagepath"
          v-bind:src="item.imagepath" v-bind:alt="item.alt" v-bind:class="item.imagefit === 'cover' ? 'object-cover' : 'object-contain'"></v-lazy-image>
          <figcaption class="relative w-full h-full flex flex-col justify-center items-center text-lg font-medium"
          v-bind:class="{
            'pb-12': model.indicators === 'true',
            'with-bg': ((model.captionbg === 'true' &amp;&amp; item.captionbg !== 'false') || item.captionbg === 'true') &amp;&amp;
                       (model.colorscheme === 'light' || model.colorscheme === 'dark' || item.colorscheme === 'light' || item.colorscheme === 'dark')
        }">
            <div class="container flex flex-col" v-bind:class="{
            'items-start': (item.captionalign === 'inherit' &amp;&amp; model.captionalign === 'left') || item.captionalign === 'left',
            'items-center': (item.captionalign === 'inherit' &amp;&amp; model.captionalign === 'center') || item.captionalign === 'center',
            'items-end': (item.captionalign === 'inherit' &amp;&amp; model.captionalign === 'right') || item.captionalign === 'right',
        }">
              <div class="px-4 sm:px-0 sm:w-full md:w-4/5 lg:w-1/2" v-if="item.text"
              v-html="item.text" v-bind:data-per-inline="`model.slides.${i}.text`"></div>
            </div>
          </figcaption>
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
      },
      isEditAndEmpty() {
          if(!$peregrineApp.isAuthorMode()) return false
          //return (this.model.cards.length === 0)
          return this.$helper.areAllEmpty(this.model.slides)
      }
    },
    components: {
      Carousel,
      Slide
    },
  }
</script>
