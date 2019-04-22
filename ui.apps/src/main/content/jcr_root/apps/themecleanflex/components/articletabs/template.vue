<template>
  <themecleanflex-components-block v-bind:model="model">
    <ul class="flex list-reset justify-center" role="tablist">
      <li class="p-4">
        <a v-bind:href="`#tab${_uid}${parseInt(i)+1}`" v-bind:class="[
			{'nav-link': true},
			{'btn': true},
            {'active': i == 0},
            {'bg-primary': model.tabcolor === 'primary'},
            {'bg-secondary': model.tabcolor === 'secondary'},
            {'bg-success': model.tabcolor === 'success'},
            {'bg-danger': model.tabcolor === 'danger'},
            {'bg-warning': model.tabcolor === 'warning'},
            {'bg-info': model.tabcolor === 'info'},
            {'bg-light': model.tabcolor === 'light'},
            {'bg-dark': model.tabcolor === 'dark'},
            textClasses
        ]" v-bind:id="`tab-control-${_uid}${parseInt(i)+1}`" v-bind:aria-controls="`tab${_uid}${parseInt(i)+1}`"
        v-html="item.title"></a>
      </li>
      <li class="p-4">
        <a class id="tab-control-2">TabName2</a>
      </li>
    </ul>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        computed: {
        	isEditAndEmpty() {
                if(!$peregrineApp.isAuthorMode()) return false
                return this.$helper.areAllEmpty(this.model.tabs)
          },
          textClasses() {
            return `text-${this.model.tabcolor}`
          }
        }
    }
</script>

