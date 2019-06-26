<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>
    <nav class="w-full" v-else>
      <span :click="toggleMenu">{currentLink}</span>
      <div v-if="menuActive">
        <a v-for="link in model.links" :href="link.href" :key="link.href">
          {link.text}
        </a>
      <div>
    </nav>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        data: function() {
          return {
            menuActive: false,
          }
        },
        mounted: function() {
          this.menuHeight = this.$refs.autoHeight.clientHeight;
        },
        computed: {
        	isEditAndEmpty() {
                if(!$peregrineApp.isAuthorMode()) return false
                return this.$helper.areAllEmpty(this.model.logo, this.model.links,  this.model.buttons)
            }
        },
        methods: {
          toggleMenu: function(){
            this.menuActive = !this.menuActive
          }
        }
    }
</script>
