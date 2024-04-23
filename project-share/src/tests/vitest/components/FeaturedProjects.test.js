import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import FeaturedProjects from '$lib/components/FeaturedProjects.svelte';
import { getMostDiscussedProjects } from '$lib/api/projectsApi';

vi.mock('$lib/api/projectsApi', () => ({
  getMostDiscussedProjects: vi.fn(),
}));

describe('ExploreProjects', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('fetches and displays projects correctly', async () => {
    const mockProjects = [
      { id: '1', name: 'Project 1', description: 'Description 1', category: 'Category 1', tags: ['Tag1'] },
      { id: '2', name: 'Project 2', description: 'Description 2', category: 'Category 2', tags: ['Tag2']},
    ];
    getMostDiscussedProjects.mockReturnValue(Promise.resolve(mockProjects));

    render(FeaturedProjects);

    await screen.findByText('Project 1');
    await screen.findByText('Project 2');
  });

  it('renders no projects message if no projects are returned', async () => {
    getMostDiscussedProjects.mockReturnValue(Promise.resolve([]));

    render(FeaturedProjects);

    await screen.findByText('No projects found');
    expect(screen.queryByText('Project 1')).toBeNull();
  });

  it('provides a link to view all projects', async () => {
    getMostDiscussedProjects.mockReturnValue(Promise.resolve([]));

    render(FeaturedProjects);

    await screen.findByText('No projects found');
    const viewAllLink = screen.getByText('View All');
    expect(viewAllLink).toBeTruthy();
    expect(viewAllLink.getAttribute('href')).toBe('/projects');
  });
});