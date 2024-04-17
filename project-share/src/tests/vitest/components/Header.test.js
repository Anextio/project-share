// Navbar.test.js
import { describe, it, expect, vi, beforeAll, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';
import Header from '$lib/components/Header.svelte';
import { searchAll } from '$lib/api/searchApi.js';
import * as navigation from '$app/navigation';

vi.mock('$lib/api/searchApi.js', () => ({
    searchAll: vi.fn(),
}));

describe('Navbar', () => {
    
        const gotoMock = vi.fn();
        vi.spyOn(navigation, 'goto').mockImplementation(gotoMock);
  
    it('renders the navbar with expected links and buttons', () => {
        render(Header);

        expect(screen.getByText('Logo')).toBeTruthy();
        expect(screen.getByPlaceholderText('Search')).toBeTruthy();
        expect(screen.getByText('Search')).toBeTruthy();
        expect(screen.getByText('Home')).toBeTruthy();
        expect(screen.getByText('Projects')).toBeTruthy();
        expect(screen.getByText('Discussions')).toBeTruthy();
        expect(screen.getByText('Profile')).toBeTruthy();
        expect(screen.getByText('Create Project')).toBeTruthy();
    });

    it('performs a search when the search button is clicked', async () => {
        const searchResults = [{ id: 1, name: 'Project 1' }, { id: 2, name: 'Project 2' }];
        searchAll.mockResolvedValue(searchResults);

        render(Header);

        const searchInput = screen.getByPlaceholderText('Search');
        const searchButton = screen.getByText('Search');

        await fireEvent.input(searchInput, { target: { value: 'test' } });
        await fireEvent.click(searchButton);

        expect(searchAll).toHaveBeenCalledWith('test');
    });

    it('navigates to the create project page when the create project button is clicked', async () => {
        const gotoMock = vi.fn();
        vi.spyOn(navigation, 'goto').mockImplementation(gotoMock);
        render(Header);

        const createProjectButton = screen.getByText('Create Project');
        await fireEvent.click(createProjectButton);

        expect(gotoMock).toHaveBeenCalledWith('/projects/create');
    });
});