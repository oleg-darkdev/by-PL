<script>
    import cardCategories from '../data/cardCategories';
	import TypesOfWorks from './TypesOfWorks.svelte';
</script>

{#each cardCategories as category}
	<TypesOfWorks {category}/>
{/each}
