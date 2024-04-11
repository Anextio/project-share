<script>
	import { onMount } from 'svelte';
	import { Row, Col, Card } from 'spaper';

	export let projectId;

	let discussions = [];

	onMount(async () => {
		// Fetch discussions based on the projectId
		// Update the discussions variable with the retrieved data
	});
</script>

<Row>
	<Col>
		<h2>Discussions</h2>
		{#each discussions as discussion}
			<Card>
				<h3>{discussion.title}</h3>
				<p>Started by: {discussion.startedBy}</p>
				<p>Date and Time: {discussion.dateTime}</p>
				<p>Replies: {discussion.replies}</p>
				<p>{discussion.description}</p>
				<a href="/discussions/{discussion.id}">View Discussion</a>
			</Card>
		{/each}
	</Col>
</Row>
