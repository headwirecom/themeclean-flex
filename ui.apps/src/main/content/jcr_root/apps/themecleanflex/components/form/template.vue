<template>
  <themecleanflex-components-block v-bind:model="model">
    <div v-bind:data-per-path="model.path">
      <form v-on:submit="defaultSubmit">
        <vue-form-generator v-bind:model="formModel" v-bind:schema="schema" v-bind:options="formOptions"></vue-form-generator>
        <input type="submit">
      </form>
    </div>
  </themecleanflex-components-block>
</template>

<script>
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
    methods: {
      defaultSubmit(e) {
        e.preventDefault()
        let curr = this;
        axios.post(this.model.endpointurl, {
            form: this.formModel
        })
        .then(function (response) {
            $peregrineApp.loadContent(curr.model.successpage)
        })
        .catch(function (error) {
            alert(error)
        });
        return false
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

