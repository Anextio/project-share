<script>
  import { authStore } from '../../stores/authStore';
  import { getUserProjects } from '$lib/projectsApi';
  import { getUserDiscussions } from '$lib/discussionsApi';
  import { Row, Col, Button } from 'spaper';
  import ProjectCard from '../../components/ProjectCard.svelte';
  import DiscussionCard from '../../components/DiscussionCard.svelte';
  import {onMount} from 'svelte';

  let userProjects = [];
  let userDiscussions = [];

  async function fetchUserData() {
    userProjects = await getUserProjects($authStore.userId);
    userDiscussions = await getUserDiscussions($authStore.userId);
  }

  // Fetch user data when the component is mounted
  onMount(fetchUserData);
</script>

<div class="container">
  <Row>
    <Col>
      <h1>Profile</h1>
    </Col>
  </Row>

  <Row>
    <Col>
      <div class="user-info">
        <h2>{$authStore.userName}</h2>
        <p>{$authStore.email}</p>
        <Button href="/edit-profile">Edit Profile</Button>
      </div>
    </Col>
  </Row>

  <Row>
    <Col>
      <h2>Projects</h2>
      {#each userProjects as project}
        <ProjectCard {project} />
      {/each}
    </Col>
  </Row>

  <Row>
    <Col>
      <h2>Discussions</h2>
      {#each userDiscussions as discussion}
        <DiscussionCard {discussion} />
      {/each}
    </Col>
  </Row>
</div>
