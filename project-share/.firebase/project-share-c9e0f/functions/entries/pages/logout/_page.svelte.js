import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "firebase/auth";
import "../../../chunks/firebase.js";
import "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  <div><h1 data-svelte-h="svelte-1ghpf16">Logout</h1> <p data-svelte-h="svelte-ivzlu5">Are you sure you want to log out?</p> <button data-svelte-h="svelte-1nk90d6">Log out</button></div>`;
});
export {
  Page as default
};
