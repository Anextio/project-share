<!-- src/routes/logout/+page.svelte -->
<script>
  import { signOut } from 'firebase/auth';
  import { auth } from '$lib/firebase';

  async function handleLogout() {
    try {
      await signOut(auth);
      // Redirect to the login page after successful logout
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