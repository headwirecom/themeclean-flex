<template>
  <themecleanflex-components-block v-bind:model="model">
    <div v-bind:data-per-path="model.path">
      <form>
        <vue-form-generator v-bind:model="formModel" v-bind:schema="schema" v-bind:options="formOptions"></vue-form-generator>
        <input type="submit">
      </form>
    </div>
  </themecleanflex-components-block>
</template>

<script>
    // <form>
    //   <vue-form-generator :schema="schema" :model="formModel" :options="formOptions">
    //   </vue-form-generator>
    //   <input type="submit">
    // </form>
export default {
    props: ['model'],
    data() {
      return {
        formModel: {},
        formOptions: {
          validateAfterChange: true              
        }
      }
    },
    computed: {
      schema() {
        try {
          return JSON.parse(this.model.schema)
        } catch( error ) {
          return { fields: [] } 
        }
      }
    }
  }
</script>

