<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="w-full px-5 py-2 border-l-4 shadow-md" v-bind:class="{
            'bg-blue-200 border-blue-500': model.notetype === &quot;note&quot;,
            'bg-green-200 border-green-500': model.notetype === &quot;tip&quot;,
            'bg-orange-200 border-orange-500': model.notetype === &quot;warning&quot;,
            'bg-red-200 border-red-500': model.notetype === &quot;important&quot;,
            'bg-yellow-200 border-yellow-500': model.notetype === &quot;caution&quot;
        }">
      <div class="flex text-black">
        <p class="font-bold mr-3">{{model.notetype.charAt(0).toUpperCase() + model.notetype.slice(1) + &quot;:&quot;}}</p>
        <span
        v-html="model.text"></span>
      </div>
    </div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model']
    }
</script>

