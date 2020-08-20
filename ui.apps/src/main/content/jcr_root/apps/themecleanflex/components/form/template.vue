<template>
  <themecleanflex-components-block v-bind:model="model">
    <div v-bind:data-per-path="model.path">
      <div id="formFailure">
        <p data-per-inline="failureText">{{failureText}}</p>
      </div>
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
        },
        failureText: ''
      }
    },
    methods: {
      defaultSubmit(e) {
        e.preventDefault()
        if(this.model.submitfunction != 'defaultSubmit') {
          if(window[this.model.submitfunction]) {
            window[this.model.submitfunction](this.model,this.formModel)
          } else {
            const objs = this.model.submitfunction.split('.')
            let notFound = false
            let parent = window
            var i
            for( i=0; i<objs.length-1; i++) {
              if(!parent[objs[i]]) {
                notFound = true
                break
              }
              parent = parent[objs[i]]
            }
            if(notFound) {
              alert(this.model.submitfunction + ' not found')
            }
            else {
              parent[objs[objs.length-1]](this.model,this.formModel)
            }
          }
          return
        }
        let curr = this;
        axios.post(this.model.endpointurl, {
            form: this.formModel
        })
        .then(function (response) {
            $peregrineApp.loadContent(curr.model.successpage)
        })
        .catch(function (error) {
            curr.failureText = curr.model.failmessage
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

