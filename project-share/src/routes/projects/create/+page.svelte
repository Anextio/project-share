<script>
	import { Row, Col, Button } from 'spaper';
	import ProjectForm from '../../../components/ProjectForm.svelte';
	import CollaboratorList from '../../../components/CollaboratorList.svelte';
	import { authStore } from '../../../stores/authStore.js';
	import Auth from '../../../components/Auth.svelte';
	import { createProject } from '$lib/projectsApi';

	let projectData = {
		name: '',
		description: '',
		category: '',
		tags: [],
		files: []
	};
	let collaborators = [];

	function handleSubmit() {
		const project = {
			...projectData,
			collaborators,
			createdAt: new Date(),
			createdBy: $authStore.userId // Assumes the user ID is stored in the authStore
		};

		createProject(project)
			.then((createdProject) => {
				console.log('Project created:', createdProject);
				// Handle successful project creation (e.g., show success message, redirect to project page)
			})
			.catch((error) => {
				console.error('Error creating project:', error);
				// Handle error (e.g., show error message)
			});
	}
	function handleProjectInput(event) {
		projectData = event.detail;
	}

	function handleCollaboratorsUpdated(event) {
		collaborators = event.detail;
	}

	function handleCancel() {
		history.back();
	}
</script>

{#if $authStore}
	<div class="container">
		<Row>
			<Col>
				<h1>Create Project</h1>
				<p>A platform for students to share and discuss their projects.</p>
				<ProjectForm bind:projectData on:input={handleProjectInput} />
				<CollaboratorList on:collaboratorsUpdated={handleCollaboratorsUpdated} />
				<Button on:click={handleSubmit}>Save</Button>
				<Button on:click={handleCancel}>Cancel</Button>
			</Col>
		</Row>
	</div>
{:else}
	<Auth />
{/if}
