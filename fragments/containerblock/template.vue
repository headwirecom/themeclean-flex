<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="flex flex-wrap w-full" v-bind:data-per-path="model.path" v-bind:class="model.alignitems">
      <pagerender-vue-components-placeholder v-bind:model="{ path: model.path, component: model.component, location: 'before' }"></pagerender-vue-components-placeholder>
      <template v-for="child in model.children">
        <component v-bind:is="child.component" v-bind:model="child"></component>
      </template>
      <pagerender-vue-components-placeholder v-bind:model="{ path: model.path, component: model.component, location: 'after' }"></pagerender-vue-components-placeholder>
    </div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model']
    }
</script>

