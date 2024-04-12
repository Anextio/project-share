<script>
  import { onMount } from 'svelte';
  import { Row, Col, Card } from 'spaper';
  import { getAllProjects } from '$lib/projectsApi'

  let projects = [];

  async function loadProjects() {
    try {
      projects = await getAllProjects();
    } catch (error) {
      console.error('Error loading projects:', error);
    }
  }

  onMount(loadProjects);
</script>
<div class="container">
  <Row>
    {#each projects as project}
      <Col md="4">
        <Card>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href="/projects/{project.id}">View Project</a>
        </Card>
      </Col>
    {/each}
  </Row>
</div>