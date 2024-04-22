<script>
	import { auth } from '$lib/firebase.js';
	import {
		signInWithPopup,
		GoogleAuthProvider,
		signInWithEmailAndPassword,
		createUserWithEmailAndPassword
	} from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { Tabs, Tab, Button, Input, Card, Alert } from 'spaper';
	import { createUserProfile } from '$lib/api/userApi.js';
	import { page } from '$app/stores';

	let activeTab = 0;
	let redirectTo = '';
	let email = '';
	let password = '';
	let loading = false;
	let error = null;

	function getErrorMessage(errorCode) {
		switch (errorCode) {
			case 'auth/invalid-email':
				return 'Please enter a valid email address.';
			case 'auth/user-disabled':
				return 'Your account has been disabled. Please contact support.';
			case 'auth/user-not-found':
				return 'No account found with this email. Please sign up.';
			case 'auth/wrong-password':
				return 'Incorrect password. Please try again.';
			case 'auth/email-already-in-use':
				return 'The email address is already in use by another account.';
			case 'auth/weak-password':
				return 'The password is too weak. Please choose a stronger password.';
			default:
				return 'An error occurred. Please try again later.';
		}
	}

	function storeRedirectTo() {
		redirectTo = $page.url.searchParams.get('redirectTo') || '/';
	}

	async function signInWithGoogle() {
		const provider = new GoogleAuthProvider();
		try {
			loading = true;
			storeRedirectTo();
			const result = await signInWithPopup(auth, provider);
			const user = result.user;
			await createUserProfile(user.uid, user.displayName, user.email);
			console.log('Signed in with Google:', user);
			goto(redirectTo);
		} catch (err) {
			error = getErrorMessage(err.code);
			console.error('Error signing in with Google:', err);
		} finally {
			loading = false;
		}
	}

	async function signInWithEmail() {
		try {
			loading = true;
			storeRedirectTo();
			await signInWithEmailAndPassword(auth, email, password);
			goto(redirectTo);
		} catch (err) {
			error = getErrorMessage(err.code);
			console.error('Error signing in with email and password:', err);
		} finally {
			loading = false;
		}
	}

	async function signUpWithEmailAndPassword() {
		try {
			loading = true;
			storeRedirectTo();
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			const user = userCredential.user;

			// Prompt the user for their display name
			const displayName = prompt('Please enter your display name:');

			try {
				await createUserProfile(user.uid, displayName, user.email);
			} catch (error) {
				console.error('Error creating user profile:', error);
				// Handle the error, e.g., show an error message to the user
			}

			goto(redirectTo);
		} catch (err) {
			error = getErrorMessage(err.code);
			console.error('Error signing up with email and password:', err);
		} finally {
			loading = false;
		}
	}
</script>

<div class="flex min-h-screen items-center justify-center p-4">
	<Card class="w-full max-w-md p-6">
		<Tabs bind:activeTab data-testid="tabs">
			<Tab label="Sign In" data-testid="signInTab" />
			<Tab label="Sign Up" data-testid="signUpTab" />
		</Tabs>
		{#if error}
			<Alert severity="error" class="mt-4">{error}</Alert>
		{/if}
		{#if activeTab === 0}
			<div class="flex flex-col items-center">
				<form class="mt-6 flex w-full flex-col gap-4">
					<Input bind:value={email} label="Email" type="email" required class="w-full" />
					<Input bind:value={password} label="Password" type="password" required class="w-full" />
					<Button on:click={signInWithEmail} disabled={loading}>
						{#if loading}
							<span class="animate-spin">&#9696;</span>
						{/if}
						Sign in with Email
					</Button>
				</form>
				<Button
					on:click={signInWithGoogle}
					variant="contained"
					color="secondary"
					class="mt-4"
					disabled={loading}
				>
					{#if loading}
						<span class="animate-spin">&#9696;</span>
					{/if}
					Sign in with Google
				</Button>
			</div>
		{:else}
			<form class="mt-6 flex flex-col gap-4" data-testid="signUpForm">
				<Input bind:value={email} label="Email" type="email" required class="w-full" />
				<Input bind:value={password} label="Password" type="password" required class="w-full" />
				<Button on:click={signUpWithEmailAndPassword} disabled={loading}>
					{#if loading}
						<span class="animate-spin">&#9696;</span>
					{/if}
					Sign up with Email
				</Button>
			</form>
		{/if}
	</Card>
</div>
