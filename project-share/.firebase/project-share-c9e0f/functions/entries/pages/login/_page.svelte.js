import { c as compute_rest_props, s as subscribe, a as compute_slots } from "../../../chunks/utils.js";
import { c as create_ssr_component, h as createEventDispatcher, s as setContext, a as spread, e as escape_object, d as escape, f as each, g as add_attribute, i as getContext, o as onDestroy, b as escape_attribute_value, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/firebase.js";
import "firebase/auth";
import "../../../chunks/client.js";
import { B as Button } from "../../../chunks/Hero.svelte_svelte_type_style_lang.js";
import { w as writable } from "../../../chunks/index2.js";
import { I as Input } from "../../../chunks/Input.js";
import { C as Card } from "../../../chunks/Card.js";
import "firebase/firestore";
import { p as page } from "../../../chunks/stores.js";
function getId(label, part) {
  return `paper-tab-${label}-${part}`;
}
const css$1 = {
  code: ".tabs-label-header.svelte-9j0x21{cursor:pointer;color:var(--primary-light);display:inline-block;font-weight:600;margin:0 0 -1px;padding:0.75rem;text-align:center}.tabs-label-header.svelte-9j0x21:hover:not(.tabs-label-header--active){color:var(--muted)}.tabs-label-header--active.svelte-9j0x21{color:var(--primary);border-bottom:3px solid var(--secondary)}.tabs input{display:block}.tabs label{all:inherit}.tabs label:hover{all:inherit}",
  map: null
};
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["activeTab", "placement", "contentAlign"]);
  let $tabs, $$unsubscribe_tabs;
  let { activeTab = 0 } = $$props;
  let { placement = "spaces" } = $$props;
  let { contentAlign = "left" } = $$props;
  createEventDispatcher();
  const tabs = writable([]);
  $$unsubscribe_tabs = subscribe(tabs, (value) => $tabs = value);
  const tabsData = { activeTab, tabs };
  setContext("tabs", tabsData);
  function updateTabsVisility() {
    $tabs.forEach((tab, idx) => {
      if (idx == activeTab)
        tab.show();
      else
        tab.hide();
    });
  }
  if ($$props.activeTab === void 0 && $$bindings.activeTab && activeTab !== void 0)
    $$bindings.activeTab(activeTab);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.contentAlign === void 0 && $$bindings.contentAlign && contentAlign !== void 0)
    $$bindings.contentAlign(contentAlign);
  $$result.css.add(css$1);
  activeTab && updateTabsVisility();
  $$unsubscribe_tabs();
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: "row flex-" + escape(placement, true) + " tabs " + escape($$restProps.class ?? "", true)
      },
      {
        style: "text-align: " + escape(contentAlign, true)
      }
    ],
    { classes: "svelte-9j0x21" }
  )}>${each($tabs, ({ label, header }, index) => {
    let selected = index == activeTab;
    return ` <div class="${[
      "tabs-label-header svelte-9j0x21",
      selected ? "tabs-label-header--active" : ""
    ].join(" ").trim()}"${add_attribute("id", getId(label, "label"), 0)}${add_attribute("aria-selected", selected, 0)}${add_attribute("aria-controls", getId(label, "content"), 0)} role="tab"${add_attribute("tabindex", selected ? 0 : -1, 0)}>${header ? `<!-- HTML_TAG_START -->${header.innerHTML}<!-- HTML_TAG_END -->` : `${escape(label)}`} </div>`;
  })} ${slots.default ? slots.default({}) : ``} </div>`;
});
const css = {
  code: ".content--active.svelte-17929qf{display:block !important}",
  map: null
};
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["label"]);
  let $$slots = compute_slots(slots);
  let { label } = $$props;
  const key = {};
  let active = false;
  let header;
  const tabsData = getContext("tabs");
  if (!tabsData)
    throw new Error("Tab should be nested inside a Tabs");
  onDestroy(() => {
    tabsData.tabs.update((tabs) => tabs.filter((t) => t.key !== key));
  });
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css);
  {
    tabsData.tabs.update((tabs) => tabs.map((t) => t.key === key ? Object.assign(Object.assign({}, t), { label, header }) : t));
  }
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape($$restProps.class ?? "", true) + " content margin"
      },
      {
        id: escape_attribute_value(getId(label, "content"))
      },
      {
        "aria-hidden": escape_attribute_value(!active)
      },
      {
        "aria-labelledby": escape_attribute_value(getId(label, "label"))
      },
      { role: "tabpanel" },
      {
        tabindex: escape_attribute_value(-1)
      }
    ],
    {
      classes: " svelte-17929qf"
    }
  )}>${$$slots.header ? `<div style="display: none"${add_attribute("this", header, 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``} ${slots.default ? slots.default({}) : ``} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let activeTab = 0;
  let email = "";
  let password = "";
  let loading = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex min-h-screen items-center justify-center p-4">${validate_component(Card, "Card").$$render($$result, { class: "w-full max-w-md p-6" }, {}, {
      default: () => {
        return `${validate_component(Tabs, "Tabs").$$render(
          $$result,
          { "data-testid": "tabs", activeTab },
          {
            activeTab: ($$value) => {
              activeTab = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${validate_component(Tab, "Tab").$$render(
                $$result,
                {
                  label: "Sign In",
                  "data-testid": "signInTab"
                },
                {},
                {}
              )} ${validate_component(Tab, "Tab").$$render(
                $$result,
                {
                  label: "Sign Up",
                  "data-testid": "signUpTab"
                },
                {},
                {}
              )}`;
            }
          }
        )} ${``} ${activeTab === 0 ? `<div class="flex flex-col items-center"><form class="mt-6 flex w-full flex-col gap-4">${validate_component(Input, "Input").$$render(
          $$result,
          {
            label: "Email",
            type: "email",
            required: true,
            class: "w-full",
            value: email
          },
          {
            value: ($$value) => {
              email = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            label: "Password",
            type: "password",
            required: true,
            class: "w-full",
            value: password
          },
          {
            value: ($$value) => {
              password = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Button, "Button").$$render($$result, { disabled: loading }, {}, {
          default: () => {
            return `${``}
						Sign in with Email`;
          }
        })}</form> ${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "contained",
            color: "secondary",
            class: "mt-4",
            disabled: loading
          },
          {},
          {
            default: () => {
              return `${``}
					Sign in with Google`;
            }
          }
        )}</div>` : `<form class="mt-6 flex flex-col gap-4" data-testid="signUpForm">${validate_component(Input, "Input").$$render(
          $$result,
          {
            label: "Email",
            type: "email",
            required: true,
            class: "w-full",
            value: email
          },
          {
            value: ($$value) => {
              email = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            label: "Password",
            type: "password",
            required: true,
            class: "w-full",
            value: password
          },
          {
            value: ($$value) => {
              password = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Button, "Button").$$render($$result, { disabled: loading }, {}, {
          default: () => {
            return `${``}
					Sign up with Email`;
          }
        })}</form>`}`;
      }
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
