<template>
  <div v-bind:data-per-path="model.path" v-bind:data-per-empty="isEditAndEmpty">
    <form>
      <div v-bind:is="'vue-form-generator'" v-bind:model="formModel"
      v-bind:schema="formSchema" v-bind:options="formOptions"></div>
      <input type="submit">
    </form>
  </div>
</template>

<script>    
    export default {
        props: ['model'],
        computed: {
          isEditAndEmpty() {
              if(!$peregrineApp.isAuthorMode()) return false
              return this.$helper.areAllEmpty(this.model.data)
          },
          formModel() {
            return {}
          },
          formOptions() {
            return {
              validateAfterLoad: true,
              validateAfterChanged: true
            } 
          },
          formSchema() {
            return JSON.parse(this.model.data) || { fields: [] }
          }
        }
    }
</script>

<style scoped>
  [data-per-empty] {
    height: 1em;
  }

</style>

