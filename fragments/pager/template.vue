<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="flex justify-between">
      <!-- <div class="perIsEditAndEmpty">no content defined for component</div> -->
      <a class="p-2 border border-black hover:bg-black hover:text-gray-lighter"
      v-bind:href="$helper.pathToUrl(model.previous)" v-bind:class="{
            'disabled': model.previous === 'unknown',
            'btn-outline-primary': model.previous !== 'unknown'
        }">{{model.prevlabel}}</a>
      <a class="p-2 border border-black hover:bg-black hover:text-gray-lighter"
      v-bind:href="$helper.pathToUrl(model.next)" v-bind:class="{
            'disabled': model.next === 'unknown',
            'btn-outline-primary': model.next !== 'unknown'
        }">{{model.nextlabel}}</a>
    </div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        computed: {
        	isEditAndEmpty() {
                if(!$peregrineApp.isAuthorMode()) return false
                return this.$helper.areAllEmpty(this.model.prevlabel, this.model.nextlabel)
            }
        }
    }
</script>

