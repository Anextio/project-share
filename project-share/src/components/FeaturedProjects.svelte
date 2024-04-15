<script>
	import ProjectCard from './ProjectCard.svelte';
	import { Row, Col } from 'spaper';
	import { getMostDiscussedProjects } from '$lib/projectsApi';
	import { onMount } from 'svelte';

	let projects = []

	onMount(async () => {
    projects = await getMostDiscussedProjects();
  });
</script>

<h2>Explore Projects</h2>
<h3>Featured Projects</h3>
<Row>
	{#each projects as project}
		<Col col="4">
			<ProjectCard project={project} />
		</Col>
	{/each}
</Row>
<Row center>
	<Col>
		<a class="paper-btn" href="/projects">View All</a>
	</Col>
</Row>
