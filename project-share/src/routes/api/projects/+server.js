import { json } from '@sveltejs/kit';
import { getMostDiscussedProjects, getAllProjects, createProject } from '$lib/projectsApi';

export async function GET({ url }) {
  const pathname = url.pathname;

  if (pathname === '/api/projects/most-discussed') {
    const projects = await getMostDiscussedProjects();
    return json(projects, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else if (pathname === '/api/projects') {
    const projects = await getAllProjects();
    return json(projects, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return json({ error: 'Invalid endpoint' }, {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST({ request }) {
  try {
    const projectData = await request.json();
    const createdProject = await createProject(projectData);
    return json(createdProject, {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating project:', error);
    return json({ error: 'Failed to create project' }, {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}