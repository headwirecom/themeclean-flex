<template>
  <themecleanflex-components-block v-bind:model="model">
    <div>
      <h2 class="text-center pb-4" v-if="model.showtitle == 'true'"
      v-html="model.title"></h2>
      <div class="flex" v-bind:class="model.mediaposition === 'after' ? 'flex-row-reverse': 'flex-row'">
        <div class="img-wrapper" v-if="model.showmedia === 'true'" v-bind:style="{width:`${model.mediawidth}%`}">
          <themecleanflex-components-media :model="model"></themecleanflex-components-media>
        </div>
        <div>
          <div class="bg-grey-lighter" v-for="(item,i) in model.accordiontoggle"
          :key="i" v-bind:id="`accordion${_uid}`">
            <a class="flex justify-between items-center p-4 cursor-pointer" v-on:click="toggleItem(i)">
              <h4 v-html="item.title"></h4>
              <i class aria-hidden="true">x</i>
            </a>
            <div class="card-content overflow-hidden bg-white" role="tabpanel" v-html="item.text"
            v-bind:class="{
            'h-auto p-4': active[i],
            'h-px p-0 invisible': !active[i]
        }"></div>
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
            active: new Array(this.model.accordiontoggle.length).fill(false)
          }
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
