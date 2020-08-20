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
        if(this.model.submitfunction != 'defaultSubmit' && this.model.submitfunction != '') {
          if(window[this.model.submitfunction]) {
            window[this.model.submitfunction](this.model,this.formModel)
          } else {
            const objs = this.model.submitfunction.split('.')
            let parent = window
            let i = 0
            let found = false
            while(!found && i < objs.length-1 && parent[objs[i]]) {
              parent = parent[objs[i]]
              if( i+1 == objs.length-1 && parent[objs[i+1]] ) {
                found = true
              } else {
                i++
              }
            }
            if(found) {
              parent[objs[objs.length-1]](this.model,this.formModel)
            } else {
              alert(this.model.submitfunction + ' not found')
            }
          }
          return
        }
        let curr = this
        axios.post(this.model.endpointurl, {
            form: this.formModel
        })
        .then(function (response) {
            $peregrineApp.loadContent(curr.model.successpage)
        })
        .catch(function (error) {
            curr.failureText = curr.model.failmessage
        })
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

