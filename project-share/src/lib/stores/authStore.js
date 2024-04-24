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
          const userData = {
            userId: user.uid,
            displayName: user.displayName,
            email: user.email
          };
          set(userData);
          localStorage.setItem('user', JSON.stringify(userData));
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
    updateProfile: (displayName, email) => {
      update((currentUser) => {
        if (currentUser) {
          const updatedUser = {
            ...currentUser,
            displayName: displayName,
            email: email
          };
          localStorage.setItem('user', JSON.stringify(updatedUser));
          return updatedUser;
        }
        return currentUser;
      });
    },
    getCurrentUser,
  };
};

export const authStore = createAuthStore();