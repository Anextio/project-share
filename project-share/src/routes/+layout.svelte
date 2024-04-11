<script>
	import '../app.pcss';
	import 'papercss/dist/paper.min.css';
	import Header from '../components/Header.svelte';
	import { handle } from '../auth/oauth.js'
	import sequelize from '../db.js';
	import '../models/User.js';

	export async function load() {
		await sequelize.sync();
	}
</script>

<Header />
<slot />
