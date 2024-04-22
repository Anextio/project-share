import { db } from '$lib/firebase';
import { collection, getDocs, doc, updateDoc, increment, query, where, addDoc } from 'firebase/firestore';

const tagCollection = collection(db, 'tags');

export async function getTags() {
  const querySnapshot = await getDocs(tagCollection);
  const tags = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return tags;
}

export async function getExistingTag(tag) {
  const q = query(tagCollection, where('name', '==', tag));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const tagDoc = querySnapshot.docs[0];
    return { id: tagDoc.id, ...tagDoc.data() };
  }
  return null;
}

export async function updateTagProjectCount(tagId, increment) {
  const tagRef = doc(db, 'tags', tagId);
  await updateDoc(tagRef, { projectCount: increment });
}

export async function updateTagDiscussionCount(tagId, increment) {
  const tagRef = doc(db, 'tags', tagId);
  await updateDoc(tagRef, { discussionCount: increment });
}

export async function addNewTag(tag) {
  await addDoc(tagCollection, { name: tag, projectCount: 0, discussionCount: 0 });
}

export async function incrementTagProjectCount(tagId) {
  await updateTagProjectCount(tagId, increment(1));
}

export async function decrementTagProjectCount(tagId) {
  await updateTagProjectCount(tagId, increment(-1));
}

export async function incrementTagDiscussionCount(tagId) {
  await updateTagDiscussionCount(tagId, increment(1));
}

export async function decrementTagDiscussionCount(tagId) {
  await updateTagDiscussionCount(tagId, increment(-1));
}