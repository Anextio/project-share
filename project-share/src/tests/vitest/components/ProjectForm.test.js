import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/svelte';
import ProjectForm from '$lib/components/ProjectForm.svelte';
import { getTags } from '$lib/api/tagsApi';
import { getCategories } from '$lib/api/categoriesApi';
import '@testing-library/jest-dom';

vi.mock('$lib/api/tagsApi', () => ({
    getTags: vi.fn(),
}));

vi.mock('$lib/api/categoriesApi', () => ({
    getCategories: vi.fn(),
}));

describe('ProjectForm', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders the form with project data', async () => {
        const projectData = {
            name: 'Test Project',
            description: 'This is a test project',
            category: 'Test Category',
            tags: ['tag1', 'tag2']
        };

        getTags.mockResolvedValue([{ name: 'tag1' }, { name: 'tag2' }, { name: 'tag3' }]);
        getCategories.mockResolvedValue([{ name: 'Test Category' }, { name: 'Another Category' }]);

        render(ProjectForm, { projectData });

        await waitFor(() => {
            expect(screen.getByLabelText('Project Name')).toHaveValue('Test Project');
            expect(screen.getByLabelText('Project Description')).toHaveValue('This is a test project');
            expect(screen.getByLabelText('Project Category')).toHaveValue('Test Category');
            expect(screen.getByText(/tag1/)).toBeInTheDocument();
            expect(screen.getByText(/tag2/)).toBeInTheDocument();
        });
    });

    it('adds a new tag when the "Add Tag" button is clicked', async () => {
        getTags.mockResolvedValue([]);
        getCategories.mockResolvedValue([]);
        render(ProjectForm);

        await waitFor(() => {
            const newTagInput = screen.getByPlaceholderText('Enter a tag');
            const addTagButton = screen.getByText('Add Tag');
            fireEvent.input(newTagInput, { target: { value: 'new tag' } });
            fireEvent.click(addTagButton);
            expect(screen.getByText(/new tag/)).toBeTruthy();
        })

    });

    it('removes a tag when clicked', async () => {
        const projectData = {
            name: '',
            description: '',
            category: '',
            tags: ['tag1', 'tag2']
        };

        getTags.mockResolvedValue([]);
        getCategories.mockResolvedValue([]);

        render(ProjectForm, { projectData });

        await waitFor(() => {
            const tag1 = screen.getByText(/tag1/);
            expect(tag1).toBeTruthy();
            fireEvent.click(tag1);
        });
    });
});