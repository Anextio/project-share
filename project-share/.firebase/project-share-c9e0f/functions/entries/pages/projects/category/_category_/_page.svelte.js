import { s as subscribe } from "../../../../../chunks/utils.js";
import { c as create_ssr_component, d as escape, v as validate_component, f as each } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/Hero.svelte_svelte_type_style_lang.js";
import { R as Row, C as Col } from "../../../../../chunks/Row.js";
import "../../../../../chunks/firebase.js";
import "firebase/firestore";
import "../../../../../chunks/tagsApi.js";
import { P as ProjectCard } from "../../../../../chunks/ProjectCard.js";
import { p as page } from "../../../../../chunks/stores.js";
const css = {
  code: ".category-heading.svelte-tpqxqu{margin-bottom:2rem;margin-left:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let projects = [];
  let category = "";
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div><h2 class="category-heading svelte-tpqxqu">Projects in ${escape(category)}</h2> ${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${each(projects, (project) => {
        return `${validate_component(Col, "Col").$$render($$result, { col: "4" }, {}, {
          default: () => {
            return `${validate_component(ProjectCard, "ProjectCard").$$render($$result, { project }, {}, {})} `;
          }
        })}`;
      })}`;
    }
  })} </div>`;
});
export {
  Page as default
};
