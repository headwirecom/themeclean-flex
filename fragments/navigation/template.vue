<template>
  <themecleanflex-components-block v-bind:model="model">
    <nav>
      <div v-for="(child,i) in model.childrenPages" :key="i">
        <a></a>
        <themecleanflex-components-navnested v-bind:model="child" v-if="child.hasChildren &amp;&amp; child.childrenPages &amp;&amp; child.childrenPages.length &gt; 0"></themecleanflex-components-navnested>
        <div></div>
      </div>
      <div v-if="isEditAndEmpty">no content defined for component</div>
    </nav>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model']
    }
</script>

