<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="flex">
      <span v-for="(item,i) in model.links" :key="i" v-bind:class="{'font-bold': i === model.links.length - 1}">
        <a class="pipe-after color-inherit no-underline mr-2" v-if="i + 1 &lt; model.links.length"
        v-bind:href="item.link">{{item.text}}</a>
        <span class="mr-2" v-if="i+1 === model.links.length">{{item.text}}</span>
      </span>
      <div v-if="isEditAndEmpty">no content defined for component</div>
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

