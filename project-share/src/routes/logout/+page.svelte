<script>
  import { signOut } from 'firebase/auth';
  import { auth } from '$lib/firebase';
  import { goto } from '$app/navigation';
	import { authStore } from '$lib/stores/authStore';

  async function handleLogout() {
    try {
      authStore.signOut();
      await signOut(auth);      
      goto('/login');
    } catch (error) {
      console.error(error);
    }
  }
</script>

<div>
  <h1>Logout</h1>
  <p>Are you sure you want to log out?</p>
  <button on:click={handleLogout}>Log out</button>
</div>