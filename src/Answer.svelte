<script>
	import { createEventDispatcher } from 'svelte';
	import Button from './Button.svelte';
	const dispatch = createEventDispatcher();

	export let qItem;
	let checkAnswer;
	export let langSett;
	let feedback = '';
	export let j;
	let answerCheck = "num-input";

	function check () {
		if (checkAnswer === qItem.proof) {
			j++;
			dispatch('message', {
				j: j
			});
			checkAnswer = null;
			answerCheck = "num-input";
		}
		else {
			checkAnswer = null;
			answerCheck = "wrong";
			}
		}
</script>

<style>
	.num-input {
		border-radius: 5px;
	}

	.wrong {
		border-radius: 5px;
		border-color: #d64161;
		border-width: 2px;
	}
</style>

<label>
	{qItem.clue}
	<input class={answerCheck} type=number bind:value={checkAnswer} min=0 max=100>
	<Button on:click={check} caption={langSett.next} mode="outline" />
</label>
