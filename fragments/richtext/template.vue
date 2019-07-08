<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="flex flex-col md:-mx-3" v-bind:class="{
            'md:flex-row': model.mediaposition === 'before',
            'md:flex-row-reverse': model.mediaposition === 'after'
        }">
      <div class="img-wrapper mb-3 md:mb-0 md:px-3" v-if="model.showmedia === 'true'"
      v-bind:style="{flex:`0 0 ${model.mediawidth}%`}">
        <themecleanflex-components-media :model="model"></themecleanflex-components-media>
      </div>
      <div class="md:px-3" v-html="model.text"></div>
    </div>
    <div v-if="isEditAndEmpty">no content defined for component</div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        computed: {
          isEditAndEmpty() {
              if(!$peregrineApp.isAuthorMode()) return false
              return this.$helper.areAllEmpty(this.model.text)
          }
        }
    }
</script>

