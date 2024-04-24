import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';
import Header from '$lib/components/Header.svelte';

// Mock the navigation module correctly
vi.mock('$app/navigation', () => ({
    goto: vi.fn()
}));

describe('Header', () => {
    beforeEach(() => {
        vi.resetAllMocks();  // Reset mocks to ensure clean state
    });

    it('renders the navbar with expected links and buttons', () => {
        render(Header);
        expect(screen.getByText('Logo')).toBeTruthy();
        expect(screen.getByPlaceholderText('Search')).toBeTruthy();
        expect(screen.getByText('Search')).toBeTruthy();
        expect(screen.getByText('Home')).toBeTruthy();
        expect(screen.getByText('Projects')).toBeTruthy();
        expect(screen.getByText('Discussions')).toBeTruthy();
        expect(screen.queryByText('Profile')).toBeNull(); 
        expect(screen.queryByText('Logout')).toBeNull();
        expect(screen.queryByText('Create Project')).toBeNull();
        expect(screen.getByText('Login')).toBeTruthy(); 
    });

    it('navigates based on search input', async () => {
        render(Header);
        const searchInput = screen.getByPlaceholderText('Search');
        const searchButton = screen.getByText('Search');

        await fireEvent.input(searchInput, { target: { value: 'test' } });
        await fireEvent.click(searchButton);

        expect(vi.mocks['$app/navigation'].goto).toHaveBeenCalledWith('/search?q=test');
    });

    it('navigates to the projects page when the projects button is clicked', async () => {
        render(Header);
        const projectsButton = screen.getByText('Projects');
        await fireEvent.click(projectsButton);

        expect(vi.mocks['$app/navigation'].goto).toHaveBeenCalledWith('/projects');
    });
});
