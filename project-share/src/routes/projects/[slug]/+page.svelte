<script>
	import ProjectDetails from '../../../components/ProjectDetails.svelte';
	import DiscussionList from '../../../components/DiscussionList.svelte';
	import RelatedProjects from '../../../components/RelatedProjects.svelte';
	import { authStore } from '../../../stores/authStore.js';
	import Auth from '../../../components/Auth.svelte';
  
	export let data;
	const { project } = data;
  </script>
  
  
  <div class="container">
	{#if project}
	  <ProjectDetails {project} />
	  <DiscussionList projectId={project.id} />
	  {#if project.tags}
      <RelatedProjects tags={project.tags} />
    {/if}
	{:else}
	  <p>Loading project...</p>
	{/if}
  </div>