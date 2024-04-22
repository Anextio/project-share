import { d as db } from "./firebase.js";
import { collection, query, where, orderBy, getDocs, limit, addDoc } from "firebase/firestore";
import { b as getExistingTag, i as incrementTagProjectCount, c as addNewTag, d as incrementCategoryProjectCount } from "./tagsApi.js";
async function getMostDiscussedProjects() {
  try {
    const oneWeekAgo = /* @__PURE__ */ new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const projectsRef = collection(db, "projects");
    const discussionsRef = collection(db, "discussions");
    const discussedProjectsQuery = query(
      discussionsRef,
      where("createdAt", ">=", oneWeekAgo),
      orderBy("createdAt", "desc")
    );
    const discussedProjectsSnapshot = await getDocs(discussedProjectsQuery);
    const discussedProjectIds = discussedProjectsSnapshot.docs.map((doc) => doc.data().projectId);
    let projects = [];
    if (discussedProjectIds.length > 0) {
      const projectsQuery = query(
        projectsRef,
        where("id", "in", discussedProjectIds),
        orderBy("discussionCount", "desc"),
        limit(3)
      );
      const projectsSnapshot = await getDocs(projectsQuery);
      projects = projectsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    }
    if (projects.length < 3) {
      const additionalProjectsQuery = query(
        projectsRef,
        orderBy("createdAt", "desc"),
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
    console.error("Error retrieving most discussed projects:", error);
    throw error;
  }
}
async function getAllProjects() {
  try {
    const projectsRef = collection(db, "projects");
    const querySnapshot = await getDocs(projectsRef);
    const projects = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return projects;
  } catch (error) {
    console.error("Error retrieving all projects:", error);
    throw error;
  }
}
async function createProject(project) {
  const projectRef = await addDoc(collection(db, "projects"), {
    ...project,
    createdAt: project.createdAt.toISOString(),
    createdBy: project.createdBy,
    nameLower: project.name.toLowerCase()
  });
  for (const tag of project.tags) {
    const existingTag = await getExistingTag(tag);
    if (existingTag) {
      await incrementTagProjectCount(existingTag.id);
    } else {
      await addNewTag(tag);
    }
  }
  await incrementCategoryProjectCount(project.category);
  return { id: projectRef.id, ...project };
}
export {
  getAllProjects as a,
  createProject as c,
  getMostDiscussedProjects as g
};
