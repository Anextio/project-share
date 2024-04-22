<script>
	import { Navbar, Input, Button } from 'spaper';
	import { searchAll } from '$lib/api/searchApi.js';
	import { goto } from '$app/navigation';
	import { authStore } from '$lib/stores/authStore';
  
	let searchQuery = '';
	let user = null;
  
	authStore.subscribe((currentUser) => {
	  user = currentUser;
	});
  
	async function handleSearch() {
	  if (searchQuery.trim() !== '') {
		goto(`/search?q=${encodeURIComponent(searchQuery)}`);
	  }
	}
  
	function handleCreateProject() {
	  console.log('Create project clicked');
	  goto('/projects/create');
	}
  
	function handleLogin() {
	  goto('/login');
	}
  
	function handleLogout() {
	  authStore.signOut();
	  goto('/logout');
	}
  </script>
  
  <Navbar>
	<h3 slot="brand">
	  <Button on:click={() => goto('/')}>Logo</Button>
	</h3>
  
	<ul class="inline">
	  <li>
		<Input placeholder="Search" bind:value={searchQuery} />
	  </li>
	  <li>
		<Button size="small" on:click={handleSearch}>Search</Button>
	  </li>
	  <li></li>
	  <li><Button on:click={() => goto('/')}>Home</Button></li>
	  <li><Button on:click={() => goto('/projects')}>Projects</Button></li>
	  <li><Button on:click={() => goto('/discussions')}>Discussions</Button></li>
	  {#if user}
		<li><Button on:click={() => goto('/profile')}>Profile</Button></li>
		<li><Button size="small" on:click={handleLogout}>Logout</Button></li>
		<li><Button size="small" on:click={handleCreateProject}>Create Project</Button></li>
	  {:else}
		<li><Button size="small" on:click={handleLogin}>Login</Button></li>
	  {/if}
	</ul>
  </Navbar>