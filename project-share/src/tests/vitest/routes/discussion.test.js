import { render, screen } from '@testing-library/svelte';
import DiscussionList from '../../../routes/discussions/+page.svelte';
import { getDiscussions } from '$lib/api/discussionsApi';
import { getCategories } from '$lib/api/categoriesApi';
import { getTags } from '$lib/api/tagsApi';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('$lib/api/discussionsApi', () => ({
  getDiscussions: vi.fn(),
}));

vi.mock('$lib/api/categoriesApi', () => ({
  getCategories: vi.fn(),
}));

vi.mock('$lib/api/tagsApi', () => ({
  getTags: vi.fn(),
}));

describe('DiscussionList', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render discussions, categories, and popular tags', async () => {
    const mockDiscussions = [
      {
        id: '1',
        title: 'Discussion 1',
        author: 'John Doe',
        lastReply: '2023-04-16',
        replies: 5,
      },
      {
        id: '2',
        title: 'Discussion 2',
        author: 'Jane Smith',
        lastReply: '2023-04-15',
        replies: 2,
      },
    ];

    const mockCategories = [
      { name: 'Category 1', projectCount: 10 },
      { name: 'Category 2', projectCount: 5 },
    ];

    const mockTags = [
      { name: 'Tag 1' },
      { name: 'Tag 2' },
      { name: 'Tag 3' },
    ];

    getDiscussions.mockResolvedValue(mockDiscussions);
    getCategories.mockResolvedValue(mockCategories);
    getTags.mockResolvedValue(mockTags);

    render(DiscussionList);

    // Wait for data to load
    await screen.findByText('Discussion 1');
    await screen.findByText('Discussion 2');
    await screen.findByText('Category 1 (10)');
    await screen.findByText('Category 2 (5)');
    await screen.findByText('Tag 1 (0)');
    await screen.findByText('Tag 2 (0)');
    await screen.findByText('Tag 3 (0)');

    expect(screen.getAllByRole('listitem').length).toBe(5); // 2 discussions + 2 categories + 3 popular tags
  });
});