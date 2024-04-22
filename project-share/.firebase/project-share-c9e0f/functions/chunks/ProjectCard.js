import { c as create_ssr_component, v as validate_component, d as escape, f as each } from "./ssr.js";
import { B as Button } from "./Hero.svelte_svelte_type_style_lang.js";
import { B as Badge } from "./Badge.js";
import { C as Card } from "./Card.js";
/* empty css                                          */
const css = {
  code: ".project-header.svelte-vzbng2.svelte-vzbng2{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem}.project-header.svelte-vzbng2 h3.svelte-vzbng2{font-size:1.25rem;margin:0}.project-body.svelte-vzbng2.svelte-vzbng2{flex:1;overflow:auto;margin-bottom:1rem}.label.svelte-vzbng2.svelte-vzbng2{font-weight:bold;display:block;margin-bottom:0.5rem}.project-tags.svelte-vzbng2.svelte-vzbng2{margin-top:0.5rem}.project-tags.svelte-vzbng2 .badge{margin-right:0.5rem}.project-files.svelte-vzbng2.svelte-vzbng2{margin-top:1rem}.project-files.svelte-vzbng2 ul.svelte-vzbng2{margin:0;padding-left:1.5rem}.project-footer.svelte-vzbng2.svelte-vzbng2{text-align:right}",
  map: null
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project = {
    name: "",
    description: "",
    category: "",
    tags: [],
    files: []
  } } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  $$result.css.add(css);
  return `  ${validate_component(Card, "Card").$$render($$result, { class: "mb-4" }, {}, {
    default: () => {
      return `<div class="project-header svelte-vzbng2"><div><label for="project-name" class="label svelte-vzbng2" data-svelte-h="svelte-34qwlm">Project Name:</label> <h3 id="project-name" class="svelte-vzbng2">${escape(project.name)}</h3></div> <div><label for="project-category" class="label svelte-vzbng2" data-svelte-h="svelte-1enuuzp">Category:</label> ${validate_component(Badge, "Badge").$$render($$result, { type: "success", id: "project-category" }, {}, {
        default: () => {
          return `${escape(project.category)}`;
        }
      })}</div></div> <div class="project-body svelte-vzbng2"><div><label for="project-description" class="label svelte-vzbng2" data-svelte-h="svelte-1rre957">Description:</label> <p id="project-description">${escape(project.description)}</p></div> <div class="project-tags svelte-vzbng2"><label for="project-tags" class="label svelte-vzbng2" data-svelte-h="svelte-lm36hp">Tags:</label> <div id="project-tags">${each(project.tags, (tag) => {
        return `${validate_component(Badge, "Badge").$$render($$result, { type: "success" }, {}, {
          default: () => {
            return `${escape(tag)}`;
          }
        })}`;
      })}</div></div> ${project.files.length > 0 ? `<div class="project-files svelte-vzbng2"><label for="project-files" class="label svelte-vzbng2" data-svelte-h="svelte-azcew5">Files:</label> <ul id="project-files" class="svelte-vzbng2">${each(project.files, (file) => {
        return `<li>${escape(file)}</li>`;
      })}</ul></div>` : ``}</div> <div class="project-footer svelte-vzbng2">${validate_component(Button, "Button").$$render($$result, { href: "/projects/" + project.id }, {}, {
        default: () => {
          return `View Project`;
        }
      })}</div>`;
    }
  })}`;
});
export {
  ProjectCard as P
};
