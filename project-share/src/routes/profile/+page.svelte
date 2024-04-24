<script>
  import { onMount } from 'svelte';
  import { authStore } from '$lib/stores/authStore';
  import { getUserProjects } from '$lib/api/projectsApi';
  import { getUserDiscussions } from '$lib/api/discussionsApi';
  import { Row, Col, Button, Card } from 'spaper';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import DiscussionCard from '$lib/components/DiscussionCard.svelte';
  import { goto } from '$app/navigation';

  let user = null;
  let userProjects = [];
  let userDiscussions = [];

  onMount(async () => {
    try {
      user = await authStore.getCurrentUser();
      if (user) {
        userProjects = await getUserProjects(user.displayName);
        userDiscussions = await getUserDiscussions(user.displayName);
      } else {
        goto('/login');
      }
    } catch (error) {
      console.error('Error loading profile data:', error);
    }
  });

  function goToReports() {
    goto('/reports');
  }
</script>

{#await authStore.getCurrentUser()}
  <p>Loading profile...</p>
{:then user}
  {#if user}
    <div>
      <Row>
        <Col fill>
          <Card>
            <h1>Profile</h1>
            <div class="user-info">
              <label for="displayName">Display Name:</label>
              <h4 id="displayName" class="mb-4">{user.displayName}</h4>
              <label for="email">Email:</label>
              <h4 id="email" class="mb-4">{user.email}</h4>
              <Button href="/profile/edit">Edit Profile</Button>
              <Button on:click={goToReports}>Go to Reports</Button>
            </div>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col fill>
          <h2>Projects</h2>
          {#each userProjects as project}
            <ProjectCard {project} />
          {/each}
        </Col>
      </Row>

      <Row>
        <Col fill>
          <h2>Discussions</h2>
          {#each userDiscussions as discussion}
            <DiscussionCard {discussion} />
          {/each}
        </Col>
      </Row>
    </div>
  {:else}
    <p>User not found. Please log in.</p>
  {/if}
{:catch error}
  <p>Error loading profile: {error.message}</p>
{/await}