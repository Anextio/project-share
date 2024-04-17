<script>
	import { Table, Button } from 'spaper';
	import { createEventDispatcher } from 'svelte';
  
	let collaborators = [];
	let newCollaborator = { name: '', email: '', role: '' };
  
	const dispatch = createEventDispatcher();
  
	function addCollaborator() {
	  collaborators = [...collaborators, newCollaborator];
	  newCollaborator = { name: '', email: '', role: '' };
	  dispatch('collaboratorsUpdated', collaborators);
	}
  </script>
  
  <div>
	<h2>Collaborators</h2>
	<Table>
	  <!-- ... (existing table code) -->
	  <tbody>
		{#each collaborators as collaborator}
		  <tr>
			<td>{collaborator.name}</td>
			<td>{collaborator.email}</td>
			<td>{collaborator.role}</td>
			<td></td>
		  </tr>
		{/each}
	  </tbody>
	</Table>
	<!-- Add form inputs for new collaborator -->
	<Button on:click={addCollaborator}>Add Collaborator</Button>
  </div>