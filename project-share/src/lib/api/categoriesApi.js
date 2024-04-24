import { db } from '$lib/firebase';
import { collection, getDocs, query, where, doc, updateDoc, increment } from 'firebase/firestore';

const categoryCollection = collection(db, 'categories');

export async function getCategories() {
  const querySnapshot = await getDocs(categoryCollection);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

async function getCategoryRefByName(categoryName) {
  const q = query(categoryCollection, where('name', '==', categoryName));
  const querySnapshot = await getDocs(q);
  
  if (querySnapshot.empty) {
    throw new Error(`Category "${categoryName}" not found`);
  }
  
  return querySnapshot.docs[0].ref;
}

async function updateCategoryField(categoryName, field, value) {
  const categoryRef = await getCategoryRefByName(categoryName);
  await updateDoc(categoryRef, { [field]: value });
}

export async function incrementCategoryProjectCount(categoryName) {
  await updateCategoryField(categoryName, 'projectCount', increment(1));
}

export async function decrementCategoryProjectCount(categoryName) {
  await updateCategoryField(categoryName, 'projectCount', increment(-1));
}

export async function incrementCategoryDiscussionCount(categoryName) {
  await updateCategoryField(categoryName, 'discussionCount', increment(1));
}

export async function decrementCategoryDiscussionCount(categoryName) {
  await updateCategoryField(categoryName, 'discussionCount', increment(-1));
}