<template>
  <themecleanflex-components-block v-if="isReady" v-bind:model="model">
    <div class="w-full">
      <div class="text-black p-2 rounded-r mt-4 border-l-4 shadow-md note-important"
      v-if="( schemaError || uischemaError )">
        <p class="ml-2" v-if="schemaError">{{schemaError}}</p>
        <p class="ml-2" v-if="uischemaError">{{uischemaError}}</p>
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
        v-bind:ref="`jsonForms`" v-bind:key="jsonFormsKey" v-bind:data="form" v-bind:schema="schema"
        v-bind:uischema="uischema" v-bind:renderers="renderers" v-on:change="onChange"></json-forms>
        <input class="btn mb-4" type="submit" v-bind:value="model.submittext">
      </form>
    </div>
  </themecleanflex-components-block>
</template>

<!--suppress JSUnresolvedVariable, JSUnresolvedFunction -->
<script>
const renderers = [
  ...JSONFormsVue2Vanilla.vanillaRenderers
];
let row = -1;

export default {
  props: ['model'],
  data() {
    return {
      form: {},
      failureText: '',
      schema: {},
      uischema: {},
      renderers: Object.freeze(renderers),
      schemaError: null,
      uischemaError: null
    };
  },
  computed: {
    isReady() {
      const { Vue, VueCompositionAPI, JSONFormsCore, JSONFormsVue2, JSONFormsVue2Vanilla } = window;
      return Vue && VueCompositionAPI && JSONFormsCore && JSONFormsVue2 && JSONFormsVue2Vanilla;
    },
    jsonFormsKey() {
      const { sha256 } = window;
      const str = JSON.stringify(this.schema) + JSON.stringify(this.uischema);
      if (sha256 && typeof sha256 === 'function') {
        return sha256(str);
      } else {
        return str;
      }
    }
  },
  watch: {
    schema() {
      this.applyMissingButtonTypeWorkaround();
    },
    uischema() {
      this.applyMissingButtonTypeWorkaround();
    },
    form() {
      this.applyMissingButtonTypeWorkaround();
    },
    model: {
      deep: true,
      immediate: true,
      handler() {
        this.updateSchema();
        this.updateUischema();
      }
    }
  },
  beforeCreate() {
    if (!Vue.options.components['json-forms']) {
      Vue.component('json-forms', window.JSONFormsVue2.JsonForms);
    }
  },
  mounted() {
    let form = {}
    let id = -1
    const index = location.pathname.indexOf('.html/')
    if(index > 0) {
      const suffix = location.pathname.substring(index + 6)
      id = parseInt(suffix)
    }
    console.log(`Forms Id: ${id}`)
    if(!this.model.loadfunction || this.model.loadfunction === ''|| index < 0) {
      const storage = localStorage.getItem(this.model.endpointurl)
      try {
        const data = JSON.parse(storage)
        form = data[id]
        this.row = id
      }
      catch(err) {
        console.error('JSON parsing error loading storage: ' + storage + ', error: ' + err)
      }
      this.form = form
    }
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
      if (this.model.submitfunction !== 'onSubmit' && this.model.submitfunction !== '') {
        const objs = this.model.submitfunction.split('.');
        let parent = window;
        let obj = objs.shift();
        while (obj && parent[obj]) {
          if (objs.length === 0) {
            try {
              const result = parent[obj](this.model, this.form, this.row);
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
    },
    applyMissingButtonTypeWorkaround() {
      this.$refs.jsonForms.$el
          .querySelectorAll('button:not([type="button"])')
          .forEach((button) => {
            button.setAttribute('type', 'button');
          });
    },
    updateSchema() {
      if (this.model.schema) {
        axios.get(this.$helper.pathToUrl(this.model.schema))
            .then(({ data }) => this.schema = data)
            .catch(({message}) => this.schemaError = message);
      }
    },
    updateUischema() {
      if (this.model.uischema) {
        axios.get(this.$helper.pathToUrl(this.model.uischema))
            .then(({ data }) => this.uischema = data)
            .catch(({message}) => this.uischemaError = message);
      }
    }
  },
  provide() {
    const { defaultStyles, mergeStyles } = JSONFormsVue2Vanilla;
    const formControlStyles = 'border py-2 px-3';
    const btnStyles = 'focus:outline-none text-sm py-2.5 px-5 rounded-full border';
    const customStyles = {
      verticalLayout: {
        item: 'flex flex-col mb-4 w-full',
      },
      horizontalLayout: {
        item: 'flex flex-col mb-4 md:w-1/2'
      },
      control: {
        input: formControlStyles,
        select: formControlStyles,
        textarea: formControlStyles,
        option: formControlStyles,
        label: 'mb-2 uppercase font-bold text-lg',
        error: 'flex items-center font-medium tracking-wide text-xs mt-1 ml-1'
      },
      arrayList: {
        addButton: btnStyles,
        itemMoveUp: btnStyles,
        itemMoveDown: btnStyles,
        itemDelete: btnStyles,
      }
    };
    return { styles: mergeStyles(defaultStyles, customStyles) };
  }
};
</script>

