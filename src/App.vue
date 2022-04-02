<template>
	<div>
		<Minesweeper />
	</div>
</template>

<script>
import Minesweeper from './components/Minesweeper/index.vue';

export default {
	name: 'App',
	components: {
		Minesweeper,
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
