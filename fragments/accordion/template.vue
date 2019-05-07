<template>
  <themecleanflex-components-block v-bind:model="model">
    <div>
      <h2 class="text-center pb-4" v-if="model.showtitle == 'true'"
      v-html="model.title"></h2>
      <div class="flex flex-col" v-bind:class="{
            'lg:flex-row': model.mediaposition === 'before',
            'lg:flex-row-reverse': model.mediaposition === 'after'

        }">
        <div class="img-wrapper sm:pr-0 lg:pr-3" v-if="model.showmedia === 'true'"
        v-bind:style="{flex:`0 0 ${model.mediawidth}%`}">
          <themecleanflex-components-media :model="model"></themecleanflex-components-media>
        </div>
        <div>
          <div class="bg-grey-lighter" v-for="(item,i) in model.accordiontoggle"
          :key="i" v-bind:id="`accordion${_uid}`">
            <a class="flex justify-between items-center p-4 cursor-pointer" v-on:click="toggleItem(i)">
              <h4 v-html="item.title"></h4>
              <i class aria-hidden="true">x</i>
            </a>
            <div class="card-content overflow-hidden bg-white transition-height" role="tabpanel"
            v-bind:style="`height:${active[i] ? heights[i] + 'px' : '0px'};`">
              <div class="p-4" v-html="item.text" v-bind:ref="`cardContent${i}`"></div>
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
          return {
            active: new Array(this.model.accordiontoggle.length).fill(false),
            heights: new Array(this.model.accordiontoggle.length).fill(0),
          }
        },
        mounted: function() {
          this.heights.forEach( (item,i) => {
            Vue.set(this.heights, i, this.$refs[`cardContent${i}`][0].clientHeight )}
          );
        },
        computed: {
        	isEditAndEmpty() {
            if(!$peregrineApp.isAuthorMode()) return false
            return this.$helper.areAllEmpty( this.model.showtitle === 'true' && this.model.title, this.model.showmedia === 'true', this.model.accordiontoggle );
          }
        },
        methods: {
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