<template>
	<themecleanflex-components-block v-bind:model="model">
		<div
			v-if="model.mediatype === 'video'"
			class="embed-responsive embed-responsive-16by9"
			v-bind:data-per-path="model.path"
		>
			<iframe
				:src="model.mediasrc"
				frameborder="0"
				allowfullscreen
			></iframe>
		</div>
	</themecleanflex-components-block>
</template>

<script>
	export default {
		props: ["model"],
	};
</script>
