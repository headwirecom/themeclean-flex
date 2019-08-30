<template>
  <div v-bind:data-per-path="model.path">
    <component v-bind:is="getLoadedComponent(refModel.component)" v-bind:model="refModel"></component>
  </div>
</template>

<script>
    export default { props: ['model'],
      data: function(){
        const refModel = JSON.parse(this.model.referenceJson);
        return {
          refModel: refModel
        }
      },
      methods: {
        getLoadedComponent(name) {
          const cmpName = 'cmp' + name.split('-')
            .map( segment => segment.charAt(0).toUpperCase() + segment.slice(1) )
            .join('');
          return window[cmpName];
        }
      }
    }
</script>
