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
            <th class="action-head w-24" v-if="model.selectable === 'true'"
            v-bind:class="{
            'p-3': model.densetable !== 'true',
            'p-1': model.densetable === 'true',
            'sticky': model.stickyheader === 'true',
            'top-0': model.stickyheader === 'true',
            'text-left':  (col &amp;&amp; col.textalignment === 'left') ||  (col &amp;&amp; col.textalignment === ''),
            'text-center': col &amp;&amp; col.textalignment === 'center',
            'text-right':  col &amp;&amp; col.textalignment === 'right',
        }">
              <div class="action relative cursor-pointer" v-on:click="toggleAllRows">
                <input type="checkbox" data-indeterminate="false" value class="h-100 m-0 opacity-0 p-0 z-10 w-48 absolute">
                <svg class="action-active-svg w-24" focusable="false" viewBox="0 0 24 24"
                aria-hidden="true">
                  <path class="unchecked" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                  v-if="(!active.every(element =&gt; element === true) || active.length === 0)"
                  />
                  <path class="checked" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  v-else="" />
                </svg>
              </div>
            </th>
            <th class="header-item" v-for="(col, i) in model.columns" :key="col.path || i"
            v-bind:class="{
            'p-3': model.densetable !== 'true',
            'p-1': model.densetable === 'true',
            'sticky': model.stickyheader === 'true',
            'top-0': model.stickyheader === 'true',
            'text-left':  (col &amp;&amp; col.textalignment === 'left') ||  (col &amp;&amp; col.textalignment === ''),
            'text-center': col &amp;&amp; col.textalignment === 'center',
            'text-right':  col &amp;&amp; col.textalignment === 'right',
        }">
              <span class="header-item-text">{{col.header}}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, j) in storageData" :key="data.path || j" v-if="rowHasData(data,model.columns)">
            <td class="action-item w-24" v-bind:style="`background:${active[j] ? 'var(--color-red-500) !important' : ''};`"
            v-if="model.selectable === 'true'" v-bind:class="{
            'border': model.cellborders === 'true',
            'p-3': model.densetable !== 'true',
            'p-1': model.densetable === 'true',
            'text-left':  (col &amp;&amp; col.textalignment === 'left') ||  (col &amp;&amp; col.textalignment === ''),
            'text-center':  col &amp;&amp; col.textalignment === 'center',
            'text-right':  col &amp;&amp; col.textalignment === 'right',
            'align-top':  model.rowalignment === 'top' ||  model.rowalignment === '',
            'align-center':  model.rowalignment === 'center',
            'align-bottom':  model.rowalignment === 'bottom'
        }">
              <span class="action relative cursor-pointer" v-on:click="toggleRow(j)">
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
            </td>
            <td class="item" v-for="(col, i) in model.columns" :key="col.path || i"
            v-bind:class="{
            'border': model.cellborders === 'true',
            'p-3': model.densetable !== 'true',
            'p-1': model.densetable === 'true',
            'text-left':  (col &amp;&amp; col.textalignment === 'left') ||  (col &amp;&amp; col.textalignment === ''),
            'text-center':  col &amp;&amp; col.textalignment === 'center',
            'text-right':  col &amp;&amp; col.textalignment === 'right',
            'align-top':  model.rowalignment === 'top' ||  model.rowalignment === '',
            'align-center':  model.rowalignment === 'center',
            'align-bottom':  model.rowalignment === 'bottom'
        }" v-bind:style="`background:${active[j] ? 'var(--color-red-500) !important' : ''};`">
              <span class="item-text" v-bind:style="`color:${active[j] ? 'var(--text-secondary-color) !important' : ''};`">{{data[col.value]}}</span>
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
          <tr class="action-row">
            <td class="action-item-all mobile-header" v-bind:class="{
            'border': model.cellborders === 'true', 
            'p-3': model.densetable !== 'true', 
            'p-1': model.densetable === 'true',
            'align-top':  model.rowalignment === 'top' ||  model.rowalignment === '',
            'align-center':  model.rowalignment === 'center',
            'align-bottom':  model.rowalignment === 'bottom'
        }">
              <span class="action relative cursor-pointer" v-on:click="toggleAllRows">
                <input type="checkbox" data-indeterminate="false" value class="h-100 m-0 opacity-0 p-0 z-10 w-24 absolute">
                <svg class="action-active-svg w-24" focusable="false" viewBox="0 0 24 24"
                aria-hidden="true">
                  <path class="unchecked" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                  v-if="(!active.every(element =&gt; element === true) || active.length === 0)"
                  />
                  <path class="checked" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  v-else="" />
                </svg>
              </span>
            </td>
            <td class="action-item" v-for="(data, i) in storageData" :key="data.path || i"
            v-if="rowHasData(data,model.columns)" v-bind:style="`background:${active[i] ? 'var(--color-red-500) !important' : ''};`"
            v-bind:class="{
            'border': model.cellborders === 'true', 
            'p-3': model.densetable !== 'true', 
            'p-1': model.densetable === 'true',
            'align-top':  model.rowalignment === 'top' ||  model.rowalignment === '',
            'align-center':  model.rowalignment === 'center',
            'align-bottom':  model.rowalignment === 'bottom'
        }">
              <span class="action relative cursor-pointer" v-on:click="toggleRow(i)">
                <input type="checkbox" data-indeterminate="false" value class="h-100 m-0 opacity-0 p-0 z-10 w-24 absolute">
                <svg class="action-active-svg w-24" focusable="false" viewBox="0 0 24 24"
                aria-hidden="true">
                  <path class="unchecked" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                  v-if="!active[i]" />
                  <path class="checked" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  v-if="active[i]" v-bind:style="`fill:${active[i] ? 'var(--text-secondary-color) !important' : ''};`"
                  />
                </svg>
              </span>
            </td>
          </tr>
          <tr class="item-row" v-for="(col, i) in model.columns" :key="col.path || i">
            <td class="mobile-header" v-bind:class="{
            'border': model.cellborders === 'true', 
            'p-3': model.densetable !== 'true', 
            'p-1': model.densetable === 'true',
            'align-top':  model.rowalignment === 'top' ||  model.rowalignment === '',
            'align-center':  model.rowalignment === 'center',
            'align-bottom':  model.rowalignment === 'bottom'
        }">{{col.header}}</td>
            <td class="mobile-item" v-for="(data, j) in storageData"
            :key="data.path || j" v-if="rowHasData(data,model.columns)" v-bind:style="`background:${active[j] ? 'var(--color-red-500) !important' : ''};`"
            v-bind:class="{
            'border': model.cellborders === 'true', 
            'p-3': model.densetable !== 'true', 
            'p-1': model.densetable === 'true',
            'align-top':  model.rowalignment === 'top' ||  model.rowalignment === '',
            'align-center':  model.rowalignment === 'center',
            'align-bottom':  model.rowalignment === 'bottom'
        }">{{data[col.value]}}</td>
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
            const storage = localStorage.getItem('list')
            try {
              data = JSON.parse(storage)
            }
            catch(err) {
              console.error('JSON parsing error loading storage: '+storage)
            }
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
                  this.loadData(result)
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
                this.loadData(response.data)
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
              this.loadFromLocalStorage()
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
          loadFromLocalStorage: function() {
            const data = localStorage.getItem('list')
            try {
              this.loadData(JSON.parse(data))
            }
            catch(err) {
              console.err('JSON parsing error loading storage: '+data)
              this.loadData([])
            }
          },
          loadData: function(data) {
            Vue.set(this, 'storageData', data)
            Vue.set(this, 'active', new Array(data.length).fill(false))
          },
          deleteAction: function() {
            if(this.model.deletefunction && this.model.deletefunction !== '') {
              const objs = this.model.deletefunction.split('.')
              let parent = window
              let obj = objs.shift()
              while(obj && parent[obj]) {
                if(objs.length === 0) {
                  try {
                    const result = parent[obj](this.storageData,this.active,this.model.endpointurl)
                    if(result === false) {
                      console.error('Failed to remove rows')
                    } else {
                      this.loadData(result)
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
              console.error('Data loaded externally, we cannot delete without a configured delete function')
            }
            else {
              // data loaded from local storage, find rows and delete them, then reset local storage
              console.log('deleting rows')
              let newData = this.storageData
              for( let i = this.active.length-1; i >= 0; i--) {
                // iterate from end and delete active rows as we find them
                if( this.active[i] ) {
                  newData.splice(i,1)
                }
              }
              localStorage.setItem('list',JSON.stringify(newData))
              this.loadData(newData)
            }
          },
          rowHasData: function(row, columns) {
            let hasData = false
            let col
            for(col in columns) {
              if( row[columns[col].value] ) {
                hasData = true
              }
            }
            return hasData
          }
        }
    }
</script>
