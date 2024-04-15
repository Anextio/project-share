<script>
    import { onMount } from 'svelte';
    import { Row, Col } from 'spaper';
    import { getProjectsByCategory } from '$lib/projectsApi';
    import ProjectCard from '../../../../components/ProjectCard.svelte';
    import { page } from '$app/stores';
  
    let projects = [];
    let category = '';
  
    async function loadProjects(category) {
      try {
        projects = await getProjectsByCategory(category);
        console.log(projects)
      } catch (error) {
        console.error('Error loading projects:', error);
      }
    }
  
    onMount(() => {
      category = $page.params.category;
      loadProjects(category);
    });
  </script>
  
  <div class="container">
    <h2>Projects in {category}</h2>
    <Row>
      {#each projects as project}
        <Col md="4">
          <ProjectCard {project} />
        </Col>
      {/each}
    </Row>
  </div>