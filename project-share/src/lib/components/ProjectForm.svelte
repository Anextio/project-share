<script>
    import { Form, Row, Col, Input, Select, Badge, Button } from 'spaper';
    import { createEventDispatcher } from 'svelte';
    import FileInput from './FileInput.svelte';
    import { getTags } from '$lib/api/tagsApi';
	import { getCategories } from '$lib/api/categoriesApi';

    export let projectData = {
        name: '',
        description: '',
        category: '',
        tags: [],
        files: []
    };

    let suggestions = [];  // Array to store tag suggestions for autocomplete
    let newTag = '';  // Variable to store the input value for a new tag
    let categoryOptions = [];

    const dispatch = createEventDispatcher();

    function handleFilesSelected(event) {
        projectData.files = event.detail;
        dispatch('input', { projectData });
    }

    function addTag() {
        if (newTag && !projectData.tags.includes(newTag) && projectData.tags.length < 5) {
            projectData.tags = [...projectData.tags, newTag];
            newTag = '';
        }
    }

    function removeTag(index) {
        projectData.tags = projectData.tags.filter((_, i) => i !== index);
    }

    let loadingData = loadData();

    async function loadData() {
        const [tags, categories] = await Promise.all([getTags(), getCategories()]);
        suggestions = tags.map(tag => tag.name);
        categoryOptions = categories.map(category => category.name);
    }

    $: isValid = projectData.name.trim() && projectData.description.trim() && projectData.category;
    $: dispatch('input', { projectData, isValid });
</script>

{#await loadingData}
    <p>Loading data...</p>
{:then}
    <Form data-testid="project-form">
        <h2>Project Information</h2>
        <Row>
            <Col>
                <Input label="Project Name" type="text" bind:value={projectData.name} placeholder="Enter project name" />
            </Col>
        </Row>
        <Row>
            <Col>
                <Input label="Project Description" type="text" bind:value={projectData.description} placeholder="Enter project description" />
            </Col>
        </Row>
        <Row>
            <Col>
                <Select label="Project Category" bind:value={projectData.category}>
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
                    <Input label="Project Tags" type="text" bind:value={newTag} placeholder="Enter a tag" disabled={projectData.tags.length >= 5} />
                    <Button on:click={addTag} disabled={!newTag || projectData.tags.length >= 5}>Add Tag</Button>
                </div>
            </Col>
        </Row>
        <FileInput on:filesSelected={handleFilesSelected} />
    </Form>
{:catch error}
    <p>Error loading data. Please try again later.</p>
{/await}

<style>
    .tag-wrapper {
        cursor: pointer;
    }
</style>