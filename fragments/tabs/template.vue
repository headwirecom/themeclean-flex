<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="w-full">
      <div>
        <h2 class="text-center pb-4" v-if="model.showtitle == 'true' &amp;&amp; model.title"
        v-html="model.title"></h2>
        <h3 class="text-center pb-4" v-if="model.showsubtitle == 'true' &amp;&amp; model.subtitle"
        v-html="model.subtitle"></h3>
      </div>
      <div class="flex flex-col -mx-3" v-bind:class="{
            'lg:flex-row': model.mediaposition === 'before',
            'lg:flex-row-reverse': model.mediaposition === 'after'

        }">
        <div class="img-wrapper mx-3" v-if="model.showmedia == 'true'"
        v-bind:style="{'flex':`0 0 ${model.mediawidth}%`}">
          <themecleanflex-components-media :model="model"></themecleanflex-components-media>
        </div>
        <div class="w-full py-3 flex flex-col mx-3">
          <!-- Tab Nav -->
          <section class="flex flex-wrap justify-center  pb-3" role="tablist">
            <a class="m-3 no-underline p-3 cursor-pointer" role="tab" v-for="(item,i) in tabs"
            :key="i" v-bind:class="{
            'text-white' : item.active === true,
            'bg-blue-700' : item.active  &amp;&amp; model.tabcolor === 'blue',
            'bg-green-700' : item.active &amp;&amp; model.tabcolor === 'green',
            'bg-red-700' : item.active &amp;&amp; model.tabcolor === 'red',
            'bg-orange-700' : item.active &amp;&amp; model.tabcolor === 'orange',
            'bg-light-700' : item.active &amp;&amp; model.tabcolor === 'light',
            'bg-dark' : item.active &amp;&amp; model.tabcolor === 'dark',
            'text-blue-700' : !item.active  &amp;&amp; model.tabcolor === 'blue',
            'text-green-700' : !item.active &amp;&amp; model.tabcolor === 'green',
            'text-red-700' : !item.active &amp;&amp; model.tabcolor === 'red',
            'text-orange-700' : !item.active &amp;&amp; model.tabcolor === 'orange',
            'text-light' : !item.active &amp;&amp; model.tabcolor === 'light' || item.active &amp;&amp; model.tabcolor === 'dark',
            'text-dark' : !item.active &amp;&amp; model.tabcolor === 'dark' || item.active &amp;&amp; model.tabcolor === 'light',
        }" v-bind:id="`tab-control-${_uid}${parseInt(i)+1}`" v-bind:aria-controls="`tab${_uid}${parseInt(i)+1}`"
            v-bind:aria-selected="item.active" v-on:click="toggleActive(i)" v-html="item.title"></a>
          </section>
          <!-- Tab Content -->
          <div class="relative">
            <div class="w-full text-center py-3 opacity-0 transition-opacity" role="tabpanel"
            v-for="(item,i) in tabs" :key="i" v-bind:id="`tab${_uid}${parseInt(i)+1}`"
            v-bind:aria-labelledby="`tab-control-${_uid}${parseInt(i)+1}`" v-bind:class="item.active ? 'block opacity-100' : 'hidden'"
            v-html="item.text"></div>
          </div>
        </div>
      </div>
    </div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
      props: ['model'],
      data: function(){
        return { 
          tabs: [...this.model.tabs]
        }
      },
      created: function(){
        Vue.set(this.tabs[0], 'active',true)
      },
      computed: {
        isEditAndEmpty() {
              if(!$peregrineApp.isAuthorMode()) return false
              //return !(this.model.tabs.length > 0)
              return this.$helper.areAllEmpty(this.model.showtitle === 'true' && this.model.title, this.model.showsubtitle === 'true' && this.model.subtitle , this.model.tabs , this.model.showmedia === 'true')
        }
      },
      methods: {
        toggleActive: function(i) {
          this.tabs.forEach((tab,j) => {
            Vue.set(this.tabs[j], 'active', j === i);
          });
        }
      }
    }
</script>
