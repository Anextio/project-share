<script>
    import { Row, Col, Card } from 'spaper';
  
    let discussions = [
      // Sample discussion data
      {
        id: '1',
        title: 'Thread Title 1',
        author: 'Author 1',
        lastReply: '2023-06-10',
        replies: 5,
      },
      {
        id: '2',
        title: 'Thread Title 2',
        author: 'Author 2',
        lastReply: '2023-06-09',
        replies: 3,
      },
      // Add more sample discussions as needed
    ];
  
    let categories = [
      { name: 'Category 1', count: 10 },
      { name: 'Category 2', count: 5 },
      // Add more categories as needed
    ];
  
    let popularTags = [
      { name: 'Tag 1', count: 8 },
      { name: 'Tag 2', count: 6 },
      // Add more popular tags as needed
    ];
  </script>
  
  <div class="container">
    <Row>
      <Col md="8">
        <h2>Discussion Threads</h2>
        {#each discussions as discussion}
          <Card>
            <h3>{discussion.title}</h3>
            <p>Author: {discussion.author}</p>
            <p>Last Reply: {discussion.lastReply}</p>
            <p>Replies: {discussion.replies}</p>
            <a href="/discussions/{discussion.id}">View Thread</a>
          </Card>
        {/each}
      </Col>
      <Col md="4">
        <h2>Categories</h2>
        <ul>
          {#each categories as category}
            <li>{category.name} ({category.count})</li>
          {/each}
        </ul>
        <h2>Popular Tags</h2>
        <ul>
          {#each popularTags as tag}
            <li>{tag.name} ({tag.count})</li>
          {/each}
        </ul>
      </Col>
    </Row>
  </div>