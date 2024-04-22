import { c as create_ssr_component, v as validate_component, f as each, d as escape } from "../../chunks/ssr.js";
import { i as is_promise, n as noop } from "../../chunks/utils.js";
import { P as ProjectCard } from "../../chunks/ProjectCard.js";
import "../../chunks/Hero.svelte_svelte_type_style_lang.js";
import { R as Row, C as Col } from "../../chunks/Row.js";
import { g as getMostDiscussedProjects } from "../../chunks/projectsApi.js";
import { g as getCategories } from "../../chunks/tagsApi.js";
import "../../chunks/client.js";
import { C as Card } from "../../chunks/Card.js";
/* empty css                                                      */
const FeaturedProjects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projects = [];
  let projectsLoaded = loadProjects();
  async function loadProjects() {
    projects = await getMostDiscussedProjects();
  }
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <p data-svelte-h="svelte-sh6bm4">Loading projects...</p> `;
    }
    return function() {
      return ` <h2 data-svelte-h="svelte-1j61kx1">Explore Projects</h2> <h3 data-svelte-h="svelte-1einhq6">Featured Projects</h3> ${projects.length > 0 ? `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${each(projects, (project) => {
            return `${validate_component(Col, "Col").$$render($$result, { col: "4" }, {}, {
              default: () => {
                return `${validate_component(ProjectCard, "ProjectCard").$$render($$result, { project }, {}, {})} `;
              }
            })}`;
          })}`;
        }
      })}` : `<p data-svelte-h="svelte-1b63a93">No projects found</p>`} ${validate_component(Row, "Row").$$render($$result, { center: true }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
            default: () => {
              return `<a class="paper-btn" href="/projects" data-svelte-h="svelte-qk9l9r">View All</a>`;
            }
          })}`;
        }
      })} `;
    }();
  }(projectsLoaded)}`;
});
const css = {
  code: ".category-content.svelte-1qzteta.svelte-1qzteta{text-align:center;cursor:pointer}.category-content.svelte-1qzteta h3.svelte-1qzteta{font-size:1.25rem;margin:0;margin-bottom:0.5rem}.category-content.svelte-1qzteta p.svelte-1qzteta{margin:0}",
  map: null
};
const CategoryCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { category = {
    name: "",
    projectCount: 0,
    discussionCount: 0
  } } = $$props;
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  $$result.css.add(css);
  return `  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="category-content svelte-1qzteta"><h3 class="svelte-1qzteta">${escape(category.name)}</h3> <p class="svelte-1qzteta">Projects: ${escape(category.projectCount)}</p> <p class="svelte-1qzteta">Discussions: ${escape(category.discussionCount)}</p></div>`;
    }
  })}`;
});
const CategoryList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let categoriesLoaded = loadCategories();
  let categories = [];
  async function loadCategories() {
    categories = await getCategories();
  }
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <p data-svelte-h="svelte-19iogny">Loading categories...</p> `;
    }
    return function() {
      return ` <h2 data-svelte-h="svelte-1v5ei8e">Categories</h2> ${categories.length > 0 ? `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${each(categories, (category) => {
            return `${validate_component(Col, "Col").$$render($$result, { col: "4" }, {}, {
              default: () => {
                return `${validate_component(CategoryCard, "CategoryCard").$$render($$result, { category }, {}, {})} `;
              }
            })}`;
          })}`;
        }
      })}` : `<p data-svelte-h="svelte-19mp99v">No categories found.</p>`} `;
    }();
  }(categoriesLoaded)}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="paper"><div class="paper margin-top-large"><h1 data-svelte-h="svelte-1cxd7pr">Share and Discuss Your Projects</h1> <p data-svelte-h="svelte-1klrodu">Fostering Collaboration and Knowledge Exchange</p> ${validate_component(FeaturedProjects, "FeaturedProjects").$$render($$result, {}, {}, {})} ${validate_component(CategoryList, "CategoryList").$$render($$result, {}, {}, {})}</div></main>`;
});
export {
  Page as default
};
