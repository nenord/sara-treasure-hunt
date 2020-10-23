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
	* {
		font-family: inherit;
	}
</style>

{#if !gameFinished}
	<h4 in:fade="{{ duration: 500 }}">
		{langSett.number}
	</h4>
	{#key i}
		<div in:fly="{{ x: 200, duration: 500, delay: 501}}" out:fly="{{ x: -200, duration: 450 }}">
			<Answer langSett={langSett} qItem={listOfQs[i]} j={i} on:message={whenToEnd} />
		</div>
	{/key}
{:else}
	<h3 in:fade="{{ duration: 500, delay: 501}}">
		{langSett.well}
	</h3>
{/if}
