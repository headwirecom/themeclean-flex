<template>
  <themecleanflex-components-block v-bind:model="model">
    <div>Consequuntur unde ipsum. Ullam ut voluptates laboriosam numquam voluptatem
      molestias. Quod quaerat ipsam. Nisi dolorem minus blanditiis necessitatibus
      magnam. Asperiores est qui et assumenda. Magnam molestiae eveniet. Rerum
      eos ut cum maxime ex. Non porro occaecati et quibusdam animi atque sunt.
      <div
      v-if="isEditAndEmpty">no content defined for component</div>
    </div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        computed: {
        	isEditAndEmpty() {
                if(!$peregrineApp.isAuthorMode()) return false
                //return this.model.text == '<p><br></p>'
                return this.$helper.areAllEmpty(this.model.text)
            }
        }
    }
</script>