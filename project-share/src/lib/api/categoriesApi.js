import { db } from '$lib/firebase';
import { collection, getDocs, doc, updateDoc, increment } from 'firebase/firestore';

const categoryCollection = collection(db, 'categories');

export async function getCategories() {
  const querySnapshot = await getDocs(categoryCollection);
  const categories = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return categories;
}

export async function updateCategoryProjectCount(categoryId, increment) {
  const categoryRef = doc(db, 'categories', categoryId);
  await updateDoc(categoryRef, { projectCount: increment });
}

export async function updateCategoryDiscussionCount(categoryId, increment) {
  const categoryRef = doc(db, 'categories', categoryId);
  await updateDoc(categoryRef, { discussionCount: increment });
}

export async function incrementCategoryProjectCount(categoryId) {
  await updateCategoryProjectCount(categoryId, increment(1));
}

export async function decrementCategoryProjectCount(categoryId) {
  await updateCategoryProjectCount(categoryId, increment(-1));
}

export async function incrementCategoryDiscussionCount(categoryId) {
  await updateCategoryDiscussionCount(categoryId, increment(1));
}

export async function decrementCategoryDiscussionCount(categoryId) {
  await updateCategoryDiscussionCount(categoryId, increment(-1));
}