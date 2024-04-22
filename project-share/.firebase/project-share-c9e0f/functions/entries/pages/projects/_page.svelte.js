import { c as compute_rest_props, i as is_promise, n as noop } from "../../../chunks/utils.js";
import { c as create_ssr_component, a as spread, e as escape_object, b as escape_attribute_value, v as validate_component, f as each, d as escape } from "../../../chunks/ssr.js";
import { P as ProjectCard } from "../../../chunks/ProjectCard.js";
import { c as computeClasses, C as CloseButton } from "../../../chunks/Hero.svelte_svelte_type_style_lang.js";
import { R as Row, C as Col } from "../../../chunks/Row.js";
import { a as getAllProjects } from "../../../chunks/projectsApi.js";
const css$1 = {
  code: ".alert.svelte-9xbwwn{transition:all 0.25s ease-out}.alert.closed.svelte-9xbwwn{border-width:0;margin:0;max-height:0;opacity:0;padding-bottom:0;padding-top:0}",
  map: null
};
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["type", "dismissible"]);
  var _a;
  let { type = "primary" } = $$props;
  let { dismissible = false } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.dismissible === void 0 && $$bindings.dismissible && dismissible !== void 0)
    $$bindings.dismissible(dismissible);
  $$result.css.add(css$1);
  classes = `${(_a = $$restProps.class) !== null && _a !== void 0 ? _a : ""} alert ${computeClasses("alert", { type })}`;
  return `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(classes) },
      { role: "alert" }
    ],
    {
      classes: " " + (dismissible ? "dismissible" : "") + " svelte-9xbwwn"
    }
  )}>${slots.default ? slots.default({}) : ``} ${dismissible ? `${validate_component(CloseButton, "CloseButton").$$render($$result, {}, {}, {})}` : ``} </div>`;
});
const css = {
  code: ".category-heading.svelte-tpqxqu{margin-bottom:2rem;margin-left:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projects = [];
  let error = null;
  async function loadProjects() {
    try {
      projects = await getAllProjects();
      console.log(projects);
    } catch (err) {
      console.error("Error loading projects:", err);
      error = "Failed to load projects. Please try again later.";
    }
  }
  let projectsLoaded = loadProjects();
  $$result.css.add(css);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <p data-svelte-h="svelte-sh6bm4">Loading projects...</p> `;
    }
    return function() {
      return ` ${error ? `${validate_component(Alert, "Alert").$$render($$result, { severity: "error", class: "mt-4" }, {}, {
        default: () => {
          return `${escape(error)}`;
        }
      })}` : `<div><h2 class="category-heading svelte-tpqxqu" data-svelte-h="svelte-1qlpgpq">Projects</h2> ${projects.length > 0 ? `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${each(projects, (project) => {
            return `${validate_component(Col, "Col").$$render($$result, { md: "4" }, {}, {
              default: () => {
                return `${validate_component(ProjectCard, "ProjectCard").$$render($$result, { project }, {}, {})} `;
              }
            })}`;
          })}`;
        }
      })}` : `<p data-svelte-h="svelte-1u7xtb5">No projects found.</p>`}</div>`} `;
    }();
  }(projectsLoaded)}`;
});
export {
  Page as default
};
