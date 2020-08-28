<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>
    <div class="w-full" v-else>
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
        }">{{col.header}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(data, i) in storageData" :key="data.path || i">
              <td v-for="(col, i) in model.columns" :key="col.path || i" v-bind:class="{
            'border': model.cellborders === 'true',
            'p-3': model.densetable !== 'true',
            'p-1': model.densetable === 'true'
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
      <div class="flex table-pagination" v-bind:class="{
            'hidden': model.pagination !== 'true',
            'justify-start': model.paginationalignment === 'left',
            'justify-center': model.paginationalignment === 'center',
            'justify-end': model.paginationalignment === 'right',
        }">
        <p class="table-pagination-text">Rows per page:</p>
        <div class="table-pagination-per-page-selector flex">
          <select class="bg-transparent" aria-label="rows per page">
            <option v-for="(option, i) in model.paginationoptions" :key="option.path || i"
            v-bind:value="`${option}`">{{option}}</option>
            <option value="-1">All</option>
          </select>
        </div>
        <p class="table-pagination-text">1-5 of 13</p>
        <div class="table-pagination-button-container flex">
          <button tabindex="-1" type="button" disabled aria-label="first page">
            <svg class="w-24" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" />
            </svg>
          </button>
          <button tabindex="-1" type="button" disabled aria-label="previous page">
            <svg class="w-24" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
            </svg>
          </button>
          <button tabindex="0" type="button" aria-label="next page">
            <svg class="w-24" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </button>
          <button tabindex="0" type="button" aria-label="last page">
            <svg class="w-24" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        data() {
          let data = []
          if(!this.model.endpointurl || this.model.endpointurl === '') {
            data = JSON.parse(localStorage.getItem('list'))
          }
          return {
            storageData: data,
            itemsPerPage:  ( this.model.pagination && this.model.paginationoptions.length ) ? this.model.paginationoptions[0] : null,
            totalItems:  ( this.model.pagination && this.model.paginationoptions.length ) ? this.model.paginationoptions.length : null,
            currentPage: 1,
            isMobile: false
          }
        },
        computed: {
        	isEditAndEmpty() {
            if(!$peregrineApp.isAuthorMode()) return false
            return this.$helper.areAllEmpty( this.model.columns.length < 0 );
          }
        },
        mounted() {
          if(this.model.endpointurl && this.model.endpointurl !== '') {
            // load data from URL
            axios.get(this.model.endpointurl)
            .then( (response) => {
                console.log(response)
                Vue.set(this, 'storageData', response.data)
            })
            .catch( (error) => {
                console.log(error)
            })
          } else {
            // use local storage if nothing else is configured
            // interesting aspect :-) if another tab on the same computer
            // has the same page open it actually updates
            window.addEventListener('storage', () => {
              this.storageData = JSON.parse(localStorage.getItem('list'))
            });
          }
          Vue.set(this, 'isMobile', ( window.innerWidth < 768 ) ? true : false)
        }
    }
</script>
