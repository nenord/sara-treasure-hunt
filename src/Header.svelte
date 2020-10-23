<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
	let languages = [
		{ id: 0, language: 'ENG' },
		{ id: 1, language: 'HRV' }
	];

	export let langSett;
  export let lang;

  $: dispatch('message', {
    lang: lang
  });

</script>

<style>
  * {
    font-family: inherit;
  }
  
  header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 4rem;
    background: #622569;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
  }

  h1 {
    color: white;
    margin-left: 10px;
  }

  .num-input {
		border-radius: 5px;
    margin: 10px;
	}

  #lang-show {
    color: white;
  }

</style>

<header>
  <h1>{langSett.title}</h1>
  <label id="lang-show">{langSett.lng}
    <select class="num-input" bind:value={lang}>
    	{#each languages as language}
    		<option value={language.id}>
    			{language.language}
    		</option>
    	{/each}
    </select>
  </label>
</header>
