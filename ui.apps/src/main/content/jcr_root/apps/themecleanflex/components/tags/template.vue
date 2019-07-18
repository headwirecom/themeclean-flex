<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>
    <div class="w-full">
      <a class="text-white px-4 py-1 mr-3 rounded-full shadow-md" v-for="(item,i) in tags"
      :key="i" v-bind:class="{
            'bg-blue-600': model.tagcolor === &quot;blue&quot;,
            'bg-green-600': model.tagcolor === &quot;green&quot;,
            'bg-orange-600': model.tagcolor === &quot;orange&quot;,
            'bg-red-600': model.tagcolor === &quot;red&quot;,
            'bg-yellow-600': model.tagcolor === &quot;yellow&quot;
        }">{{item.name}}</a>
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

