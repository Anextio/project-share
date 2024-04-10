<script>
    import { Row, Col, Button } from 'spaper';
    import ProjectForm from '../../../components/ProjectForm.svelte';
    import CollaboratorList from '../../../components/CollaboratorList.svelte';
    import TimelineList from '../../../components/TimelineList.svelte';
    import ResourceList from '../../../components/ResourceList.svelte';
    // Add any necessary imports or component logic
  </script>
  
  <div class="container">
    <Row>
      <Col>
        <h1>Create Project</h1>
        <p>A platform for students to share and discuss their projects.</p>
        
        <ProjectForm />
        <CollaboratorList />
        <TimelineList />
        <ResourceList />
  
        <Button>Save</Button>
        <Button>Cancel</Button>
      </Col>
    </Row>
</div>