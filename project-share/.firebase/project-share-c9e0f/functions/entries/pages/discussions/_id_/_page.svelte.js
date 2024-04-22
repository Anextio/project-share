import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/discussionsApi.js";
import "../../../../chunks/Hero.svelte_svelte_type_style_lang.js";
const css = {
  code: ".author.svelte-1r8s2ye{font-weight:bold}.date.svelte-1r8s2ye{color:#888;font-size:0.8em}.replies.svelte-1r8s2ye{margin-bottom:20px}.add-reply.svelte-1r8s2ye{display:flex;flex-direction:column}.edited.svelte-1r8s2ye{color:#888;font-size:0.8em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div>${`<p data-svelte-h="svelte-1nfi4na">Loading discussion...</p>`} </div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
