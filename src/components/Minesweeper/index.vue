<template>
	<div class="w-screen h-screen pt-10">
		<p class="text-5xl mb-10" :class="isFail ? 'text-red-500' : 'text-blue-300'">
			<span @click="init()" class="cursor-pointer select-none">{{ isFail ? '😆' : '🙂' }} </span>
		</p>
		<p>
			<span></span>
			<span>💣:{{ totalBomb }}</span>
		</p>
		<div class="flex w-fit border-solid border-2 border-slate-200 mx-auto">
			<div v-for="(y, yIndex) in gridDataList" :key="yIndex">
				<div v-for="(x, xIndex) in y" :key="xIndex">
					<Grid :gridData="x" @toEnd="toEnd" @reverseAroundGrid="reverseAroundGrid" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { buildGridDatas, getRoundCoordinate } from './gridFactory';
import Grid from './Grid.vue';

const w = 9;
const h = 9;
const bomb = 1;

export default {
	data() {
		return {
			gridDataList: [],
			isSuccess: false,
			isFail: false,
			totalBomb: bomb,
		};
	},
	components: {
		Grid,
	},
	created() {
		this.init();
	},
	watch: {
		gridDataList: {
			handler(val) {
				let count = this.counteReverseGrid(val);
				let gridSum = w * h;
				if (gridSum - bomb == count && !this.isSuccess && !this.isFail) {
					alert('you win!!!');
					this.isSuccess = true;
					this.reverseGridList(val);
				}
			},
			deep: true,
		},
	},
	methods: {
		init() {
			this.isFail = false;
			this.gridDataList = buildGridDatas({ w, h, bomb });
		},

		toEnd(isFail) {
			this.isFail = isFail;
			this.reverseGridList(this.gridDataList);
			isFail && alert('💣💣💣💣💣💣Bomb!');
		},

		reverseAroundGrid(coordinate_) {
			let coordinateArr = getRoundCoordinate({ ...coordinate_, w: w - 1, h: h - 1 });
			console.log('coordinateArr', coordinateArr);
			coordinateArr.forEach((arr) => {
				let currentGrid = this.gridDataList[arr[0]][arr[1]];
				currentGrid.isCover = false;
				// todo
				// let { roundHasBomb, coordinate } = currentGrid;
				// if (!roundHasBomb) {
				// 	this.reverseAroundGrid(coordinate);
				// }
			});
		},

		reverseGridList(gridDataList) {
			gridDataList.forEach((list) => {
				list.forEach((item) => {
					item.isCover = false;
				});
			});
		},

		counteReverseGrid(gridDataList) {
			let counte = 0;
			gridDataList.forEach((arr) => {
				arr.forEach((item) => {
					!item.isCover && !item.isBomb && counte++;
				});
			});

			return counte;
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
