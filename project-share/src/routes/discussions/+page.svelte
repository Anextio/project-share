<script>
	import { Row, Col, Card, Alert } from 'spaper';
	import { getDiscussions } from '$lib/api/discussionsApi';
	import DiscussionCard from '$lib/components/DiscussionCard.svelte';
	import CategoryCard from '$lib/components/CategoryCard.svelte';

	let discussions = [];
	let loadingData = loadData();

	async function loadData() {
		try {
			const fetchedDiscussions = await getDiscussions();
				
			discussions = fetchedDiscussions;
			
		} catch (error) {
			console.error('Error loading data:', error);
			throw error;
		}
	}
</script>

{#await loadingData}
	<p>Loading data...</p>
  {:then}
	<div >
	  <Row>
		<Col fill>
		  <h2>Discussion Threads</h2>
		  {#each discussions as discussion}
			<DiscussionCard {discussion} />
		  {/each}
		</Col>		
	  </Row>
	</div>
{:catch error}
	<Alert type="danger">Error loading data. Please try again later.</Alert>
{/await}

