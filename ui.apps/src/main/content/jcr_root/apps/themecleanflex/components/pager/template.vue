<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>
    <div class="w-full flex justify-between"
    v-else>
      <a class="btn" v-html="model.prevlabel" data-per-inline-property="model.prevlabel"
      data-per-inline-is-rich="false" v-bind:href="$helper.pathToUrl(model.previous)"
      v-bind:class="{
            'btn-lg': model.buttonsize === 'large',
            'btn-sm': model.buttonsize === 'small',
            'btn-primary': model.buttoncolor === 'primary',
            'btn-secondary': model.buttoncolor === 'secondary',
            'btn-green': model.buttoncolor === 'success',
            'btn-red': model.buttoncolor === 'danger',
            'btn-orange': model.buttoncolor === 'warning',
            'btn-white': model.buttoncolor === 'light',
            'btn-black': model.buttoncolor === 'dark',
            'disabled': model.previous === 'unknown',
        }"></a>
      <a class="btn" v-html="model.nextlabel" data-per-inline-property="model.nextlabel"
      data-per-inline-is-rich="false" v-bind:href="$helper.pathToUrl(model.next)"
      v-bind:class="{
            'btn-lg': model.buttonsize === 'large',
            'btn-sm': model.buttonsize === 'small',
            'btn-primary': model.buttoncolor === 'primary',
            'btn-secondary': model.buttoncolor === 'secondary',
            'btn-green': model.buttoncolor === 'success',
            'btn-red': model.buttoncolor === 'danger',
            'btn-orange': model.buttoncolor === 'warning',
            'btn-white': model.buttoncolor === 'light',
            'btn-black': model.buttoncolor === 'dark',
            'disabled': model.next === 'unknown',
        }"></a>
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

