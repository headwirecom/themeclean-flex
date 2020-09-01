<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>
    <div class="w-full" v-else>
      <div class="selected w-full flex justify-between p-3" v-bind:class="{
            'hidden': active.filter(element =&gt; element === true).length === 0,
        }">
        <div class="selected-text">{{`${active.filter(element =&gt; element === true).length} selected`}}</div>
        <div
        class="selected-actions">
          <svg class="w-24 cursor-pointer action-btn" focusable="false" viewBox="0 0 24 24"
          aria-hidden="true" v-on:click="deleteAction">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            />
          </svg>
      </div>
    </div>
    <div class="w-full overflow-x-hidden" v-bind:class="{
            'overflow-y-scroll': model.scrollabletable === 'true',
            'hidden': isMobile,
        }" v-bind:style="`height:${(model.scrollabletable === 'true') ? model.tableheight + 'px' : 'auto'};`">
      <table class="w-full border" v-bind:class="{
            'striped': model.stripedrows === 'true'
        }">
        <thead>
          <tr>
            <th class="text-left" v-for="(col, i) in model.columns" :key="col.path || i"
            v-bind:class="{
            'p-3': model.densetable !== 'true',
            'p-1': model.densetable === 'true',
            'sticky': model.stickyheader === 'true',
            'top-0': model.stickyheader === 'true'
        }">
              <div class="flex" v-if="model.selectable === 'true' &amp;&amp; i === 0">
                <span class="action relative cursor-pointer mr-2" v-on:click="toggleAllRows">
                  <input type="checkbox" data-indeterminate="false" value class="h-100 m-0 opacity-0 p-0 z-10 w-48 absolute">
                  <svg class="action-active-svg w-24" focusable="false" viewBox="0 0 24 24"
                  aria-hidden="true">
                    <path class="unchecked" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                    v-if="!active.every(element =&gt; element === true)" />
                    <path class="checked" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                    v-if="active.every(element =&gt; element === true)" />
                  </svg>
                </span>
                <span class="header-text">{{col.header}}</span>
              </div>
              <span class="header-text" v-if="model.selectable !== 'true' || i !== 0">{{col.header}}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, j) in storageData" :key="data.path || j">
            <td v-for="(col, i) in model.columns" :key="col.path || i" v-bind:class="{
            'border': model.cellborders === 'true',
            'p-3': model.densetable !== 'true',
            'p-1': model.densetable === 'true'
        }" v-bind:style="`background:${active[j] ? 'var(--color-red-500) !important' : ''};`">
              <div class="flex" v-if="model.selectable === 'true' &amp;&amp; i === 0">
                <span class="action relative cursor-pointer mr-2" v-on:click="toggleRow(j)">
                  <input type="checkbox" data-indeterminate="false" value class="h-100 m-0 opacity-0 p-0 z-10 w-48 absolute">
                  <svg class="action-active-svg w-24" focusable="false" viewBox="0 0 24 24"
                  aria-hidden="true">
                    <path class="unchecked" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                    v-if="!active[j]" />
                    <path class="checked" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                    v-if="active[j]" v-bind:style="`fill:${active[j] ? 'var(--text-secondary-color) !important' : ''};`"
                    />
                  </svg>
                </span>
                <span class="item-text" v-bind:style="`color:${active[j] ? 'var(--text-secondary-color) !important' : ''};`">{{data[col.value]}}</span>
              </div>
              <span class="item-text" v-bind:style="`color:${active[j] ? 'var(--text-secondary-color) !important' : ''};`"
              v-if="model.selectable !== 'true' || i !== 0">{{data[col.value]}}</span>
            </td>
          </tr>
        </tbody>
        <caption v-bind:class="{
            'text-left': model.captionalignment === 'left',
            'text-center': model.captionalignment === 'center',
            'text-right': model.captionalignment === 'right',
            'p-3': model.densetable !== 'true',
            'p-1': model.densetable === 'true',
            'hidden': model.caption !== 'true'
        }" v-bind:style="`caption-side:${model.captionplacement};`" data-per-inline="model.captiontext">{{model.captiontext}}</caption>
      </table>
    </div>
    <div class="w-full overflow-y-hidden mobile-table overflow-x-scroll" v-bind:class="{
            'hidden': !isMobile,
        }">
      <table class="w-full border" v-bind:class="{
            'striped': model.stripedrows === 'true'
        }">
        <tbody>
          <tr v-for="(col, i) in model.columns" :key="col.path || i">
            <td class="mobile-header" v-bind:class="{ 'border': model.cellborders === 'true', 'p-3': model.densetable !== 'true', 'p-1': model.densetable === 'true'}">{{col.header}}</td>
            <td v-for="(data, i) in storageData" :key="data.path || i"
            v-bind:class="{ 'border': model.cellborders === 'true', 'p-3': model.densetable !== 'true', 'p-1': model.densetable === 'true'}">{{data[col.value]}}</td>
          </tr>
        </tbody>
        <caption v-bind:class="{
            'text-left': model.captionalignment === 'left',
            'text-center': model.captionalignment === 'center',
            'text-right': model.captionalignment === 'right',
            'p-3': model.densetable !== 'true',
            'p-1': model.densetable === 'true',
            'hidden': model.caption !== 'true'
        }" v-bind:style="`caption-side:${model.captionplacement};`" data-per-inline="model.captiontext">{{model.captiontext}}</caption>
      </table>
    </div>
    </div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        data() {
          let data = []
          let numElements = 0;

          if(!this.model.endpointurl || this.model.endpointurl === '') {
            data = JSON.parse(localStorage.getItem('list'))
            numElements = data ? data.length : 0;
          }

          return {
            storageData: data,
            active: new Array(numElements).fill(false),
            isMobile: false
          }
        },
        computed: {
        	isEditAndEmpty() {
            if(!$peregrineApp.isAuthorMode()) return false
            return this.$helper.areAllEmpty( this.model.columns && this.model.columns.length > 0 );
          }
        },
        mounted() {
          if(this.model.loadfunction && this.model.loadfunction !== '') {
            const objs = this.model.loadfunction.split('.')
            let parent = window
            let obj = objs.shift()
            while(obj && parent[obj]) {
              if(objs.length === 0) {
                try {
                  const result = parent[obj](this.model.endpointurl)
                  if(result === false) {
                    console.error('Failed to load data from '+this.model.endpointurl)
                  }
                  Vue.set(this, 'storageData', result)
                } catch(err) {
                  console.error(err)
                }
                return
              }
              parent = parent[obj]
              obj = objs.shift()
            }
            console.log('window.' + this.model.loadfunction + ' not found')
            return
          }
          else if(this.model.endpointurl && this.model.endpointurl !== '') {
            // load data from URL
            axios.get(this.model.endpointurl)
            .then( (response) => {
                console.log(response)
                Vue.set(this, 'storageData', response.data)
                Vue.set(this, 'active', new Array(response.data.length).fill(false))
            })
            .catch( (error) => {
                console.log(error)
            })
          }
          else {
            // use local storage if nothing else is configured
            // interesting aspect :-) if another tab on the same computer
            // has the same page open it actually updates
            window.addEventListener('storage', () => {
              this.storageData = JSON.parse(localStorage.getItem('list'))
            });
          }
          Vue.set(this, 'isMobile', ( window.innerWidth < 768 ) ? true : false)
        },
        methods: {
          toggleRow: function(i) {
            Vue.set(this.active, i, !this.active[i])
          },
          toggleAllRows: function() {
            if (this.active.every(element => element === true)) {
              this.active.forEach((element, i) => {
                Vue.set(this.active, i, false)
              });
            } else {
              this.active.forEach((element, i) => {
                Vue.set(this.active, i, true)
              });
            }
          },
          deleteAction: function() {
            if(this.model.deletefunction && this.model.deletefunction !== '') {
              const objs = this.model.deletefunction.split('.')
              let parent = window
              let obj = objs.shift()
              while(obj && parent[obj]) {
                if(objs.length === 0) {
                  try {
                    const result = parent[obj](this)
                    if(result === false) {
                      console.error('Failed to remove rows')
                    } else {
                      Vue.set(this, 'storageData', result)
                    }
                  } catch(err) {
                    console.error(err)
                  }
                  return
                }
                parent = parent[obj]
                obj = objs.shift()
              }
              console.log('window.' + this.model.deletefunction + ' not found')
              return
            }
            else if(this.model.loadfunction && this.model.loadfunction !== '') {
              console.error('Data loaded externally, we cannot delete')
            }
            else {
              // data loaded from local storage, find rows and delete them
              // TODO: Finish local data deleting
            }
          }
        }
    }
</script>
