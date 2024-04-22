import { d as db } from "./firebase.js";
import { collection, getDocs } from "firebase/firestore";
import "./tagsApi.js";
const discussionsCollection = collection(db, "discussions");
async function getDiscussions() {
  const querySnapshot = await getDocs(discussionsCollection);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
}
export {
  getDiscussions as g
};
