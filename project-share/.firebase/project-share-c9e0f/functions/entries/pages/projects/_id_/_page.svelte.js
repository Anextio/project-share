import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/Hero.svelte_svelte_type_style_lang.js";
import "../../../../chunks/client.js";
import "../../../../chunks/firebase.js";
import "firebase/firestore";
import "../../../../chunks/tagsApi.js";
const css = {
  code: "section.svelte-b3zfbz{margin-bottom:40px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div>${`<p data-svelte-h="svelte-db1ml3">Loading project...</p>`} </div>`;
});
export {
  Page as default
};
