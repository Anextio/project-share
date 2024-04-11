import { json } from '@sveltejs/kit';
import { db } from '$lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function GET() {
  try {
    const projectsCollection = collection(db, 'projects');
    const querySnapshot = await getDocs(projectsCollection);
    const projects = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return json(projects);
  } catch (error) {
    console.error('Error retrieving projects:', error);
    return json({ error: 'Failed to retrieve projects' }, { status: 500 });
  }
}