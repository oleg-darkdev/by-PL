<svelte:head>
	<title>PL❤️BY</title>
</svelte:head>

<script>
    import cardCategories from '../data/cardCategories';
    import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>

<main class="pt-20 p-2 flex flex-col items-center">
    <!-- <div class="w-full justify-center">
        <Breadcrumb aria-label="Solid background breadcrumb example" solid>
        <BreadcrumbItem href="/" home>Strona główna</BreadcrumbItem>
        <BreadcrumbItem href="/app">app</BreadcrumbItem>
    </Breadcrumb>
    </div> -->
        
    {#each cardCategories as category}
        <section class="w-full m-4 flex flex-row   justify-center ">
            <div class="bg-section lg:w-2/12 -ml-10 md:w-3/12 {category.miniImg}"></div>
            <!-- <div class="flex flex-row w-full">
            <div class="flex flex-col items-end mb-4 w-4/12">
                <h2>{category.title}</h2>
                <ul class="relative ml-10 mb-4 text-dark max-w-md list-disc list-inside space-y-1">
                    {#each category.listData as data}
                    <li data-aos="fade-up" class="font-semibold rounded-md  text-dark hover:bg-white">
                        {data}
                    </li>
                    {/each}
                </ul>
            </div> -->
            <div class="hover:bg-red-300 xl:p-12  lg:p-12 md:p-12 p-2 bg-gray-200 max-w-4xl rounded-lg justify-center flex-col">
                <h2 class="mb-2 text-8xl text-left font-impact tracking-tight text-gray-700">{category.title}</h2>
                <div class="flex flex-row justify-center flex-wrap">
                    {#each category.cardsData as cardData}
                        <a href="/app/card/{cardData.id}" class="bg-red-500 w-40 h-40 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md flex  flex-col hover:bg-gray-800 p-4 sm:p-6" >
                            <h5 class="mb-2 text-8xl text-center font-impact tracking-tight text-white">
                                {cardData.id}
                            </h5> 
                            <!-- <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p> -->
                        </a>
                    {/each}
                </div>
            </div>
        </section>
    {/each}
</main>


<style>
    .bg-section {
		/* align-content: center; */
		/* display: flex; */
		height: auto;
		background-repeat: no-repeat;		
		background-size: auto;
        height: 300px;
        background-position: right;
	}

		.history-bg-mini {
			background-image: url(/images/bg/history_mini.svg);
		}
		.culture-bg-mini {
			background-image: url(/images/bg/culture_mini.svg);
		}
		.territory-bg-mini {
			background-image: url(/images/bg/territory_mini.svg);
		}
		.feast-bg-mini {
			background-image: url(/images/bg/feast_mini.svg);
		}
    @media (max-width: 760px) {
		.history-bg-mini, .culture-bg-mini, .territory-bg-mini, .feast-bg-mini {
            display: none;
        }
	}	
</style>