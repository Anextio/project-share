<script>
	import { Row, Col, Card } from 'spaper';
	import { getDiscussions, addDiscussion, updateDiscussion } from '$lib/discussionsApi';
	import {onMount} from 'svelte';
	import { getCategories } from '$lib/categoriesApi';

	let discussions = [];
	let categories = [];

  onMount(async () => {
    discussions = await getDiscussions();
	categories = await getCategories();
  });

	let popularTags = [
		{ name: 'Tag 1', count: 8 },
		{ name: 'Tag 2', count: 6 }
		// Add more popular tags as needed
	];
</script>

	<div class="container">
		<Row>
			<Col md="8">
				<h2>Discussion Threads</h2>
				{#each discussions as discussion}
					<Card>
						<h3>{discussion.title}</h3>
						<p>Author: {discussion.author}</p>
						<p>Last Reply: {discussion.lastReply}</p>
						<p>Replies: {discussion.replies}</p>
						<a href="/discussions/{discussion.id}">View Thread</a>
					</Card>
				{/each}
			</Col>
			<Col md="4">
				<h2>Categories</h2>
				<ul>
					{#each categories as category}
						<li>{category.name} ({category.projectCount})</li>
					{/each}
				</ul>
				<h2>Popular Tags</h2>
				<ul>
					{#each popularTags as tag}
						<li>{tag.name} ({tag.count})</li>
					{/each}
				</ul>
			</Col>
		</Row>
	</div>
