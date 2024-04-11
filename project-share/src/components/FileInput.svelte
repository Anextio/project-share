<script>
    import { Input, Button } from 'spaper';
    import { createEventDispatcher } from 'svelte';
  
    let selectedFiles = [];
    const dispatch = createEventDispatcher();
  
    function handleFileChange(event) {
      selectedFiles = Array.from(event.target.files);
      dispatch('filesSelected', selectedFiles);
    }
  
    function openFileBrowser() {
      document.getElementById('fileInput').click();
    }
  </script>
  
  <div class="file-input-wrapper">
    <Input
      value={selectedFiles.map(file => file.name).join(', ')}
      readonly
      placeholder="Select files"
    />
    <Button on:click={openFileBrowser}>Browse</Button>
    <input
      type="file"
      id="fileInput"
      multiple
      hidden
      on:change={handleFileChange}
    />
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