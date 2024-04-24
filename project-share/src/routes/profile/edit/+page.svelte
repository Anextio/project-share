<script>
	import { doc, updateDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase';
	import { Row, Col, Button, Input } from 'spaper';
	import { onMount } from 'svelte';
	import { user } from '$lib/auth';
	import { goto } from '$app/navigation';
	import { authStore } from '$lib/stores/authStore';
  
	let displayName = '';
	let email = '';
  
	async function updateProfile() {
	  try {
		const userId = $authStore?.userId;
		if (userId) {
		  const userRef = doc(db, 'users', userId);
		  await updateDoc(userRef, {
			displayName: displayName,
			displayNameLower: displayName.toLowerCase(),
			email: email
		  });
		  authStore.updateProfile(displayName, email);
		  goto("/profile")
		} else {
		  console.error('User ID is undefined');
		}
	  } catch (error) {
		console.error('Error updating profile:', error);
	  }
	}
  
	onMount(async () => {
	  const authUser = await user.subscribe((value) => value);
	  if (!authUser) {
		goto('/login');
	  } else {
		displayName = $authStore?.displayName || '';
		email = $authStore?.email || '';
	  }
	});
  </script>
  
  <div>
	<Row>
	  <Col>
		<h1>Edit Profile</h1>
	  </Col>
	</Row>
	<Row>
	  <Col>
		<form>
		  <Input label="Display Name" type="text" bind:value={displayName} required />
		  <Input label="Email" type="email" bind:value={email} required disabled />
		  <Button on:click={updateProfile}>Save Changes</Button>
		</form>
	  </Col>
	</Row>
  </div>