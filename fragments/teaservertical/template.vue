<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>
    <div class="w-full flex flex-col items-center md:-mx-3"
    v-bind:class="{
            'md:flex-row': model.mediaposition === 'before',
            'md:flex-row-reverse': model.mediaposition === 'after',
            'enlarge-text': model.isprimary === 'true'
        }" v-else>
      <div class="img-wrapper mb-3 md:mb-0 md:px-3 media-sizeable" v-if="model.showmedia === 'true'"
      v-bind:style="{flex:`0 0 ${model.mediawidth}%`}">
        <themecleanflex-components-media :model="model"></themecleanflex-components-media>
      </div>
      <div class="flex flex-col flex-grow mb-3 md:px-3">
        <div class v-bind:class="{
            'text-left': model.aligncontent === 'left',
            'text-center': model.aligncontent === 'center',
            'text-right': model.aligncontent === 'right',
            'self-start': model.aligncontent === 'left',
            'self-center': model.aligncontent === 'center',
            'self-end': model.aligncontent === 'right'
        }" v-bind:style="`width:${model.textwidth}%;`">
          <h1 v-if="model.showtitle === 'true'" v-html="model.title"></h1>
          <h2 v-if="model.showsubtitle === 'true'" v-html="model.subtitle"></h2>
          <p v-if="model.showtext === 'true'" v-html="model.text"></p>
        </div>
        <div class="flex flex-wrap p-0 -mx-2" v-if="model.showbutton == 'true'"
        v-bind:class="{
            'justify-start': model.alignbuttons === 'start',
            'justify-center': model.alignbuttons === 'center',
            'justify-end': model.alignbuttons === 'end'
        }">
          <a class="btn m-2" v-for="(item,i) in model.buttons" :key="i" v-bind:href="$helper.pathToUrl(item.buttonlink)"
          v-bind:class="{
            'btn-lg': model.buttonsize === 'large',
            'btn-sm': model.buttonsize === 'small',
            'btn-primary': item.buttoncolor === 'primary',
            'btn-secondary': item.buttoncolor === 'secondary',
            'btn-green': item.buttoncolor === 'success',
            'btn-red': item.buttoncolor === 'danger',
            'btn-orange': item.buttoncolor === 'warning',
            'btn-white': item.buttoncolor === 'light',
            'btn-black': item.buttoncolor === 'dark'
        }" v-html="item.buttontext" v-bind:style="`backgroundColor:${item.buttoncolor};borderColor:${item.buttoncolor};`"></a>
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
                return this.$helper.areAllEmpty(this.model.showtitle === 'true', this.model.showsubtitle === 'true', this.model.showtext === 'true', this.model.showbutton === 'true')
            }
        }
    }
</script>

