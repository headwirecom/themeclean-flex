<template>
  <themecleanflex-components-block v-bind:model="model">
    <nav class="flex w-full justify-between" v-bind:class="{'navbar-expand-lg': model.collapsed === 'false','navbar-light': model.colorscheme === 'light','navbar-dark': model.colorscheme === 'dark'}">
      <!-- Logo -->
      <a v-bind:href="$helper.pathToUrl(model.logourl)">
        <img v-bind:src="$helper.pathToUrl(model.logo)" v-bind:alt="model.logoalttext"
        v-bind:style="`height:${parseInt(model.logosize)}px;`">
      </a>
      <!-- TODO Mobile Hamburger <!-- Collapsible Menu -->
      <div class="flex justify-end">
        <themecleanflex-components-textlinks v-bind:model="model"></themecleanflex-components-textlinks>
        <themecleanflex-components-menubuttons
        v-bind:model="model"></themecleanflex-components-menubuttons>
      </div>
    </nav>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        computed: {
        	isEditAndEmpty() {
                if(!$peregrineApp.isAuthorMode()) return false
                return this.$helper.areAllEmpty(this.model.logo, this.model.links,  this.model.buttons)
            }
        }
    }
</script>
