

<template>
	<responsive max="1204px">
		<grid column-gap="16px">
			<div class="content">
				<div class="third"></div>
				<div class="third"></div>
				<div class="third"></div>
			</div>
			<div class="content">
				<div class="box"></div>
			</div>
			<div class="measure"></div>
			<h1>Responsiveness: {{ $mediaQuery }}</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</grid>
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
	background-color: green;
	width: var(--gr4);
	height: var(--max-padding);
	margin-left: var(--grid-padding);
}

.content {
	/* border: 1px solid red; */
	height: 100px;
	width: var(--gr12);
	margin: 0 auto;
	display: flex;
	gap: 16px;
}
.third {
	width: var(--gr4);
	/* border: 1px solid blue; */
	background-color: antiquewhite;
	height: 100%;
	flex-shrink: 0;
	flex-grow: 0;
}
.third:nth-child(even) {
	background-color: azure;
}
.content {
	width: var(--gr12);
}
.box {
	height: 100px;
	background-color: pink;
	width: var(--gr8);
	margin-left: var(--pgr4);
}
</style>
