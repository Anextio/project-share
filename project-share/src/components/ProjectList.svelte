<script>
  import ProjectCard from './ProjectCard.svelte';
  import {Row, Col} from 'spaper';

  let projects = [
    { id: 1, title: 'Project 1', description: 'Description 1' },
    { id: 2, title: 'Project 2', description: 'Description 2' },
    { id: 3, title: 'Project 3', description: 'Description 3' },
  ];
</script>

<h2>Explore Projects</h2>
  <h3>Featured Projects</h3>
  <Row>
    {#each projects as project}
    <Col col="4">
      <ProjectCard title={project.title} description={project.description} /> 
    </Col>  
    {/each} 
  </Row>     
  <Row center>
    <Col>
      <a class="paper-btn" href="/projects">View All</a>
    </Col>  
    </Row>   
  