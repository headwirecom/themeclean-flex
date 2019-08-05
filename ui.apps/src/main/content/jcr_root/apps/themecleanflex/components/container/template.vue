<template>
  <component v-bind:data-per-path="model.path" v-bind:is="model.htmlelement || &quot;div&quot;"
  v-bind:class="{
            'lg:flex-grow': model.width === 'auto',
            'lg:w-full': model.width === 'custom' &amp;&amp; model.colspan == 12,
            [`lg:w-${model.colspan}/12 lg:flex-grow-0`]: model.width === 'custom' &amp;&amp; model.colspan &lt; 12,
            'md:flex-grow': model.tabletwidth === 'auto',
            'md:w-full': model.tabletwidth === 'custom' &amp;&amp; model.tabletcolspan == 12,
            [`md:w-${model.tabletcolspan}/12 md:flex-grow-0`]: model.tabletwidth === 'custom' &amp;&amp; model.tabletcolspan &lt; 12,
            'flex-grow': model.mobilewidth === 'auto',
            'w-full': model.mobilewidth === 'custom' &amp;&amp; model.mobilecolspan == 12,
            [`w-${model.mobilecolspan}/12 flex-grow-0`]: model.mobilewidth === 'custom' &amp;&amp; model.mobilecolspan &lt; 12,
            [`${model.component}`]: model.component
        }">
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

