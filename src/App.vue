<template>
	<div>
		<p class="text-left px-20 py-2 bg-gray-200">
			<a v-for="(item, i) in navList" :key="i" class="px-4" :href="item.route">{{ item.label }}</a>
		</p>
		<component :is="CurrentComponent"></component>
	</div>
</template>

<script>
import Minesweeper from '@/components/Minesweeper/index.vue';
import HomePage from '@/components/HomePage/index.vue';
import NotFoundPage from '@/components/NotFoundPage/index.vue';
import { routes, navList } from '@/route';
export default {
	name: 'App',
	components: {
		Minesweeper,
		HomePage,
		NotFoundPage,
	},
	data() {
		return {
			navList: navList,
		};
	},
	computed: {
		CurrentComponent() {
			const currentRoute = window.location.pathname;
			console.log(currentRoute);
			return routes[currentRoute] || NotFoundPage;
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
