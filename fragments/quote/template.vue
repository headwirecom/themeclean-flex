<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="w-full flex justify-center">
      <div class="p-6 border-gray-800" v-html="model.text" v-bind:class="{
            'border-l-8': model.blockquote === &quot;true&quot;,
            'border-t-2 border-b-4': model.blockquote === &quot;false&quot;,
            'border-gray-800': model.colorscheme === &quot;light&quot;,
            'border-gray-200': model.colorscheme === &quot;dark&quot;
        }"></div>
    </div>
    <div v-if="isEditAndEmpty">no content defined for component</div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model']
    }
</script>

