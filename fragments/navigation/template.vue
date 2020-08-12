<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">{{isEditAndEmpty}}</div>
    <nav class="flex md:flex-row flex-col z-10 w-full"
    v-bind:class="{
            'justify-start': model.justifyitems === 'start',
            'justify-center': model.justifyitems === 'center',
            'justify-end': model.justifyitems === 'end'
        }" v-else>
      <div class="flex flex-col dropdown-container" v-for="(child, i) in model.childrenPages"
      :key="child.path || i" v-bind:class="{ 'bg-secondary': active[i] }">
        <div class="flex justify-between md:justify-start items-center md:items-start">
          <a class="p-3 no-underline" v-bind:aria-expanded="`active[i] ? 'true' : 'false'`"
          v-bind:data-per-inline="`model.childrenPages.${i}.title`" v-bind:href="child.childrenPages.length &gt; 0 ? false : child.path +'.html'"
          v-bind:class="model.colorscheme === 'dark' ? 'text-gray-200 hover:bg-gray-200 hover:text-black' : 'text-black hover:bg-black hover:text-gray-200'">{{child.title}}</a>
          <svg width="16" height="16" viewBox="0 0 16 16" focusable="false"
          class="block md:hidden transition-transform duration-150 ease-in-out m-3"
          v-if="child.hasChildren &amp;&amp; child.childrenPages &amp;&amp; child.childrenPages.length &gt; 0"
          v-on:click="toggleItem(i)" v-bind:style="`transform:${active[i] ? 'rotate(180deg)': 'rotate(0)'};`">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.293 4.29291L14.7072 5.70712L8.00008 12.4142L1.29297 5.70712L2.70718 4.29291L8.00008 9.5858L13.293 4.29291Z"
            />
          </svg>
        </div>
        <div class="self-stretch relative transition-height duration-200 ease-in-out overflow-hidden md:overflow-unset"
        v-bind:style="`height:${active[i] ? heights[i] + 'px' : '0px'};`">
          <div class="flex flex-col dropdown-list relative md:absolute" v-bind:ref="`tabContent${i}`">
            <a class="p-3 no-underline" v-bind:data-per-inline="`model.childrenPages.${i}.title`"
            v-bind:href="subchild.path + '.html'" v-bind:class="model.colorscheme === 'dark' ? 'text-gray-200 hover:bg-gray-200 hover:text-black' : 'text-black hover:bg-black hover:text-gray-200'"
            v-for="(subchild, i) in child.childrenPages" :key="subchild.path || i"
            data-per-inline="subchild.title">{{subchild.title}}</a>
          </div>
        </div>
      </div>
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
            heights: new Array(numElements).fill(0),
          }
        },
        created() {
          addEventListener("resize", this.setHeights);
        },
        destroyed() {
          removeEventListener("resize", this.setHeights);
        },
        mounted: function() {
          this.setHeights();
        },
        methods: {
            beforeSave(data) {
                delete data.childrenPages
                return data
            },
            setHeights: function() {
              this.heights.forEach( (item,i) => {
                Vue.set(this.heights, i, this.$refs[`tabContent${i}`][0].clientHeight )}
              );
            },
            toggleItem(i) {
              // if (this.model.toggletype === 'accordion') {
              //   this.active.forEach( (active,j) => {
              //     Vue.set(this.active, j, j === i ? !this.active[j] : false);
              //   })
              // } else {
                Vue.set(this.active, i, !this.active[i])
              // }
            }
        },
        
        computed: {
        	isEditAndEmpty() {
            if(!$peregrineApp.isAuthorMode()) return false;
            if (this.$helper.areAllEmpty(this.model.rootpage)) return 'Please choose a root page';
            if (this.model.childrenPages && this.model.childrenPages.length == 0) return 'Chosen root page has no children (May need reload after root change)';
            return false;
          }
        }
    }
</script>

<style>
@media (min-width: 768px) {
  .flex.dropdown-list {
    display: none;
  }
  .flex.dropdown-container:hover .flex.dropdown-list, .flex.dropdown-container:focus-within .flex.dropdown-list {
    display: flex;
  }
}
</style>

