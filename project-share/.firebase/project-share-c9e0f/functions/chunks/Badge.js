import { c as compute_rest_props } from "./utils.js";
import { c as create_ssr_component, a as spread, e as escape_object, d as escape } from "./ssr.js";
import "./Hero.svelte_svelte_type_style_lang.js";
const css = {
  code: ".badge.rounded.svelte-lxlbcz{border-radius:30%}",
  map: null
};
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["type", "rounded"]);
  let { type = "primary" } = $$props;
  let { rounded = false } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  $$result.css.add(css);
  return `<span${spread(
    [
      escape_object($$restProps),
      {
        class: escape($$restProps.class ?? "", true) + " badge " + escape(type, true)
      }
    ],
    {
      classes: (rounded ? "rounded" : "") + " svelte-lxlbcz"
    }
  )}>${slots.default ? slots.default({}) : ``} </span>`;
});
export {
  Badge as B
};
