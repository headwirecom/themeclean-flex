<template>
  <themecleanflex-components-block v-bind:model="model">
    <h2 class="pb-3" v-bind:class="model.textalign">Article Header</h2>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        computed: {
        	isEditAndEmpty() {
                if(!$peregrineApp.isAuthorMode()) return false
                //return !(this.model.showtitle === 'true' || this.model.showsubtitle === 'true')
                return this.$helper.areAllEmpty(this.model.showtitle === 'true', this.model.showsubtitle === 'true')
            }
        }
    }
</script>