<script>
	import CardsList from './CardsList.svelte';

	export let category;
</script>

<section id={category.anchor} style="" class="bg-image-wrap  {category.bgImage} " >
	<div data-aos="fade-down"
		data-aos-delay="80"
		data-aos-duration="800" 
		data-aos-once="false"
		data-aos-mirror="true"  style="" class="lg:w-5/12 md:w-12/12 bg-white flex justify-end items-center">
		<div 
		style="min-width: 320px;" class="w-full pt-8 pb-8 pr-2 pl-2  description  ">

			<h3 class=" m-8 text-5xl lg:text-6xl md:text-6xl text-lightYellow font-bold">{category.title}</h3>

			<p class="font-normal w-full lg:w-8/12 md:w-8/12 w-11/12  leading-tight mb-2 text-viol">
  				{category.description}
			</p>
			<CardsList listData={category.listData} id={category.id} cardsData={category.cardsData}/>
		</div>
		
	</div>
	
</section>


<style>
	
	:global(.bg-image-wrap:nth-child(2n) .boardgame-image-wrap) {
		margin-right: -25vw;
	}
	:global(.bg-image-wrap:nth-child(2n+1) .boardgame-image-wrap) {
		margin-left: -25vw;

	}
	.bg-image-wrap:nth-child(2n) .description, 
	.bg-image-wrap:nth-child(2n) .description > h3, 
	.bg-image-wrap:nth-child(2n) .description > p {
		align-items: end;
		display: flex;
		text-align: right;
	}
	.bg-image-wrap:nth-child(2n+1) .description,
	.bg-image-wrap:nth-child(2n+1) .description > h3, 
	.bg-image-wrap:nth-child(2n+1) .description > p {
		display: flex;
		align-items: start;
		text-align: left;
	}
	.bg-image-wrap  .description {
		display: flex;
		flex-direction: column;
	}
	.bg-image-wrap:nth-child(2n+1){
        background-position: left;
        justify-content: end;
    }
    .bg-image-wrap:nth-child(2n){
        background-position: right;
        justify-content: start;
	}

	
	.bg-image-wrap {
		align-content: center;
		display: flex;
		height: auto;
		background-repeat: no-repeat;		
		background-size: auto;
		background-attachment: fixed;
	}
	@media (min-width: 1024px) {
		.bg-image-wrap {
			min-height: 100vh;
		}

		/* categories */
		.history {
			background-image: url(/images/bg/history.svg);
		}
		.culture {
			background-image: url(/images/bg/culture.svg);
		}
		.territory {
			background-image: url(/images/bg/territory.svg);
		}
		.feast {
			background-image: url(/images/bg/feast.svg);
		}

		
	}

</style>