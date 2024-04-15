// src/lib/searchApi.js
import { db } from '$lib/firebase.js';
import { collection, query, where, getDocs } from 'firebase/firestore';

export async function searchAll(searchQuery) {
  try {
    const usersResults = await searchUsers(searchQuery);
    const projectsResults = await searchProjects(searchQuery);
    const discussionsResults = await searchDiscussions(searchQuery);

    return {
      users: usersResults,
      projects: projectsResults,
      discussions: discussionsResults,
    };
  } catch (error) {
    console.error('Error searching:', error);
    throw error;
  }
}

async function searchUsers(searchQuery) {
  const usersRef = collection(db, 'users');
  const q = query(
    usersRef,
    where('displayNameLower', '>=', searchQuery.toLowerCase()),
    where('displayNameLower', '<=', searchQuery.toLowerCase() + '\uf8ff')
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data());
}

async function searchProjects(searchQuery) {
  const projectsRef = collection(db, 'projects');
  const q = query(
    projectsRef,
    where('nameLower', '>=', searchQuery.toLowerCase()),
    where('nameLower', '<=', searchQuery.toLowerCase() + '\uf8ff')
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data());
}

async function searchDiscussions(searchQuery) {
  const discussionsRef = collection(db, 'discussions');
  const q = query(
    discussionsRef,
    where('titleLower', '>=', searchQuery.toLowerCase()),
    where('titleLower', '<=', searchQuery.toLowerCase() + '\uf8ff')
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data());
}