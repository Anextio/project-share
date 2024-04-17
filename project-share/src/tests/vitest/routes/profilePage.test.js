import { render, screen, waitFor } from '@testing-library/svelte';
import ProfilePage from '../../../routes/profile/+page.svelte';
import { getUserProjects } from '$lib/api/projectsApi';
import { getUserDiscussions } from '$lib/api/discussionsApi';
import { get } from 'svelte/store';
import { authStore } from '$lib/stores/authStore';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('$lib/api/projectsApi', () => ({
  getUserProjects: vi.fn(),
}));

vi.mock('$lib/api/discussionsApi', () => ({
  getUserDiscussions: vi.fn(),
}));

vi.mock('$lib/stores/authStore', () => ({
  authStore: {
    subscribe: vi.fn((callback) => {
      callback({
        displayName: 'John Doe',
        email: 'john.doe@example.com',
      });
      return () => {};
    }),
  },
}));

describe('ProfilePage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render user information', async () => {
    getUserProjects.mockResolvedValue([]);
    getUserDiscussions.mockResolvedValue([]);

    render(ProfilePage);

    await waitFor(() => {
    expect(screen.findByText('John Doe')).toBeInTheDocument();
    expect(screen.findByText('john.doe@example.com')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Edit Profile' })).toHaveAttribute('href', '/profile/edit');
    })
  });

  it('should render user projects and discussions', async () => {
    const mockProjects = [
      { id: '1', name: 'Project 1', description: 'Description 1' },
      { id: '2', name: 'Project 2', description: 'Description 2' },
    ];

    const mockDiscussions = [
      { id: '1', title: 'Discussion 1', author: 'John Doe' },
      { id: '2', title: 'Discussion 2', author: 'Jane Smith' },
    ];

    getUserProjects.mockResolvedValue(mockProjects);
    getUserDiscussions.mockResolvedValue(mockDiscussions);

    render(ProfilePage);

    await screen.findByText('Project 1');
    await screen.findByText('Project 2');
    await screen.findByText('Discussion 1');
    await screen.findByText('Discussion 2');
  });

  it('should display loading message while fetching data', () => {
    getUserProjects.mockReturnValue(new Promise(() => {}));
    getUserDiscussions.mockReturnValue(new Promise(() => {}));

    render(ProfilePage);

    expect(screen.getByText('Loading user data...')).toBeTruthy();
  });

  it('should display error message if data fetching fails', async () => {
    getUserProjects.mockRejectedValue('Error fetching projects');
    getUserDiscussions.mockRejectedValue('Error fetching discussions');

    render(ProfilePage);

    await screen.findByText('Error loading user data. Please try again later.');
  });
});