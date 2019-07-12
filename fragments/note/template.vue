<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="w-full flex justify-center">
      <div class="px-5 py-2 border-l-4 shadow-md" v-html="model.text" v-bind:class="{
            'bg-blue-200 border-blue-500': model.notecolor === &quot;blue&quot;,
            'bg-green-200 border-green-500': model.notecolor === &quot;green&quot;,
            'bg-orange-200 border-orange-500': model.notecolor === &quot;orange&quot;,
            'bg-red-200 border-red-500': model.notecolor === &quot;red&quot;,
            'bg-yellow-200 border-yellow-500': model.notecolor === &quot;yellow&quot;
        }"></div>
    </div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model']
    }
</script>

