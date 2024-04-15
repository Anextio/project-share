<script>
    import { page } from '$app/stores';
  
    let searchResults = {
      users: [],
      projects: [],
      discussions: [],
    };
  
    $: {
      if ($page.url.searchParams.has('results')) {
        searchResults = JSON.parse($page.url.searchParams.get('results'));
      }
    }
  
    function hasResults() {
      return searchResults.users.length > 0 || searchResults.projects.length > 0 || searchResults.discussions.length > 0;
    }
  </script>
  
  <h2>Search Results</h2>
  
  {#if hasResults()}
    {#if searchResults.users.length > 0}
      <h3>Users</h3>
      {#each searchResults.users as user}
        <p>{user.displayName}</p>
      {/each}
    {:else}
      <p>No users found.</p>
    {/if}
  
    {#if searchResults.projects.length > 0}
      <h3>Projects</h3>
      {#each searchResults.projects as project}
        <p>{project.name}</p>
      {/each}
    {:else}
      <p>No projects found.</p>
    {/if}
  
    {#if searchResults.discussions.length > 0}
      <h3>Discussions</h3>
      {#each searchResults.discussions as discussion}
        <p>{discussion.title}</p>
      {/each}
    {:else}
      <p>No discussions found.</p>
    {/if}
  {:else}
    <p>No results found for your search.</p>
  {/if}