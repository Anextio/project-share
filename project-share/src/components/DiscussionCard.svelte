<!-- DiscussionCard.svelte -->
<script>
    import { Card, Button } from 'spaper';
  
    export let discussion;
  </script>
  
  <Card>
    <div class="discussion-header">
      <h3>{discussion.title}</h3>
      <p>Started by: {discussion.startedBy}</p>
      <p>Date and Time: {discussion.dateTime}</p>
      <p>Replies: {discussion.replies}</p>
    </div>
    <div class="discussion-body">
      <p>{discussion.description}</p>
    </div>
    <div class="discussion-footer">
      <Button href="/discussions/{discussion.id}">View Discussion</Button>
    </div>
  </Card>
  
  <style>   
  
    .discussion-header {
      margin-bottom: 1rem;
    }
  
    .discussion-header h3 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }
  
    .discussion-header p {
      margin: 0;
    }
  
    .discussion-body {
      margin-bottom: 1rem;
    }
  
    .discussion-footer {
      text-align: right;
    }
  </style>