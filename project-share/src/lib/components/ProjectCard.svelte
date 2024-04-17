<!-- ProjectCard.svelte -->
<script>
	import { Card, Button, Badge } from 'spaper';
	export let project = { name: '', description: '', category: '', tags: [], files: [] };
</script>
<Card class="project-card">
	<div class="project-header">
		<div>
			<label for="project-name" class="label">Project Name:</label>
			<h3 id="project-name">{project.name}</h3>
		</div>
		<div>
			<label for="project-category" class="label">Category:</label>
			<Badge type="success" id="project-category">{project.category}</Badge>
		</div>
	</div>
	<div class="project-body">
		<div>
			<label for="project-description" class="label">Description:</label>
			<p id="project-description">{project.description}</p>
		</div>
		<div class="project-tags">
			<label for="project-tags" class="label">Tags:</label>
			<div id="project-tags">
				{#each project.tags as tag}
					<Badge type="success">{tag}</Badge>
				{/each}
			</div>
		</div>
		{#if project.files.length > 0}
			<div class="project-files">
				<label for="project-files" class="label">Files:</label>
				<ul id="project-files">
					{#each project.files as file}
						<li>{file}</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
	<div class="project-footer"><Button href="/projects/{project.id}">View Project</Button></div>
</Card>

<style>	
	.project-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}
	.project-header h3 {
		font-size: 1.25rem;
		margin: 0;
	}
	.project-body {
		flex: 1;
		overflow: auto;
		margin-bottom: 1rem;
	}
	.label {
		font-weight: bold;
		display: block;
		margin-bottom: 0.5rem;
	}
	.project-tags {
		margin-top: 0.5rem;
	}
	.project-tags :global(.badge) {
		margin-right: 0.5rem;
	}
	.project-files {
		margin-top: 1rem;
	}
	.project-files ul {
		margin: 0;
		padding-left: 1.5rem;
	}
	.project-footer {
		text-align: right;
	}
</style>
