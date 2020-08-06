<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>
    <div class="w-full flex justify-between"
    v-else>
      <a class="btn" data-per-inline="model.prevlabel" v-bind:href="$helper.pathToUrl(model.previous)"
      v-bind:class="{
            'btn-lg': model.buttonsize === 'large',
            'btn-sm': model.buttonsize === 'small',
            'btn-primary': model.buttoncolor === 'primary',
            'btn-secondary': model.buttoncolor === 'secondary',
            'btn-success': model.buttoncolor === 'success',
            'btn-danger': model.buttoncolor === 'danger',
            'btn-warning': model.buttoncolor === 'warning',
            'btn-light': model.buttoncolor === 'light',
            'btn-dark': model.buttoncolor === 'dark',
            'invisible': model.previous === 'unknown',
        }">{{model.prevlabel}}</a>
      <a class="btn" data-per-inline="model.nextlabel"
      v-bind:href="$helper.pathToUrl(model.next)" v-bind:class="{
            'btn-lg': model.buttonsize === 'large',
            'btn-sm': model.buttonsize === 'small',
            'btn-primary': model.buttoncolor === 'primary',
            'btn-secondary': model.buttoncolor === 'secondary',
            'btn-success': model.buttoncolor === 'success',
            'btn-danger': model.buttoncolor === 'danger',
            'btn-warning': model.buttoncolor === 'warning',
            'btn-light': model.buttoncolor === 'light',
            'btn-dark': model.buttoncolor === 'dark',
            'invisible': model.next === 'unknown',
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

