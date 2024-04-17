<!-- CategoryCard.svelte -->
<script>
	import { goto } from '$app/navigation';
	import { Card } from 'spaper';
	export let category = { name: '', projectCount: 0, discussionCount: 0 };

    function viewProjects(name) {
		goto(`/projects/category/${encodeURIComponent(name)}`);
	}
</script>

<Card>
	<div class="category-content" on:click={() => viewProjects(category.name)}>
		<h3>{category.name}</h3>
		<p>Projects: {category.projectCount}</p>
		<p>Discussions: {category.discussionCount}</p>
	</div>
</Card>

<style>	
	.category-content {
		text-align: center;
        cursor: pointer;
	}
	.category-content h3 {
		font-size: 1.25rem;
		margin: 0;
		margin-bottom: 0.5rem;
	}
	.category-content p {
		margin: 0;
	}
</style>
