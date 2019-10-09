<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>
    <div class="w-full" v-else>
      <h2 class="text-xl text-center pb-4" v-if="model.showtitle == 'true'"
      v-html="model.title"></h2>
      <div class="flex flex-col -mx-3 flex-grow" v-bind:class="{
            'lg:flex-row': model.mediaposition === 'before',
            'lg:flex-row-reverse': model.mediaposition === 'after'
        }">
        <div class="img-wrapper px-0 md:px-3" v-if="model.showmedia === 'true'"
        v-bind:style="{flex:`0 0 ${model.mediawidth}%`}" v-bind:class="{
            'img-wrapper rounded-none': model.roundedcorners == 'none',
            'img-wrapper rounded-sm': model.roundedcorners == 'small',
            'img-wrapper rounded': model.roundedcorners == 'medium',
            'img-wrapper rounded-lg': model.roundedcorners == 'large',
            'img-wrapper rounded-full': model.roundedcorners == 'full'
        }">
          <themecleanflex-components-media :model="model"></themecleanflex-components-media>
        </div>
        <div class="accordion-container px-0 sm:mx-3 flex-grow overflow-hidden"
        v-bind:class="{
            'bg-white' : model.colorscheme === 'light',
            'bg-gray-800' : model.colorscheme === 'dark',
            'border border-solid border-gray-300': model.colorscheme === 'light' &amp;&amp; model.cardborder === 'true',
            'border border-solid border-gray-900': model.colorscheme === 'dark' &amp;&amp; model.cardborder === 'true',
            'rounded-none': model.roundedcorners == 'none',
            'rounded-sm': model.roundedcorners == 'small',
            'rounded': model.roundedcorners == 'medium',
            'rounded-lg': model.roundedcorners == 'large',
            'rounded-full': model.roundedcorners == 'full'
        }">
          <div v-for="(item,i) in model.accordiontoggle" :key="i" v-bind:id="`accordion${_uid}${parseInt(i)+1}`"
          v-bind:class="{
            'border-b border-solid border-gray-300': model.colorscheme === 'light' &amp;&amp; model.cardborder === 'true',
            'border-b border-solid border-gray-900': model.colorscheme === 'dark' &amp;&amp; model.cardborder === 'true'
        }">
            <a class="flex justify-between items-center p-3 cursor-pointer no-underline"
            v-on:click="toggleItem(i)">
              <h3 class="text-lg" v-html="item.title"></h3>
              <svg width="16" height="16" viewBox="0 0 16 16" v-bind:style="`transform:${active[i] ? 'rotate(180deg)': 'rotate(0)'};`">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.293 4.29291L14.7072 5.70712L8.00008 12.4142L1.29297 5.70712L2.70718 4.29291L8.00008 9.5858L13.293 4.29291Z"
                />
              </svg>
            </a>
            <div class="card-content overflow-hidden transition-height" role="tabpanel"
            v-bind:style="`height:${active[i] ? heights[i] + 'px' : '0px'};`">
              <div class="p-3" v-html="item.text" v-bind:ref="`cardContent${i}`"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        data: function() {
          const numElements = this.model.accordiontoggle ? this.model.accordiontoggle.length : 0;
          return {
            active: new Array(numElements).fill(false),
            heights: new Array(numElements).fill(0),
          }
        },
        created() {
          addEventListener("resize", this.setHeights);
        },
        destroyed() {
          removeEventListener("resize", this.setHeights);
        },
        mounted: function() {
          this.setHeights();
        },
        computed: {
        	isEditAndEmpty() {
            if(!$peregrineApp.isAuthorMode()) return false
            return this.$helper.areAllEmpty( this.model.showtitle === 'true' && this.model.title, this.model.showmedia === 'true', this.model.accordiontoggle );
          }
        },
        methods: {
          setHeights: function() {
            this.heights.forEach( (item,i) => {
              Vue.set(this.heights, i, this.$refs[`cardContent${i}`][0].clientHeight )}
            );
          },
          toggleItem(i) {
            if (this.model.toggletype === 'accordion') {
              this.active.forEach( (active,j) => {
                Vue.set(this.active, j, j === i ? !this.active[j] : false);
              })
            }
            else {
              Vue.set(this.active, i, !this.active[i])
            }
          }
        }
    }
</script>
