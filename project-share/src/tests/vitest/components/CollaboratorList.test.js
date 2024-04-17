// src/tests/vitest/components/CollaboratorList.test.js
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import CollaboratorList from '$lib/components/CollaboratorList.svelte';

describe('CollaboratorList', () => {
  it('renders the collaborator list', () => {
    render(CollaboratorList);

    expect(screen.getByText('Collaborators')).toBeInTheDocument();
    // Add more assertions for the rendered elements
  });

  it('adds a new collaborator', async () => {
    render(CollaboratorList);

    const collaboratorInput = screen.getByLabelText('Collaborator Email');
    const addButton = screen.getByText('Add');

    await fireEvent.input(collaboratorInput, { target: { value: 'test@example.com' } });
    await fireEvent.click(addButton);

    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    // Add more assertions for the added collaborator
  });

  it('removes a collaborator', async () => {
    const initialCollaborators = ['collaborator1@example.com', 'collaborator2@example.com'];
    render(CollaboratorList, { props: { collaborators: initialCollaborators } });

    const removeButtons = screen.getAllByText('Remove');
    await fireEvent.click(removeButtons[0]);

    expect(screen.queryByText('collaborator1@example.com')).not.toBeInTheDocument();
    expect(screen.getByText('collaborator2@example.com')).toBeInTheDocument();
  });

  it('emits the collaboratorsUpdated event', async () => {
    const { component } = render(CollaboratorList);

    const collaboratorInput = screen.getByLabelText('Collaborator Email');
    const addButton = screen.getByText('Add');

    await fireEvent.input(collaboratorInput, { target: { value: 'test@example.com' } });
    await fireEvent.click(addButton);

    expect(component.$on).toHaveBeenCalledWith('collaboratorsUpdated', ['test@example.com']);
  });
});