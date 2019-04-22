<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="flex justify-between">
      <a v-bind:href="$helper.pathToUrl(model.logourl)">
        <img class="mb-3" v-bind:src="$helper.pathToUrl(model.logo)" v-bind:alt="model.logoalttext"
        v-bind:style="`height:${parseInt(model.logosize)}px;`">
      </a>
      <div class="m-4">
        <h5 class="my-4">Address</h5>
        <div>1234 Street Name City, AA 1234</div>
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

