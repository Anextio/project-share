<script>
	import { Row, Col } from 'spaper';
	import { getCategories } from '$lib/categoriesApi';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
  
	let categories = [];
  
	onMount(async () => {
	  categories = await getCategories();
	});
  
	function viewProjects(category) {
	  goto(`/projects/category/${encodeURIComponent(category.name)}`);
	}
  </script>
  
  <div>
	<h2>Categories</h2>
	<Row>
	  {#each categories as category}
		<Col col="4">
		  <div class="card" on:click={() => viewProjects(category)}>
			<div class="card-body">
			  <h4 class="card-title">{category.name}</h4>
			  <p class="card-text">{category.projectCount || 0} Projects</p>
			</div>
		  </div>
		</Col>
	  {/each}
	</Row>
  </div>
  
  <style>
	.card {
	  cursor: pointer;
	}
  </style>