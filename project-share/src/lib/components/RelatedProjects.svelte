<script>
	import { onMount } from 'svelte';
	import { Row, Col, Card, Button } from 'spaper';
	import { goto } from '$app/navigation';
	import { getRelatedProjects } from '$lib/api/projectsApi';
	import ProjectCard from './ProjectCard.svelte';
  
	export let tags = [];
	export let currentProjectId = "";
  
	let relatedProjects = [];
	let loading = true;
	let error = null;
  
	onMount(async () => {
	  try {
		relatedProjects = tags.length > 0 ? await getRelatedProjects(tags, currentProjectId) : [];
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
		  <ProjectCard project={project} />
		{/each}
	  {/if}
	</Col>
  </Row>