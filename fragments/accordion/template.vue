<template>
  <themecleanflex-components-block v-bind:model="model">
    <div>
      <h2 class="text-center pb-4" v-if="model.showtitle == 'true'"
      v-html="model.title"></h2>
      <div class="flex" v-bind:class="model.mediaposition === 'after' ? 'flex-row-reverse': 'flex-row'">
        <div class="img-wrapper" v-if="model.showmedia === 'true'" v-bind:style="{width:`${model.mediawidth}%`}">
          <themecleanflex-components-media :model="model"></themecleanflex-components-media>
        </div>
        <!-- Card Container -->
        <div>
          <div class="pb-6" v-for="(item,i) in model.accordiontoggle" :key="i" v-bind:id="`accordion${_uid}`">
            <a class="flex justify-between items-center pb-4" v-bind:data-parent="model.toggletype === 'accordion' ? `#accordion${_uid}` : ''"
            v-bind:click="toggleItem(i)">
              <h4 v-html="item.title"></h4>
              <i class aria-hidden="true">x</i>
            </a>
            <div role="tabpanel" v-html="item.text" v-bind:class="{'hidden': itemsActive[i]}"></div>
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
            itemsActive: new Array(this.model.accordiontoggle.length).fill(true)
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
            this.itemsActive[i] = !this.itemsActive[i];
          }
        }
    }
</script>
