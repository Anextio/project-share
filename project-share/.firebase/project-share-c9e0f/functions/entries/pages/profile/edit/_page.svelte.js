import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { a as authStore } from "../../../../chunks/authStore.js";
import "firebase/firestore";
import "../../../../chunks/firebase.js";
import { B as Button } from "../../../../chunks/Hero.svelte_svelte_type_style_lang.js";
import { I as Input } from "../../../../chunks/Input.js";
import { R as Row, C as Col } from "../../../../chunks/Row.js";
import "../../../../chunks/auth.js";
import "../../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let displayName = $authStore.displayName;
  let email = $authStore.email;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `  <div class="container">${validate_component(Row, "Row").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
          default: () => {
            return `<h1 data-svelte-h="svelte-1o5ke4h">Edit Profile</h1>`;
          }
        })}`;
      }
    })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
          default: () => {
            return `<form>${validate_component(Input, "Input").$$render(
              $$result,
              {
                label: "Display Name",
                type: "text",
                required: true,
                value: displayName
              },
              {
                value: ($$value) => {
                  displayName = $$value;
                  $$settled = false;
                }
              },
              {}
            )} ${validate_component(Input, "Input").$$render(
              $$result,
              {
                label: "Email",
                type: "email",
                required: true,
                disabled: true,
                value: email
              },
              {
                value: ($$value) => {
                  email = $$value;
                  $$settled = false;
                }
              },
              {}
            )} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `Save Changes`;
              }
            })}</form>`;
          }
        })}`;
      }
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_authStore();
  return $$rendered;
});
export {
  Page as default
};
