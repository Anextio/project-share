<script>
	import { Row, Col } from 'spaper';
	let categories = [
		{ id: 1, title: 'Category 1', projectCount: 10 },
		{ id: 2, title: 'Category 2', projectCount: 5 },
		{ id: 3, title: 'Category 3', projectCount: 8 }
	];
</script>

<div>
	<h2>Categories</h2>
	<Row>
		{#each categories as category}
			<Col col="4">
				<div class="card">
					<div class="card-body">
						<h4 class="card-title">{category.title}</h4>
						<p class="card-text">{category.projectCount} Projects</p>
					</div>
				</div>
			</Col>
		{/each}
		<!-- Add more category cards -->
	</Row>
</div>
