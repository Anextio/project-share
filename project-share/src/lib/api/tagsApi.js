import { db } from '$lib/firebase';
import { collection, getDocs, doc, updateDoc, increment, query, where, setDoc, getDoc } from 'firebase/firestore';

const tagCollection = collection(db, 'tags');

export async function getTags() {
  const querySnapshot = await getDocs(tagCollection);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function getExistingTag(tagName) {
  const q = query(tagCollection, where('name', '==', tagName));
  const querySnapshot = await getDocs(q);
  return querySnapshot.empty ? null : { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };
}

async function updateTagField(tagName, field, value) {
  const tagRef = doc(db, 'tags', tagName);
  await updateDoc(tagRef, { [field]: value }, { merge: true });
}

export async function incrementTagProjectCount(tagName) {
  await updateTagField(tagName, 'projectCount', increment(1));
}

export async function decrementTagProjectCount(tagName) {
  const tagQuery = query(tagCollection, where("name", "==", tagName));
  const querySnapshot = await getDocs(tagQuery);

  if (!querySnapshot.empty) {
      const tagDoc = querySnapshot.docs[0]; // Assuming 'name' is unique and only one doc should match
      const tagRef = tagDoc.ref; // Document reference to perform updates

      // Check if projectCount is greater than 0 before decrementing
      const currentCount = tagDoc.data().projectCount;
      if (currentCount > 0) {
          await updateDoc(tagRef, { projectCount: increment(-1) });
          console.log(`Decrement successful for tag "${tagName}". New count: ${currentCount - 1}`);
      } else {
          console.log(`Project count is already zero for tag "${tagName}". Cannot decrement further.`);
      }
  } else {
      console.log(`Tag "${tagName}" does not exist. Skipping project count decrement.`);
  }
}

export async function incrementTagDiscussionCount(tagName) {
  await updateTagField(tagName, 'discussionCount', increment(1));
}

export async function decrementTagDiscussionCount(tagName) {
  await updateTagField(tagName, 'discussionCount', increment(-1));
}

export async function addNewTag(tagName) {
  const tagRef = doc(db, 'tags', tagName);
  await setDoc(tagRef, { name: tagName, projectCount: 0, discussionCount: 0 }, { merge: true });
}