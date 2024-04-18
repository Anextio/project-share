// src/stores/authStore.js

import { writable } from 'svelte/store';
import { auth } from '$lib/firebase.js';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { goto } from '$app/navigation';

const createAuthStore = () => {
  const { subscribe, set, update } = writable(null);

  const getCurrentUser = () => {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  };

  return {
    subscribe,
    init: () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          // Wait for the user's profile to be fully loaded
          await user.reload();
          set(user);
          localStorage.setItem('user', JSON.stringify(user));
          goto(window.location.pathname);
        } else {
          set(null);
          localStorage.removeItem('user');
        }
      });
    },
    signOut: () => {
      auth.signOut();
      localStorage.removeItem('user');
    },
    getCurrentUser,
  };
};

export const authStore = createAuthStore();