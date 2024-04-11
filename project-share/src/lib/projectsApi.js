import { db } from '$lib/firebase';
import { collection, query, where, orderBy, limit, getDocs, serverTimestamp, addDoc } from 'firebase/firestore';

// Function: Get the 3 most discussed projects in the last 7 days
export async function getMostDiscussedProjects() {
    try {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  
      const projectsRef = collection(db, 'projects');
      const q = query(
        projectsRef,
        where('lastDiscussedAt', '>=', oneWeekAgo),
        orderBy('discussionCount', 'desc'),
        limit(3)
      );
  
      const querySnapshot = await getDocs(q);
      const projects = querySnapshot.docs.map((doc) => doc.data());
  
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

  export async function createProject(projectData) {
    try {
      const projectsRef = collection(db, 'projects');
      const createdAt = serverTimestamp();
      const createdBy = 'user123'; // Replace with the actual user ID or username
  
      const newProject = {
        ...projectData,
        createdAt,
        createdBy,
      };
  
      const docRef = await addDoc(projectsRef, newProject);
      const createdProject = { id: docRef.id, ...newProject };
  
      return createdProject;
    } catch (error) {
      console.error('Error creating project:', error);
      throw error;
    }
  }