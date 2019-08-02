<template>
  <themecleanflex-components-block v-bind:model="model">
    <nav>
      <div v-for="(child,i) in model.childrenPages" :key="i">
        <a></a>
        <ul v-if="child.children.length &gt; 0">
          <a href></a>
        </ul>
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

