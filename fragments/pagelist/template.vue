<template>
	<themecleanflex-components-block v-bind:model="model">
		<div class="p-5" v-if="isEditAndEmpty">{{ isEditAndEmpty }}</div>
		<div class="w-full" v-else>
			<ul class="root" v-if="model.includeroot === 'true'">
				<li class="root">
					<a v-bind:href="$helper.pathToUrl(model.rootPageLink)">{{
						model.rootPageTitle
					}}</a>
					<div
						v-for="ref in child.references"
						v-bind:is="ref.htmlElement"
						v-bind:class="ref.cssClass"
						v-html="ref.value"
						v-bind:key="ref.key"
					></div>
					<ul class="ml-2">
						<li
							class="children ml-2"
							v-for="(child, i) in model.childrenPages"
							:key="child.path || i"
						>
							<a v-bind:href="$helper.pathToUrl(child.path)">{{
								child.title
							}}</a>
							<div
								v-for="ref in child.references"
								v-bind:is="ref.htmlElement"
								v-bind:class="ref.cssClass"
								v-html="ref.value"
								v-bind:key="ref.key"
							></div>
							<themecleanflex-components-pagelistnested
								v-bind:model="child"
								v-if="child.hasChildren &amp;&amp; child.childrenPages &amp;&amp; child.childrenPages.length &gt; 0"
							></themecleanflex-components-pagelistnested>
						</li>
					</ul>
				</li>
			</ul>
			<ul class="noroot" v-else>
				<li
					class="childrennoroot ml-2"
					v-for="(child, i) in model.childrenPages"
					:key="child.path || i"
				>
					<a v-bind:href="$helper.pathToUrl(child.path)">{{
						child.title
					}}</a>
					<div
						v-for="ref in child.references"
						v-bind:is="ref.htmlElement"
						v-bind:class="ref.cssClass"
						v-html="ref.value"
						v-bind:key="ref.key"
					></div>
					<themecleanflex-components-pagelistnested
						v-bind:model="child"
						v-if="child.hasChildren &amp;&amp; child.childrenPages &amp;&amp; child.childrenPages.length &gt; 0"
					></themecleanflex-components-pagelistnested>
				</li>
			</ul>
		</div>
	</themecleanflex-components-block>
</template>

<script>
	export default {
		props: ["model"],
		methods: {
			beforeSave(data) {
				delete data.childrenPages;
				return data;
			},
		},
		computed: {
			isEditAndEmpty() {
				if (!$peregrineApp.isAuthorMode()) return false;
				if (this.$helper.areAllEmpty(this.model.rootpage))
					return "Please choose a root page";
				if (
					this.model.childrenPages &&
					this.model.childrenPages.length == 0
				)
					return "Chosen root page has no children (May need reload after root change)";
				return false;
			},
		},
	};
</script>
