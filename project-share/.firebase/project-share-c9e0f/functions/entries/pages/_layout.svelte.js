import { c as create_ssr_component, a as spread, e as escape_object, b as escape_attribute_value, v as validate_component } from "../../chunks/ssr.js";
import { B as Button } from "../../chunks/Hero.svelte_svelte_type_style_lang.js";
import { c as compute_rest_props, a as compute_slots } from "../../chunks/utils.js";
import { I as Input } from "../../chunks/Input.js";
import "../../chunks/firebase.js";
import "firebase/firestore";
import "../../chunks/client.js";
import { a as authStore } from "../../chunks/authStore.js";
import "firebase/auth";
const css = {
  code: ".collapsible.svelte-12pm6a>button.svelte-12pm6a{border:2px solid var(--primary)}.collapsible-body.open.svelte-12pm6a.svelte-12pm6a{margin:0;max-height:960px;opacity:1;padding:0}.paper-navbar li a.paper-btn{display:initial}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["border", "fixed", "split"]);
  let $$slots = compute_slots(slots);
  let { border = true } = $$props;
  let { fixed = false } = $$props;
  let { split = true } = $$props;
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.split === void 0 && $$bindings.split && split !== void 0)
    $$bindings.split(split);
  $$result.css.add(css);
  return `<nav${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(`${$$restProps.class ?? ""} paper-navbar`)
      }
    ],
    {
      classes: (border ? "border" : "") + " " + (fixed ? "fixed" : "") + " " + (split ? "split-nav" : "") + " svelte-12pm6a"
    }
  )}>${$$slots.brand ? `<div class="nav-brand">${slots.brand ? slots.brand({}) : ``}</div>` : ``} <div class="collapsible svelte-12pm6a"><button class="svelte-12pm6a" data-svelte-h="svelte-an0mwf">☰</button> <div class="${["collapsible-body svelte-12pm6a", ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div></div> </nav>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchQuery = "";
  let user = null;
  authStore.subscribe((currentUser) => {
    user = currentUser;
  });
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {
      brand: () => {
        return `<h3 slot="brand">${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Logo`;
          }
        })}</h3>`;
      },
      default: () => {
        return `<ul class="inline"><li>${validate_component(Input, "Input").$$render(
          $$result,
          {
            placeholder: "Search",
            value: searchQuery
          },
          {
            value: ($$value) => {
              searchQuery = $$value;
              $$settled = false;
            }
          },
          {}
        )}</li> <li>${validate_component(Button, "Button").$$render($$result, { size: "small" }, {}, {
          default: () => {
            return `Search`;
          }
        })}</li> <li></li> <li>${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Home`;
          }
        })}</li> <li>${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Projects`;
          }
        })}</li> <li>${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Discussions`;
          }
        })}</li> ${user ? `<li>${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Profile`;
          }
        })}</li> <li>${validate_component(Button, "Button").$$render($$result, { size: "small" }, {}, {
          default: () => {
            return `Logout`;
          }
        })}</li> <li>${validate_component(Button, "Button").$$render($$result, { size: "small" }, {}, {
          default: () => {
            return `Create Project`;
          }
        })}</li>` : `<li>${validate_component(Button, "Button").$$render($$result, { size: "small" }, {}, {
          default: () => {
            return `Login`;
          }
        })}</li>`}</ul>`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
