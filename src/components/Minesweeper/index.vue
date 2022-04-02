<template>
	<div class="w-screen h-screen pt-10">
		<p class="text-5xl mb-10" :class="isFail ? 'text-red-500' : 'text-blue-300'">
			<span @click="init()" class="cursor-pointer">{{ isFail ? '😆' : '🙂' }} </span>
		</p>
		<div class="flex w-fit border-solid border-2 border-slate-200 mx-auto">
			<div v-for="(y, yIndex) in gridDataList" :key="yIndex">
				<div v-for="(x, xIndex) in y" :key="xIndex">
					<Grid :gridData="x" @toEnd="toEnd" />
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
			gridDataList: [],
			isFail: false,
		};
	},
	components: {
		Grid,
	},
	created() {
		this.init();
	},
	methods: {
		init() {
			const w = 9;
			const h = 9;
			const bomb = 10;
			this.isFail = false;
			this.gridDataList = buildGridDatas({ w, h, bomb });
		},
		toEnd(isFail) {
			this.isFail = isFail;
			this.gridDataList.forEach((list) => {
				list.forEach((item) => {
					item.isCover = false;
				});
			});
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
