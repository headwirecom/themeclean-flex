<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">There are no tags set for this page</div>
    <div class="w-full flex flex-wrap items-center -mx-2"
    v-else>
      <span class="font-bold ml-2 mr-4 mb-1" v-if="model.tagslabel">{{model.tagslabel}}</span>
      <component class="text-white hover:text-white px-4 py-1 mx-2 rounded-full shadow-md no-underline mb-1"
      v-for="(item, i) in tags" :key="i" v-bind:class="{
            'bg-blue-600': model.tagcolor === &quot;blue&quot;,
            'bg-green-600': model.tagcolor === &quot;green&quot;,
            'bg-orange-600': model.tagcolor === &quot;orange&quot;,
            'bg-red-600': model.tagcolor === &quot;red&quot;,
            'bg-yellow-600': model.tagcolor === &quot;yellow&quot;
        }" v-bind:href="model.pagelink ? model.pagelink + '.html' + item.value : false"
      v-bind:is="model.pagelink ? &quot;a&quot;:&quot;div&quot;">{{item.name}}</component>
    </div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
      props: ['model'],
      computed: {
        tags() {
          return $peregrineApp.getView().page.tags
        },
        isEditAndEmpty() {
              if(!$peregrineApp.isAuthorMode()) return false
              return this.tags.length === 0
        }
      }
    }
</script>

