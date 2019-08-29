<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="w-full">
      <template>
        AAAA
        <component v-bind:is="referencedComponent.component" v-bind:model="referencedComponent">
        </component>
      </template>
    </div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
      data: function(){
          const rc = JSON.parse(this.model.referenceJson);
          rc.component = "referencetest2-components-cards";
          console.log(rc)
          return {
            referencedComponent: rc
          }
      }
    }
</script>

