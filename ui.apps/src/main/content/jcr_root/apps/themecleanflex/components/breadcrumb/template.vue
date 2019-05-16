<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="flex">
      <span class="mx-3 my-2" v-for="(item,i) in model.links" :key="i" v-bind:class="{'font-bold': i === model.links.length - 1}">
        <a v-if="i + 1 &lt; model.links.length" v-bind:href="item.link">{{item.text}}</a>
        <span v-if="i+1 === model.links.length">{{item.text}}</span>
      </span>
    </div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        methods: {
           beforeSave(data) {
               delete data.links
               return data
           }
        }
    }
</script>

