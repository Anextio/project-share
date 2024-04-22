import { d as db } from "./firebase.js";
import { collection, increment, doc, updateDoc, getDocs, query, where, addDoc } from "firebase/firestore";
const categoryCollection = collection(db, "categories");
async function getCategories() {
  const querySnapshot = await getDocs(categoryCollection);
  const categories = querySnapshot.docs.map((doc2) => ({ id: doc2.id, ...doc2.data() }));
  return categories;
}
async function updateCategoryProjectCount(categoryId, increment2) {
  const categoryRef = doc(db, "categories", categoryId);
  await updateDoc(categoryRef, { projectCount: increment2 });
}
async function incrementCategoryProjectCount(categoryId) {
  await updateCategoryProjectCount(categoryId, increment(1));
}
const tagCollection = collection(db, "tags");
async function getTags() {
  const querySnapshot = await getDocs(tagCollection);
  const tags = querySnapshot.docs.map((doc2) => ({ id: doc2.id, ...doc2.data() }));
  return tags;
}
async function getExistingTag(tag) {
  const q = query(tagCollection, where("name", "==", tag));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const tagDoc = querySnapshot.docs[0];
    return { id: tagDoc.id, ...tagDoc.data() };
  }
  return null;
}
async function updateTagProjectCount(tagId, increment2) {
  const tagRef = doc(db, "tags", tagId);
  await updateDoc(tagRef, { projectCount: increment2 });
}
async function addNewTag(tag) {
  await addDoc(tagCollection, { name: tag, projectCount: 0, discussionCount: 0 });
}
async function incrementTagProjectCount(tagId) {
  await updateTagProjectCount(tagId, increment(1));
}
export {
  getTags as a,
  getExistingTag as b,
  addNewTag as c,
  incrementCategoryProjectCount as d,
  getCategories as g,
  incrementTagProjectCount as i
};
