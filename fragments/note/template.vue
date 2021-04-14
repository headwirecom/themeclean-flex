<template>
  <themecleanflex-components-block v-bind:model="model">
    <div
      class="w-full px-5 py-2 border-l-4 shadow-md"
      v-bind:class="{
        'note-note': model.notetype === 'note',
        'note-tip': model.notetype === 'tip',
        'note-warning': model.notetype === 'warning',
        'note-important': model.notetype === 'important',
        'note-caution': model.notetype === 'caution',
      }"
    >
      <div
        class="text-black"
        v-html="model.text"
        v-bind:data-per-inline="`model.text`"
      ></div>
    </div>
  </themecleanflex-components-block>
</template>

<script>
export default {
  props: ["model"],
};
</script>
