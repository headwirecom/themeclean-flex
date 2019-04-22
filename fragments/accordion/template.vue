<template>
  <themecleanflex-components-block v-bind:model="model">
    <div>
      <h2 class="text-center pb-4" v-if="model.showtitle == 'true'"
      v-html="model.title"></h2>
      <div class="flex" v-for="(item,i) in model.accordiontoggle" :key="i"
      v-bind:class="model.mediaposition === 'after' ? 'flex-row-reverse': 'flex-row'">
        <div class="w-1/2" v-bind:class="model.mediaposition === 'after' ? 'flex-row-reverse': 'flex-row'"
        v-if="model.showmedia === 'true'" v-bind:style="{width:`${model.mediawidth}%`}">
          <themecleanflex-components-media :model="model"></themecleanflex-components-media>
        </div>
        <!-- Card Container -->
        <div class="w-1/2" v-bind:class="model.mediaposition === 'after' ? 'flex-row-reverse': 'flex-row'">
          <div class="pb-6" v-bind:class="model.mediaposition === 'after' ? 'flex-row-reverse': 'flex-row'"
          v-bind:id="`accordion${_uid}`">
            <a class="flex justify-between items-center pb-4" v-bind:data-parent="model.toggletype === 'accordion' ? `#accordion${_uid}` : ''"
            v-bind:href="`#accordion${_uid}${i}`" v-bind:aria-controls="`accordion${_uid}${i}`">
              <h4 v-html="item.title"></h4>
              <i class aria-hidden="true">x</i>
            </a>
            <div class role="tabpanel" v-bind:class="model.mediaposition === 'after' ? 'flex-row-reverse': 'flex-row'">
              <div class v-bind:class="model.mediaposition === 'after' ? 'flex-row-reverse': 'flex-row'">Toggle content 1</div>
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
        computed: {
        	isEditAndEmpty() {
            if(!$peregrineApp.isAuthorMode()) return false
            return this.$helper.areAllEmpty( this.model.showtitle === 'true' && this.model.title, this.model.showmedia === 'true', this.model.accordiontoggle );
          }
        }
    }
</script>