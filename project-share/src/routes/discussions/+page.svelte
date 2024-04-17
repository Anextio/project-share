<script>
	import { Row, Col, Card, Alert } from 'spaper';
	import { getDiscussions } from '$lib/api/discussionsApi';
	import { getCategories } from '$lib/api/categoriesApi';
	import { getTags } from '$lib/api/tagsApi';
	import DiscussionCard from '$lib/components/DiscussionCard.svelte';
	import CategoryCard from '$lib/components/CategoryCard.svelte';
  
	let discussions = [];
	let categories = [];
	let popularTags = [];
	let loadingData = loadData();
  
	async function loadData() {
	  try {
		const [fetchedDiscussions, fetchedCategories, fetchedTags] = await Promise.all([
		  getDiscussions(),
		  getCategories(),
		  getTags()
		]);
		discussions = fetchedDiscussions;
		categories = fetchedCategories.map(category => ({
		  ...category,
		  discussionCount: discussions.filter(discussion => discussion.categoryId === category.id).length
		}));
		popularTags = fetchedTags.map(tag => ({
		  ...tag,
		  discussionCount: discussions.filter(discussion => discussion.tags.includes(tag.id)).length
		}));
	  } catch (error) {
		console.error('Error loading data:', error);
		throw error;
	  }
	}
  </script>
  
  {#await loadingData}
	<p>Loading data...</p>
  {:then}
	<div class="container">
	  <Row>
		<Col md="8">
		  <h2>Discussion Threads</h2>
		  {#each discussions as discussion}
			<DiscussionCard {discussion} />
		  {/each}
		</Col>
		<Col md="4">
		  <div class="sidebar">
			<div class="categories">
			  <h3>Categories</h3>
			  <div class="category-list">
				{#each categories as category}
				  <CategoryCard {category} />
				{/each}
			  </div>
			</div>
			<div class="popular-tags">
			  <h3>Popular Tags</h3>
			  <ul>
				{#each popularTags as tag}
				  <li>
					<a href="/discussions/tags/{tag.name}">{tag.name}</a>
					<span class="tag-count">({tag.discussionCount})</span>
				  </li>
				{/each}
			  </ul>
			</div>
		  </div>
		</Col>
	  </Row>
	</div>
  {:catch error}
	<Alert type="danger">
	  Error loading data. Please try again later.
	</Alert>
  {/await}
  
  <style>
	.container {
	  margin-top: 2rem;
	}
  
	.sidebar {
	  margin-left: 2rem;
	}
  
	.categories {
	  margin-bottom: 2rem;
	}
  
	.category-list {
	  display: grid;
	  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	  gap: 1rem;
	}
  
	.popular-tags ul {
	  list-style-type: none;
	  padding: 0;
	}
  
	.popular-tags li {
	  margin-bottom: 0.5rem;
	}
  
	.tag-count {
	  font-size: 0.8rem;
	  color: #666;
	}
  </style>