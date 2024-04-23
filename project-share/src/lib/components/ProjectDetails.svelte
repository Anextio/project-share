<script>
	import { Row, Col, Badge, Card } from 'spaper';
  
	export let project;
  </script>
  
  <Row>
	<Col>
	  <h2>{project.name}</h2>
	  <p>{project.description}</p>
	</Col>
  </Row>
  
  <Row>
	<Col>
<<<<<<< Updated upstream
		<h3>Collaborators</h3>
		{#if project.collaborators.length > 0}
		<ul>
			{#each project.collaborators as collaborator}
				<li>{collaborator}</li>
			{/each}
		</ul>
		{:else}
		<p>No collaborators.</p>
		{/if}
	</Col>
    </Row>
    <Row>
	<Col>
		<h3>Tags</h3>
		{#if project.tags.length > 0}
		{#each project.tags as tag}
			<Badge type="success">{tag}</Badge>
		{/each}
		{:else}
		<p>No tags.</p>
		{/if}
=======
	  <h3>Collaborators</h3>
	  <Row>
		{#each project.collaborators as collaborator}
		  <Col>
			<Card>
			  <div class="collaborator">
				<span>{collaborator.name}</span>
				<span>{collaborator.email}</span>
				<span>{collaborator.role}</span>
			  </div>
			</Card>
		  </Col>
		{/each}
	  </Row>
>>>>>>> Stashed changes
	</Col>
  </Row>
  
  <Row>
	<Col>
	  <h3>Tags</h3>
	  {#each project.tags as tag}
		<Badge type="success">{tag}</Badge>
	  {/each}
	</Col>
  </Row>
  
  <style>
	.collaborator {
	  display: flex;
	  flex-direction: column;
	}
  
	.collaborator span {
	  margin-bottom: 5px;
	}
  </style>