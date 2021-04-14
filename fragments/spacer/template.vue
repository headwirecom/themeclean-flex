<template>
	<themecleanflex-components-block v-bind:model="model">
		<div class="p-5" v-if="isEditAndEmpty">
			no content defined for component
		</div>
		<div v-else>
			<div v-bind:style="`height:${model.height}vh;`"></div>
		</div>
	</themecleanflex-components-block>
</template>

<script>
	export default {
		props: ["model"],
		computed: {
			isEditAndEmpty() {
				if (!$peregrineApp.isAuthorMode()) return false;
				return this.$helper.areAllEmpty(this.model.height > 0);
			},
		},
	};
</script>
