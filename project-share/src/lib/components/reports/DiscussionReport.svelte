<script>
  import BaseReport from './BaseReport.svelte';

  export let discussions = [];

  function convertToCSV() {
    const csvRows = [
      'Title,Author,Date',
      ...discussions.map(discussion => `${discussion.title},${discussion.author},${discussion.date}`),
    ];
    return csvRows.join('\n');
  }

  function generatePDFContent(doc) {
    discussions.forEach((discussion, index) => {
      const y = 20 + index * 30;
      doc.text(`Title: ${discussion.title}`, 10, y);
      doc.text(`Author: ${discussion.author}`, 10, y + 10);
      doc.text(`Date: ${discussion.date}`, 10, y + 20);
    });
  }
</script>

<BaseReport title="Discussion Report" {convertToCSV} {generatePDFContent}>
  <p>Total Discussions: {discussions.length}</p>
</BaseReport>