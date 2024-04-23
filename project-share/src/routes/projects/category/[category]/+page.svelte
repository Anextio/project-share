<script>
  import { onMount } from 'svelte';
  import { Row, Col } from 'spaper';
  import { getProjectsByCategory } from '$lib/api/projectsApi';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { page } from '$app/stores';

  let projects = [];
  let category = '';

  async function loadProjects(category) {
    try {
      projects = await getProjectsByCategory(category);
    } catch (error) {
      console.error('Error loading projects:', error);
    }
  }

  onMount(() => {
    category = $page.params.category;
    loadProjects(category);
  });
</script>

<div>
  <h2 class="category-heading">Projects in {category}</h2>
  <Row>
    {#each projects as project}
      <Col col="4">
        <ProjectCard {project} />
      </Col>
    {/each}
  </Row>
</div>

<style>
  .category-heading {
    margin-bottom: 2rem;
    margin-left: 2rem;
  }
</style>