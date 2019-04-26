<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="flex">
      <div class="card w-auto flex items-stretch" v-for="(item,i) in model.cards"
      :key="i" v-bind:style="`background-color:${model.customcardcolor === 'true' ? model.cardcolor: ''};`"
      v-bind:class="{
            'bg-dark': model.customcardcolor !== 'true' &amp;&amp; model.colorscheme === 'light',
            'bg-light': model.customcardcolor !== 'true' &amp;&amp;  model.colorscheme === 'dark',
            'text-dark': (model.showcard === 'false' &amp;&amp; model.colorscheme === 'light') || (model.showcard === 'true' &amp;&amp; model.colorscheme === 'dark'),
            'text-light': (model.showcard === 'false' &amp;&amp; model.colorscheme === 'dark') || (model.showcard === 'true' &amp;&amp; model.colorscheme === 'light'),
            'bg-transparent': model.showcard === 'false'
        }">
        <img v-bind:class="model.showcard == 'true' ? 'card-img pb-1' : 'card-img pb-3'"
        v-bind:src="$helper.pathToUrl(item.image)" v-bind:alt="item.imagealttext"
        v-if="item.image">
        <h5 class="my-3" v-if="model.showtitle == 'true'" v-html="item.title"
        v-bind:style="`color:${item.color};`"></h5>
        <p class="my-3" v-if="model.showtext == 'true'" v-html="item.text"></p>
        <a class="btn self-center my-3" v-if="model.showbutton == 'true'"
        v-bind:href="$helper.pathToUrl(item.buttonlink)" v-bind:class="{
            'btn-lg': item.buttonsize === 'large',
            'btn-sm': item.buttonsize === 'small',
            'btn-primary': item.buttoncolor === 'primary',
            'btn-secondary': item.buttoncolor === 'secondary',
            'btn-success': item.buttoncolor === 'success',
            'btn-danger': item.buttoncolor === 'danger',
            'btn-warning': item.buttoncolor === 'warning',
            'btn-info': item.buttoncolor === 'info',
            'btn-light': item.buttoncolor === 'light',
            'btn-dark': item.buttoncolor === 'dark'
        }" v-html="item.buttontext"></a>
      </div>
    </div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        computed: {
            isEditAndEmpty() {
                if(!$peregrineApp.isAuthorMode()) return false
                //return (this.model.cards.length === 0)
                return this.$helper.areAllEmpty(this.model.cards)
            }
        }
    }
</script>

