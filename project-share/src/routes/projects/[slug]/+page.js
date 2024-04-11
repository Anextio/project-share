export async function load({ params }) {
    const {slug} = params;
    // Fetch the project data based on the slug
    // Replace this with your actual data fetching logic
    const project = await fetchProjectById(slug);
    return {
      project,
    };
  }
  
  // Example function to fetch project data by slug
  async function fetchProjectById(id) {
    // Simulated data fetching
    const projects = [
        {
            id: '1',
            name: 'Project 1',
            description: 'This is project 1',
            contributors: ['Contributor 1', 'Contributor 2'],
            tags: ['tag1', 'tag2'],
          },
          {
            id: '2',
            name: 'Project 2',
            description: 'This is project 2',
            contributors: ['Contributor 3', 'Contributor 4'],
            tags: ['tag3', 'tag4'],
          },
      // Add more sample projects as needed
    ];
    return projects.find(project => project.id === id);
  }