<script>
	import { Row, Col } from 'spaper';
	import { getRelatedProjects } from '$lib/api/projectsApi';
	import ProjectCard from './ProjectCard.svelte';
	export let tags = [];
	export let currentProjectId = '';

	let relatedProjects = [];
	let loading = true;
	let error = null;

	$: if (currentProjectId && tags.length) {
		loading = true;
		error = null;
		getRelatedProjects(tags, currentProjectId)
			.then(projects => {
				relatedProjects = projects;
				loading = false;
			})
			.catch(err => {
				error = 'An error occurred while fetching related projects';
				loading = false;
			});
	}
</script>

<Row>
	<Col fill>
		<h2>Related Projects</h2>
		{#if loading}
			<p>Loading related projects...</p>
		{:else if error}
			<p>{error}</p>
		{:else if relatedProjects.length === 0}
			<p>No related projects found.</p>
		{:else}
			{#each relatedProjects as project}
				<ProjectCard {project} />
			{/each}
		{/if}
	</Col>
</Row>
