<script>
	import Questions from './Question.svelte'
	import HowMany from './HowMany.svelte'
	import Hunting from './Hunting.svelte'
	import Header from './Header.svelte'
	import Button from './Button.svelte';
	import HowToPlay from './HowToPlay.svelte';
	import langs from "./Store/lang-store.js";
	import { slide, fade } from 'svelte/transition';

	let howMany = null;
	let qList =[];
	let checkCounter = 0;
	let hunting = false;
	let disabled = true;
	let lang = 0;
	let storeContent;
	let showInsrt = false;
	let resetted = false;

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
		resetted = true;
	}

	function setToHunt() {
		hunting=true;
		disabled=true;
	}

	function changeLang(event) {
		lang = event.detail.lang;
		const unsubscribe = langs.subscribe( items => {
			storeContent = items[lang];
		});
	}

	const unsubscribe = langs.subscribe( items => {
		storeContent = items[lang];
	});
</script>

<style>
	* {
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

<Header langSett={storeContent} lang={lang} on:message={changeLang}/>

<div class="mv-down">
	<div class="center-me">
		{#if !howMany}
		<div transition:fade={{ duration: 10, delay: 501 }}>
			<h3 class="main-text">{storeContent.howmany}</h3>
			<HowMany langSett={storeContent} on:message={handleMessage}/>
			<br>
			<Button on:click={() => showInsrt = !showInsrt} caption={storeContent.inst}
						mode="outline" />
			{#if showInsrt}
				<div transition:slide={{ duration: 500 }}>
					<HowToPlay langSett={storeContent} />
				</div>
			{/if}
		</div>
		{:else}
			<div in:fade={{ duration: 100, delay: 550 }}>
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
			</div>
		{/if}
	</div>
</div>
