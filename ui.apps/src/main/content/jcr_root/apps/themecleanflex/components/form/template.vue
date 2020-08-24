<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="w-full" v-bind:data-per-path="model.path">
      <transition name="fade">
        <div class="text-black p-2 rounded-r mt-4 border-l-4 shadow-md note-important"
        v-if="( failureText || schemaError )">
          <p class="ml-2" data-per-inline="failureText" v-if="failureText">{{failureText}}</p>
          <p class="ml-2" data-per-inline="schemaError" v-if="schemaError">{{schemaError}}</p>
        </div>
      </transition>
      <form class="w-full flex flex-col" v-bind:class="{
            'justify-button-start': model.submitalignment === 'start',
            'justify-button-center': model.submitalignment === 'center',
            'justify-button-end': model.submitalignment === 'end',
            'normal-button': model.submitsize === 'normal',
            'sm-button': model.submitsize === 'sm',
            'lg-button': model.submitsize === 'lg',
            'full-button': model.submitsize === 'full',
        }" v-on:submit.prevent.stop="onSubmit">
        <vue-form-generator v-bind:class="w-full" v-bind:model="formModel" v-bind:schema="schema"
        v-bind:options="formOptions"></vue-form-generator>
        <input class="btn m-4 mt-0" type="submit" v-bind:value="model.submittext">
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
                  Vue.set(this, 'failureText', this.model.failmessage);
                  setTimeout(() => {
                    Vue.set(this, 'failureText', '');
                  }, 1500)
                }
              } catch(err) {
                console.error(err)
                Vue.set(this, 'failureText', this.model.failmessage);
                setTimeout(() => {
                  Vue.set(this, 'failureText', '');
                }, 1500)
              }
              return
            }
            parent = parent[objs[i]]
            i++
          }
          console.log('window.' + this.model.submitfunction + ' not found')
          Vue.set(this, 'failureText', this.model.failmessage);
          setTimeout(() => {
            Vue.set(this, 'failureText', '');
          }, 1500)
          return
        }
        axios.post(this.model.endpointurl, {
            form: this.formModel
        })
        .then( (response) => {
            $peregrineApp.loadContent(this.model.successpage)
        })
        .catch( (error) => {
          Vue.set(this, 'failureText', this.model.failmessage);
          setTimeout(() => {
            Vue.set(this, 'failureText', '');
          }, 1500)
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
      },
      schemaError() {
        try {
          JSON.parse(this.model.schema)
        } catch( error ) {
          return 'Error parsing form model: ' + error
        }
        return ''
      }
    }
  }
</script>

