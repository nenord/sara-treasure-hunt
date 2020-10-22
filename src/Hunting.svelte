<script>
	import Answer from './Answer.svelte'
	import { fade, fly } from 'svelte/transition';

	export let listOfQs = [];
	export let langSett;
	let endGameCounter = 0;
	let gameFinished = false;
	let i = 0;

	function whenToEnd(event) {
		i = event.detail.j;
		if (i == listOfQs.length) {
			gameFinished = true;
		}
	}
</script>

<style>
	.main-text {
		font-family: "Roboto Slab", serif;
	}
</style>

{#if !gameFinished}
	<h4 class="main-text" in:fade="{{ duration: 1000 }}">
		{langSett.number}
	</h4>
	{#key i}
		<div in:fly="{{ x: 200, duration: 1000 }}">
			<Answer langSett={langSett} qItem={listOfQs[i]} j={i} on:message={whenToEnd} />
		</div>
	{/key}
{:else}
	<h3 class="main-text"in:fade="{{ duration: 1000 }}">
		{langSett.well}
	</h3>
{/if}
