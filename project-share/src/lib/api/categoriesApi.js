import { db } from '$lib/firebase';
import { collection, getDocs, doc, updateDoc, increment } from 'firebase/firestore';

const categoryCollection = collection(db, 'categories');

export async function getCategories() {
	const categoriesCollection = collection(db, 'categories');
	const querySnapshot = await getDocs(categoriesCollection);
	const categories = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
	return categories;
}

export async function incrementCategoryProjectCount(categoryId) {
	const categoryRef = doc(db, 'categories', categoryId);
	await updateDoc(categoryRef, {
		projectCount: increment(1)
	});
}

export async function decrementCategoryProjectCount(categoryId) {
	const categoryRef = doc(db, 'categories', categoryId);
	await updateDoc(categoryRef, {
		projectCount: increment(-1) 
	});
}