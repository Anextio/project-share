<!-- ProjectCard.svelte -->
<script>
	import { Card, Button, Badge } from 'spaper';
  
	export let project = {
	  name: '',
	  description: '',
	  category: '',
	  tags: [],
	  files: []
	};
  </script>
  
  <Card>
	<div class="project-header">
	  <h3>{project.name}</h3>
	  <Badge>{project.category}</Badge>
	</div>
	<div class="project-body">
	  <p>{project.description}</p>
	  <div class="project-tags">
		{#each project.tags as tag}
		  <Badge>{tag}</Badge>
		{/each}
	  </div>
	  <div class="project-files">
		<p>Files:</p>
		<ul>
		  {#each project.files as file}
			<li>{file}</li>
		  {/each}
		</ul>
	  </div>
	</div>
	<div class="project-footer">
	  <Button href="/projects/{project.id}">View Project</Button>
	</div>
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
	  margin-bottom: 1rem;
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