

<template>
	<responsive max="1280px">
		<grid>
			<h1>Responsiveness: {{ $mediaQuery }}</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</grid>
		<div class="measure"></div>
	</responsive>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	min-height: 300vh;
}
.example-size {
	width: 60vw;
	height: calc(var(--example-width) / 3);
	border: 1px solid red;
}
.measure {
	border: 1px solid green;
	width: var(--max-padding);
	height: var(--max-padding);
}
</style>
