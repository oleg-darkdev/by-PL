<script>
	import CardsList from './CardsList.svelte';


	export let category;
</script>

<section id={category.anchor} style="background-position: {category.align == 'start' ? 'right': 'left'};" class="{category.bgImage} work-wrap justify-{category.align} content-center " >
	<div data-aos="fade-down"
		data-aos-delay="80"
		data-aos-duration="800" 
		data-aos-once="false"
		data-aos-mirror="true"  style="" class="lg:w-5/12 md:w-12/12 bg-white flex justify-end items-center">
		<div 
		style="min-width: 320px;" class="pt-8 pb-8 pr-2 pl-2 flex flex-col items-{category.align == 'start' ? 'end': 'start'} ">

			<h3 class=" m-8 text-5xl lg:text-6xl md:text-6xl  text-{category.align == 'start' ? 'right': 'left'} text-lightYellow font-bold">{category.title}</h3>

			<p class="font-normal lg:w-8/12 md:w-8/12 w-11/12 text-{category.align == 'start' ? 'right': 'left'} leading-tight mb-2 text-viol">
  				{category.description}
			</p>
			<CardsList listData={category.listData} id={category.id} />
		</div>
	</div>
</section>


<style>
	.work-wrap {
		height: auto;
		background-repeat: no-repeat;		
		background-size: auto;
		background-attachment: fixed;
	}
	@media (min-width: 1024px) {
		.work-wrap {
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