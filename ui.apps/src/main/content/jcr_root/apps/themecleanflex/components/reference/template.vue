<template>
  <div v-bind:data-per-path="model.path">
    <div class="container mx-auto p-5" v-if="isEditAndEmpty">
      {{ isEditAndEmpty }}
    </div>
    <div class="relative" v-else>
      <div
        class="absolute inset-0 z-10"
        v-if="maskReference"
        v-bind:style="overlayStyle"
      ></div>
      <component
        v-bind:is="getLoadedComponent(refModel.component)"
        v-bind:model="refModel"
      ></component>
    </div>
  </div>
</template>

<script>
export default {
  props: ["model"],
  computed: {
    maskReference() {
      return $peregrineApp.isAuthorMode();
    },
    refModel() {
      try {
        return JSON.parse(this.model.referenceJson);
      } catch (error) {
        return { component: "themecleanflex-components-note" };
      }
    },
    reference() {
      return this.model.reference;
    },
    overlayStyle() {
      if (this.reference.endsWith(this.refModel.path)) {
        return "background-color: transparent";
      } else return "background-color: rgba(230, 230, 230, 0.5)";
    },
    isEditAndEmpty() {
      if (!$peregrineApp.isAuthorMode()) return false;
      if (!this.refModel) return "Referenced component was not found";
      return false;
    },
  },
  methods: {
    beforeSave(data) {
      delete data.referenceJson;
      return data;
    },
    getLoadedComponent(name) {
      const cmpName =
        "cmp" +
        name
          .split("-")
          .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
          .join("");
      return window[cmpName];
    },
  },
};
</script>
