<script>
	import { Row, Col } from 'spaper';
	import { getCategories } from '$lib/api/categoriesApi';
	import CategoryCard from './CategoryCard.svelte';

	let categoriesLoaded = loadCategories();
	let categories = [];

	async function loadCategories() {
		categories = await getCategories();
	}
</script>

{#await categoriesLoaded}
	<p>Loading categories...</p>
{:then}
	<h2>Categories</h2>
	{#if categories.length > 0}
		<Row>
			{#each categories as category}
				<Col col="4">
					<CategoryCard category={category} />
				</Col>
			{/each}
		</Row>
	{:else}
		<p>No categories found.</p>
	{/if}
{/await}
