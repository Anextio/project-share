<script>
	import { Button, Input, Select, Card, Row, Col } from 'spaper';
	import { createEventDispatcher } from 'svelte';
  
	let collaborators = [];
	let newCollaborator = { name: '', email: '', role: '' };
	let editIndex = -1;
  
	const dispatch = createEventDispatcher();
  
	function addOrUpdateCollaborator() {
	  if (editIndex === -1) {
		collaborators = [...collaborators, {...newCollaborator}];
	  } else {
		collaborators[editIndex] = {...newCollaborator};
		editIndex = -1;
	  }
	  newCollaborator = { name: '', email: '', role: '' };
	  dispatch('collaboratorsUpdated', collaborators);
	}
  
	function startEdit(index) {
	  newCollaborator = {...collaborators[index]};
	  editIndex = index;
	}
  
	function removeCollaborator(index) {
	  collaborators = collaborators.filter((_, i) => i !== index);
	  dispatch('collaboratorsUpdated', collaborators);
	}
  </script>
  <div>
	<h2>Collaborators</h2>
	<Row>
	  <Col col="3"><strong>Name</strong></Col>
	  <Col col="3"><strong>Email</strong></Col>
	  <Col col="3"><strong>Role</strong></Col>
	  <Col col="3"><strong>Actions</strong></Col>
	</Row>
	<ul>
	  {#each collaborators as collaborator, index}
		<li>
		  <Card>
			<Row>
			  <Col col="3">{collaborator.name}</Col>
			  <Col col="3">{collaborator.email}</Col>
			  <Col col="3">{collaborator.role}</Col>
			  <Col col="3">
				<Button on:click={() => startEdit(index)}>Edit</Button>
				<Button on:click={() => removeCollaborator(index)}>Remove</Button>
			  </Col>
			</Row>
		  </Card>
		</li>
	  {/each}
	</ul>
	<div class="form">
	  <div class="form-row">
		<label>Name:</label>
		<Input placeholder="Name" bind:value={newCollaborator.name} />
	  </div>
	  <div class="form-row">
		<label>Email:</label>
		<Input placeholder="Email" type="email" bind:value={newCollaborator.email} />
	  </div>
	  <div class="form-row">
		<label>Role:</label>
		<Select bind:value={newCollaborator.role}>
		  <option class="select-option" value="">Select Role</option>
		  <option class="select-option" value="Developer">Developer</option>
		  <option class="select-option" value="Designer">Designer</option>
		  <option class="select-option" value="Manager">Manager</option>
		</Select>
	  </div>
	  <Button on:click={addOrUpdateCollaborator}>
		{editIndex === -1 ? 'Add Collaborator' : 'Update Collaborator'}
	  </Button>
	</div>
  </div>
  <style>
	ul {
	  list-style: none;
	  padding: 0;
	}
  
	li {
	  margin-bottom: 8px;
	}
  
	.form {
	  margin-top: 20px;
	}
  
	.form-row {
	  display: flex;
	  align-items: center;
	  margin-bottom: 10px;
	}
  
	.form-row label {
	  width: 100px;
	  margin-right: 10px;
	}
  
	.select-option {
	  background-color: slategray;
	  color: white;
	}
  </style>