<script>
	import Answer from './Answer.svelte'
	import { fade, fly } from 'svelte/transition';

	export let listOfQs = [];
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

{#if !gameFinished}
	<h4 in:fade="{{ duration: 1000 }}">
		What is the number for this clue?
	</h4>
	{#key i}
		<div in:fly="{{ x: 200, duration: 1000 }}">
			<Answer qItem={listOfQs[i]} j={i} on:message={whenToEnd} />
		</div>
	{/key}
{:else}
	<h4 in:fade="{{ duration: 1000 }}">
	Well done!
	</h4>
{/if}
