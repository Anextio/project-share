<script>
	import { onMount } from 'svelte';
	import { Row, Col, Card, Button } from 'spaper';
	import { goto } from '$app/navigation';
	import { getRelatedProjects } from '$lib/api/projectsApi';
  
	export let tags = [];
  
	let relatedProjects = [];
	let loading = true;
	let error = null;
  
	onMount(async () => {
	  try {
		relatedProjects = tags.length > 0 ? await getRelatedProjects(tags) : [];
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
			<p>Collaborators: {project.collaborators.join(', ')}</p>
			<p>{project.description}</p>
			<Button on:click={() => goto(`/projects/${project.id}`)}>View Project</Button>
		  </Card>
		{/each}
	  {/if}
	</Col>
  </Row>
