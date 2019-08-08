<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>
    <div class="flex flex-wrap" v-else>
      <span v-for="(item,i) in model.links" :key="i" v-bind:class="{'font-bold': i === model.links.length - 1}">
        <a class="pipe-after no-underline mr-2" v-if="i + 1 &lt; model.links.length"
        v-bind:href="item.link + '.html'" v-bind:class="{
            'text-blue-700': model.linkcolor === 'primary',
            'text-green-700': model.linkcolor === 'success',
            'text-red-700': model.linkcolor === 'danger',
            'text-orange-700': model.linkcolor === 'warning',
            'text-white': model.linkcolor === 'light',
            'text-black': model.linkcolor === 'dark'
        }">{{item.text}}</a>
        <span class="mr-2" v-if="i+1 === model.links.length">{{item.text}}</span>
      </span>
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
              return this.$helper.areAllEmpty(this.model.links)
          }
        },
        methods: {
           beforeSave(data) {
               delete data.links
               return data
           }
        }
    }
</script>

