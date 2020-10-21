<script>
	import Questions from './Question.svelte'
	import HowMany from './HowMany.svelte'
	import Hunting from './Hunting.svelte'
	import Header from './Header.svelte'
	import Button from './Button.svelte';

	let howMany = null;
	let qList =[];
	let checkCounter = 0;
	let hunting = false;
	let disabled = true;

	function handleMessage(event) {
		howMany = event.detail.number;
		for (var i = 0; i < howMany; i++) {
  		qList = [...qList, {id: i+1, clue: '', proof: null}];
		}
	}

	function addAnItem(event) {
		qList[event.detail.ident-1].clue = event.detail.itemClue;
		qList[event.detail.ident-1].proof = event.detail.itemProof;
		checkCounter++;
		if (checkCounter == howMany) {
			console.log(qList);
			disabled = false;
		}
	}

	function resetAll(event) {
		howMany = null;
		qList =[];
		checkCounter = 0;
		hunting=false;
		disabled=true;
	}

	function setToHunt() {
		hunting=true;
	}
</script>

<style>
	.mv-down {
		margin-top:70px;
		text-align: center;
	}
	.center-me {
		display: inline-block;
	}
</style>

<Header />
<div class="mv-down">
	<div class="center-me">
		{#if !howMany}
		<p>
			How many clues do you want?
		</p>
		<HowMany on:message={handleMessage}/>
		{:else}
			<Button on:click={resetAll} caption="Reset Game" />
			<Button on:click={setToHunt} {disabled}
							caption="Start the hunt!" />
			{#if hunting}
				<Hunting listOfQs={qList}/>
			{:else}
				{#each qList as qItem (qItem.id)}
					<Questions ID={qItem.id} on:message={addAnItem}/>
				{/each}
			{/if}
		{/if}
	</div>
</div>
