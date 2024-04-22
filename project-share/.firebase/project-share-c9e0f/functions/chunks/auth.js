import { a as auth } from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { w as writable } from "./index2.js";
const user = writable(null);
onAuthStateChanged(auth, (currentUser) => {
  user.set(currentUser);
});
