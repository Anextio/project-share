// FileInput.test.js
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import FileInput from '$lib/components/FileInput.svelte';

describe('FileInput', () => {
  it('renders the file input and browse button', () => {
    render(FileInput);
    expect(screen.getByPlaceholderText('Select files')).toBeTruthy();
    expect(screen.getByText('Browse')).toBeTruthy();
  });

  it('updates the input placeholder when files are selected', async () => {
    render(FileInput);
    const file1 = new File(['file1'], 'file1.txt', { type: 'text/plain' });
    const file2 = new File(['file2'], 'file2.txt', { type: 'text/plain' });
    const fileInput = screen.getByTestId('fileInput');

    await fireEvent.change(fileInput, {
      target: { files: [file1, file2] },
    });

    expect(screen.getByPlaceholderText('file1.txt, file2.txt')).toBeTruthy();
  });

  it('dispatches the "filesSelected" event when files are selected', async () => {
    const { component } = render(FileInput);
    const file1 = new File(['file1'], 'file1.txt', { type: 'text/plain' });
    const file2 = new File(['file2'], 'file2.txt', { type: 'text/plain' });
    const fileInput = screen.getByTestId('fileInput');

    let dispatchedFiles = [];
    component.$on('filesSelected', (event) => {
      dispatchedFiles = event.detail;
    });

    await fireEvent.change(fileInput, {
      target: { files: [file1, file2] },
    });

    expect(dispatchedFiles).toEqual([file1, file2]);
  });

  it('opens the file browser when the browse button is clicked', async () => {
    render(FileInput);
    const browseButton = screen.getByText('Browse');
    const fileInput = screen.getByTestId('fileInput');

    const clickSpy = vi.spyOn(fileInput, 'click');
    await fireEvent.click(browseButton);

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });
});