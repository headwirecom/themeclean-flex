<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="w-full px-5 py-2 border-l-4 shadow-md" v-bind:class="{
            'note-note': model.notetype === &quot;note&quot;,
            'note-tip': model.notetype === &quot;tip&quot;,
            'note-warning': model.notetype === &quot;warning&quot;,
            'note-important': model.notetype === &quot;important&quot;,
            'note-caution': model.notetype === &quot;caution&quot;
        }">
      <div class="text-black" v-html="model.text" data-per-inline="model.text"
      data-per-inline-is-rich="true"></div>
    </div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model']
    }
</script>

