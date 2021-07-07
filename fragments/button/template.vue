<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="w-full">
      <input class="btn mb-4" type="submit" v-bind:value="model.submittext"
      v-on:click.prevent.stop="onClick">
    </div>
  </themecleanflex-components-block>
</template>

<script>
  export default {
    props: ['model'],
    methods: {
      onClick(e) { 
        if (this.model.submitfunction !== 'onSubmit' && this.model.submitfunction !== '') {
          const objs = this.model.submitfunction.split('.');
          let parent = window;
          let obj = objs.shift();
          while (obj && parent[obj]) {
            if (objs.length === 0) {
              try {
                const result = parent[obj](this.model, this.form);
              } catch (err) {
                console.error(err);
              }
              return;
            }
            parent = parent[obj];
            obj = objs.shift();
          }
          console.log('window.' + this.model.submitfunction + ' not found');
          return;
        }
      }
    }
  }
</script>

