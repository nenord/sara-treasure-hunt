<script>
  export let langSett;
</script>

<style>
  .main-cont {
    display: flex;
    justify-content: space-around;
    color: gray;
    font-size: small;
    text-align: justify;
    flex-wrap: wrap;
    margin: 10px;
  }

  .sub-div {
    margin: 20px;
  }

  h4 {
    text-align: center;
  }

</style>

<div class="main-cont">
    <div class="sub-div">
      <h4>{langSett.inst}</h4>
      {#each langSett.howTo1 as howToItem}
        <p class="gameInstr">{howToItem}</p>
      {/each}
    </div>
    <div class="sub-div">
      <h4>{langSett.howTo2}</h4>
      {#each langSett.howTo3 as howToItem}
        <p>{howToItem}</p>
      {/each}
    </div>
    <div class="sub-div">
      <h4>{langSett.howTo4}</h4>
      {#each langSett.howTo5 as howToItem}
        <p>{howToItem}</p>
      {/each}
    </div>
</div>
