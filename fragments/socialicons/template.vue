<template>
	<div class="flex justify-center -m-1">
		<a
			class="m-1"
			v-for="(item, i) in model.icons"
			:key="item.path || i"
			v-bind:href="$helper.pathToUrl(item.url)"
			v-bind:title="item.iconalttext"
			v-bind:style="`color:${
				model.iconcustomcolor === 'true' ? model.iconcolor : false
			};`"
		>
			<svg
				class="fill-current"
				viewBox="0 0 24 24"
				v-bind:style="`width:${model.iconsize}px;`"
			>
				<use
					v-bind="{ 'xlink:href': `#${item.icon}` }"
					v-bind:href="`#${item.icon}`"
				/>
			</svg>
		</a>
	</div>
</template>

<script>
	export default {
		props: ["model"],
	};
</script>
