<template>
  <div v-bind:data-per-path="model.path">
    <div class="absolute inset-0 z-10" v-if="maskReference"></div>
    <component v-bind:is="getLoadedComponent(refModel.component)" v-bind:model="refModel"></component>
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
