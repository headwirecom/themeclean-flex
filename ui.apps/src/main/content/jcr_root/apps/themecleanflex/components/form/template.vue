<template>
  <themecleanflex-components-block v-if="isReady" v-bind:model="model">
    <div class="w-full" v-bind:data-per-path="model.path">
      <div class="text-black p-2 rounded-r mt-4 border-l-4 shadow-md note-important"
      v-if="( failureText || schemaError )">
        <p class="ml-2" v-if="failureText">{{failureText}}</p>
        <p class="ml-2" v-if="schemaError">{{schemaError}}</p>
      </div>
      <form class="w-full flex flex-col md:p-4 sm:p-2" v-bind:class="{
            'justify-button-start': model.submitalignment === 'start',
            'justify-button-center': model.submitalignment === 'center',
            'justify-button-end': model.submitalignment === 'end',
            'normal-button': model.submitsize === 'normal',
            'sm-button': model.submitsize === 'small',
            'lg-button': model.submitsize === 'large',
            'full-button': model.submitsize === 'full',
        }" v-on:submit.prevent.stop="onSubmit">
        <json-forms v-bind:class="`w-full mb-4 md:flex md:flex-wrap md:justify-between`"
        v-bind:data="form" v-bind:schema="schema" v-bind:uischema="uischema" v-bind:renderers="renderers"
        v-on:change="onChange"></json-forms>
        <input class="btn mb-4" type="submit" v-bind:value="model.submittext">
      </form>
    </div>
  </themecleanflex-components-block>
</template>

<!--suppress JSUnresolvedVariable, JSUnresolvedFunction -->
<script>
export default {
  props: ['model'],
  data() {
    console.log('success successpage1', this.model.successpage);
    return {
      form: {},
      failureText: '',
      renderers: Object.freeze(JSONFormsVue2Vanilla.vanillaRenderers)
    };
  },
  computed: {
    isReady() {
      const { Vue, VueCompositionAPI, JSONFormsCore, JSONFormsVue2, JSONFormsVue2Vanilla } = window;
      return Vue && VueCompositionAPI && JSONFormsCore && JSONFormsVue2 && JSONFormsVue2Vanilla;
    },
    schema() {
      try {
        return JSON.parse(this.model.schema);
      } catch (error) {
        return null;
      }
    },
    uischema() {
      try {
        return JSON.parse(this.model.uischema);
      } catch (error) {
        return null;
      }
    },
    schemaError() {
      try {
        JSON.parse(this.model.schema);
      } catch (error) {
        return 'Error parsing form model: ' + error;
      }
      return '';
    }
  },
  beforeCreate() {
    if (!Vue.options.components['json-forms']) {
      Vue.component('json-forms', window.JSONFormsVue2.JsonForms);
    }
  },
  mounted() {
    window.addEventListener('form-clear', this.clearForm);
  },
  beforeDestroy() {
    window.removeEventListener('form-clear', this.clearForm);
  },
  methods: {
    clearForm() {
      this.form = {};
    },
    onChange({ data }) {
      this.form = data;
    },
    onSubmit(e) {
      if (this.model.submitfunction != 'onSubmit' && this.model.submitfunction != '') {
        const objs = this.model.submitfunction.split('.');
        let parent = window;
        let obj = objs.shift();
        while (obj && parent[obj]) {
          if (objs.length === 0) {
            try {
              const result = parent[obj](this.model, this.form);
              if (result === false) {
                this.$set(this, 'failureText', this.model.failmessage);
              }
              if (result === true && this.model.successpage) {
                $peregrineApp.loadContent(this.model.successpage);
              }
            } catch (err) {
              console.error(err);
              this.$set(this, 'failureText', this.model.failmessage);
            }
            return;
          }
          parent = parent[obj];
          obj = objs.shift();
        }
        console.log('window.' + this.model.submitfunction + ' not found');
        this.$set(this, 'failureText', this.model.failmessage);
        return;
      }
      axios.post(this.model.endpointurl, {
        form: this.form
      }).then(() => {
        if (this.model.successpage) {
          $peregrineApp.loadContent(this.model.successpage);
        } else {
          window.dispatchEvent(new CustomEvent('form-clear', {}));
        }
      }).catch(() => {
        this.$set(this, 'failureText', this.model.failmessage);
      });
    }
  },
  provide() {
    const { defaultStyles, mergeStyles } = JSONFormsVue2Vanilla;
    const customStyles = {
      verticalLayout: {
        item: 'flex flex-col mb-4 md:w-1/2',
      },
      control: {
        input: 'border py-2 px-3',
        select: 'border py-2 px-3',
        option: 'border py-2 px-3',
        label: 'mb-2 uppercase font-bold text-lg',
        error: 'flex items-center font-medium tracking-wide text-xs mt-1 ml-1'
      }
    };
    return { styles: mergeStyles(defaultStyles, customStyles) };
  }
};
</script>

