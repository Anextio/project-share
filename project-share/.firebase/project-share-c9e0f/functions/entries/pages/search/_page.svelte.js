import { s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, d as escape, v as validate_component, f as each } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import "../../../chunks/firebase.js";
import "firebase/firestore";
import "../../../chunks/Hero.svelte_svelte_type_style_lang.js";
import { C as Card } from "../../../chunks/Card.js";
import { R as Row, C as Col } from "../../../chunks/Row.js";
const css = {
  code: ".container.svelte-1mtp8an{max-width:800px;margin:0 auto;padding:20px}.card-grid.svelte-1mtp8an{display:grid;grid-template-columns:repeat(auto-fill, minmax(250px, 1fr));gap:20px}.loading-container.svelte-1mtp8an{display:flex;flex-direction:column;align-items:center;justify-content:center;height:200px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let searchQuery = "";
  let searchResults = { users: [], projects: [], discussions: [] };
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="container svelte-1mtp8an"><h2>Search Results for &quot;${escape(searchQuery)}&quot;</h2> ${`${searchResults.users.length > 0 || searchResults.projects.length > 0 || searchResults.discussions.length > 0 ? `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
        default: () => {
          return `<h3 data-svelte-h="svelte-1xfskau">Users</h3> <div class="card-grid svelte-1mtp8an">${searchResults.users.length > 0 ? `${each(searchResults.users, (user) => {
            return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
              default: () => {
                return `<h4>${escape(user.displayName)}</h4> <p>${escape(user.email)}</p> <a href="${"/users/" + escape(user.id, true)}">View Profile</a> `;
              }
            })}`;
          })}` : `<p data-svelte-h="svelte-1wvsmpt">No Users Match The Search Term</p>`}</div>`;
        }
      })}`;
    }
  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
        default: () => {
          return `<h3 data-svelte-h="svelte-dmvsri">Projects</h3> <div class="card-grid svelte-1mtp8an">${searchResults.projects.length > 0 ? `${each(searchResults.projects, (project) => {
            return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
              default: () => {
                return `<h4>${escape(project.name)}</h4> <p>${escape(project.description)}</p> <a href="${"/projects/" + escape(project.id, true)}">View Project</a> `;
              }
            })}`;
          })}` : `<p data-svelte-h="svelte-k3gq2n">No Projects Match The Search Term</p>`}</div>`;
        }
      })}`;
    }
  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
        default: () => {
          return `<h3 data-svelte-h="svelte-ur28ul">Discussions</h3> <div class="card-grid svelte-1mtp8an">${searchResults.discussions.length > 0 ? `${each(searchResults.discussions, (discussion) => {
            return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
              default: () => {
                return `<h4>${escape(discussion.title)}</h4> <p>${escape(discussion.description)}</p> <a href="${"/discussions/" + escape(discussion.id, true)}">View Discussion</a> `;
              }
            })}`;
          })}` : `<p data-svelte-h="svelte-lqdmuq">No Discussions Match The Search Term</p>`}</div>`;
        }
      })}`;
    }
  })}` : `<p data-svelte-h="svelte-iq13un">No results found for your search.</p>`}`} </div>`;
});
export {
  Page as default
};
