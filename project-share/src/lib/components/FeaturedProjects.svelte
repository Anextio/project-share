<script>
	import ProjectCard from './ProjectCard.svelte';
	import { Row, Col } from 'spaper';
	import { getMostDiscussedProjects } from '$lib/api/projectsApi';
  
	let projects = [];
	let projectsLoaded = loadProjects();
  
	async function loadProjects() {
	  projects = await getMostDiscussedProjects();
	}
  </script>
  
  {#await projectsLoaded}
	<p>Loading projects...</p>
  {:then}
	<h2>Explore Projects</h2>
	<h3>Featured Projects</h3>
	{#if projects.length > 0}
	  <Row>
		{#each projects as project}
		  <Col col="4">
			<ProjectCard project={project} />
		  </Col>
		{/each}
	  </Row>
	{:else}
	  <p>No projects found</p>
	{/if}
	<Row center>
	  <Col>
		<a class="paper-btn" href="/projects">View All</a>
	  </Col>
	</Row>
  {/await}