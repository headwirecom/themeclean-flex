<template>
  <themecleanflex-components-block v-bind:model="model">
    <div v-bind:data-per-path="model.path">
      <div>
        <p data-per-inline="failureText">{{failureText}}</p>
      </div>
      <form v-on:submit.prevent="onSubmit">
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
        },
        failureText: ''
      }
    },
    methods: {
      onSubmit(e) {
        if(this.model.submitfunction != 'onSubmit' && this.model.submitfunction != '') {
          const objs = this.model.submitfunction.split('.')
          let parent = window
          let i = 0
          while(i < objs.length && parent[objs[i]]) {
            if(i == objs.length-1) {
              try {
                const result = parent[objs[i]](this.model,this.formModel)
                if(result === false) {
                  this.failureText = this.model.failmessage
                }
              } catch(err) {
                console.error(err)
                this.failureText = this.model.failmessage
              }
              return
            }
            parent = parent[objs[i]]
            i++
          }
          console.log('window.' + this.model.submitfunction + ' not found')
          this.failureText = this.model.failmessage
          return
        }
        axios.post(this.model.endpointurl, {
            form: this.formModel
        })
        .then( (response) => {
            $peregrineApp.loadContent(this.model.successpage)
        })
        .catch( (error) => {
            this.failureText = this.model.failmessage
        })
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

