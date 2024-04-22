import { c as compute_rest_props } from "./utils.js";
import { c as create_ssr_component, a as spread, e as escape_object, b as escape_attribute_value, d as escape } from "./ssr.js";
import { c as computeClasses } from "./Hero.svelte_svelte_type_style_lang.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const Col = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["as", "col", "sm", "md", "lg", "fill", "top", "middle", "bottom"]);
  var _a;
  let { as = "div" } = $$props;
  let { col = null } = $$props;
  let { sm = null } = $$props;
  let { md = null } = $$props;
  let { lg = null } = $$props;
  let { fill = false } = $$props;
  let { top = false } = $$props;
  let { middle = false } = $$props;
  let { bottom = false } = $$props;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.col === void 0 && $$bindings.col && col !== void 0)
    $$bindings.col(col);
  if ($$props.sm === void 0 && $$bindings.sm && sm !== void 0)
    $$bindings.sm(sm);
  if ($$props.md === void 0 && $$bindings.md && md !== void 0)
    $$bindings.md(md);
  if ($$props.lg === void 0 && $$bindings.lg && lg !== void 0)
    $$bindings.lg(lg);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.middle === void 0 && $$bindings.middle && middle !== void 0)
    $$bindings.middle(middle);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  classes = `col ${(_a = $$restProps.class) !== null && _a !== void 0 ? _a : ""} ${computeClasses("col", { col, sm, md, lg })}`;
  return `${((tag) => {
    return tag ? `<${as}${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {
      classes: (fill ? "col-fill" : "") + " " + (top ? "align-top" : "") + " " + (middle ? "align-middle" : "") + " " + (bottom ? "align-bottom" : "")
    })}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``} `}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(as)}`;
});
const Row = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["as", "right", "center", "edges", "spaces", "top", "middle", "bottom"]);
  let { as = "div" } = $$props;
  let { right = false } = $$props;
  let { center = false } = $$props;
  let { edges = false } = $$props;
  let { spaces = false } = $$props;
  let { top = false } = $$props;
  let { middle = false } = $$props;
  let { bottom = false } = $$props;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  if ($$props.center === void 0 && $$bindings.center && center !== void 0)
    $$bindings.center(center);
  if ($$props.edges === void 0 && $$bindings.edges && edges !== void 0)
    $$bindings.edges(edges);
  if ($$props.spaces === void 0 && $$bindings.spaces && spaces !== void 0)
    $$bindings.spaces(spaces);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.middle === void 0 && $$bindings.middle && middle !== void 0)
    $$bindings.middle(middle);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  return `${((tag) => {
    return tag ? `<${as}${spread(
      [
        escape_object($$restProps),
        {
          class: escape($$restProps.class ?? "", true) + " row"
        }
      ],
      {
        classes: (right ? "flex-right" : "") + " " + (center ? "flex-center" : "") + " " + (edges ? "flex-edges" : "") + " " + (spaces ? "flex-spaces" : "") + " " + (top ? "flex-top" : "") + " " + (middle ? "flex-middle" : "") + " " + (bottom ? "flex-bottom" : "")
      }
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``} `}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(as)}`;
});
export {
  Col as C,
  Row as R
};
