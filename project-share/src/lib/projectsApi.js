import { db } from '$lib/firebase';
import {
	collection,
	query,
	where,
	orderBy,
	limit,
	getDocs,
	serverTimestamp,
	addDoc,
	doc,
	setDoc,
	updateDoc,
	increment
} from 'firebase/firestore';

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
			projects = projectsSnapshot.docs.map((doc) => doc.data());
		}

		if (projects.length < 3) {
			// Query to get additional projects to make up a total of 3
			const additionalProjectsQuery = query(
				projectsRef,
				orderBy('createdAt', 'desc'),
				limit(3 - projects.length)
			);

			const additionalProjectsSnapshot = await getDocs(additionalProjectsQuery);
			const additionalProjects = additionalProjectsSnapshot.docs.map((doc) => doc.data());

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
		const projects = querySnapshot.docs.map((doc) => doc.data());

		return projects;
	} catch (error) {
		console.error('Error retrieving all projects:', error);
		throw error;
	}
}

export async function createProject(project) {
	// Create a new project document in the 'projects' collection
	const projectRef = await addDoc(collection(db, 'projects'), {
		...project,
		createdAt: project.createdAt.toISOString(),
		createdBy: project.createdBy,
		nameLower: project.name.toLowerCase()
	});

	// Update the project count for existing tags
	for (const tag of project.tags) {
		const existingTag = await getExistingTag(tag);
		if (existingTag) {
			await updateTagProjectCount(existingTag.id);
		} else {
			await addNewTag(tag);
		}
	}

	const categoryRef = doc(db, 'categories', project.category);
	await updateDoc(categoryRef, {
		projectCount: increment(1)
	});
	// Return the created project
	return { id: projectRef.id, ...project };
}

async function getExistingTag(tag) {
	const tagsRef = collection(db, 'tags');
	const q = query(tagsRef, where('name', '==', tag));
	const querySnapshot = await getDocs(q);
	if (!querySnapshot.empty) {
		const tagDoc = querySnapshot.docs[0];
		return { id: tagDoc.id, ...tagDoc.data() };
	}
	return null;
}

async function updateTagProjectCount(tagId) {
	const tagRef = doc(db, 'tags', tagId);
	await setDoc(tagRef, { projectCount: increment(1) }, { merge: true });
}

async function addNewTag(tag) {
	await addDoc(collection(db, 'tags'), { name: tag, projectCount: 1 });
}

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
		const projectsRef = collection(db, 'projects');
		const q = query(projectsRef, where('id', '==', id));
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
