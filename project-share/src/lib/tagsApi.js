import { db } from '$lib/firebase';
import { collection, getDocs, doc, updateDoc, increment } from 'firebase/firestore';

const tagCollection = collection(db, 'tags');

export async function getTags() {
	const tagCollection = collection(db, 'tags');
	const querySnapshot = await getDocs(tagCollection);
	const tags = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
	return tags;
}

export async function incrementCategoryProjectCount(tagId) {
	const tagRef = doc(db, 'tags', tagId);
	await updateDoc(tagRef, {
		projectCount: increment(1)
	});
}

export async function decrementCategoryProjectCount(tagId) {
	const tagRef = doc(db, 'tags', tagId);
	await updateDoc(tagRef, {
		projectCount: increment(-1) 
	});
}