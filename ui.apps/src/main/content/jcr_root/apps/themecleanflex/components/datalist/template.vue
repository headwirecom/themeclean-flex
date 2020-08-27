<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="w-full overflow-x-hidden" v-bind:class="{'overflow-y-scroll': model.scrollabletable === 'true'}"
    v-bind:style="`height:${(model.scrollabletable === 'true') ? model.tableheight + 'px' : 'auto'};`">
      <table class="w-full border" v-bind:class="{
            'striped': model.stripedrows === 'true'
        }">
        <thead>
          <tr>
            <th class="flex items-center" v-bind:class="{
            'p-3': model.densetable === 'false' || !model.densetable,
            'p-1': model.densetable === 'true',
            'sticky': model.stickyheader === 'true',
            'top-0': model.stickyheader === 'true'
        }">
              <span>{{storageData}}</span>
              <svg width="16" height="16" viewBox="0 0 16 16"
              focusable="false" class="transition-transform duration-150 ease-in-out ml-2"
              v-bind:class="{
            'rotate-0': active,
            'rotate-180': !active,
            'hidden': model.makesortable === 'false' || !model.makesortable
        }" v-on:click="toggleSort(i)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.293 4.29291L14.7072 5.70712L8.00008 12.4142L1.29297 5.70712L2.70718 4.29291L8.00008 9.5858L13.293 4.29291Z"
                />
              </svg>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-bind:class="{
            'border': model.cellborders === 'true',
            'p-3': model.densetable === 'false' || !model.densetable,
            'p-1': model.densetable === 'true'
        }">Column1 item1</td>
            <td v-bind:class="{
            'border': model.cellborders === 'true',
            'p-3': model.densetable === 'false' || !model.densetable,
            'p-1': model.densetable === 'true'
        }">Column2 item1</td>
          </tr>
          <tr>
            <td v-bind:class="{
            'border': model.cellborders === 'true',
            'p-3': model.densetable === 'false' || !model.densetable,
            'p-1': model.densetable === 'true'
        }">Column1 item2</td>
            <td v-bind:class="{
            'border': model.cellborders === 'true',
            'p-3': model.densetable === 'false' || !model.densetable,
            'p-1': model.densetable === 'true'
        }">Column2 item2</td>
          </tr>
        </tbody>
        <caption v-bind:class="{
            'text-left': model.captionalignment === 'left',
            'text-center': model.captionalignment === 'center',
            'text-right': model.captionalignment === 'right',
            'p-3': model.densetable === 'false' || !model.densetable,
            'p-1': model.densetable === 'true'
        }" v-bind:style="`caption-side:${model.captionplacement};`" data-per-inline="model.captiontext">{{model.captiontext}}</caption>
      </table>
    </div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        data() {
          const numElements = this.model.columns ? this.model.columns.length : 0;
          return {
            active: new Array(numElements).fill(false),
            storageData: JSON.parse(localStorage.getItem('list'))
          }
        },
        mounted() {
          // interesting aspect :-) if another tab on the same computer
          // has the same page open it actually updates
           window.addEventListener('storage', () => {
            this.storageData = JSON.parse(localStorage.getItem('list'))
           });
        },
        methods: {
          toggleSort: function(i) {
            this.active.forEach( (active,j) => {
              Vue.set(this.active, j, j === i ? !this.active[j] : false);
            })
          },
        }
    }
</script>
