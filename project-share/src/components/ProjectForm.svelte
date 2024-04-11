<script>
	import { Form, Row, Col, Input, Select } from 'spaper';
	import { createEventDispatcher } from 'svelte';
	import FileInput from './FileInput.svelte';

	export let projectData = {
		name: '',
		description: '',
		category: '',
		tags: '',
		files: []
	};

	const dispatch = createEventDispatcher();

	function handleFilesSelected(event) {
		projectData.files = event.detail;
		dispatch('input', projectData);
	}

	$: {
		dispatch('input', projectData);
	}
</script>

<Form>
	<h2>Project Information</h2>
	<Row>
		<Col>
			<Input
				label="Project Name"
				type="text"
				bind:value={projectData.name}
				placeholder="Enter project name"
			/>
		</Col>
	</Row>
	<Row>
		<Col>
			<Input
				label="Project Description"
				type="textarea"
				bind:value={projectData.description}
				placeholder="Enter project description"
			/>
		</Col>
	</Row>
	<Row>
		<Col>
			<Select label="Project Category" bind:value={projectData.category}>
				<option value="">Select Category</option>
				<!-- Add category options -->
			</Select>
		</Col>
	</Row>
	<Row>
		<Col>
			<Input
				label="Project Tags"
				type="text"
				bind:value={projectData.tags}
				placeholder="Enter project tags (comma-separated)"
			/>
		</Col>
	</Row>
	<!-- File input component -->
	<FileInput on:filesSelected={handleFilesSelected} />
</Form>
