import { getProjectById } from '$lib/projectsApi';

export async function load({ params }) {
    const {slug} = params;
    // Fetch the project data based on the slug
    // Replace this with your actual data fetching logic
    const project = await getProjectById(slug);
    return {
      project,
    };
  }