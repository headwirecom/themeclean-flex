<template>
  <themecleanflex-components-block v-bind:model="model">
    <nav class="flex">
      <div class="flex flex-col" v-for="(child,i) in model.childrenPages" :key="i"
      v-on:mouseover="showDropDown(i)" v-on:mouseout="hideDropDown(i)">
        <a v-bind:href="child.path">{{child.title}}</a>
        <ul class="flex flex-col" v-if="child.hasChildren &amp;&amp; child.childrenPages &amp;&amp; child.childrenPages.length &gt; 0"
        v-bind:class="active[i] ? 'visible':'invisible'">
          <a v-bind:href="subchild.path" v-for="(subchild,i) in child.childrenPages"
          :key="i">{{subchild.title}}</a>
        </ul>
        <div></div>
      </div>
      <div v-if="isEditAndEmpty">no content defined for component</div>
    </nav>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        data: function() {
          const numElements = this.model.childrenPages ? this.model.childrenPages.length : 0;
          return {
            active: new Array(numElements).fill(false),
          }
        },
        methods: {
          showDropDown: function(i){
            Vue.set(this.active, i, true)
          },
          hideDropDown: function(i){
            Vue.set(this.active, i, false)
          }
        }

    }
</script>

