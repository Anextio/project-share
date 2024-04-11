import { json } from '@sveltejs/kit';
import { db } from '$lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function GET() {
  try {
    const discussionsCollection = collection(db, 'discussions');
    const querySnapshot = await getDocs(discussionsCollection);
    const discussions = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return json(discussions);
  } catch (error) {
    console.error('Error retrieving discussions:', error);
    return json({ error: 'Failed to retrieve discussions' }, { status: 500 });
  }
}