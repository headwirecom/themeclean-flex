<template>
  <ul>
    <li class="children" v-for="(child, i) in model.childrenPages" :key="i">
      <a v-bind:href="$helper.pathToUrl(child.path)">{{child.title}}</a>
      <div v-for="ref in child.references" v-bind:is="ref.htmlElement"
      v-bind:class="ref.cssClass" v-html="ref.value" v-bind:key="ref.key"></div>
      <themecleanflex-components-pagelistnested v-bind:model="child" v-if="child.hasChildren &amp;&amp; child.childrenPages &amp;&amp; child.childrenPages.length &gt; 0"></themecleanflex-components-pagelistnested>
    </li>
  </ul>
</template>

<script>
    export default {
        props: ['model', 'references']
    }
</script>

