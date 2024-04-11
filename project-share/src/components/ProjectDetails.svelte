<script>
	import { Row, Col, Badge } from 'spaper';

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
		<h3>Contributors</h3>
		<ul>
			{#each project.contributors as contributor}
				<li>{contributor}</li>
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
