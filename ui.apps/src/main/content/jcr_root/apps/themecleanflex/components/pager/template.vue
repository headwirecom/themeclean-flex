<template>
  <div class="w-full flex justify-between" v-bind:data-per-path="model.path">
    <!-- <div class="perIsEditAndEmpty">no content defined for component</div> -->
    <a class="btn" v-bind:href="$helper.pathToUrl(model.previous)" v-bind:class="{
            'btn-lg': model.buttonsize === 'large',
            'btn-sm': model.buttonsize === 'small',
            'btn-blue': model.buttoncolor === 'primary',
            'btn-white border border-blue': model.buttoncolor === 'secondary',
            'btn-green': model.buttoncolor === 'success',
            'btn-red': model.buttoncolor === 'danger',
            'btn-orange': model.buttoncolor === 'warning',
            'btn-white': model.buttoncolor === 'light',
            'btn-black': model.buttoncolor === 'dark',
            'disabled': model.previous === 'unknown',
        }">{{model.prevlabel}}</a>
    <a class="btn" v-bind:href="$helper.pathToUrl(model.next)"
    v-bind:class="{
            'btn-lg': model.buttonsize === 'large',
            'btn-sm': model.buttonsize === 'small',
            'btn-blue': model.buttoncolor === 'primary',
            'btn-white border border-blue': model.buttoncolor === 'secondary',
            'btn-green': model.buttoncolor === 'success',
            'btn-red': model.buttoncolor === 'danger',
            'btn-orange': model.buttoncolor === 'warning',
            'btn-white': model.buttoncolor === 'light',
            'btn-black': model.buttoncolor === 'dark',
            'disabled': model.next === 'unknown',
        }">{{model.nextlabel}}</a>
  </div>
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

