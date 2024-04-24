<script>
  import { goto } from '$app/navigation';
  import { Row, Col, Card, Button, Input, Badge, Select } from 'spaper';
  import { addDiscussion } from '$lib/api/discussionsApi';
  import { getTags } from '$lib/api/tagsApi';
  import { getCategories } from '$lib/api/categoriesApi';
  import { onMount } from 'svelte';

  let title = '';
  let description = '';
  let tags = [];
  let newTag = '';
  let category = '';
  let error = null;
  let suggestions = [];
  let categoryOptions = [];
  let user = null;

  async function loadData() {
    const [fetchedTags, fetchedCategories] = await Promise.all([getTags(), getCategories()]);
    suggestions = fetchedTags.map(tag => tag.name);
    categoryOptions = fetchedCategories.map(category => category.name);
  }

  function addTag() {
    if (newTag && !tags.includes(newTag) && tags.length < 5) {
      tags = [...tags, newTag];
      newTag = '';
    }
  }

  function removeTag(index) {
    tags = tags.filter((_, i) => i !== index);
  }

  async function handleSubmit() {
    if (!title || !description || !category) {
      error = 'Please fill in all fields';
      return;
    }

    if (!user) {
      error = 'You must be logged in to create a discussion';
      goto('/login');
      return;
    }

    try {
      const discussion = {
        title,
        description,
        tags,
        category,
        startedBy: user.displayName,
        dateTime: new Date().toISOString(),
        replies: 0
      };
      const discussionId = await addDiscussion(discussion);
      if (discussionId) {
        goto('/discussions');
      } else {
        error = 'Failed to create discussion';
      }
    } catch (err) {
      error = 'An error occurred while creating the discussion';
    }
  }

  onMount(() => {
    const userString = localStorage.getItem('user');
    if (userString) {
      user = JSON.parse(userString);
    } else {
      // Redirect to login page if user is not logged in
      goto('/login');
    }
  });

  let loadingData = loadData();
</script>

{#await loadingData}
  <p>Loading data...</p>
{:then}
  <Row>
    <Col fill>
      <Card>
        <h2>Create Discussion</h2>
        {#if error}
          <p class="error">{error}</p>
        {/if}
        <form>
          <div class="form-group">
            <label for="title">Title:</label>
            <Input type="text" id="title" bind:value={title} block required />
          </div>
          <div class="form-group">
            <label for="description">Description:</label>
            <Input type="textarea" id="description" bind:value={description} required block />
          </div>
          <div class="form-group">
            <label for="category">Category:</label>
            <Select id="category" bind:value={category} block required>
              <option value="">Select Category</option>
              {#each categoryOptions as categoryName}
                <option value={categoryName}>{categoryName}</option>
              {/each}
            </Select>
          </div>
          <div class="form-group">
            <label>Tags:</label>
            <div>
              {#each tags as tag, index}
                <span class="tag-wrapper" on:click={() => removeTag(index)}>
                  <Badge type="success">{tag}</Badge>
                </span>
              {/each}
              <Input type="text" bind:value={newTag} placeholder="Enter a tag" disabled={tags.length >= 5} />
              <Button on:click={addTag} disabled={!newTag || tags.length >= 5}>Add Tag</Button>
            </div>
          </div>
          <Button on:click={handleSubmit}>Create Discussion</Button>
        </form>
      </Card>
    </Col>
  </Row>
{:catch error}
  <p>Error loading data. Please try again later.</p>
{/await}

<style>
  .error {
    color: red;
    margin-bottom: 10px;
  }
  .form-group {
    margin-bottom: 2rem;
    width: 50%;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  .tag-wrapper {
    cursor: pointer;
  }
</style>