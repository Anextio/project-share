// src/stores/authStore.js
import { writable } from 'svelte/store';
import { auth } from '$lib/firebase.js';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { goto } from '$app/navigation';

const createAuthStore = () => {
  const { subscribe, set, update } = writable(null);

  const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = getAuth().onAuthStateChanged(
        (user) => {
          update((currentUser) => {
            if (currentUser !== user) {
              if (user) {
                goto(window.location.pathname);
              }
              resolve(user);
            }
            return user;
          });
        },
        (error) => {
          reject(error);
        }
      );
    });
  };

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
    getCurrentUser,
  };
};

export const authStore = createAuthStore();