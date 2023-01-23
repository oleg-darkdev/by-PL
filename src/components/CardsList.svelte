<script >
	import { CountUp } from 'countup.js';
	import { onMount } from 'svelte';

	onMount(() => {
        const historyCardCountUp = new CountUp('history', 7, { enableScrollSpy: true, duration: 4 }),
            cultureCardCountUp = new CountUp('culture', 8, { enableScrollSpy: true, duration: 4 }),
            territorycardsCountUp = new CountUp('territory', 26, { enableScrollSpy: true, duration: 4 }),
            feastCardsCountUp = new CountUp('feast',  8 , { enableScrollSpy: true, duration: 4 });
	});

  export let listData, id;  
</script>



<div class="flex flex-col items-end mb-6">
  <!-- <h4 class="m-2 text-1xl text-center w-full text-gray-900 font-bold">
    lista 
  </h4> -->

  <ul class="relative lg:w-8/12 lg:w-10/12 w-11/12 ml-10 mb-4 text-dark max-w-md list-disc list-inside space-y-1">
      {#each listData as data}
      <li data-aos="fade-up" class="font-semibold rounded-md  text-dark hover:bg-white">
          {data}
      </li>
    {/each}
  </ul>
  <div class="flex w-full justify-center ">
      <div style="width: 260px;" class="p-2 flex items-center flex-col bg-red-500 text-gray-500 rounded-lg border border-gray-200 shadow-md  flex-col hover:bg-gray-100 " href="/cards">
				<h4 class="m-2 text-1xl text-white font-bold">
					W tej kategorii
				</h4>
        <p class="flex flex-row font-normal text-3xl text-white leading-tight">
          <span class="mr-6" id={id} >
            
          </span>
          <span >kart do gry</span>

        </p>
			</div>
    </div>
</div>