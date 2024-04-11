// src/stores/authStore.js
import { writable } from 'svelte/store';
import { auth } from '$lib/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { goto } from '$app/navigation';

const createAuthStore = () => {
  const { subscribe, set } = writable(null);

  return {
    subscribe,
    init: () => {
      onAuthStateChanged(auth, (user) => {
        set(user);
        if (user) {
            goto(window.location.pathname);
        }
      });
    },
    signOut: () => {
      auth.signOut();
    },
  };
};

export const authStore = createAuthStore();