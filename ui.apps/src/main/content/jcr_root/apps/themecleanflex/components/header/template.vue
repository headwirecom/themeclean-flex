<template>
  <themecleanflex-components-block v-bind:model="model">
    <nav class="flex w-100" v-bind:class="{'navbar-expand-lg': model.collapsed === 'false','navbar-light': model.colorscheme === 'light','navbar-dark': model.colorscheme === 'dark'}">
      <!-- Logo -->
      <a v-bind:href="$helper.pathToUrl(model.logourl)">
        <img class v-bind:src="$helper.pathToUrl(model.logo)" v-bind:alt="model.logoalttext"
        v-bind:style="`height:${parseInt(model.logosize)}px;`">
      </a>
      <!-- TODO Mobile Hamburger <!-- Collapsible Menu -->
      <!-- <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <div class="textlink text-right"></div>
    <div class="menubutton"></div>
  </div> -->
    </nav>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        mounted() {
          $('body').scrollspy({target:'.navbar'})
          $('.nav-link').click( function(e) {
            $('.navbar-collapse').collapse('hide')
          })
        },
        computed: {
        	isEditAndEmpty() {
                if(!$peregrineApp.isAuthorMode()) return false
                return this.$helper.areAllEmpty(this.model.logo, this.model.links,  this.model.buttons)
            }
        }
    }
</script>