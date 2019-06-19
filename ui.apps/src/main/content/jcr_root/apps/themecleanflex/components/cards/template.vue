<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>
    <div class="-m-3 flex flex-col md:flex-row"
    v-else>
      <div class="flex-1 m-3 card w-auto flex flex-col items-stretch" v-for="(item,i) in model.cards"
      :key="i" v-bind:style="`background-color:${model.customcardcolor === 'true' &amp;&amp; model.showcard === 'true' ? model.cardcolor: ''};`"
      v-bind:class="{
            'bg-dark': model.customcardcolor !== 'true' &amp;&amp; model.colorscheme === 'light',
            'bg-light': model.customcardcolor !== 'true' &amp;&amp;  model.colorscheme === 'dark',
            'text-dark': (model.showcard === 'false' &amp;&amp; model.colorscheme === 'light') || (model.showcard === 'true' &amp;&amp; model.colorscheme === 'dark'),
            'text-light': (model.showcard === 'false' &amp;&amp; model.colorscheme === 'dark') || (model.showcard === 'true' &amp;&amp; model.colorscheme === 'light'),
        }">
        <img v-bind:class="model.showcard == 'true' ? 'card-img pb-1' : 'card-img pb-3'"
        v-bind:src="$helper.pathToUrl(item.image)" v-bind:alt="item.imagealttext"
        v-if="item.image">
        <div class="flex flex-grow flex-col justify-between p-0" v-bind:class="{
            'p-3': model.showcard === 'true'
        }">
          <div>
            <h1 class="text-lg my-3" v-if="model.showtitle == 'true'" v-html="item.title"
            v-bind:style="`color:${item.color};`"></h1>
            <p class="my-3" v-if="model.showtext == 'true'" v-html="item.text"></p>
          </div>
          <a class="btn self-center my-3" v-if="model.showbutton == 'true'"
          v-bind:href="$helper.pathToUrl(item.buttonlink)" v-bind:class="{
            'btn-lg': item.buttonsize === 'large',
            'btn-sm': item.buttonsize === 'small',
            'btn-blue': item.buttoncolor === 'primary',
            'btn-white border border-blue': item.buttoncolor === 'secondary',
            'btn-green': item.buttoncolor === 'success',
            'btn-red': item.buttoncolor === 'danger',
            'btn-orange': item.buttoncolor === 'warning',
            'btn-white': item.buttoncolor === 'light',
            'btn-black': item.buttoncolor === 'dark'
        }" v-html="item.buttontext"></a>
        </div>
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

