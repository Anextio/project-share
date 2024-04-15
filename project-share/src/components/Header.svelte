<script>
	import { Navbar, Input, Button } from 'spaper';
	import { searchAll } from '$lib/searchApi.js';
  import { goto } from '$app/navigation';

	let searchQuery = '';
	async function handleSearch() {
    if (searchQuery.trim() !== '') {
      const searchResults = await searchAll(searchQuery);
      goto(`/search?results=${JSON.stringify(searchResults)}`);
    }
  }
	function handleCreateProject() {
		// Logic to handle the creation of a project
		console.log('Create project clicked');
		goto('/projects/create');
	}
</script>

<Navbar>
	<h3 slot="brand">
		<a href="/">Logo</a>
	</h3>

	<ul class="inline">
		<li>
			<Input placeholder="Search" bind:value={searchQuery} />
		</li>
		<li>
			<Button size="small" on:click={handleSearch}>Search</Button>
		</li>
		<li></li>
		<li><a href="/">Home</a></li>
		<li><a href="/projects">Projects</a></li>
		<li><a href="/discussions">Discussions</a></li>
		<li><a href="/profile">Profile</a></li>
		<li><Button size="small" on:click={handleCreateProject}>Create Project</Button></li>
	</ul>
</Navbar>
