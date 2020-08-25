<template>
  <themecleanflex-components-block v-bind:model="model">
    <div>
      <table>
        <thead>
          <tr>
            <th data-per-inline="storageData">{{storageData}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Column item</td>
            <td>Column item</td>
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
          return {
            storageData: JSON.parse(localStorage.getItem('list'))
          }
        },
        mounted() {
          // interesting aspect :-) if another tab on the same computer
          // has the same page open it actually updates
           window.addEventListener('storage', () => {
            this.storageData = JSON.parse(localStorage.getItem('list'))
           });
        }
    }
</script>
