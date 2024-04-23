import { db } from '$lib/firebase';
import {
  collection,
  doc,
  getDocs,
  setDoc,
  addDoc,
  query,
  where,
  arrayUnion,
  arrayRemove,
  getDoc,
  updateDoc
} from 'firebase/firestore';
import { incrementCategoryDiscussionCount } from './categoriesApi';
import { addNewTag, getExistingTag, updateTagDiscussionCount } from './tagsApi';

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
    titleLower: discussion.title.toLowerCase(),
    tags: discussion.tags || [],
    category: discussion.category || ''
  });

  await incrementCategoryDiscussionCount(discussion.category);

  for (const tag of discussion.tags) {
    const existingTag = await getExistingTag(tag);
    if (existingTag) {
      await updateTagDiscussionCount(existingTag.id);
    } else {
      await addNewTag(tag);
    }
  }

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

export async function addReply(discussionId, reply, parentReplyId = null) {
  const discussionRef = doc(db, 'discussions', discussionId);
  const discussionSnapshot = await getDoc(discussionRef);

  if (discussionSnapshot.exists()) {
    const discussion = discussionSnapshot.data();
    let updatedReplies = discussion.replies || [];

    if (!Array.isArray(updatedReplies)) {
      updatedReplies = [];
    }

    if (parentReplyId) {
      updatedReplies = updateReplyInDiscussion(updatedReplies, parentReplyId, {
        replies: [...(reply.replies || []), reply],
      });
    } else {
      updatedReplies = [...updatedReplies, reply];
    }

    await updateDoc(discussionRef, { replies: updatedReplies });
  } else {
    throw new Error('Discussion not found');
  }
}

function updateReplyInDiscussion(replies, replyId, updatedReply) {
  return replies.map((reply) => {
    if (reply.id === replyId) {
      return {
        ...reply,
        ...updatedReply,
        replies: [...(reply.replies || []), ...(updatedReply.replies || [])],
      };
    }
    if (reply.replies) {
      return {
        ...reply,
        replies: updateReplyInDiscussion(reply.replies, replyId, updatedReply),
      };
    }
    return reply;
  });
}

export async function getDiscussionById(discussionId) {
  const discussionRef = doc(db, 'discussions', discussionId);
  const discussionSnapshot = await getDoc(discussionRef);
  if (discussionSnapshot.exists()) {
    return { id: discussionSnapshot.id, ...discussionSnapshot.data() };
  } else {
    throw new Error('Discussion not found');
  }
}

export async function updateReply(replyId, updatedReply) {
  const discussionsRef = collection(db, 'discussions');
  const querySnapshot = await getDocs(discussionsRef);

  querySnapshot.forEach(async (doc) => {
    const discussion = doc.data();
    const updatedReplies = updateReplyInDiscussion(discussion.replies, replyId, updatedReply);
    await updateDoc(doc.ref, { replies: updatedReplies });
  });
}

export async function getDiscussionsByProjectId(projectId) {
	try {
	  const discussionsRef = collection(db, 'discussions');
	  const q = query(discussionsRef, where('projectId', '==', projectId));
	  const querySnapshot = await getDocs(q);
  
	  const discussions = [];
	  querySnapshot.forEach((doc) => {
		discussions.push({ id: doc.id, ...doc.data() });
	  });
  
	  return discussions;
	} catch (error) {
	  console.error('Error fetching discussions by project ID:', error);
	  throw error;
	}
  }
