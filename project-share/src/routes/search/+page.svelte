<script>
  import { page } from '$app/stores';
  import { searchAll } from '$lib/api/searchApi';
  import { onMount } from 'svelte';
  import { Card, Row, Col } from 'spaper';

  let searchQuery = '';
  let searchResults = {
    users: [],
    projects: [],
    discussions: [],
  };
  let loading = false;

  onMount(async () => {
    searchQuery = $page.url.searchParams.get('q') || '';
    if (searchQuery) {
      await performSearch();
    }
  });

  async function performSearch() {
    loading = true;
    searchResults = await searchAll(searchQuery);
    loading = false;

    console.log("Search results: ", searchResults)
  }
</script>

<div class="container">
  <h2>Search Results for "{searchQuery}"</h2>
  {#if loading}
    <div class="loading-container">
      <p>Loading search results...</p>
    </div>
  {:else if searchResults.users.length > 0 || searchResults.projects.length > 0 || searchResults.discussions.length > 0}
    
      <Row>
        <Col>
          <h3>Users</h3>
          <div class="card-grid">
            {#if searchResults.users.length > 0}
            {#each searchResults.users as user}
              <Card>
                <h4>{user.displayName}</h4>
                <p>{user.email}</p>
                <a href="/users/{user.id}">View Profile</a>
              </Card>
            {/each}
            {:else}
            <p>No Users Match The Search Term</p>
            {/if}
          </div>
        </Col>
      </Row>  
    
      <Row>
        <Col>
          <h3>Projects</h3>
          <div class="card-grid">
            {#if searchResults.projects.length > 0}
            {#each searchResults.projects as project}
              <Card>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <a href="/projects/{project.id}">View Project</a>
              </Card>
            {/each}
            {:else}
            <p>No Projects Match The Search Term</p>
            {/if}
          </div>
        </Col>
      </Row>
   
      <Row>
        <Col>
          <h3>Discussions</h3>
          <div class="card-grid"> 
            {#if searchResults.discussions.length > 0}
            {#each searchResults.discussions as discussion}
              <Card>
                <h4>{discussion.title}</h4>
                <p>{discussion.description}</p>
                <a href="/discussions/{discussion.id}">View Discussion</a>
              </Card>
            {/each}
            {:else}
            <p>No Discussions Match The Search Term</p>
            {/if}
          </div>
        </Col>
      </Row>
    
    {:else}
    <p>No results found for your search.</p>
  {/if}
</div>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }

  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
  }
</style>