<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="w-full">
      <div class="flex flex-col lg:flex-row justify-between">
        <a v-if="model.showlogo === 'true' &amp;&amp; model.logo" v-bind:href="$helper.pathToUrl(model.logourl)">
          <img class="mb-3" v-bind:src="$helper.pathToUrl(model.logo)" v-bind:alt="model.logoalttext"
          v-bind:style="`height:${parseInt(model.logosize)}px;`">
        </a>
        <div class="footer-col flex-1 lg:mx-4" v-for="(item,i) in model.columns"
        :key="i">
          <h1 class="text-xl my-2" v-if="item.title !== ''">{{item.title}}</h1>
          <div v-if="item.text !== ''" v-html="item.text"></div>
        </div>
      </div>
      <hr class="border-b">
      <div class="flex justify-between">
        <p class="my-3" v-html="model.copyright"></p>
        <themecleanflex-components-socialicons v-bind:model="model"></themecleanflex-components-socialicons>
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
                return this.$helper.areAllEmpty(this.model.showlogo === 'true', this.model.columns,  this.model.copyright, this.model.icons)
            }
        }
    }
</script>

