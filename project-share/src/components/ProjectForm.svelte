<script>
	// @ts-nocheck

	import { Form, Row, Col, Input, Select } from 'spaper';

	let selectedFile = null;

	function handleFileChange(event) {
		selectedFile = event.target.files[0];
	}
</script>

<Form>
	<h2>Project Information</h2>
	<Row>
		<Col>
			<Input label="Project Name" type="text" id="project-name" placeholder="Enter project name" />
		</Col>
	</Row>
	<Row>
		<Col>
			<Input
				label="Project Description"
				type="textarea"
				id="project-description"
				placeholder="Enter project description"
			/>
		</Col>
	</Row>
	<Row>
		<Col>
			<Select label="Project Category" id="project-category">
				<option>Select Category</option>
				<!-- Add category options -->
			</Select>
		</Col>
	</Row>
	<Row>
		<Col>
			<Input label="Project Tags" type="text" id="project-tags" placeholder="Enter project tags" />
		</Col>
	</Row>
	<Row>
		<Col>
			<Input
				label="Project Files"
				type="file"
				id="project-image"
				multiple
				on:change={handleFileChange}
			/>
		</Col>
	</Row>
</Form>
