<template>
  <themecleanflex-components-block v-bind:model="model">
    <nav class="flex md:flex-row flex-col z-10 w-full" v-bind:class="{
            'justify-start': model.justifyitems === 'start',
            'justify-center': model.justifyitems === 'center',
            'justify-end': model.justifyitems === 'end'
        }">
      <div class="flex flex-col dropdown-container" v-for="(child,i) in model.childrenPages"
      :key="i">
        <a class="p-3 no-underline" v-bind:href="child.childrenPages.length &gt; 0 ? false : child.path"
        v-bind:class="model.colorscheme === 'dark' ? 'text-gray-200 hover:bg-gray-200 hover:text-black' : 'text-black hover:bg-black hover:text-gray-200'">{{child.title}}</a>
        <div class="self-stretch" v-if="child.hasChildren &amp;&amp; child.childrenPages &amp;&amp; child.childrenPages.length &gt; 0">
          <div class="flex flex-col dropdown-list" v-bind:class="model.colorscheme === 'dark' ? 'theme-dark': 'theme-light'">
            <a class="p-3 no-underline" v-bind:href="subchild.path" v-bind:class="model.colorscheme === 'dark' ? 'text-gray-200 hover:bg-gray-200 hover:text-black' : 'text-black hover:bg-black hover:text-gray-200'"
            v-for="(subchild,i) in child.childrenPages" :key="i">{{subchild.title}}</a>
          </div>
        </div>
      </div>
      <div v-if="isEditAndEmpty">no content defined for component</div>
    </nav>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        methods: {
            beforeSave(data) {
                delete data.childrenPages
                return data
            }
        }
    }
</script>

<style>
  .dropdown-list {
    display: none;
    position: fixed;
  }
  .dropdown-container:hover .dropdown-list, .dropdown-container:focus-within .dropdown-list {
    display: flex;
  }
  
</style>

