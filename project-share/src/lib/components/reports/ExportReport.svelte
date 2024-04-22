<!-- src/components/reports/ExportReport.svelte -->
<script>
    import { saveAs } from 'file-saver';
    import jsPDF from 'jspdf';
  
    export let projects = [];
    export let discussions = [];
  
    function exportCSV() {
      const csvData = convertToCSV(projects, discussions);
      const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
      saveAs(blob, 'report.csv');
    }
  
    function exportPDF() {
      const doc = new jsPDF();
      
      // Add project data to the PDF
      doc.text('Project Report', 10, 10);
      projects.forEach((project, index) => {
        const y = 20 + index * 40;
        doc.text(`Name: ${project.name}`, 10, y);
        doc.text(`Description: ${project.description}`, 10, y + 10);
        doc.text(`Category: ${project.category}`, 10, y + 20);
        doc.text(`Tags: ${project.tags.join(', ')}`, 10, y + 30);
      });
      
      // Add discussion data to the PDF
      doc.addPage();
      doc.text('Discussion Report', 10, 10);
      discussions.forEach((discussion, index) => {
        const y = 20 + index * 30;
        doc.text(`Title: ${discussion.title}`, 10, y);
        doc.text(`Author: ${discussion.author}`, 10, y + 10);
        doc.text(`Date: ${discussion.date}`, 10, y + 20);
      });
      
      doc.save('report.pdf');
    }
  
    function convertToCSV(projects, discussions) {
      const csvRows = [];
  
      // Add project data to CSV
      csvRows.push('Project Report');
      csvRows.push('Name,Description,Category,Tags');
      projects.forEach(project => {
        const { name, description, category, tags } = project;
        const row = `${name},${description},${category},"${tags.join(',')}"`;
        csvRows.push(row);
      });
  
      // Add empty row for separation
      csvRows.push('');
  
      // Add discussion data to CSV
      csvRows.push('Discussion Report');
      csvRows.push('Title,Author,Date');
      discussions.forEach(discussion => {
        const { title, author, date } = discussion;
        const row = `${title},${author},${date}`;
        csvRows.push(row);
      });
  
      return csvRows.join('\n');
    }
  </script>
  
  <div>
    <slot></slot>
    <button on:click={exportCSV}>Export CSV</button>
    <button on:click={exportPDF}>Export PDF</button>
  </div>