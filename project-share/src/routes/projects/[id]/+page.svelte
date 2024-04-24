<!-- ProjectDetails.svelte -->
<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import ProjectDetails from '$lib/components/ProjectDetails.svelte';
	import DiscussionList from '$lib/components/DiscussionList.svelte';
	import RelatedProjects from '$lib/components/RelatedProjects.svelte';
	import ProjectForm from '$lib/components/ProjectForm.svelte';
	import { getProjectById, updateProject } from '$lib/api/projectsApi.js';
	import { authStore } from '$lib/stores/authStore';
  
	let project = null;
	let isEditing = false;
	let user = null;
  
	onMount(async () => {
	  project = await getProjectById($page.params.id);
	  user = await authStore.getCurrentUser();
	});
  
	function startEditing() {
	  isEditing = true;
	}
  
	async function saveChanges(event) {
	  let updatedProject = event.detail.projectData;
	  updatedProject.nameLower = updatedProject.name.toLowerCase();
	  await updateProject(project.id, updatedProject);
	  project = { ...project, ...updatedProject };
	  isEditing = false;
	}
  </script>
  
  <div>
	{#if project}
	  <section>
		{#if isEditing}
		  <ProjectForm projectData={project} on:submit={saveChanges} />
		{:else}
		  <ProjectDetails {project} />
		  {#if user && user.displayName === project.createdBy}
			<button on:click={startEditing} class="edit-btn">Edit Project</button>
		  {/if}
		{/if}
	  </section>
  
	  <section class="discussion-list">
		<DiscussionList projectId={$page.params.id} />
	  </section>
  
	  {#await project}
		<p>Loading Related Projects...</p>
	  {:then}
		<section class="related-projects">
		  <RelatedProjects tags={project.tags} currentProjectId={project.id} />
		</section>
	  {/await}
	{:else}
	  <p>Loading project...</p>
	{/if}
  </div>
  
  <style>
	section {
	  margin-bottom: 4rem;
	  margin-left: 4rem;
	}
	.edit-btn {
	 margin-left: 1rem;
	}
  </style>
