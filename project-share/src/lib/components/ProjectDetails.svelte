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
		<ul>
			{#each project.collaborators as collaborator}
				<li>{collaborator}</li>
			{/each}
		</ul>
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
