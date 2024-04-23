import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import ProjectCard from '$lib/components/ProjectCard.svelte';

describe('ProjectCard', () => {
  it('renders project details correctly', () => {
    const project = {
      name: 'Test Project',
      description: 'This is a test project',
      category: 'Test Category',
      tags: ['tag1', 'tag2']
    };

    render(ProjectCard, { props: { project } });

    expect(screen.getByText('Test Project')).toBeTruthy();
    expect(screen.getByText('This is a test project')).toBeTruthy();
    expect(screen.getByText('Test Category')).toBeTruthy();
    expect(screen.getByText('tag1')).toBeTruthy();
    expect(screen.getByText('tag2')).toBeTruthy();
    expect(screen.getByText('file1.txt')).toBeTruthy();
    expect(screen.getByText('file2.pdf')).toBeTruthy();
  });

  it('handles empty project data without crashing', () => {
    const emptyProject = {
      name: '',
      description: '',
      category: '',
      tags: []
    };

    render(ProjectCard, { props: { emptyProject } });
    expect(screen.queryByText('No Project Data')).toBeNull();
  });

  it('renders the view project button with the correct link', () => {
    const project = {
      id: '123',
      name: 'Test Project',
      description: 'This is a test project',
      category: 'Test Category',
      tags: ['tag1', 'tag2']
    };

    render(ProjectCard, { props: { project } });
    const viewButton = screen.getByRole('button');
    expect(viewButton.getAttribute('href')).toBe(`/projects/${project.id}`);
  });

  it('only displays the tags section if tags are present', () => {
    const project = {
      name: 'Test Project',
      description: 'This is a test project',
      category: 'Test Category',
      tags: []
    };

    render(ProjectCard, { props: { project } });
    expect(screen.queryByText('Tags:')).toBeNull();
  });
});