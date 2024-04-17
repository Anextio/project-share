<script>
  import { Input, Button } from 'spaper';
  import { createEventDispatcher } from 'svelte';
  
  let fileInput = {};
  let selectedFiles = [];
  const dispatch = createEventDispatcher();

  function handleFileChange() {
    selectedFiles = Array.from(fileInput.files);
    dispatch('filesSelected', selectedFiles);
  }

  function openFileBrowser() {
    fileInput.click();
  }
</script>

<div class="file-input-wrapper">
  <Input bind:value={fileInput.files} readonly placeholder={selectedFiles.length ? selectedFiles.map(file => file.name).join(', ') : 'Select files'} />
  <Button on:click={openFileBrowser}>Browse</Button>
  <input type="file" bind:this={fileInput} data-testid="fileInput" multiple hidden on:change={handleFileChange} />
</div>

<style>
  .file-input-wrapper {
    display: flex;
    align-items: center;
  }

  .file-input-wrapper :global(.spaper-input) {
    flex: 1;
    margin-right: 8px;
  }
</style>