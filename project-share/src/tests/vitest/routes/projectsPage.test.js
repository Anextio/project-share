import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/svelte';
import ProjectList from '../../../routes/projects/+page.svelte';
import { getAllProjects } from '$lib/api/projectsApi';
import ProjectCard from '$lib/components/ProjectCard.svelte';

vi.mock('$lib/api/projectsApi', () => ({
  getAllProjects: vi.fn(),
}));

describe('ProjectList', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('fetches and displays projects correctly', async () => {
    const mockProjects = [
        { id: '1', name: 'Project 1', description: 'Description 1', category: 'Category 1', tags: ['Tag1'], files: ['File1'] },
        { id: '2', name: 'Project 2', description: 'Description 2', category: 'Category 2', tags: ['Tag2'], files: ['File2'] },
      ];

    getAllProjects.mockReturnValue(Promise.resolve(mockProjects));

    render(ProjectList);

    // Wait for async data to load
    await screen.findByText('Project 1');

    // Check if the ProjectCard components are rendered correctly
    expect(screen.getByText('Project 1')).toBeTruthy();
    expect(screen.getByText('Project 2')).toBeTruthy();
    expect(screen.getByText('Description 1')).toBeTruthy();
    expect(screen.getByText('Description 2')).toBeTruthy();
  });

  it('renders no projects message if no projects are returned', async () => {
    getAllProjects.mockReturnValue(Promise.resolve([]));

    render(ProjectList);

    // Wait for async operation to complete
    await screen.findByText('No projects found.');

    expect(screen.queryByText('Project 1')).toBeNull();
  });

  it('displays error message when loading projects fails', async () => {
    const errorMessage = 'Failed to load projects. Please try again later.';
    getAllProjects.mockRejectedValue(new Error('API error'));

    render(ProjectList);

    // Wait for the error message to be displayed
    await screen.findByText(errorMessage);

    // Check if the error message is rendered correctly
    expect(screen.getByText(errorMessage)).toBeTruthy();
  });
});