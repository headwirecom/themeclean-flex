<template>
  <themecleanflex-components-block v-bind:model="model">
    <nav class="flex">
      <div class="flex flex-col" v-for="(child,i) in model.childrenPages" :key="i">
        <a v-bind:href="child.path">{{child.title}}</a>
        <ul class="flex flex-col" v-for="(subchild,i) in child.childrenPages"
        :key="i" v-if="child.hasChildren &amp;&amp; child.childrenPages &amp;&amp; child.childrenPages.length &gt; 0">
          <a v-bind:href="subchild.path">{{subchild.title}}</a>
        </ul>
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

