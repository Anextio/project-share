<script>
	import { onMount } from 'svelte';
	import { Row, Col, Card, Button } from 'spaper';
	import { goto } from '$app/navigation';
	import { getRelatedProjects } from '$lib/api/projectsApi';
  
	export let tags = [];
	export let currentProjectId = "";
  
	let relatedProjects = [];
	let loading = true;
	let error = null;
  
	onMount(async () => {
	  try {
<<<<<<< Updated upstream
		relatedProjects = tags.length > 0 ? await getRelatedProjects(tags) : [];
=======
		relatedProjects = await getRelatedProjects(tags, currentProjectId);
>>>>>>> Stashed changes
		loading = false;
	  } catch (err) {
		error = 'An error occurred while fetching related projects';
		loading = false;
	  }
	});
  </script>
  
  <Row>
	<Col>
	  <h2>Related Projects</h2>
	  {#if loading}
		<p>Loading related projects...</p>
	  {:else if error}
		<p>{error}</p>
	  {:else if relatedProjects.length === 0}
		<p>No related projects found.</p>
	  {:else}
		{#each relatedProjects as project}
		  <Card>
			<h3>{project.title}</h3>
			<p>Created by: {project.createdBy}</p>
			<p>Date and Time: {project.dateTime}</p>
<<<<<<< Updated upstream
			<p>Collaborators: {project.collaborators.join(', ')}</p>
=======
			<p>Contributors: {project.contributors ? project.contributors.join(', ') : 'N/A'}</p>
>>>>>>> Stashed changes
			<p>{project.description}</p>
			<Button on:click={() => goto(`/projects/${project.id}`)}>View Project</Button>
		  </Card>
		{/each}
	  {/if}
	</Col>
  </Row>