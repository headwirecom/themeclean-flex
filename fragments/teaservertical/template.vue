<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="w-full flex flex-col justify-center">
      <div class="flex flex-col mb-3" v-bind:class="{
            'justify-start': model.aligncontent === 'left',
            'justify-center': model.aligncontent === 'center',
            'justify-end': model.aligncontent === 'right'
        }"></div>
      <div class>
        <h2 class v-if="model.showtitle === 'true'" v-html="model.title"></h2>
        <h4 class v-if="model.showsubtitle === 'true'" v-html="model.subtitle"></h4>
        <p v-if="model.showtext === 'true'" v-html="model.text"></p>
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

