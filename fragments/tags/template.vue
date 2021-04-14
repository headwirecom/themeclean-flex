<template>
	<themecleanflex-components-block v-bind:model="model">
		<div class="p-5" v-if="isEditAndEmpty">
			There are no tags set for this page
		</div>
		<div class="w-full flex flex-wrap items-center -mx-2" v-else>
			<span
				class="font-bold ml-2 mr-4 mb-1"
				data-per-inline="model.tagslabel"
				v-if="model.tagslabel"
				>{{ model.tagslabel }}</span
			>
			<component
				class="text-white hover:text-white px-4 py-1 mx-2 rounded-full shadow-md no-underline mb-1"
				v-for="(item, i) in tags"
				:key="item.path || i"
				v-bind:class="{
					'bg-blue-600': model.tagcolor === 'blue',
					'bg-green-600': model.tagcolor === 'green',
					'bg-orange-600': model.tagcolor === 'orange',
					'bg-red-600': model.tagcolor === 'red',
					'bg-yellow-600': model.tagcolor === 'yellow',
				}"
				v-bind:href="
					model.pagelink
						? model.pagelink + '.html' + item.value
						: false
				"
				v-bind:is="model.pagelink ? 'a' : 'div'"
				>{{ item.value ? item.value : item.name }}</component
			>
		</div>
	</themecleanflex-components-block>
</template>

<script>
	export default {
		props: ["model"],
		computed: {
			tags() {
				return $peregrineApp.getView().page.tags;
			},
			isEditAndEmpty() {
				if (!$peregrineApp.isAuthorMode()) return false;
				return this.tags.length === 0;
			},
		},
	};
</script>
