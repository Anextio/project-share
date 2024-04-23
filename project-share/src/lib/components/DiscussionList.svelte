<script>
	import { onMount } from 'svelte';
	import { Row, Col, Card, Button } from 'spaper';
	import { goto } from '$app/navigation';
	import { getDiscussionsByProjectId } from '$lib/api/discussionsApi'
  
	export let projectId;
  
	let discussions = [];
	let loading = true;
	let error = null;
  
	onMount(async () => {
	  try {
		discussions = await getDiscussionsByProjectId(projectId);		
	  } catch (err) {
		error = 'An error occurred while fetching discussions';
	  } finally {
		loading = false;
	  }
	});
  
	function handleAddDiscussion() {
	  goto(`/discussions/create`);
	}
  </script>
  
  <Row>
	<Col>
	  <div class="discussion-header">
		<h2>Discussions</h2>
		<Button on:click={handleAddDiscussion}>Add Discussion</Button>
	  </div>
  
	  {#if loading}
		<p>Loading discussions...</p>
	  {:else if error}
		<p>{error}</p>
	  {:else if discussions.length === 0}
		<p>No discussions found for this project.</p>
	  {:else}
		{#each discussions as discussion}
		  <Card class="discussion-card">
			<h3>{discussion.title}</h3>
			<p>Started by: {discussion.startedBy}</p>
			<p>Date and Time: {discussion.dateTime}</p>
			<p>Replies: {discussion.replies}</p>
			<p>{discussion.description}</p>
			<Button on:click={() => goto(`/discussions/${discussion.id}`)}>View Discussion</Button>
		  </Card>
		{/each}
	  {/if}
	</Col>
  </Row>
  