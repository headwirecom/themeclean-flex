<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">{{isEditAndEmpty}}</div>
    <nav class="flex flex-col z-10 w-full" v-bind:class="{
            'justify-start': model.justifyitems === 'start',
            'justify-center': model.justifyitems === 'center',
            'justify-end': model.justifyitems === 'end',
            'md:flex-row': !model.showmobilemenuontablet,
            'lg:flex-row': model.showmobilemenuontablet
        }" v-else>
      <div class="font-bold text-xl cursor-pointer block transform-rotate-90 m-3"
      v-bind:class="{
            'self-start': model.justifyitems === 'start',
            'self-end': model.justifyitems === 'end',
            'md:hidden': !model.showmobilemenuontablet,
            'lg:hidden': model.showmobilemenuontablet
        }" style="width:24px;" v-on:click="toggleMenu">|||</div>
      <ul class="flex flex-col" v-bind:class="{ 'flex' : menuActive, 'hidden md:flex' : ( !menuActive &amp;&amp; !model.showmobilemenuontablet ), 'hidden lg:flex' : ( !menuActive &amp;&amp; model.showmobilemenuontablet ), 'md:flex-row md:flex-wrap': !model.showmobilemenuontablet, 'lg:flex-row lg:flex-wrap': model.showmobilemenuontablet}"
      v-bind:style="`list-style-type: none;padding: 0px;`" v-bind:ref="`parent`">
        <li class="children ml-2 relative dropdown-container" v-for="(child, i) in model.childrenPages"
        :key="child.path || i" v-bind:ref="`directChildren`" v-bind:class="`${active[i] ? 'active' : ''}`">
          <div class="flex justify-between lg:justify-start items-center lg:items-start"
          v-bind:class="`${active[i] ? 'bg-secondary' : ''}`">
            <a class="p-3 no-underline flex-grow cursor-pointer" v-bind:href="$helper.pathToUrl(child.path)"
            v-bind:class="`${active[i] ? 'active' : ''}`" data-per-inline="child.title">{{child.title}}</a>
            <svg width="16" height="16" viewBox="0 0 16 16" focusable="false"
            class="block lg:hidden transition-transform duration-150 ease-in-out m-3 md:ml-0 cursor-pointer min-w-16px"
            v-bind:style="`${active[i] ? 'transform:rotate(180deg);' : 'transform:rotate(0deg);'}`"
            v-on:click="(e) =&gt; { toggleItem(i, e, active); }" v-if="child.hasChildren &amp;&amp; child.childrenPages &amp;&amp; child.childrenPages.length &gt; 0">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.293 4.29291L14.7072 5.70712L8.00008 12.4142L1.29297 5.70712L2.70718 4.29291L8.00008 9.5858L13.293 4.29291Z"
              />
            </svg>
          </div>
          <themecleanflex-components-navigationnested v-bind:model="child" v-bind:parentmodel="model"
          style="list-style-type: none;padding: 0px;" v-if="child.hasChildren &amp;&amp; child.childrenPages &amp;&amp; child.childrenPages.length &gt; 0"
          v-bind:class="`${active[i] ? 'lg:hidden' : 'hidden'}`"
          v-bind:toggleitem="toggleItem" v-bind:nestedliststyle="nestedListStyle[i]"></themecleanflex-components-navigationnested>
        </li>
      </ul>
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
            menuActive: false,
            nestedListStyle: new Array(numElements).fill("")
          }
        },
        mounted: function() {
          window.addEventListener('pageRendered', (e) => {
            if (this.menuActive) {
              this.toggleMenu();
            }
          }, false);

          //Links on the right side of screen will have their nested lists pop out to the left, instead of right
          let parentDimensions = this.$refs.parent.getBoundingClientRect();
          let children = this.$refs.directChildren;
          for (let i = 0; i < children.length; i++) {
            let childDimensions = children[i].getBoundingClientRect();
            if (childDimensions.x > ((parentDimensions.width/2) + parentDimensions.x)) 
              this.nestedListStyle[i] = "right"
            else
              this.nestedListStyle[i] = "left"
          }
          this.$forceUpdate();
        },
        methods: {
            beforeSave(data) {
                delete data.childrenPages
                return data
            },
            toggleItem(i, e, active) {
              let tabletMenu, toggle;
              if (this.model.showmobilemenuontablet != undefined) {
                tabletMenu = this.model.showmobilemenuontablet
              } else if (this.parentmodel && this.parentmodel.showmobilemenuontablet != undefined) {
                tabletMenu = this.showmobilemenuontablet
              }
              if (this.model.toggletype != undefined) {
                toggle = this.model.toggletype
              } else if (this.parentmodel && this.parentmodel.toggletype != undefined) {
                toggle = this.parentmodel.toggletype
              }
              if (toggle === 'toggle' && ( window.innerWidth < 768 || (tabletMenu && window.innerWidth < 1024) ) ) {
                Vue.set(active, i, !active[i])
              }
              else {
                active.forEach( (a,j) => {
                  Vue.set(active, j, j === i ? !active[j] : false);
                })
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
@media (min-width: 1024px) {
  .hidden.dropdown-list {
    display: none;
  }
  .relative.dropdown-container:hover > .lg\:hidden.dropdown-list, 
  .relative.dropdown-container:hover > .hidden.dropdown-list,
  .relative.dropdown-container:focus-within > .lg\hidden.dropdown-list,
  .relative.dropdown-container:focus-within > .hidden.dropdown-list {
    display: flex;
  }
}
</style>
