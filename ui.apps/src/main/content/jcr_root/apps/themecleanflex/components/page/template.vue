<template>
	<div v-bind:data-per-path="model.path">
		<pagerendervue-components-placeholder
			v-if="renderPlaceholder"
			v-bind:model="{
				path: model.path,
				component: model.component,
				location: 'before',
			}"
		></pagerendervue-components-placeholder>
		<pagerendervue-components-placeholder
			class="per-drop-target-empty"
			v-if="renderPlaceholderEmpty"
			v-bind:model="{
				path: model.path,
				component: 'page: drop components here',
				location: 'into',
			}"
		></pagerendervue-components-placeholder>
		<template v-for="child in model.children">
			<component
				v-bind:is="child.component"
				v-bind:model="child"
				v-bind:key="child.path"
			></component>
		</template>
		<pagerendervue-components-placeholder
			v-if="renderPlaceholder"
			v-bind:model="{
				path: model.path,
				component: model.component,
				location: 'after',
			}"
		></pagerendervue-components-placeholder>
	</div>
</template>

<script>
	import VLazyImage from "v-lazy-image";
	export default {
		props: ["model"],
		computed: {
			renderPlaceholderEmpty() {
				return this.model.children.length === 0;
			},
			renderPlaceholder() {
				if (
					this.model.fromTemplate &&
					this.model.children.length > 0 &&
					this.model.children[0].fromTemplate
				) {
					return false;
				}
				return !this.renderPlaceholderEmpty;
			},
		},
	};
</script>
