<script>
    import { page } from '$app/stores';
    import boardgameCards from '../../../data/boardgameCards';
    import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';

    const cardsList = [].concat(boardgameCards.history, boardgameCards.culture, boardgameCards.territory, boardgameCards.feasts),
            cardData = cardsList[$page.params.card - 1];   
</script>

<svelte:head>
	<title>PL❤️BY</title>
</svelte:head>


<main class="flex items-center p-2 flex-col pt-20">
    <section style="min-height: 100vh; height: auto;" class="mb-8 w-full flex items-center flex-col">
    <Breadcrumb aria-label="Solid background breadcrumb example" solid>
        <BreadcrumbItem href="/" home>Strona główna</BreadcrumbItem>
        <BreadcrumbItem href="/app">Aplikacja</BreadcrumbItem>
        <BreadcrumbItem>Karta №{$page.params.card}</BreadcrumbItem>
    </Breadcrumb>
    <h1 class="mb-2 text-4xl font-impact tracking-tight text-gray-800 dark:text-white">
        Para kart z cyfrą №{cardData.id}
    </h1> 
    <div class="flex flex-row flex-wrap  justify-center">
        <div style="width: 400px;" class="m-4 bg-white text-gray-500 rounded-lg border-2 border-gray-200 dark:border-gray-700 shadow-md flex  flex-col">
            <img class="rounded-t-lg" src="{cardData.img[0]}" alt="{cardData.title}"> 
            <div class="p-4 sm:p-6">
                <a href="#sources-en" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-6 py-3.5 text-base text-white bg-gray-900 hover:bg-gray-700 focus:ring-blue-300  rounded-lg">
                    Do zródła informacji 
                </a>
            </div>
        </div>
        <div style="width: 400px;" class="m-4 bg-white text-gray-500 rounded-lg border-2 border-gray-200 dark:border-gray-700 shadow-md flex  flex-col">
            <img class="rounded-t-lg" src="{cardData.img[1]}" alt="{cardData.title}"> 
            <div class="p-4 sm:p-6">
                <a href="#sources-ru" class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-6 py-3.5 text-base text-white bg-gray-900 hover:bg-gray-700 focus:ring-blue-300  rounded-lg">
                    Do zródła informacji 
                </a>
            </div>
        </div>
        </div>
        <div style="" class="max-w-4xl m-4 bg-gray-100 text-gray-500 rounded-lg border-2 border-gray-200 dark:border-gray-700 shadow-md flex  flex-col">
            <div class="p-4 sm:p-6">
            <h3 class="mb-2  w-full text-center text-4xl font-impact tracking-tight text-gray-800 dark:text-white">
                Informacja ogólna
            </h3> 
            {#each cardData.description as description}
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
                    {description}
                </p> 
            {/each}
            </div>
        </div>
    </section>

    <section class="bg-gray-200 xl:w-6/12 lg:w-6/12 md:w-8/12 w-full pt-12 pb-12 flex flex-col items-center shadow-2xl rounded-lg border-2 border-gray-200">
        <h3 class="mb-2  w-full text-center text-4xl font-impact tracking-tight text-gray-800 dark:text-white">
            Źródła informacji 
        </h3> 
        <article class="mb-10 w-full p-4">
            <h4 class="mb-4 text-3xl font-impact tracking-tight text-gray-800 dark:text-white">
                W języku polskim
            </h4> 
            {#each cardData.sourcesPl as sourceData}
                    <ol id="sources-en" class="gradient-list">
                        <li>
                            <a href={sourceData.link} class="inline-flex items-center text-gray-700 hover:underline">{sourceData.title}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25">
                                    </path>
                                </svg>
                            </a>
                        </li>
                    </ol>
            {/each}
        </article>
        <article class="mb-10 w-full p-4">
            <h4 class="mb-4 text-3xl font-impact tracking-tight text-gray-800 dark:text-white">
                W języku  białoruskim / rosyjskim 
            </h4> 
            {#each cardData.sourcesBe as sourceData}
                    <ol id="sources-ru" class="gradient-list">
                        <li>
                            <a href={sourceData.link} class="inline-flex items-center text-gray-700 hover:underline">{sourceData.title}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25">
                                    </path>
                                </svg>
                            </a>
                        </li>
                    </ol>
            {/each}
        </article>
    </section>

    
</main>


<style>


ol.gradient-list {
  counter-reset: gradient-counter;
  list-style: none;
  /* margin: 1.75rem 0; */
  padding-left: 1rem;
}
ol.gradient-list > li {
  background: white;
  border-radius: 0 0.5rem 0.5rem 0.5rem;
  counter-increment: gradient-counter;
  margin-top: 1rem;
  min-height: 3rem;
  padding: 1rem 1rem 1rem 3rem;
  position: relative;
}
ol.gradient-list > li::before, ol.gradient-list > li::after {
  background-color: #eb5a53;
  border-radius: 1rem 1rem 0 1rem;
  content: "";
  height: 3rem;
  left: -1rem;
  overflow: hidden;
  position: absolute;
  top: -1rem;
  width: 3rem;
}
ol.gradient-list > li::before {
  align-items: flex-end;
  content: counter(gradient-counter);
  color: #1d1f20;
  display: flex;
  font: 900 1.5em/1 "Montserrat";
  justify-content: flex-end;
  padding: 0.125em 0.25em;
  z-index: 1;
}
/* ol.gradient-list > li:nth-child(10n+1):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.2) 0%, rgba(253, 220, 50, 0.2) 100%);
}
ol.gradient-list > li:nth-child(10n+2):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.4) 0%, rgba(253, 220, 50, 0.4) 100%);
}
ol.gradient-list > li:nth-child(10n+3):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.6) 0%, rgba(253, 220, 50, 0.6) 100%);
}
ol.gradient-list > li:nth-child(10n+4):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.8) 0%, rgba(253, 220, 50, 0.8) 100%);
}
ol.gradient-list > li:nth-child(10n+5):before {
  background: linear-gradient(135deg, #a2ed56 0%, #fddc32 100%);
}
ol.gradient-list > li:nth-child(10n+6):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.8) 0%, rgba(253, 220, 50, 0.8) 100%);
}
ol.gradient-list > li:nth-child(10n+7):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.6) 0%, rgba(253, 220, 50, 0.6) 100%);
}
ol.gradient-list > li:nth-child(10n+8):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.4) 0%, rgba(253, 220, 50, 0.4) 100%);
}
ol.gradient-list > li:nth-child(10n+9):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.2) 0%, rgba(253, 220, 50, 0.2) 100%);
}
ol.gradient-list > li:nth-child(10n+10):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0) 0%, rgba(253, 220, 50, 0) 100%);
} */
ol.gradient-list > li + li {
  margin-top: 2rem;
}
</style>