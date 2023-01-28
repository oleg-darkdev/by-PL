<script >
  import { CountUp } from 'countup.js';
	import { onMount } from 'svelte';
  import Gallery from './Gallery.svelte';
  import boardgameCards from '../data/boardgameCards';

	onMount(() => {
        const historyCardCountUp = new CountUp('history', boardgameCards.history.length, { enableScrollSpy: true, duration: 4 }),
            cultureCardCountUp = new CountUp('culture',  boardgameCards.culture.length, { enableScrollSpy: true, duration: 4 }),
            territorycardsCountUp = new CountUp('territory', boardgameCards.territory.length, { enableScrollSpy: true, duration: 4 }),
            feastCardsCountUp = new CountUp('feast',  boardgameCards.feasts.length , { enableScrollSpy: true, duration: 4 });
	});

  let showCards = true;

  export let listData, id, cardsData;  
</script>



<div class="flex flex-col items-end mb-6">
  <ul class="relative lg:w-8/12 lg:w-10/12 w-11/12 ml-10 mb-4 text-dark max-w-md list-disc list-inside space-y-1">
      {#each listData as data}
      <li data-aos="fade-up" class="font-semibold rounded-md  text-dark hover:bg-white">
          {data}
      </li>
    {/each}
  </ul>
</div>
<div class="flex w-full justify-center ">
  {#if showCards}
  <div class="w-full counter-wrap">
    <div on:click={() => showCards = !showCards} style="width: 260px;" class="p-2 flex items-center flex-col bg-red-500 text-white rounded-lg border border-gray-200 shadow-md  hover:border-red-200 flex-col hover:bg-gray-100 hover:text-red-500 " href="/cards">
      <h4 class="m-2 text-1xl">
        W tej kategorii
      </h4>
      <p class="flex flex-row font-normal text-3xl  leading-tight">
        <span class="mr-6 font-impact " id={id} >
          
        </span>
        <span >kart do gry</span>

      </p>
    </div>
    </div>
    {:else}
      <div style=" " class="boardgame-image-wrap bg-white pt-6 pb-6 rounded-xl">
        <Gallery>
            {#each cardsData as boardgameCard}
                <div class="cards-row ">
                    <img async class='grid-item grid-item-{boardgameCard.id + 1}' src={boardgameCard.img[0]} alt=''>
                </div>
            {/each}
        </Gallery>
      </div>
    {/if}
  </div>