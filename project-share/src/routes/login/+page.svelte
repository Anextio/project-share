<script>
    import { signIn } from '@auth/sveltekit';
  </script>
  
  <button on:click={() => signIn('github')}>Sign in with GitHub</button>