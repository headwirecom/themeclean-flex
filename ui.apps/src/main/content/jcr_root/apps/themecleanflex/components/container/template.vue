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
        <pagerendervue-components-placeholder
            v-if="(model.fromTemplate &amp;&amp; model.children.length &gt; 0 &amp;&amp; model.children[0].fromTemplate) ? false: model.children.length &gt; 0"
            v-bind:model="{ path: model.path, component: model.component, location: 'before' }"></pagerendervue-components-placeholder>
        <pagerendervue-components-placeholder
            v-if="model.children.length === 0"
            v-bind:model="{ path: model.path, component: model.component + ': drop component here', location: 'into' }"
            class="per-drop-target-empty"></pagerendervue-components-placeholder>
        <template v-for="(child, i) in model.children">
            <component v-bind:key="child.path || i" v-bind:is="child.component" v-bind:model="child"></component>
        </template>
        <pagerendervue-components-placeholder
            v-if="(model.fromTemplate &amp;&amp; model.children.length &gt; 0 &amp;&amp; model.children[0].fromTemplate) ? false: model.children.length &gt; 0"
            v-bind:model="{ path: model.path, component: model.component, location: 'after' }"></pagerendervue-components-placeholder>
    </component>
</template>

<script>
export default {
    props: ['model'],
};
</script>

