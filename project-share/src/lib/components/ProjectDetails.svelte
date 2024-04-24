<script>
	import { Row, Col, Badge, Card } from 'spaper';

	export let project;
</script>

<div class="ml-2">
	<Row>
		<Col>
			<h2>{project.name}</h2>
			<p>{project.description}</p>
		</Col>
	</Row>

	<Row>
		<Col>
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
</div>

<style>
	.collaborator {
		display: flex;
		flex-direction: column;
	}

	.collaborator span {
		margin-bottom: 5px;
	}
</style>
