<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>
    <div class="flex flex-wrap -mx-3"
    v-else>
      <div class="card my-3 px-0 md:px-3" v-bind:class="{
            'lg:w-full': model.cardsperrow == 1,
            'lg:w-1/2': model.cardsperrow == 2,
            'lg:w-1/3': model.cardsperrow == 3,
            'lg:w-1/4': model.cardsperrow == 4,
            'lg:w-1/5': model.cardsperrow == 5,
            'lg:w-1/6': model.cardsperrow == 6,
            'md:w-full': model.cardsperrowtab == 1,
            'md:w-1/2': model.cardsperrowtab == 2,
            'md:w-1/3': model.cardsperrowtab == 3,
            'md:w-1/4': model.cardsperrowtab == 4,
            'md:w-1/5': model.cardsperrowtab == 5,
            'md:w-1/6': model.cardsperrowtab == 6,
            'w-full': model.cardsperrowmobile == 1,
            'w-1/2': model.cardsperrowmobile == 2,
            'w-1/3': model.cardsperrowmobile == 3,
            'w-1/4': model.cardsperrowmobile == 4,
            'w-1/5': model.cardsperrowmobile == 5,
            'w-1/6': model.cardsperrowmobile == 6,
        }" v-for="(item,i) in model.cards" :key="i">
        <div class="flex flex-col h-full" v-bind:style="`background-color:${model.customcardcolor === 'true' &amp;&amp; model.showcard === 'true' ? model.cardcolor: ''};`"
        v-bind:class="{
            'bg-dark': model.customcardcolor !== 'true' &amp;&amp; model.colorscheme === 'light',
            'bg-light': model.customcardcolor !== 'true' &amp;&amp;  model.colorscheme === 'dark',
            'text-dark': (model.showcard === 'false' &amp;&amp; model.colorscheme === 'light') || (model.showcard === 'true' &amp;&amp; model.colorscheme === 'dark'),
            'text-light': (model.showcard === 'false' &amp;&amp; model.colorscheme === 'dark') || (model.showcard === 'true' &amp;&amp; model.colorscheme === 'light'),
        }">
          <div class="self-center" v-bind:style="{width: item.imagewidth + &quot;%&quot;}">
            <v-lazy-image v-bind:class="model.showcard == 'true' ? 'card-img pb-1' : 'card-img pb-3'"
            v-bind:src="$helper.pathToUrl(item.image)" v-bind:alt="item.imagealttext"
            v-if="item.image"></v-lazy-image>
          </div>
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
      },
      methods: {
          showbutton(card) {
            console.log(card)
            return this.model.showbutton && card.buttontext
          }
      }
  }
</script>

