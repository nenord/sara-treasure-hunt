<script>
	import { createEventDispatcher } from 'svelte';
	import Button from './Button.svelte';
	const dispatch = createEventDispatcher();

	export let ID;
	export let langSett;
	let clue;
	let proof = null;
	let complete = false;

	function addItem() {
		proof = Math.floor(Math.random() * 50);
		dispatch('message', {
			ident: ID,
			itemClue: clue,
			itemProof: proof
		});
		complete = true;
		//insertText = langSett.key + proof.toString() + '!';
	}
</script>

<style>
	.completion{
		color: gray;
	}

	.num-input {
		border-radius: 5px;
	}

	* {
		font-family: inherit;
	}
</style>

<h3>{langSett.clues} {ID}
	{#if proof}
		<span class="completion">{langSett.key}</span>
		<span class="completion">{proof}</span>
	{/if}
</h3>
<h4>{langSett.clueDesc}
	<input class="num-input" bind:value={clue} disabled={complete}>
</h4>
<h4>
	<Button on:click={addItem} caption={langSett.add}
					mode="outline" disabled={complete} />
</h4>
