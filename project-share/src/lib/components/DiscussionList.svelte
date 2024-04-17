<script>
	import { onMount } from 'svelte';
	import { Row, Col, Card, Button } from 'spaper';
	import { goto } from '$app/navigation';
  
	export let projectId;
  
	let discussions = [];
	let loading = true;
	let error = null;
  
	onMount(async () => {
	  try {
		const response = await fetch(`/api/discussions?projectId=${projectId}`);
		if (response.ok) {
		  discussions = await response.json();
		} else {
		  error = 'Failed to fetch discussions';
		}
	  } catch (err) {
		error = 'An error occurred while fetching discussions';
	  } finally {
		loading = false;
	  }
	});
  </script>
  
  <Row>
	<Col>
	  <h2>Discussions</h2>
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
			<Button on:click={() => goto("/discussions/{discussion.id}")}>View Discussion</Button>
		  </Card>
		{/each}
	  {/if}
	</Col>
  </Row>
  
  <style>
	.discussion-card {
	  margin-bottom: 20px;
	}
  
	.discussion-card h3 {
	  font-size: 18px;
	  margin-bottom: 10px;
	}
  
	.discussion-card p {
	  margin-bottom: 5px;
	}
  </style>