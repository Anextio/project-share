<script>
	import '../app.pcss';
	import 'papercss/dist/paper.min.css';
	import Header from '../components/Header.svelte';
	import { onMount } from 'svelte';
	import { authStore } from '../stores/authStore';

	onMount(() => {
		authStore.init();
	})
</script>

<Header />
<slot />
