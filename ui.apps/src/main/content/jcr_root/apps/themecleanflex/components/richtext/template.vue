<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="flex" v-bind:class="{
            'lg:flex-row': model.mediaposition === 'before',
            'lg:flex-row-reverse': model.mediaposition === 'after'
        }">
      <div class="img-wrapper" v-if="model.showmedia === 'true'" v-bind:style="{flex:`0 0 ${model.mediawidth}%`}">
        <themecleanflex-components-media :model="model"></themecleanflex-components-media>
      </div>
      <div v-html="model.text" v-bind:class="{'p-4': model.showmedia === 'true'}"></div>
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

