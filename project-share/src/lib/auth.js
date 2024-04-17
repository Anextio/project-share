import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { writable } from 'svelte/store';

export const user = writable(null);

onAuthStateChanged(auth, (currentUser) => {
  user.set(currentUser);
});