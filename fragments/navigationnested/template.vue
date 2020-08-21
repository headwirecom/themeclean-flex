<template>
  <ul class="flex-col dropdown-list hidden z-10 md:border" v-bind:style="`list-style-type: none;padding: 0px;`"
  v-bind:class="{
            'md:absolute': !parentmodel.showmobilemenuontablet,
            'lg:absolute': parentmodel.showmobilemenuontablet,
            'transparent': ( (windowWidth &lt; 768 &amp;&amp; parentmodel.mobiledropdownbg) ||  (windowWidth &lt; 1024 &amp;&amp; parentmodel.mobiledropdownbg &amp;&amp; parentmodel.showmobilemenuontablet))
        }">
    <li class="ml-2 md:ml-0 children relative dropdown-container" v-for="(child, i) in model.childrenPages"
    :key="child.path || i" v-bind:class="{
            'md:ml-0': !parentmodel.showmobilemenuontablet,
            'lg:ml-0': parentmodel.showmobilemenuontablet,
            'active': active[i]
        }">
      <div class="flex justify-between lg:justify-start items-center lg:items-start"
      v-bind:class="`${active[i] ? 'bg-secondary' : ''}`">
        <a class="p-3 no-underline flex-grow cursor-pointer" v-bind:href="$helper.pathToUrl(child.path)"
        v-bind:class="`${active[i] ? 'active' : ''}`" data-per-inline="child.title">{{child.title}}</a>
        <svg width="16" height="16" viewBox="0 0 16 16" focusable="false"
        class="block lg:hidden transition-transform duration-150 ease-in-out m-3 md:ml-0 cursor-pointer min-w-16px"
        v-if="child.hasChildren &amp;&amp; child.childrenPages &amp;&amp; child.childrenPages.length &gt; 0"
        v-bind:class="{
            'transform': true,
            'transform-rotate-270': ( windowWidth &gt; 768 &amp;&amp; !parentmodel.showmobilemenuontablet &amp;&amp; !active[i]),
            'rotate-180': ( (windowWidth &lt;= 768 &amp;&amp; active[i]) || (parentmodel.showmobilemenuontablet &amp;&amp; active[i])),
            'rotate-90': ( windowWidth &gt; 768 &amp;&amp; !parentmodel.showmobilemenuontablet &amp;&amp; active[i]),
            'rotate-0': ( (windowWidth &lt;= 768 &amp;&amp; !active[i]) || (parentmodel.showmobilemenuontablet &amp;&amp; !active[i])),
        }" v-on:click="(e) =&gt; { toggleitem(i, e, active); }">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.293 4.29291L14.7072 5.70712L8.00008 12.4142L1.29297 5.70712L2.70718 4.29291L8.00008 9.5858L13.293 4.29291Z"
          />
        </svg>
      </div>
      <themecleanflex-components-navigationnested v-bind:model="child" v-bind:parentmodel="parentmodel"
      class="z-10" style="top:0; left: 100%;list-style-type: none; padding: 0px"
      v-bind:class="`${active[i] ? 'lg:hidden' : 'hidden'}`"
      v-bind:toggleitem="toggleitem" v-if="child.hasChildren &amp;&amp; child.childrenPages &amp;&amp; child.childrenPages.length &gt; 0"></themecleanflex-components-navigationnested>
    </li>
  </ul>
</template>


<script>
    export default {
        props: ['model', 'toggleitem', 'parentmodel'],
        data: function() {
          const numElements = this.model.childrenPages ? this.model.childrenPages.length : 0;
          return {
            active: new Array(numElements).fill(false),
            windowWidth: 0
          };
        },
        mounted: function() {
          this.windowWidth = window.innerWidth;
        },
    }
    
</script>