<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="text-center border-t border-b border-grey p-4">Non iure eaque et cumque quas tempore. Molestiae iusto deleniti. Eos distinctio
      ipsum consequuntur exercitationem amet distinctio dolor ut.</div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        computed: {
        	isEditAndEmpty() {
                if(!$peregrineApp.isAuthorMode()) return false
                //return !(this.model.text != '<p><br></p>')
                return this.$helper.areAllEmpty(this.model.text)
            }
        }
    }
</script>