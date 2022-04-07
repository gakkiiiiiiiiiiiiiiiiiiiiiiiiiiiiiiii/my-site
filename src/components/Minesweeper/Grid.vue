<template>
	<div
		class="grid-size text-white flex justify-center items-center cursor-pointer"
		:class="getGridClass(gridData)"
		@click="clickGrid(gridData)"
		@dblclick="dbClick(gridData)"
		@click.prevent.right="addFlag(gridData)"
	>
		<div>{{ gridContent }}</div>
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
	emits: ['toEnd', 'reverseAroundGrid'],
	computed: {
		gridInsideContent() {
			let { isBomb, roundHasBomb } = this.gridData;
			return isBomb ? '💣' : roundHasBomb || '';
		},
		gridContent() {
			let { isCover, isFlag } = this.gridData;
			const contentMap = {
				1: '',
				2: this.gridInsideContent,
				3: '🚩',
			};
			this.gridData.contentType = isFlag ? 3 : isCover ? 1 : 2;
			return contentMap[this.gridData.contentType];
		},
	},
	methods: {
		clickGrid(gridData) {
			if (!gridData.isFlag) {
				gridData.isCover = false;
				if (gridData.isBomb) {
					this.$emit('toEnd', true);
				}
			}
		},

		dbClick({ isBomb, roundHasBomb, coordinate, isFlag }) {
			if (!isBomb && !roundHasBomb && !isFlag) {
				this.$emit('reverseAroundGrid', coordinate);
			}
		},

		getGridClass(gridData) {
			return gridData.isCover ? 'grid-default' : 'grid-filp';
		},

		addFlag(gridData) {
			gridData.isFlag = gridData.isCover;
		},
	},
};
</script>

<style>
.grid-size {
	@apply w-14 h-14  border-solid border-2  select-none;
}
.grid-filp {
	@apply bg-blue-400;
}
.grid-default {
	@apply bg-gray-400 hover:shadow hover:bg-gray-700;
}
</style>
