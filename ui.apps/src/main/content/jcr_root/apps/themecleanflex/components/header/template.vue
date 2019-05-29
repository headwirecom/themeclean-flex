<template>
  <themecleanflex-components-block v-bind:model="model">
    <nav class="w-full">
      <div class="flex w-full justify-between items-center">
        <!-- Logo -->
        <a v-if="model.logo" v-bind:href="$helper.pathToUrl(model.logourl)">
          <img v-bind:src="$helper.pathToUrl(model.logo)" v-bind:alt="model.logoalttext"
          v-bind:style="`height:${parseInt(model.logosize)}px;`">
        </a>
        <!-- Collapsible Menu -->
        <div class="hidden md:flex justify-end" v-bind:class="{'md:hidden': model.collapsed === 'true'}">
          <themecleanflex-components-textlinks v-bind:model="model"></themecleanflex-components-textlinks>
          <themecleanflex-components-menubuttons
          v-bind:model="model"></themecleanflex-components-menubuttons>
        </div>
        <div class="font-bold text-xl cursor-pointer block md:hidden transform-rotate-90"
        v-on:click="toggleMenu" v-bind:style="{display: model.collapsed === 'true' ? 'flex': false}">|||</div>
      </div>
      <div class="flex flex-col w-full transition-height" v-bind:style="`height:${menuActive ? menuHeight + 'px' : '0px'};`">
        <div ref="autoHeight" class="p-4 flex flex-wrap justify-end">
          <themecleanflex-components-textlinks v-bind:model="model"></themecleanflex-components-textlinks>
          <themecleanflex-components-menubuttons
          v-bind:model="model"></themecleanflex-components-menubuttons>
        </div>
      </div>
    </nav>
  </themecleanflex-components-block>
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
