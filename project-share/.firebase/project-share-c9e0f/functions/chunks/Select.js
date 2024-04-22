import { c as compute_rest_props } from "./utils.js";
import { c as create_ssr_component, h as createEventDispatcher, d as escape, a as spread, e as escape_object, g as add_attribute } from "./ssr.js";
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["label", "value"]);
  let { label = "" } = $$props;
  let { value = "" } = $$props;
  let selectElement;
  createEventDispatcher();
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `${label ? `<label>${escape(label)} <select${spread([escape_object($$restProps)], {})}${add_attribute("this", selectElement, 0)}>${slots.default ? slots.default({}) : ``}</select></label>` : `<select${spread([escape_object($$restProps)], {})}${add_attribute("this", selectElement, 0)}>${slots.default ? slots.default({}) : ``}</select>`}`;
});
export {
  Select as S
};
