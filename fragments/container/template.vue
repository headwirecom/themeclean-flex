<template>
  <component v-bind:data-per-path="model.path" v-bind:is="model.htmlelement || &quot;div&quot;"
  v-bind:class="model.width">
    <pagerender-vue-components-placeholder v-bind:model="{ path: model.path, component: model.component, location: 'before' }"></pagerender-vue-components-placeholder>
    <template v-for="child in model.children">
      <component v-bind:is="child.component" v-bind:model="child"></component>
    </template>
    <pagerender-vue-components-placeholder v-bind:model="{ path: model.path, component: model.component, location: 'after' }"></pagerender-vue-components-placeholder>
  </component>
</template>

<script>
    export default {
        props: ['model']
    }
</script>

