<script>
    import { Row, Col, Card, Button } from 'spaper';
  	import { authStore } from '../../stores/authStore.js';
	import Auth from '../../components/Auth.svelte';
  
    let user = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      avatar: '/path/to/avatar.jpg',
      // Add more user properties as needed
    };
  
    let projects = [
      // Sample user projects
      {
        id: '1',
        title: 'Project 1',
        description: 'This is project 1',
      },
      {
        id: '2',
        title: 'Project 2',
        description: 'This is project 2',
      },
      // Add more user projects as needed
    ];
  
    let discussions = [
      // Sample user discussions
      {
        id: '1',
        title: 'Discussion 1',
        description: 'This is discussion 1',
      },
      {
        id: '2',
        title: 'Discussion 2',
        description: 'This is discussion 2',
      },
      // Add more user discussions as needed
    ];
  </script>
  {#if $authStore}
  <div class="container">
    <Row>
      <Col md="4">
        <Card>
          <img src={user.avatar} alt="User Avatar" />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.bio}</p>
          <Button>Edit Profile</Button>
        </Card>
      </Col>
      <Col md="8">
        <h2>Projects</h2>
        {#each projects as project}
          <Card>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href="/projects/{project.id}">View Project</a>
          </Card>
        {/each}
  
        <h2>Discussions</h2>
        {#each discussions as discussion}
          <Card>
            <h3>{discussion.title}</h3>
            <p>{discussion.description}</p>
            <a href="/discussions/{discussion.id}">View Discussion</a>
          </Card>
        {/each}
      </Col>
    </Row>
  </div>
  {:else}
  <Auth />
{/if}