import { db } from '$lib/firebase';
import { collection, doc, getDocs, setDoc, addDoc, query, where } from 'firebase/firestore';

const discussionsCollection = collection(db, 'discussions');

export async function getDiscussions() {
	const querySnapshot = await getDocs(discussionsCollection);
	return querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data()
	}));
}

export async function addDiscussion(discussion) {
	const docRef = await addDoc(discussionsCollection, {
		...discussion,
		titleLower: discussion.title.toLowerCase()
	});
	return docRef.id;
}

export async function updateDiscussion(discussionId, updatedData) {
	const discussionRef = doc(db, 'discussions', discussionId);
	await setDoc(discussionRef, updatedData, { merge: true });
}

export async function getUserDiscussions(displayName) {
	try {
		const discussionsRef = collection(db, 'discussions');
		const q = query(discussionsRef, where('startedBy', '==', displayName));
		const querySnapshot = await getDocs(q);
		const discussions = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data()
		}));
		return discussions;
	} catch (error) {
		console.error('Error fetching user discussions:', error);
		return [];
	}
}
