<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>
    <div class="w-full" v-else>
      <div class="flex flex-col lg:flex-row justify-between">
        <a v-if="model.showlogo === 'true' &amp;&amp; model.logo" v-bind:href="$helper.pathToUrl(model.logourl)">
          <img class="mb-3" v-bind:src="$helper.pathToUrl(model.logo)" v-bind:alt="model.logoalttext"
          v-bind:style="`height:${parseInt(model.logosize)}px;`">
        </a>
        <div class="footer-col flex-1 lg:mx-4" v-for="(item, i) in model.columns"
        :key="i">
          <h2 class="text-lg font-bold my-2" v-if="item.title !== ''"
          v-bind:data-per-inline="`model.columns.${i}.title`">{{item.title}}</h2>
          <div v-if="item.text !== ''" v-html="item.text"
          v-bind:data-per-inline="`model.columns.${i}.text`"></div>
        </div>
      </div>
      <hr class="border-b">
      <div class="flex items-center flex-wrap justify-between">
        <p class="my-3" v-bind:data-per-inline="`model.copyright`">{{model.copyright}}</p>
        <themecleanflex-components-socialicons v-bind:model="model"></themecleanflex-components-socialicons>
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
                return this.$helper.areAllEmpty(this.model.showlogo === 'true', this.model.columns,  this.model.copyright, this.model.icons)
            }
        }
    }
</script>

