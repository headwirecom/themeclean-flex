<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="w-full flex flex-col md:flex-row justify-between items-center"
    v-bind:class="{
            'flex-row-reverse': model.buttonside === 'left',
            'flex-row': model.buttonside === 'right',
        }">
      <div class v-bind:class="{
            'text-left': model.aligncontent === 'left',
            'text-center': model.aligncontent === 'center',
            'text-right': model.aligncontent === 'right',
            'text-3xl': model.isprimary === 'true'
        }" v-bind:style="`flex-basis:${model.textwidth}%;`">
        <h1 class="text-xl" v-if="model.showtitle === 'true'" v-html="model.title"></h1>
        <h2 class="text-lg" v-if="model.showsubtitle === 'true'"
        v-html="model.subtitle"></h2>
        <p v-if="model.showtext === 'true'" v-html="model.text"></p>
      </div>
      <div class="flex flex-wrap justify-center" v-if="model.showbutton == 'true'"
      v-bind:class="{
            'justify-content-md-end': model.buttonside === 'right',
            'justify-content-md-start': model.buttonside === 'left',
        }">
        <a class="btn m-2" v-for="(item,i) in model.buttons" :key="i" v-bind:href="$helper.pathToUrl(item.buttonlink)"
        v-bind:class="{
            'btn-lg': model.buttonsize === 'large',
            'btn-sm': model.buttonsize === 'small',
            'btn-blue': item.buttoncolor === 'primary',
            'btn-white border border-blue': item.buttoncolor === 'secondary',
            'btn-green': item.buttoncolor === 'success',
            'btn-red': item.buttoncolor === 'danger',
            'btn-orange': item.buttoncolor === 'warning',
            'btn-white': item.buttoncolor === 'light',
            'btn-black': item.buttoncolor === 'dark'
        }" v-html="item.buttontext" v-bind:style="`backgroundColor:${item.buttoncolor};borderColor:${item.buttoncolor};`"></a>
      </div>
      <div v-if="isEditAndEmpty">no content defined for component</div>
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

