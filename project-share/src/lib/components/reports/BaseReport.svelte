<script>
  import saveAs from 'file-saver';
  import jsPDF from 'jspdf';

  export let title = '';
  export let convertToCSV = () => '';
  export let generatePDFContent = () => {};

  function generateCSV() {
    const csvData = convertToCSV();
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, `${title}.csv`);
  }

  function generatePDF() {
    const doc = new jsPDF();
    doc.text(title, 10, 10);
    generatePDFContent(doc);
    doc.save(`${title}.pdf`);
  }
</script>

<div>
  <h2>{title}</h2>
  <slot></slot>
  <button on:click={generateCSV}>Generate CSV</button>
  <button on:click={generatePDF}>Generate PDF</button>
</div>