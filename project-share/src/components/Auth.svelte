<!-- src/components/Auth.svelte -->
<script>
import { auth } from '$lib/firebase.js';
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { goto } from '$app/navigation';
import { Tabs, Tab, Button, Input, Card } from 'spaper';

let activeTab = 0;

let lastPage = '';
let email = '';
let password = '';

function storeLastPage() {
  lastPage = window.location.pathname;
}

async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    storeLastPage();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log('Signed in with Google:', user);
    goto(lastPage);
    // Handle successful sign-in
  } catch (error) {
    console.error('Error signing in with Google:', error);
    // Handle sign-in error
  }
}

async function signInWithEmail() {
  try {
    storeLastPage();
    await signInWithEmailAndPassword(auth, email, password);
    // Redirect to the last page after successful login
    goto(lastPage);
  } catch (error) {
    console.error('Error signing in with email and password:', error);
    // Handle sign-in error
  }
}

async function signUpWithEmailAndPassword() {
  try {
    storeLastPage();
    await createUserWithEmailAndPassword(auth, email, password);
    // Redirect to the last page after successful sign-up
    goto(lastPage);
  } catch (error) {
    console.error('Error signing up with email and password:', error);
    // Handle sign-up error
  }
}
</script>
<div class="flex justify-center items-center min-h-screen p-4">
    <Card class="w-full max-w-md p-6">
      <Tabs {activeTab} on:change={(e) => (activeTab = e.detail)}>
        <Tab label="Sign In" />
        <Tab label="Sign Up" />
      </Tabs>
      {#if activeTab === 0}
        <div class="flex flex-col items-center">
          <form class="flex flex-col gap-4 mt-6 w-full">
            <Input bind:value={email} label="Email" type="email" required class="w-full" />
            <Input bind:value={password} label="Password" type="password" required class="w-full" />
            <Button on:click={signInWithEmail}>Sign in with Email</Button>
          </form>
          <Button on:click={signInWithGoogle} variant="contained" color="secondary" class="mt-4">Sign in with Google</Button>
        </div>
      {:else}
        <form class="flex flex-col gap-4 mt-6">
          <Input bind:value={email} label="Email" type="email" required class="w-full" />
          <Input bind:value={password} label="Password" type="password" required class="w-full" />
          <Button on:click={signUpWithEmailAndPassword}>Sign up with Email</Button>
        </form>
      {/if}
    </Card>
  </div>