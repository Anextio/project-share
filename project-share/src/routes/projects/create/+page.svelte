<script>
	import { Row, Col, Button, Alert } from 'spaper';
	import ProjectForm from '$lib/components/ProjectForm.svelte';
	import CollaboratorList from '$lib/components/CollaboratorList.svelte';
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
		files: []
	};

	let collaborators = [];
	let isFormValid = false;
	let errorMessage = '';

	function handleSubmit() {
		if (!isFormValid) {
			errorMessage = 'Please fill in all required fields correctly.';
			return;
		}

		const project = {
			...projectData,
			collaborators,
			createdAt: new Date(),
			createdBy: $authStore.displayName
		};

		createProject(project)
			.then((createdProject) => {
				console.log('Project created:', createdProject);
				goto('/');
			})
			.catch((error) => {
				console.error('Error creating project:', error);
				errorMessage = 'An error occurred while creating the project. Please try again.';
			});
	}

	function handleProjectInput(event) {
		projectData = event.detail.projectData;
		isFormValid = event.detail.isValid;
	}

	function handleCollaboratorsUpdated(event) {
		collaborators = event.detail;
	}

	function handleCancel() {
		history.back();
	}

	onMount(async () => {
		const authUser = await user.subscribe((value) => value);
		if (!authUser) {
			goto('/login');
		}
	});
</script>

<div class="container">
	{#if errorMessage}
		<Alert type="danger">
			{errorMessage}
		</Alert>
	{/if}

	<Row>
		<Col>
			<h1>Create Project</h1>
			<p>A platform for students to share and discuss their projects.</p>
			<ProjectForm bind:projectData on:input={handleProjectInput} />
			<CollaboratorList on:collaboratorsUpdated={handleCollaboratorsUpdated} />
			<Button on:click={handleSubmit} disabled={!isFormValid}>Save</Button>
			<Button on:click={handleCancel}>Cancel</Button>
		</Col>
	</Row>
</div>
