<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>
    <div class="w-full" v-else>
      <div>
        <h1 class="text-center pb-4" v-if="model.showtitle == 'true' &amp;&amp; model.title"
        v-html="model.title" data-per-inline-property="model.title" data-per-inline-is-rich="false"></h1>
        <h2 class="text-center pb-4" v-if="model.showsubtitle == 'true' &amp;&amp; model.subtitle"
        v-html="model.subtitle" data-per-inline-property="model.subtitle"></h2>
      </div>
      <div class="flex flex-col -mx-3" v-bind:class="{
            'lg:flex-row': model.mediaposition === 'before',
            'lg:flex-row-reverse': model.mediaposition === 'after'

        }">
        <div class="img-wrapper mx-3" v-if="model.showmedia == 'true'"
        v-bind:style="{'flex':`0 0 ${model.mediawidth}%`}">
          <themecleanflex-components-media :model="model"></themecleanflex-components-media>
        </div>
        <div class="py-3 flex flex-col mx-3 lg:flex-grow">
          <!-- Tab Nav -->
          <div class="flex flex-wrap justify-center  pb-3" role="tablist">
            <a class="mx-2 no-underline p-3 cursor-pointer" role="tab" v-for="(item, i) in model.tabs"
            :key="i" v-bind:class="{
            'text-white' : active === i,
            'bg-blue-700' : active === i &amp;&amp; model.tabcolor === 'blue',
            'bg-green-700' : active === i &amp;&amp; model.tabcolor === 'green',
            'bg-red-700' : active === i &amp;&amp; model.tabcolor === 'red',
            'bg-orange-700' : active === i &amp;&amp; model.tabcolor === 'orange',
            'bg-light-700' : active === i &amp;&amp; model.tabcolor === 'light',
            'bg-dark' : active === i &amp;&amp; model.tabcolor === 'dark',
            'text-blue-700' : active !== i  &amp;&amp; model.tabcolor === 'blue',
            'text-green-700' : active !== i &amp;&amp; model.tabcolor === 'green',
            'text-red-700' : active !== i &amp;&amp; model.tabcolor === 'red',
            'text-orange-700' : active !== i &amp;&amp; model.tabcolor === 'orange',
            'text-light' : active !== i &amp;&amp; model.tabcolor === 'light' || active === i &amp;&amp; model.tabcolor === 'dark',
            'text-dark' : active !== i &amp;&amp; model.tabcolor === 'dark' || active === i &amp;&amp; model.tabcolor === 'light',
        }" v-bind:id="`tab-control-${_uid}${parseInt(i)+1}`" v-bind:aria-controls="`tab${_uid}${parseInt(i)+1}`"
            v-bind:aria-selected="active === i" v-on:click="toggleActive(i)" v-html="item.title"
            v-bind:data-per-inline-property="`model.tabs.${i}.title`" data-per-inline-is-rich="false"></a>
          </div>
          <!-- Tab Content -->
          <div class="relative">
            <div class="w-full py-3 opacity-0 transition-opacity" role="tabpanel"
            v-for="(item, i) in model.tabs" :key="i" v-bind:id="`tab${_uid}${parseInt(i)+1}`"
            v-bind:aria-labelledby="`tab-control-${_uid}${parseInt(i)+1}`" v-bind:class="active === i ? 'block opacity-100' : 'hidden'"
            v-html="item.text" v-bind:data-per-inline-property="`model.tabs.${i}.text`"
            data-per-inline-is-rich="true"></div>
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
          active: 0
        }
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
          this.active = i;
        }
      }
    }
</script>
