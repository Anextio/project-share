<script>
	import { onMount } from 'svelte';
	import { Row, Col, Card } from 'spaper';

	export let tags;

	let relatedProjects = [];

	onMount(async () => {
		// Fetch related projects based on the tags
		// Update the relatedProjects variable with the retrieved data
	});
</script>

<Row>
	<Col>
		<h2>Related Projects</h2>
		{#each relatedProjects as project}
			<Card>
				<h3>{project.title}</h3>
				<p>Created by: {project.createdBy}</p>
				<p>Date and Time: {project.dateTime}</p>
				<p>Contributors: {project.contributors}</p>
				<p>{project.description}</p>
				<a href="/projects/{project.id}">View Project</a>
			</Card>
		{/each}
	</Col>
</Row>
