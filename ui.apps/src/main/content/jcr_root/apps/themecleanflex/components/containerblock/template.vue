<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="flex flex-wrap w-full" v-bind:data-per-path="model.path" v-bind:class="model.alignitems">
      <pagerendervue-components-placeholder v-if="(model.fromTemplate &amp;&amp; model.children.length &gt; 0 &amp;&amp; model.children[0].fromTemplate) ? false: model.children.length &gt; 0"
      v-bind:model="{ path: model.path, component: model.component, location: 'before' }"></pagerendervue-components-placeholder>
      <pagerendervue-components-placeholder
      v-if="model.children.length === 0" v-bind:model="{ path: model.path, component: model.component + ': drop component here', location: 'into' }"
      class="per-drop-target-empty"></pagerendervue-components-placeholder>
        <template v-for="child in model.children">
          <component v-bind:is="child.component" v-bind:model="child"></component>
        </template>
        <pagerendervue-components-placeholder v-if="(model.fromTemplate &amp;&amp; model.children.length &gt; 0 &amp;&amp; model.children[0].fromTemplate) ? false: model.children.length &gt; 0"
        v-bind:model="{ path: model.path, component: model.component, location: 'after' }"></pagerendervue-components-placeholder>
    </div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model']
    }
</script>

