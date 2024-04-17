<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import ProjectDetails from '$lib/components/ProjectDetails.svelte';
	import DiscussionList from '$lib/components/DiscussionList.svelte';
	import RelatedProjects from '$lib/components/RelatedProjects.svelte';
	import { getProjectById } from '$lib/api/projectsApi.js';
  

	let project = null;
  
	onMount(async () => {
		console.log($page.params.id)
	  project = await getProjectById($page.params.id)
	});
  </script>
  
  <div>
	{#if project}
	  <section class="project-details">
		<ProjectDetails {project} />
	  </section>
	  <section class="discussion-list">
		<DiscussionList projectId={project.id} />
	  </section>
	  {#if project.tags}
		<section class="related-projects">
		  <RelatedProjects tags={project.tags} />
		</section>
	  {/if}
	{:else}
	  <p>Loading project...</p>
	{/if}
  </div>
  
  <style>
	.container {
	  max-width: 800px;
	  margin: 0 auto;
	  padding: 20px;
	}
  
	section {
	  margin-bottom: 40px;
	}
  
	h2 {
	  font-size: 24px;
	  margin-bottom: 20px;
	}
  </style>