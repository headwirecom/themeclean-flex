<template>
  <div v-bind:data-per-path="model.path">
    <div v-if="maskReference && !refModel">
      Invalid reference
    </div>
    <div v-else>
      <div class="absolute inset-0 z-10" v-bind:style="overlayStyle" v-if="maskReference">
      </div>
      <component v-bind:is="getLoadedComponent(refModel.component)" v-bind:model="refModel"></component>
    </div>
  </div>
</template>

<script>
    export default { props: ['model'],
      computed: {
        maskReference() {
            return $peregrineApp.isAuthorMode(); 
        },
        refModel() {
          return JSON.parse(this.model.referenceJson)
        },
        reference() {
          return this.model.reference
        },
        overlayStyle() {
          if(this.reference.endsWith(this.refModel.path)) {
            return 'background-color: transparent'
          }
          else return 'background-color: rgba(230, 230, 230, 0.5)'
        }
      },
      methods: {
        beforeSave(data) {
            delete data.referenceJson; 
            return data;
        },
        getLoadedComponent(name) {
          const cmpName = 'cmp' + name.split('-')
            .map( segment => segment.charAt(0).toUpperCase() + segment.slice(1) )
            .join('');
          return window[cmpName];
        }
      }
    }
</script>
