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
      onAuthStateChanged(auth, (user) => {
        if (user) {
          set({
            userId: user.uid,
            displayName: user.displayName,
            email: user.email
          });
          goto(window.location.pathname);
        } else {
          set(null);
        }
      });
    },
    signOut: () => {
      auth.signOut();
      localStorage.removeItem('user');
    },
    updateProfile: (displayName, email) => {
      update((currentUser) => {
        if (currentUser) {
          return {
            ...currentUser,
            displayName: displayName,
            email: email
          };
        }
        return currentUser;
      });
    },
    getCurrentUser,
  };
};

export const authStore = createAuthStore();