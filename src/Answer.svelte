<script>
	import { createEventDispatcher } from 'svelte';
	import Button from './Button.svelte';
	const dispatch = createEventDispatcher();

	export let qItem;
	let checkAnswer;
	let feedback = '';
	export let j;

	function check () {
		if (checkAnswer === qItem.proof) {
			j++;
			dispatch('message', {
				j: j
			});
			checkAnswer = null;
			feedback = '';
		}
		else {
			checkAnswer = null;
			feedback = 'Try Again!';
			}
		}
</script>

<label>
	{qItem.clue}
	<input type=number bind:value={checkAnswer} min=0 max=100>
	<Button on:click={check} caption="Next!" mode="outline" />
</label>

<p>
	{feedback}
</p>
