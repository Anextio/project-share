import { c as compute_rest_props } from "./utils.js";
import { c as create_ssr_component, h as createEventDispatcher, a as spread, e as escape_object, d as escape, g as add_attribute } from "./ssr.js";
import { c as computeClasses, g as getDomAttributes } from "./Hero.svelte_svelte_type_style_lang.js";
const css = {
  code: "label.svelte-1g63nco{width:100%}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["label", "value", "block", "type", "valid", "noResize"]);
  var _a;
  let { label = "" } = $$props;
  let { value = "" } = $$props;
  let { block = false } = $$props;
  let { type = "text" } = $$props;
  let { valid = null } = $$props;
  let { noResize = false } = $$props;
  createEventDispatcher();
  let isValid = true;
  let attr;
  let classes;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  if ($$props.noResize === void 0 && $$bindings.noResize && noResize !== void 0)
    $$bindings.noResize(noResize);
  $$result.css.add(css);
  {
    if (valid) {
      isValid = valid(value);
    }
  }
  classes = `${(_a = $$restProps.class) !== null && _a !== void 0 ? _a : ""} ${computeClasses("input", { block })}`;
  {
    {
      attr = getDomAttributes({
        props: $$props,
        classes,
        toOmit: ["block", "value", "valid", "noResize"]
      });
    }
  }
  return `${type === "textarea" ? `<textarea${spread([escape_object(attr)], { classes: noResize ? "no-resize" : "" })}>${escape(value || "")}</textarea>` : `${label ? `<label class="svelte-1g63nco">${escape(label)} <input${spread([escape_object(attr)], {
    classes: (!isValid && value ? "border-danger" : "") + " " + (isValid && value && valid ? "border-success" : "")
  })}${add_attribute("value", value, 0)}></label>` : `<input${spread([escape_object(attr)], {
    classes: (!isValid && value ? "border-danger" : "") + " " + (isValid && value && valid ? "border-success" : "")
  })}${add_attribute("value", value, 0)}>`}`}`;
});
export {
  Input as I
};
