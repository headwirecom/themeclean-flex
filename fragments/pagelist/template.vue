<template>
  <themecleanflex-components-block v-bind:model="model">
    <div class="w-full">
      <ul class="root" v-if="model.includeroot === 'true'">
        <li class="root">
          <a v-bind:href="$helper.pathToUrl(model.rootPageLink)">{{model.rootPageTitle}}</a>
          <ul class="ml-2">
            <li class="children ml-2" v-for="(child,i) in model.childrenPages" :key="i">
              <a v-bind:href="$helper.pathToUrl(child.path)">{{child.title}}</a>
              <themecleanflex-components-pagelistnested v-bind:model="child"
              v-if="child.hasChildren"></themecleanflex-components-pagelistnested>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="noroot" v-else>
        <li class="childrennoroot ml-2" v-for="(child,i) in model.childrenPages"
        :key="i">
          <a v-bind:href="$helper.pathToUrl(child.path)">{{child.title}}</a>
          <themecleanflex-components-pagelistnested v-bind:model="child"
          v-if="child.hasChildren"></themecleanflex-components-pagelistnested>
        </li>
      </ul>
      <div v-if="isEditAndEmpty">no content defined for component</div>
    </div>
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

