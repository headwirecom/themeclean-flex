<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="flex flex-col align-items-center">
      <div class="flex" v-bind:class="{
            'justify-start': model.aligncontent === 'left',
            'justify-center': model.aligncontent === 'center',
            'justify-end': model.aligncontent === 'right'
        }">
        <div class v-bind:class="{
            'text-left': model.aligncontent === 'left',
            'text-center': model.aligncontent === 'center',
            'text-right': model.aligncontent === 'right',
        }" v-bind:style="`width:${model.textwidth}%;`">
          <h2 class v-if="model.showtitle === 'true'" v-html="model.title"></h2>
          <h4 class v-if="model.showsubtitle === 'true'" v-html="model.subtitle"></h4>
          <p v-if="model.showtext === 'true'" v-html="model.text"></p>
        </div>
      </div>
      <div class="flex flex-wrap p-0" v-if="model.showbutton == 'true'"
      v-bind:class="{
            'justify-start': model.alignbuttons === 'start',
            'justify-center': model.alignbuttons === 'center',
            'justify-end': model.alignbuttons === 'end'
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
            'btn-light': item.buttoncolor === 'light',
            'btn-dark': item.buttoncolor === 'dark'
        }" v-html="item.buttontext" v-bind:style="`backgroundColor:${item.buttoncolor};borderColor:${item.buttoncolor};`"></a>
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

