import { db } from '$lib/firebase.js';
import { doc, setDoc } from 'firebase/firestore';

export async function createUserProfile(userId, displayName, email) {
  try {
    await setDoc(doc(db, 'users', userId), {
      displayName,
      email,
      displayNameLower: displayName.toLowerCase(),
    });
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
}