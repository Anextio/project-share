<script>
  import BaseReport from './BaseReport.svelte';

  export let projects = [];

  function convertToCSV() {
    const csvRows = [
      'Name,Description,Category,Tags',
      ...projects.map(project => `${project.name},${project.description},${project.category},"${project.tags.join(',')}"`),
    ];
    return csvRows.join('\n');
  }

  function generatePDFContent(doc) {
    projects.forEach((project, index) => {
      const y = 20 + index * 40;
      doc.text(`Name: ${project.name}`, 10, y);
      doc.text(`Description: ${project.description}`, 10, y + 10);
      doc.text(`Category: ${project.category}`, 10, y + 20);
      doc.text(`Tags: ${project.tags.join(', ')}`, 10, y + 30);
    });
  }
</script>

<BaseReport title="Project Report" {convertToCSV} {generatePDFContent}>
  <p>Total Projects: {projects.length}</p>
</BaseReport>