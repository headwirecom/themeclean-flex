<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="flex">
      <div class="w-auto flex flex-col items-stretch">
        <img v-bind:class="model.showcard == 'true' ? 'card-img pb-1' : 'card-img pb-3'"
        v-bind:src="$helper.pathToUrl(item.image)" v-bind:alt="item.imagealttext"
        v-if="item.image">
        <h5 class="my-3" v-if="model.showtitle == 'true'" v-html="item.title"
        v-bind:style="`color:${item.color};`"></h5>
        <p class="my-3" v-if="model.showtext == 'true'" v-html="item.text"></p>
        <a href="#" class="button self-center my-3">Click Me</a>
      </div>
      <div class="card p-0 col-12 col-md border-0" v-for="(item,i) in model.cards"
      :key="i" v-bind:style="`background-color:${model.customcardcolor === 'true' ? model.cardcolor: ''};`"
      v-bind:class="{
            'bg-dark': model.customcardcolor !== 'true' &amp;&amp; model.colorscheme === 'light',
            'bg-light': model.customcardcolor !== 'true' &amp;&amp;  model.colorscheme === 'dark',
            'text-dark': (model.showcard === 'false' &amp;&amp; model.colorscheme === 'light') || (model.showcard === 'true' &amp;&amp; model.colorscheme === 'dark'),
            'text-light': (model.showcard === 'false' &amp;&amp; model.colorscheme === 'dark') || (model.showcard === 'true' &amp;&amp; model.colorscheme === 'light'),
            'bg-transparent': model.showcard === 'false'
        }">
        <img class="card-img pb-1" src="/assets/images/015.jpg">
        <div v-bind:class="{
            'card-body': model.showcard === 'true',
            'px-3 p-md-0': model.showcard === 'false'
        }">
          <h5 class="card-title">Odit</h5>
          <p>Maxime aperiam tempora sunt reprehenderit sapiente. Odit perspiciatis
            itaque sed. Dolores est et. Saepe cum libero eius. Qui omnis omnis. In
            vero delectus molestiae eum optio.</p>
          <div class="text-center mb-3" v-if="item.buttontext">
            <a class="btn btn-lg btn-primary" v-if="model.showbutton == 'true'"
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

