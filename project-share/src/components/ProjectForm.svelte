<script>
	import { Form, Row, Col, Input, Select, Badge, Button } from 'spaper';
	import { createEventDispatcher } from 'svelte';
	import FileInput from './FileInput.svelte';
	import { getTags } from '$lib/tagsApi';
	import { onMount } from 'svelte';

	export let projectData = {
		name: '',
		description: '',
		category: '',
		tags: [],
		files: []
	};
	let suggestions = []; // Array to store tag suggestions for autocomplete
	let newTag = ''; // Variable to store the input value for a new tag

	const dispatch = createEventDispatcher();

	function handleFilesSelected(event) {
		projectData.files = event.detail;
		dispatch('input', projectData);
	}

	async function fetchTags() {
		const tags = await getTags(); // Fetch tags from Firebase database
		suggestions = tags.map((tag) => tag.name); // Extract tag names for suggestions
	}

	function addTag() {
    if (newTag && projectData.tags.length < 5) {
      // Check if the tag already exists in the projectData.tags array
      const tagExists = projectData.tags.includes(newTag);
      
      if (!tagExists) {
        // Add the new tag only if it doesn't already exist
        projectData.tags = [...projectData.tags, newTag];
        newTag = '';
      }
    }
  }

	function removeTag(index) {
		console.log('HERE: ', index);
		projectData.tags = projectData.tags.filter((_, i) => i !== index);
	}

	$: {
		dispatch('input', projectData);
	}

	// Fetch tags when the component is mounted
	onMount(fetchTags);
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
			<div>
				{#each projectData.tags as tag, index}
					<span class="tag-wrapper" on:click={() => removeTag(index)}>
						<Badge type="success">{tag}</Badge>
					</span>
				{/each}
				<Input
					bind:value={newTag}
					placeholder="Enter a tag"
					disabled={projectData.tags.length >= 5}
				/>
				<Button on:click={addTag} disabled={!newTag || projectData.tags.length >= 5}>Add Tag</Button
				>
			</div>
		</Col>
	</Row>
	<!-- File input component -->
	<FileInput on:filesSelected={handleFilesSelected} />
</Form>

<style>
	.tag-wrapper {
		cursor: pointer;
	}
</style>
