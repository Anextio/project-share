import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import CollaboratorList from '$lib/components/CollaboratorList.svelte';

describe('CollaboratorList', () => {
  it('renders the collaborator list', () => {
    render(CollaboratorList, { props: { collaborators: [] } });  // Ensure collaborators is passed as an empty array

    expect(screen.getByText('Collaborators')).toBeTruthy();
  });

  it('adds a new collaborator', async () => {
    render(CollaboratorList, { props: { collaborators: [] } });  // Ensure collaborators is passed as an empty array
  
    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const roleSelect = screen.getByText('Select Role');  // Make sure to click on the placeholder or label that actually triggers the dropdown
    const addButton = screen.getByText('Add Collaborator');
  
    await fireEvent.input(nameInput, { target: { value: 'John Doe' } });
    await fireEvent.input(emailInput, { target: { value: 'test@example.com' } });
    await fireEvent.change(roleSelect, { target: { value: 'Developer' } });
    await fireEvent.click(addButton);
  
    expect(screen.getByText('John Doe')).toBeTruthy();
    expect(screen.getByText('test@example.com')).toBeTruthy();
    expect(screen.getByText('Developer')).toBeTruthy();
  });

  it('removes a collaborator', async () => {
    const initialCollaborators = [
      { name: 'John Doe', email: 'collaborator1@example.com', role: 'Developer' },
      { name: 'Jane Doe', email: 'collaborator2@example.com', role: 'Manager' }
    ];
    render(CollaboratorList, { props: { collaborators: initialCollaborators } });
  
    const removeButtons = screen.getAllByText('Remove');
    await fireEvent.click(removeButtons[0]);
  
    expect(screen.queryByText('collaborator1@example.com')).toBeFalsy();
    expect(screen.getByText('collaborator2@example.com')).toBeTruthy();
  });
  
  it('emits the collaboratorsUpdated event', async () => {
    const { component } = render(CollaboratorList, { props: { collaborators: [] } });  // Ensure initial empty array
  
    const mock = vi.fn();
    component.$on('collaboratorsUpdated', mock);
  
    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const roleSelect = screen.getByText('Select Role');
    const addButton = screen.getByText('Add Collaborator');
  
    await fireEvent.input(nameInput, { target: { value: 'John Doe' } });
    await fireEvent.input(emailInput, { target: { value: 'test@example.com' } });
    await fireEvent.change(roleSelect, { target: { value: 'Developer' } });
    await fireEvent.click(addButton);
  
    expect(mock).toHaveBeenCalled();
  });
});
