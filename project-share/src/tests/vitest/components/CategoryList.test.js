import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/svelte';
import CategoryList from '$lib/components/CategoryList.svelte';
import { getCategories } from '$lib/api/categoriesApi';
import * as navigation from '$app/navigation';

vi.mock('$lib/api/categoriesApi', () => ({
  getCategories: vi.fn()
}));

describe('CategoryList', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('fetches and displays categories correctly', async () => {
    const mockCategories = [
        { id: '1', name: 'Category 1', projectCount: 5 },
        { id: '2', name: 'Category 2', projectCount: 3 }
      ]
      getCategories.mockReturnValue(Promise.resolve(mockCategories));
      
    render(CategoryList);

    await waitFor(() => {
      expect(screen.getByText('Category 1')).toBeTruthy();
      expect(screen.getByText('Projects: 5')).toBeTruthy();
    });
  });

  it('renders no categories message if no categories are returned', async () => {
    getCategories.mockResolvedValueOnce([]);

    render(CategoryList);

    await waitFor(() => {
      expect(screen.getByText('No categories found.')).toBeTruthy();
    });
  });

  it('navigates to the correct URL when a category is clicked', async () => {
    const mockCategories = [
      { id: '1', name: 'Category 1', projectCount: 5 },
      { id: '2', name: 'Category 2', projectCount: 3 }
    ];
    getCategories.mockReturnValue(Promise.resolve(mockCategories));

    const gotoMock = vi.fn();
    vi.spyOn(navigation, 'goto').mockImplementation(gotoMock);

    render(CategoryList);

    await waitFor(() => {
      expect(screen.getByText('Category 1')).toBeTruthy();
    });

    const categoryCard = screen.getByText('Category 1');
    fireEvent.click(categoryCard);

    expect(gotoMock).toHaveBeenCalledWith('/projects/category/Category%201');
  });
});
