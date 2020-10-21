<script>
	import { createEventDispatcher } from 'svelte';
	import Button from './Button.svelte';
	const dispatch = createEventDispatcher();

	export let ID;
	let clue;
	let proof = '';
	let complete = false;
	let insertText = '';

	function addItem() {
		proof = Math.floor(Math.random() * 50);
		dispatch('message', {
			ident: ID,
			itemClue: clue,
			itemProof: proof
		});
		complete = true;
		insertText = ' Added!'
	}
</script>

<style>
	#completion{
		color: gray;
	}

</style>

<h4>Input clue and proof {ID}!<span id="completion">{insertText}</span></h4>
<label>What is your clue?
	<input bind:value={clue} disabled={complete}>
</label>
<label>
	<Button on:click={addItem} caption="Add this clue!"
					mode="outline" disabled={complete} />
	 Proof that clue was solved: {proof}
</label>
