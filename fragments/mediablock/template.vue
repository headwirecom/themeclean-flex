<template>
  <div class="mx-auto" v-bind:data-per-path="model.path" v-bind:style="{flexBasis:`${model.mediawidth}%`}">
    <themecleanflex-components-media v-bind:model="model"></themecleanflex-components-media>
    <div class="perIsEditAndEmpty" v-if="isEditAndEmpty"></div>
  </div>
</template>

<script>
    export default {
        props: ['model'],
        computed: {
	        isEditAndEmpty() {
	                if(!$peregrineApp.isAuthorMode()) return false
	                //return !(this.model.imagesrc || this.model.videosrc)
	                return this.$helper.areAllEmpty(this.model.imagesrc , this.model.videosrc)
	            }
        }
    }
</script>