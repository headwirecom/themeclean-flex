<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="w-full flex justify-center">
      <div v-html="model.text" v-bind:class="{
            'p-4 border-gray-500 border-l-8': model.blockquote === &quot;true&quot;,
            'p-4 border-gray-500 border-t-2 border-b-4': model.blockquote === &quot;false&quot;,
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

