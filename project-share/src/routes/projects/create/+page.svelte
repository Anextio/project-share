<!-- CreateProject.svelte -->
<script>
	import { Row, Col, Button, Alert } from 'spaper';
	import ProjectForm from '$lib/components/ProjectForm.svelte';
	import { authStore } from '$lib/stores/authStore.js';
	import { createProject } from '$lib/api/projectsApi';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { user } from '$lib/auth';
  
	let projectData = {
	  name: '',
	  description: '',
	  category: '',
	  tags: [],
	  collaborators: [],
	};
  
	let isFormValid = false;
	let errorMessage = '';
  
	function handleSubmit(event) {
	  isFormValid = event.detail.isValid;
	  projectData = event.detail.projectData;
  
	  if (!isFormValid) {
		errorMessage = 'Please fill in all required fields correctly.';
		return;
	  }
  
	  const project = {
		...projectData,
		createdAt: new Date(),
		createdBy: $authStore.displayName,
	  };
  
	  createProject(project)
		.then(() => {
		  goto('/');
		})
		.catch((error) => {
		  console.error('Error creating project:', error);
		  errorMessage = 'An error occurred while creating the project. Please try again.';
		});
	}
  
	onMount(async () => {
	  const authUser = await user.subscribe((value) => value);
	  if (!authUser) {
		goto('/login');
	  }
	});
  </script>
  
  <div>
	{#if errorMessage}
	  <Alert type="danger">
		{errorMessage}
	  </Alert>
	{/if}
	<Row>
	  <Col fill>
		<h1>Create Project</h1>
		<p>A platform for students to share and discuss their projects.</p>
		<ProjectForm projectData={projectData} on:submit={handleSubmit} />
	  </Col>
	</Row>
  </div>