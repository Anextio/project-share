<script>
  import { authStore } from '$lib/stores/authStore';
  import { getUserProjects } from '$lib/api/projectsApi';
  import { getUserDiscussions } from '$lib/api/discussionsApi';
  import { Row, Col, Button } from 'spaper';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import DiscussionCard from '$lib/components/DiscussionCard.svelte';
	import { onMount } from 'svelte';
	import { user } from '$lib/auth';
	import { goto } from '$app/navigation';

  let userProjects = [];
  let userDiscussions = [];
  let loadingData = loadUserData();

  async function loadUserData() {
    console.log("Trying to load data")    

    
    userProjects = await getUserProjects($authStore.displayName);
    console.log("Projects were retrieved: ", userProjects);
    userDiscussions = await getUserDiscussions($authStore.displayName);
    console.log("Discussions were retrieved: ", userDiscussions);
  }

  onMount(async () => {
    const authUser = await user.subscribe((value) => value);
    if (!authUser) {
      goto('/login')
    }
  })
</script>

{#await loadingData}
  <p>Loading user data...</p>
{:then}
  <div class="container">
    <Row>
      <Col>
        <h1>Profile</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <div class="user-info">
          <h2>{$authStore.displayName}</h2>
          <p>{$authStore.email}</p>
          <Button href="/profile/edit">Edit Profile</Button>
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
{:catch error}
  <p>Error loading user data. Please try again later.</p>
{/await}