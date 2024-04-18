<script>
	import { Row, Col, Badge } from 'spaper';

	export let project;

	$: console.log(project)
</script>

<Row>
	<Col>
		<h2>{project.name}</h2>
		<p>{project.description}</p>
	</Col>
</Row>

<Row>
	<Col>
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
	</Col>
</Row>
