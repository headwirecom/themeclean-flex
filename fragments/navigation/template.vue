<template>
  <themecleanflex-components-block v-bind:model="model">
    <nav class="flex">
      <div class="flex flex-col dropdown-container" v-for="(child,i) in model.childrenPages"
      :key="i">
        <a class v-bind:href="child.path">{{child.title}}</a>
        <div class v-if="child.hasChildren &amp;&amp; child.childrenPages &amp;&amp; child.childrenPages.length &gt; 0">
          <div class="flex flex-col dropdown-list">
            <a v-bind:href="subchild.path" v-for="(subchild,i) in child.childrenPages"
            :key="i">{{subchild.title}}</a>
          </div>
        </div>
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

<style>
  .dropdown-list {
    display: none;
    position: absolute;
  }
  .dropdown-container:hover .dropdown-list {
    display: flex;
  }
  
</style>

