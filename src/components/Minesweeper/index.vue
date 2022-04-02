<template>
	<div class="w-screen h-screen pt-10 bg-blue-100">
		<div class="flex w-fit border-solid border-2 border-slate-200 mx-auto">
			<div v-for="(y, yIndex) in gridData" :key="yIndex" class="grid-size">
				<div v-for="(x, xIndex) in y" :key="xIndex" class="grid-size flex justify-center items-center cursor-pointer">
					{{ x.isBomb ? '💣' : `${x.roundHasBomb}` }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { buildGridDatas } from './gridFactory';
import Grid from './Grid.vue';
export default {
	data() {
		return {
			gridData: [],
		};
	},
	created() {
		this.init();
	},
	methods: {
		init() {
			const w = 9;
			const h = 9;
			const bomb = 10;
			this.gridData = buildGridDatas({ w, h, bomb });
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.grid-size {
	@apply w-14 h-14 border-solid border-2 bg-blue-400 select-none;
}
</style>
