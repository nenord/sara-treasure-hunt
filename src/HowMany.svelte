<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import Button from './Button.svelte';

	let questions = [
		{ id: 2, number: 2 },
		{ id: 3, number: 3 },
		{ id: 4, number: 4 },
		{ id: 5, number: 5 }
	];

	let selected = questions[2];
	let showSelected = false;
	export let langSett;

	function handleSubmit() {
		dispatch('message', {
			number: selected.number
		});
	}
</script>

<style>
	.num-input {
		border-radius: 5px;
	}
</style>

<form on:submit|preventDefault={handleSubmit}>
	<select class="num-input" bind:value={selected}>
		{#each questions as question}
			<option value={question}>
				{question.number}
			</option>
		{/each}
	</select>

	<Button caption={langSett.submit} />
</form>
