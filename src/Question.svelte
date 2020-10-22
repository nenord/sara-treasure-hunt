<script>
	import { createEventDispatcher } from 'svelte';
	import Button from './Button.svelte';
	const dispatch = createEventDispatcher();

	export let ID;
	export let langSett;
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
		insertText = langSett.key + ' ' + proof.toString() + '!';
	}
</script>

<style>
	#completion{
		color: gray;
	}

	.num-input {
		border-radius: 5px;
	}

	.main-text {
		font-family: "Roboto Slab", serif;
	}
</style>

<h3 class="main-text">{langSett.clues} {ID}<span id="completion">{insertText}</span></h3>
<h4 class="main-text">{langSett.clueDesc}
	<input class="num-input" bind:value={clue} disabled={complete}>
</h4>
<h4 class="main-text">
	<Button on:click={addItem} caption={langSett.add}
					mode="outline" disabled={complete} />
</h4>
