<template>
  <themecleanflex-components-block v-bind:model="model">
    <ul class="list-reset">
      <li class="list-reset">
        <a href>Sub Page 1</a>
        <ul>
          <li class>
            <a href>Page 1</a>
            <ul class>
              <li>
                <a href>Sub Page 1</a>
              </li>
              <li>
                <a href>Sub Page 1</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </themecleanflex-components-block>
</template>

<script>
    export default {
        props: ['model'],
        methods: {
            beforeSave(data) {
                delete data.childrenPages
                return data
            }
        },
        computed: {
        	isEditAndEmpty() {
            if(!$peregrineApp.isAuthorMode()) return false
            return this.$helper.areAllEmpty(this.model.rootpage && this.model.levels);
          }
        }
    }
</script>

