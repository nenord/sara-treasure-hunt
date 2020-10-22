<script>
	import Questions from './Question.svelte'
	import HowMany from './HowMany.svelte'
	import Hunting from './Hunting.svelte'
	import Header from './Header.svelte'
	import Button from './Button.svelte';
	import langs from "./Store/lang-store.js";

	let howMany = null;
	let qList =[];
	let checkCounter = 0;
	let hunting = false;
	let disabled = true;
	let lang = 1;

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

	export let langSetter = 0;
	let storeContent, langSetting;

	const unsubscribe = langs.subscribe( items => {
		storeContent = items[lang];
	});
</script>

<style>
	.main-text {
		font-family: "Roboto Slab", serif;
	}
	.mv-down {
		margin-top:70px;
		text-align: center;
	}
	.center-me {
		display: inline-block;
	}
</style>

<Header langSett={storeContent}/>
<div class="mv-down">
	<div class="center-me">
		{#if !howMany}
		<h3 class="main-text">{storeContent.howmany}</h3>

		<HowMany langSett={storeContent} on:message={handleMessage}/>
		{:else}
			<Button on:click={resetAll} caption={storeContent.reset} />
			<Button on:click={setToHunt} {disabled}
							caption={storeContent.start} />
			{#if hunting}
				<Hunting langSett={storeContent} listOfQs={qList}/>
			{:else}
				{#each qList as qItem (qItem.id)}
					<Questions langSett={storeContent} ID={qItem.id} on:message={addAnItem}/>
				{/each}
			{/if}
		{/if}
	</div>
</div>
