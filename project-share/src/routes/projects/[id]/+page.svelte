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
	  const updatedProject = event.detail.projectData;
	  await updateProject(project.id, updatedProject);
	  project = { ...project, ...updatedProject };
	  isEditing = false;
	}
  </script>
  
  {#await getProjectById($page.params.id)}
	<p>Loading project...</p>
  {:then project}
	<div>
	  <section class="project-details">
		{#if isEditing}
		  <!-- Display edit form using ProjectForm component -->
		  <ProjectForm projectData={project} on:submit={saveChanges} />
		  <button type="button" on:click={() => isEditing = false}>Cancel</button>
		{:else}
		  <!-- Display project details -->
		  <ProjectDetails {project} />
		  {#if user && user.displayName === project.createdBy}
			<button on:click={startEditing}>Edit Project</button>
		  {/if}
		{/if}
	  </section>
  
	  <section class="discussion-list">
		<DiscussionList projectId={$page.params.id} />
	  </section>
  
	  <section class="related-projects">
		<RelatedProjects tags={project.tags} currentProjectId={project.id} />
	  </section>
	</div>
  {:catch error}
	<p>Error loading project: {error.message}</p>
  {/await}