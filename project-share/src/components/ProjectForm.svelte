<script>
	import { Form, Row, Col, Input, Select, Badge, Button } from 'spaper';
	import { createEventDispatcher } from 'svelte';
	import FileInput from './FileInput.svelte';
	import { getTags } from '$lib/tagsApi';
	import { onMount } from 'svelte';
	import { getCategories } from '$lib/categoriesApi';
  
	export let projectData = {
	  name: '',
	  description: '',
	  category: '',
	  tags: [],
	  files: []
	};
  
	let suggestions = []; // Array to store tag suggestions for autocomplete
	let newTag = ''; // Variable to store the input value for a new tag
	let categoryOptions = [];
  
	const dispatch = createEventDispatcher();
  
	function handleFilesSelected(event) {
	  projectData.files = event.detail;
	  dispatch('input', { projectData, isValid });
	}
  
	async function fetchTags() {
	  const tags = await getTags(); // Fetch tags from Firebase database
	  suggestions = tags.map((tag) => tag.name); // Extract tag names for suggestions
	}
  
	async function fetchCategories() {
	  const categories = await getCategories();
	  categoryOptions = categories.map((category) => category.name);
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
	  projectData.tags = projectData.tags.filter((_, i) => i !== index);
	}
  
	function validateName(name) {
	  return name.trim().length > 0;
	}
  
	function validateDescription(description) {
	  return description.trim().length > 0;
	}
  
	function validateCategory(category) {
	  return category.trim() !== '';
	}
  
	$: isValid = validateName(projectData.name) && validateDescription(projectData.description) && validateCategory(projectData.category);
  
	$: {
	  dispatch('input', { projectData, isValid });
	}
  
	// Fetch tags and categories when the component is mounted
	onMount(async () => {
	  await fetchTags();
	  await fetchCategories();
	});
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
		<Select
		  label="Project Category"
		  bind:value={projectData.category}
		>
		  <option value="">Select Category</option>
		  {#each categoryOptions as categoryName}
			<option value={categoryName}>{categoryName}</option>
		  {/each}
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
		  <Button on:click={addTag} disabled={!newTag || projectData.tags.length >= 5}>Add Tag</Button>
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