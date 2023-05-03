<script>
	import cardCategories from '../data/cardCategories';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>

<main class="pt-20 p-2 flex flex-col items-center">
	<div class="p-12 bg-gray-200 max-w-2xl rounded-lg justify-center flex-col">
		<Breadcrumb aria-label="Solid background breadcrumb example" solid>
			<BreadcrumbItem href="/" home>Strona główna</BreadcrumbItem>
			<BreadcrumbItem href="/app">app</BreadcrumbItem>
		</Breadcrumb>

		<h1 class="mt-4 text-5xl text-center font-impact tracking-tight text-gray-700">Nawigacja</h1>
		<ul class="relative w-full text-gray-600 text-dark max-w-md list-disc list-inside space-y-1">
			<li
				data-aos="fade-up"
				class="w-full p-1 text-3xl font-semibold rounded-md  text-dark hover:bg-white"
			>
				<a href="/manual" class="inline-flex items-center text-gray-700 hover:underline"
					>Instrukcja
				</a>
			</li>
			{#each cardCategories as category}
				<li
					data-aos="fade-up"
					class="w-full p-1 text-3xl font-semibold rounded-md  text-dark hover:bg-white"
				>
					<a href="#{category.id}" class="inline-flex items-center text-gray-700 hover:underline"
						>{category.nav}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-5 h-5 ml-2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
							/>
						</svg>
					</a>
				</li>
			{/each}
		</ul>
	</div>

	{#each cardCategories as category}
		<section class="w-full m-4 flex flex-row   justify-center ">
			<div class="bg-section lg:w-2/12 -ml-10 md:w-3/12 {category.miniImg}" />

			<a name={category.id} />
			<div
				class="hover:bg-red-300 xl:p-12  lg:p-12 md:p-12 p-2 bg-gray-200 max-w-4xl rounded-lg justify-center flex-col"
			>
				<h2 class="mb-2 text-8xl text-left font-impact tracking-tight text-gray-700">
					{category.title}
				</h2>

				<div class="flex flex-row justify-center flex-wrap">
					{#each category.cardsData as cardData}
						<a
							href="/app/card/{cardData.id}"
							style="background-image: url({cardData.img[1]})"
							class="bg-red-500 w-40 h-40 rounded-lg border bg-cover bg-center border-gray-200 dark:border-gray-700 shadow-md flex  flex-col hover:bg-gray-800 p-4 sm:p-6"
						>
							<h5 class="mb-2 text-8xl text-center font-impact tracking-tight text-gray-900">
								{cardData.id}
							</h5>
						</a>
					{/each}
				</div>
			</div>
		</section>
	{/each}
</main>

<style>
	.bg-section {
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
		.history-bg-mini,
		.culture-bg-mini,
		.territory-bg-mini,
		.feast-bg-mini {
			display: none;
		}
	}
</style>
