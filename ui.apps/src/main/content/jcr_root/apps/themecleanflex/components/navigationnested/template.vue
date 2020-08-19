<template>
  <ul class="flex-col dropdown-list md:absolute hidden z-10" v-bind:style="`list-style-type: none;padding: 0px;`">
    <li class="ml-2 md:ml-0 children relative dropdown-container" v-for="(child, i) in model.childrenPages"
    :key="child.path || i">
      <div class="flex justify-between md:justify-start items-center md:items-start">
        <a class="p-3 no-underline flex-grow cursor-pointer" v-bind:href="$helper.pathToUrl(child.path)"
        data-per-inline="child.title">{{child.title}}</a>
        <svg width="16" height="16" viewBox="0 0 16 16" focusable="false"
        class="block md:hidden transition-transform duration-150 ease-in-out m-3 cursor-pointer"
        v-if="child.hasChildren &amp;&amp; child.childrenPages &amp;&amp; child.childrenPages.length &gt; 0"
        v-bind:style="`transform:rotate(180deg);`" v-on:click="(e) =&gt; { toggleItem(i, e) }">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.293 4.29291L14.7072 5.70712L8.00008 12.4142L1.29297 5.70712L2.70718 4.29291L8.00008 9.5858L13.293 4.29291Z"
          />
        </svg>
      </div>
      <themecleanflex-components-navigationnested v-bind:model="child" class="z-10"
      style="top:0; left: 100%;list-style-type: none; padding: 0px" v-if="child.hasChildren &amp;&amp; child.childrenPages &amp;&amp; child.childrenPages.length &gt; 0"></themecleanflex-components-navigationnested>
    </li>
  </ul>
</template>


<script>
    export default {
        props: ['model'],
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
                parentItem.querySelector('div a').classList.add('active');
                parentItem.querySelector('ul').classList.remove('hidden');
                parentItem.querySelector('ul').classList.add('md:hidden');
              } else {
                item.style.transform = "rotate(180deg)";
                parentItem.classList.remove('bg-secondary')
                parentItem.classList.remove('md:bg-primary')
                parentItem.querySelector('div a').classList.remove('active');
                parentItem.querySelector('ul').classList.add('hidden');
                parentItem.querySelector('ul').classList.remove('md:hidden');
              }
            },
        },
    }
    
</script>

<style>
@media (min-width: 768px) {
  .hidden.dropdown-list {
    display: none;
  }
  .relative.dropdown-container:hover > .hidden.dropdown-list, .relative.dropdown-container:focus-within > .hidden.dropdown-list {
    display: flex;
  }
}
</style>