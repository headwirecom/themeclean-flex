<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">no functions defined for component</div>
    <div v-bind:ref="`target`" v-else=""></div>
  </themecleanflex-components-block>
</template>

<script>
  export default {
    props: ['model'],
    mounted: function() {
      console.log('mounted');
      this.mount(this.$refs.target);
    },
    beforeDestroy: function() {
      this.unmount(this.$refs.target);
    },
    computed: {
      isEditAndEmpty() {
          if(!$peregrineApp.isAuthorMode()) return false
          return this.$helper.areAllEmpty(this.model.mount, this.model.unmount)
      }
    },
    methods: {
      mount(e) { 
        console.log(e);
        if (this.model.mount !== '') {
          const objs = this.model.mount.split('.');
          let parent = window;
          let obj = objs.shift();
          while (obj && parent[obj]) {
            if (objs.length === 0) {
              try {
                const result = parent[obj](e);
              } catch (err) {
                console.error(err);
              }
              return;
            }
            parent = parent[obj];
            obj = objs.shift();
          }
          console.log('window.' + this.model.mount + ' not found');
          return;
        }
      },
      unmount(e) { 
        console.log(e);
        if (this.model.unmount !== '') {
          const objs = this.model.unmount.split('.');
          let parent = window;
          let obj = objs.shift();
          while (obj && parent[obj]) {
            if (objs.length === 0) {
              try {
                const result = parent[obj](e);
              } catch (err) {
                console.error(err);
              }
              return;
            }
            parent = parent[obj];
            obj = objs.shift();
          }
          console.log('window.' + this.model.unmount + ' not found');
          return;
        }
      }

    }
  }
</script>

