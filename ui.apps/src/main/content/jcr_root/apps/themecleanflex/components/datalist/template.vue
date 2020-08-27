<template>
  <themecleanflex-components-block v-bind:model="model">
    <div>
      <table class="w-full border">
        <thead>
          <tr>
            <th class="flex" v-for="(col, i) in model.columns" :key="col.path || i">
              <span>{{col.header}}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" focusable="false"
              class="transition-transform duration-150 ease-in-out" v-bind:class="{
            'rotate-0': active,
            'rotate-180': !active,
            'hidden': !model.sortable
        }" v-on:click="toggleSort(i)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.293 4.29291L14.7072 5.70712L8.00008 12.4142L1.29297 5.70712L2.70718 4.29291L8.00008 9.5858L13.293 4.29291Z"
                />
              </svg>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, i) in storageData" :key="data.path || i">
            <td v-for="(col, i) in model.columns" :key="col.path || i">{{data[col.value]}}</td>
          </tr>
        </tbody>
        <caption></caption>
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
          toggleSort: function() {
            this.active.forEach( (active,j) => {
              Vue.set(this.active, j, j === i ? !this.active[j] : false);
            })
          },
        }
    }
</script>
