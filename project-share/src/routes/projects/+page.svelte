<script>
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { Row, Col, Card, Alert } from 'spaper';
  import { getAllProjects } from '$lib/api/projectsApi';

  let projects = [];
  let error = null;

  async function loadProjects() {
    try {
      projects = await getAllProjects();
    } catch (err) {
      console.error('Error loading projects:', err);
      error = 'Failed to load projects. Please try again later.';
    }
  }

  let projectsLoaded = loadProjects();
</script>

{#await projectsLoaded}
  <p>Loading projects...</p>
{:then}
  {#if error}
  <Alert severity="error" class="mt-4">{error}</Alert>
  {:else}
    <div>
      <h2 class="category-heading">Projects</h2>
      {#if projects.length > 0}
        <Row>
          {#each projects as project}
            <Col md="4">
              <ProjectCard project={project} />
            </Col>
          {/each}
        </Row>
      {:else}
        <p>No projects found.</p>
      {/if}
    </div>
  {/if}
{/await}

<style>
  .category-heading {
    margin-bottom: 2rem;
    margin-left: 2rem;
  }
</style>