<script>
	import { onMount } from 'svelte';

	onMount(() => {
		
	});

    const faqData = [
           {
            title: 'Czy w tę grę mogą grać dzieci?',
            desc: 'Tak, gra jest dostosowana do dzieci powyżej pewnego wieku 10, pod warunkiem, że są one w stanie przeczytać i zrozumieć podstawowe zasady gry.',
            showMore: false
        },
        {
            title: 'Czy ta gra może być wykorzystywana do celów edukacyjnych w szkołach lub instytucjach edukacyjnych?',
            desc: 'Tak, ta gra może być wykorzystywana do celów edukacyjnych zarówno w klasie, jak i na zajęciach pozalekcyjnych w celu poznania kultury i historii Polski i Białorusi.',
            showMore: false
        },
        {
            title: 'Jak długo trwa jedna rozgrywka?',
            desc: 'Czas trwania gry zależy od liczby graczy i ich doświadczenia, zazwyczaj gra trwa od 30 minut do 1 godziny.',
            showMore: false
        },
        {
            title: 'Czy mogę zaoferować moje pomysły lub materiały, aby ulepszyć tę grę?',
            desc: 'Oczywiście! Zawsze jestem otwarty na sugestie i chętnie przyjmę twój wkład w rozwój gry. Możesz się ze mną skontaktować pod tym linkiem: https://linktr.ee/darkdev',
            showMore: false
        },
        {
            title: 'Czy istnieją inne projekty edukacyjnych gier planszowych?',
            desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            showMore: false
        },

    ]
</script>

<a name="faq"></a>

<div class="container w-full px-4 py-10 max-w-4xl">
	<!-- <h2>Frequently Asked Questions</h2> -->
	<div class="accordion">
        {#each faqData as faq}
		<div class="accordion-item border-b border-neutral-700 hover:border-[#e02424]">
            <!-- id="accordion-button-1" -->
			<button class='text-neutral-700 font-semibold' on:click={()=> faq.showMore = !faq.showMore} aria-expanded="{faq.showMore ? "true" : "false"}"
				><span class="accordion-title">{faq.title}</span><span
					class="icon"
					aria-hidden="true"
				/></button
			>
			<div class="accordion-content ">
				<p>
					{faq.desc}
				</p>
			</div>
		</div>
        {/each}
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}
	*::before,
	*::after {
		box-sizing: border-box;
	}

	.container {
		margin: 0 auto;
	}

	/* .accordion .accordion-item {
		border-bottom: 1px solid #7288a2;
	} */
    /* .accordion .accordion-item:hover {
		border-bottom: 1px solid #e02424;
	} */
	.accordion .accordion-item button[aria-expanded='true'] {
		border-bottom: 1px solid #e02424;
	}
	.accordion button {
		position: relative;
		display: block;
		text-align: left;
		width: 100%;
		padding: 1em 0;
		/* color: #7288a2; */
		font-size: 1.15rem;
		/* font-weight: 400; */
		border: none;
		background: none;
		outline: none;
	}
	.accordion button:hover,
	.accordion button:focus {
		cursor: pointer;
		color: #e02424;
	}
	.accordion button:hover::after,
	.accordion button:focus::after {
		cursor: pointer;
		color: #e02424;
		border: 1px solid #e02424;
	}
	.accordion button .accordion-title {
		padding: 1em 1.5em 1em 0;
	}
	.accordion button .icon {
		display: inline-block;
		position: absolute;
		top: 18px;
		right: 0;
		width: 22px;
		height: 22px;
		border: 1px solid;
		border-radius: 22px;
	}
	.accordion button .icon::before {
		display: block;
		position: absolute;
		content: '';
		top: 9px;
		left: 5px;
		width: 10px;
		height: 2px;
		background: currentColor;
	}
	.accordion button .icon::after {
		display: block;
		position: absolute;
		content: '';
		top: 5px;
		left: 9px;
		width: 2px;
		height: 10px;
		background: currentColor;
	}
	.accordion button[aria-expanded='true'] {
		color: #e02424;
	}
	.accordion button[aria-expanded='true'] .icon::after {
		width: 0;
	}
	.accordion button[aria-expanded='true'] + .accordion-content {
		opacity: 1;
		max-height: 9em;
		transition: all 200ms linear;
		will-change: opacity, max-height;
        color: #e02424;
	}
	.accordion .accordion-content {
		opacity: 0;
		max-height: 0;
		overflow: hidden;
		transition: opacity 200ms linear, max-height 200ms linear;
		will-change: opacity, max-height;
        color: #e02424;
	}
	.accordion .accordion-content p {
		font-size: 1rem;
		font-weight: 300;
		margin: 2em 0;
	}
</style>
