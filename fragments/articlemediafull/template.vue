<template>
  <themecleanflex-components-block v-bind:model="model">
    <img src="/assets/images/jumbotron.jpg" width="100%">
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        computed: {
        	isEditAndEmpty() {
                if(!$peregrineApp.isAuthorMode()) return false
                //return !(this.model.imagesrc || this.model.videosrc)
                return this.$helper.areAllEmpty(this.model.imagesrc, this.model.videosrc)
            }
        }
    }
</script>