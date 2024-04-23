import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';
import Header from '$lib/components/Header.svelte';
import { searchAll } from '$lib/api/searchApi.js';
import * as navigation from '$app/navigation';
import { authStore } from '$lib/stores/authStore';

vi.mock('$lib/api/searchApi.js', () => ({
    searchAll: vi.fn(() => Promise.resolve([{ id: 1, name: 'Project 1' }, { id: 2, name: 'Project 2' }]))
}));
vi.mock('$lib/stores/authStore', () => ({
    authStore: {
        subscribe: vi.fn().mockImplementation((callback) => {
            callback(null);
            return () => {};
        }),
        signOut: vi.fn()
    }
}));
vi.mock('$app/navigation', () => ({
    goto: vi.fn()
}));

describe('Header', () => {
    beforeEach(() => {
        vi.clearAllMocks();
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

    it('calls searchAll with the correct parameter', async () => {
        render(Header);
        const searchInput = screen.getByPlaceholderText('Search');
        const searchButton = screen.getByText('Search');
    
        await fireEvent.input(searchInput, { target: { value: 'test' } });
        await fireEvent.click(searchButton);
    
        await expect(searchAll).toHaveBeenCalledWith('test');
    });

    it('navigates to the projects page when the projects button is clicked', async () => {
        render(Header);
        const projectsButton = screen.getByText('Projects');
        await fireEvent.click(projectsButton);

        expect(navigation.goto).toHaveBeenCalledWith('/projects');
    });
});