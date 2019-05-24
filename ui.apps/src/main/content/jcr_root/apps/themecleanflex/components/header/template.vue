<template>
  <nav class="w-full" v-bind:data-per-path="model.path" v-bind:class="{'navbar-expand-lg': model.collapsed === 'false','navbar-light': model.colorscheme === 'light','navbar-dark': model.colorscheme === 'dark'}">
    <div class="flex w-full justify-between items-center">
      <!-- Logo -->
      <a v-if="model.logo" v-bind:href="$helper.pathToUrl(model.logourl)">
        <img v-bind:src="$helper.pathToUrl(model.logo)" v-bind:alt="model.logoalttext"
        v-bind:style="`height:${parseInt(model.logosize)}px;`">
      </a>
      <!-- Collapsible Menu -->
      <div class="hidden md:flex justify-end">
        <themecleanflex-components-textlinks v-bind:model="model"></themecleanflex-components-textlinks>
        <themecleanflex-components-menubuttons
        v-bind:model="model"></themecleanflex-components-menubuttons>
      </div>
      <div class="font-bold text-xl cursor-pointer block md:hidden transform-rotate-90"
      v-on:click="toggleMenu">|||</div>
    </div>
    <div class="flex flex-col w-full md:hidden transition-height" v-bind:style="`height:${menuActive ? menuHeight + 'px' : '0px'};`">
      <div ref="autoHeight" class="p-4">
        <themecleanflex-components-textlinks v-bind:model="model"></themecleanflex-components-textlinks>
        <themecleanflex-components-menubuttons
        v-bind:model="model"></themecleanflex-components-menubuttons>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        props: ['model'],
        data: function() {
          return {
            menuActive: false,
            menuHeight: 0
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
