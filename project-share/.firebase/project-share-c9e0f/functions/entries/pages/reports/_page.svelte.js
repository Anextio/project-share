import { c as create_ssr_component, d as escape, v as validate_component } from "../../../chunks/ssr.js";
import "file-saver";
import "jspdf";
import "../../../chunks/firebase.js";
import "firebase/firestore";
import "../../../chunks/tagsApi.js";
import "../../../chunks/discussionsApi.js";
const BaseReport = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { convertToCSV = () => "" } = $$props;
  let { generatePDFContent = () => {
  } } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.convertToCSV === void 0 && $$bindings.convertToCSV && convertToCSV !== void 0)
    $$bindings.convertToCSV(convertToCSV);
  if ($$props.generatePDFContent === void 0 && $$bindings.generatePDFContent && generatePDFContent !== void 0)
    $$bindings.generatePDFContent(generatePDFContent);
  return `<div><h2>${escape(title)}</h2> ${slots.default ? slots.default({}) : ``} <button data-svelte-h="svelte-1mtb71g">Generate CSV</button> <button data-svelte-h="svelte-13w3xec">Generate PDF</button></div>`;
});
const ProjectReport = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projects = [] } = $$props;
  function convertToCSV() {
    const csvRows = [
      "Name,Description,Category,Tags",
      ...projects.map((project) => `${project.name},${project.description},${project.category},"${project.tags.join(",")}"`)
    ];
    return csvRows.join("\n");
  }
  function generatePDFContent(doc) {
    projects.forEach((project, index) => {
      const y = 20 + index * 40;
      doc.text(`Name: ${project.name}`, 10, y);
      doc.text(`Description: ${project.description}`, 10, y + 10);
      doc.text(`Category: ${project.category}`, 10, y + 20);
      doc.text(`Tags: ${project.tags.join(", ")}`, 10, y + 30);
    });
  }
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  return `${validate_component(BaseReport, "BaseReport").$$render(
    $$result,
    {
      title: "Project Report",
      convertToCSV,
      generatePDFContent
    },
    {},
    {
      default: () => {
        return `<p>Total Projects: ${escape(projects.length)}</p>`;
      }
    }
  )}`;
});
const DiscussionReport = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { discussions = [] } = $$props;
  function convertToCSV() {
    const csvRows = [
      "Title,Author,Date",
      ...discussions.map((discussion) => `${discussion.title},${discussion.author},${discussion.date}`)
    ];
    return csvRows.join("\n");
  }
  function generatePDFContent(doc) {
    discussions.forEach((discussion, index) => {
      const y = 20 + index * 30;
      doc.text(`Title: ${discussion.title}`, 10, y);
      doc.text(`Author: ${discussion.author}`, 10, y + 10);
      doc.text(`Date: ${discussion.date}`, 10, y + 20);
    });
  }
  if ($$props.discussions === void 0 && $$bindings.discussions && discussions !== void 0)
    $$bindings.discussions(discussions);
  return `${validate_component(BaseReport, "BaseReport").$$render(
    $$result,
    {
      title: "Discussion Report",
      convertToCSV,
      generatePDFContent
    },
    {},
    {
      default: () => {
        return `<p>Total Discussions: ${escape(discussions.length)}</p>`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projects = [];
  let discussions = [];
  return `<h1 data-svelte-h="svelte-1hezv7j">Reports</h1> ${projects.length === 0 || discussions.length === 0 ? `<p data-svelte-h="svelte-slw5li">Loading data...</p>` : `${validate_component(ProjectReport, "ProjectReport").$$render($$result, { projects }, {}, {})} ${validate_component(DiscussionReport, "DiscussionReport").$$render($$result, { discussions }, {}, {})}`}`;
});
export {
  Page as default
};
