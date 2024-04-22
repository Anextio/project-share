import { w as writable } from "./index2.js";
import { a as auth } from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { g as goto } from "./client.js";
const createAuthStore = () => {
  const { subscribe, set, update } = writable(null);
  const getCurrentUser = () => {
    const user = localStorage.getItem("user");
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
          await user.reload();
          set(user);
          localStorage.setItem("user", JSON.stringify(user));
          goto();
        } else {
          set(null);
          localStorage.removeItem("user");
        }
      });
    },
    signOut: () => {
      auth.signOut();
      localStorage.removeItem("user");
    },
    getCurrentUser
  };
};
const authStore = createAuthStore();
export {
  authStore as a
};
