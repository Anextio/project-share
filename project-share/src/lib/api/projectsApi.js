import { db } from '$lib/firebase';
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  addDoc,
  getDoc,
  doc,
<<<<<<< Updated upstream
  setDoc
=======
  setDoc,
  updateDoc,
  increment
>>>>>>> Stashed changes
} from 'firebase/firestore';
import { incrementCategoryProjectCount } from '$lib/api/categoriesApi';
import { getExistingTag, updateTagProjectCount, addNewTag, incrementTagProjectCount } from '$lib/api/tagsApi';

// Function: Get the 3 most discussed projects in the last 7 days
export async function getMostDiscussedProjects() {
	try {
		const oneWeekAgo = new Date();
		oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

		const projectsRef = collection(db, 'projects');
		const discussionsRef = collection(db, 'discussions');

		// Query to get projects with discussions in the last week
		const discussedProjectsQuery = query(
			discussionsRef,
			where('createdAt', '>=', oneWeekAgo),
			orderBy('createdAt', 'desc')
		);

		const discussedProjectsSnapshot = await getDocs(discussedProjectsQuery);
		const discussedProjectIds = discussedProjectsSnapshot.docs.map((doc) => doc.data().projectId);

		let projects = [];

		if (discussedProjectIds.length > 0) {
			// Query to get the discussed projects
			const projectsQuery = query(
				projectsRef,
				where('id', 'in', discussedProjectIds),
				orderBy('discussionCount', 'desc'),
				limit(3)
			);

			const projectsSnapshot = await getDocs(projectsQuery);
			projects = projectsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
		}

		if (projects.length < 3) {
			// Query to get additional projects to make up a total of 3
			const additionalProjectsQuery = query(
				projectsRef,
				orderBy('createdAt', 'desc'),
				limit(3 - projects.length)
			);

			const additionalProjectsSnapshot = await getDocs(additionalProjectsQuery);
			const additionalProjects = additionalProjectsSnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data()
			}));

			projects = [...projects, ...additionalProjects];
		}

		return projects;
	} catch (error) {
		console.error('Error retrieving most discussed projects:', error);
		throw error;
	}
}

// Function: Get all projects
export async function getAllProjects() {
	try {
		const projectsRef = collection(db, 'projects');
		const querySnapshot = await getDocs(projectsRef);
		const projects = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

		return projects;
	} catch (error) {
		console.error('Error retrieving all projects:', error);
		throw error;
	}
}

export async function createProject(project) {
	const projectRef = await addDoc(collection(db, 'projects'), {
	  ...project,
	  createdAt: project.createdAt.toISOString(),
	  createdBy: project.createdBy,
	  nameLower: project.name.toLowerCase()
	});
<<<<<<< Updated upstream
  
	// Update the project count for existing tags
=======

>>>>>>> Stashed changes
	for (const tag of project.tags) {
	  const existingTag = await getExistingTag(tag);
	  if (existingTag) {
		await incrementTagProjectCount(existingTag.id);
	  } else {
		await addNewTag(tag);
	  }
	}
<<<<<<< Updated upstream
  
	// Update the project count for the selected category
	await incrementCategoryProjectCount(project.category);
  
	// Return the created project
	return { id: projectRef.id, ...project };
  }

=======

	const categoriesRef = collection(db, 'categories');
const categoryQuery = query(categoriesRef, where('name', '==', project.category));
const categorySnapshot = await getDocs(categoryQuery);

if (categorySnapshot.empty) {
  await addDoc(categoriesRef, {
    name: project.category,
    description: '',
    projectCount: 1,
  });
} else {
  const categoryDoc = categorySnapshot.docs[0];
  await updateDoc(categoryDoc.ref, {
    projectCount: increment(1),
  });
}
return { id: projectRef.id, ...project };
}
>>>>>>> Stashed changes
export async function getUserProjects(displayName) {
	try {
		const projectsRef = collection(db, 'projects');
		const q = query(projectsRef, where('createdBy', '==', displayName));
		const querySnapshot = await getDocs(q);
		const projects = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data()
		}));
		return projects;
	} catch (error) {
		console.error('Error fetching user projects:', error);
		return [];
	}
}

export async function getProjectById(id) {
	try {
		const projectRef = doc(db, 'projects', id);
		const projectSnapshot = await getDoc(projectRef);

		if (projectSnapshot.exists()) {
			return { id: projectSnapshot.id, ...projectSnapshot.data() };
		} else {
			console.log('Project not found');
			return null;
		}
	} catch (error) {
		console.error('Error fetching project:', error);
		return null;
	}
}
export async function getProjectsByCategory(category) {
	try {
		const projectsRef = collection(db, 'projects');
		const q = query(projectsRef, where('category', '==', category));
		const querySnapshot = await getDocs(q);
		const projects = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data()
		}));
		return projects;
	} catch (error) {
		console.error('Error fetching user projects:', error);
		return [];
	}
}

export async function getRelatedProjects(tags) {
	try {
		if (tags.length > 0) {
			const projectsRef = collection(db, 'projects');
			const q = query(projectsRef, where('tags', 'array-contains-any', tags));
			const querySnapshot = await getDocs(q);
			const projects = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data()
			}));
			return projects;
		}
	} catch (error) {
		console.error('Error fetching related projects:', error);
		throw error;
	}
<<<<<<< Updated upstream
}
=======
}
>>>>>>> Stashed changes
