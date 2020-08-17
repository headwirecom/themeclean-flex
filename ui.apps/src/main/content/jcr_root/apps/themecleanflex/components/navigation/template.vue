<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">{{isEditAndEmpty}}</div>
    <nav class="flex md:flex-row flex-col z-10 w-full"
    v-bind:class="{
            'justify-start': model.justifyitems === 'start',
            'justify-center': model.justifyitems === 'center',
            'justify-end': model.justifyitems === 'end'
        }" v-else>
      <div class="font-bold text-xl cursor-pointer block md:hidden transform-rotate-90 self-end m-3"
      style="width:24px;" v-on:click="toggleMenu">|||</div>
      <ul class="flex flex-col md:flex-row" v-bind:class="{ 'flex' : menuActive, 'hidden md:flex' : !menuActive }"
      v-bind:style="`list-style-type: none;padding: 0px;`">
        <li class="children ml-2 relative dropdown-container" v-for="(child, i) in model.childrenPages"
        :key="child.path || i">
          <div class="flex justify-between md:justify-start items-center md:items-start">
            <a class="p-3 no-underline flex-grow" v-bind:href="$helper.pathToUrl(child.path)"
            data-per-inline="child.title">{{child.title}}</a>
            <svg width="16" height="16" viewBox="0 0 16 16" focusable="false"
            class="block md:hidden transition-transform duration-150 ease-in-out m-3 cursor-pointer"
            v-bind:style="`transform:rotate(180deg);`" v-on:click="(e) =&gt; { toggleItem(i, e) }"
            v-if="child.hasChildren &amp;&amp; child.childrenPages &amp;&amp; child.childrenPages.length &gt; 0">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.293 4.29291L14.7072 5.70712L8.00008 12.4142L1.29297 5.70712L2.70718 4.29291L8.00008 9.5858L13.293 4.29291Z"
              />
            </svg>
          </div>
          <themecleanflex-components-navigationnested v-bind:model="child" style="list-style-type: none;padding: 0px;"
          v-if="child.hasChildren &amp;&amp; child.childrenPages &amp;&amp; child.childrenPages.length &gt; 0"></themecleanflex-components-navigationnested>
        </li>
      </ul>
    </nav>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        data: function() {
          return {
            menuActive: false,
          }
        },
        mounted: function() {
          window.addEventListener('pageRendered', (e) => {
            if (this.menuActive) {
              this.toggleMenu();
            }
          }, false);
        },
        methods: {
            toggleItem(i, e) {
              let parentItem, item;
              if (e.target.nodeName.toLowerCase() === 'svg') {
                parentItem = e.path[2];
                item = e.path[0];
              }
              if (e.target.nodeName.toLowerCase() === 'path') {
                parentItem = e.path[3];
                item = e.path[1];
              }
              if(parentItem.querySelector('ul').classList.contains('hidden')) {
                item.style.transform = "rotate(0deg)";
                parentItem.classList.add('bg-secondary')
                parentItem.classList.add('md:bg-primary')
                parentItem.querySelector('ul').classList.remove('hidden');
                parentItem.querySelector('ul').classList.remove('md:flex');
              } else {
                item.style.transform = "rotate(180deg)";
                parentItem.classList.remove('bg-secondary')
                parentItem.classList.remove('md:bg-primary')
                parentItem.querySelector('ul').classList.add('hidden');
                parentItem.querySelector('ul').classList.add('md:flex');
              }
            },
            toggleMenu: function(){
              this.menuActive = !this.menuActive
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
  .relative.dropdown-container:hover > .flex.dropdown-list, .relative.dropdown-container:focus-within > .flex.dropdown-list {
    display: flex;
  }
}
</style>
