<script>
  import { onMount } from 'svelte';
  import ProjectReport from '$lib/components/reports/ProjectReport.svelte';
  import DiscussionReport from '$lib/components/reports/DiscussionReport.svelte';
  import { getAllProjects } from '$lib/api/projectsApi.js';
  import { getDiscussions } from '$lib/api/discussionsApi.js';

  let projects = [];
  let discussions = [];

  async function fetchData() {
    try {
      projects = await getAllProjects();
      discussions = await getDiscussions();
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }

  onMount(fetchData);
</script>

<h1>Reports</h1>

{#if projects.length === 0 || discussions.length === 0}
  <p>Loading data...</p>
{:else}
  <ProjectReport {projects} />
  <DiscussionReport {discussions} />
{/if}