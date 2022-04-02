<template>
	<div
		class="grid-size text-white flex justify-center items-center cursor-pointer"
		:class="gridData.isCover ? 'bg-gray-400' : 'bg-blue-400'"
		@click="clickGrid(gridData)"
	>
		<div>{{ gridData.isCover ? '' : gridInsideContent }}</div>
	</div>
</template>

<script>
export default {
	props: {
		gridData: {
			type: Object,
			required: true,
		},
	},
	emits: ['toEnd'],
	computed: {
		gridInsideContent() {
			let { isBomb, roundHasBomb } = this.gridData;
			return isBomb ? '💣' : roundHasBomb;
		},
	},
	methods: {
		clickGrid(gridData) {
			gridData.isCover = false;
			if (gridData.isBomb) {
				this.$emit('toEnd', true);
			}
		},
	},
};
</script>

<style>
.grid-size {
	@apply w-14 h-14  border-solid border-2  select-none;
}
</style>
