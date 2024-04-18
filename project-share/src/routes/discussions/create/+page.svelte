<script>
    import { goto } from '$app/navigation';
    import { Row, Col, Card, Button, Input } from 'spaper';
  
    let title = '';
    let description = '';
    let error = null;
  
    async function handleSubmit() {
      if (!title || !description) {
        error = 'Please fill in all fields';
        return;
      }
  
      try {
        const response = await fetch('/api/discussions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, description }),
        });
  
        if (response.ok) {
          goto('/discussions');
        } else {
          error = 'Failed to create discussion';
        }
      } catch (err) {
        error = 'An error occurred while creating the discussion';
      }
    }
  </script>
  
  <Row>
    <Col>
      <Card>
        <h2>Create Discussion</h2>
        {#if error}
          <p class="error">{error}</p>
        {/if}
        <form>
          <div class="form-group">
            <label for="title">Title:</label>
            <Input type="text" id="title" bind:value={title} required />
          </div>
          <div class="form-group">
            <label for="description">Description:</label>
            <Input type="text" id="description" bind:value={description} required />
          </div>
          <Button on:click={handleSubmit}>Create Discussion</Button>
        </form>
      </Card>
    </Col>
  </Row>
  
  <style>
    .error {
      color: red;
      margin-bottom: 10px;
    }
  
    .form-group {
      margin-bottom: 20px;
    }
  
    label {
      display: block;
      margin-bottom: 5px;
    }
  </style>