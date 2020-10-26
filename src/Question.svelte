<script>
	import { createEventDispatcher } from 'svelte';
	import Button from './Button.svelte';
	const dispatch = createEventDispatcher();
	import { isEmpty } from "./validation.js";

	export let ID;
	export let langSett;
	let clue = '';
	let proof = null;
	let complete = false;
	let inputStyle = "clue-input";
	let inputIsValid = false;

	$: inputIsValid = !isEmpty(clue);

	function addItem() {
		if (inputIsValid) {
			proof = Math.floor(Math.random() * 50);
			dispatch('message', {
				ident: ID,
				itemClue: clue,
				itemProof: proof
			});
			complete = true;
			inputStyle = "clue-input";
		}
		else {
			inputStyle = "wrong";
			clue = '';
		}
	}
</script>

<style>
	.completion{
		color: gray;
	}

	.clue-input {
		border-radius: 5px;
	}

	* {
		font-family: inherit;
	}

	.wrong {
		border-radius: 5px;
		border-color: #d64161;
		border-width: 2px;
	}
</style>

<h3>{langSett.clues} {ID}
	{#if proof}
		<span class="completion">{langSett.key}</span>
		<span class="completion">{proof}</span>
	{/if}
</h3>
<h4>{langSett.clueDesc}
	<input class={inputStyle} bind:value={clue} disabled={complete}
	placeholder={langSett.cannotBe}>
</h4>
<h4>
	<Button on:click={addItem} caption={langSett.add}
					mode="outline" disabled={complete} />
</h4>
