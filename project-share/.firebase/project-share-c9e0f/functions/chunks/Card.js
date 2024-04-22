import { c as compute_rest_props, a as compute_slots } from "./utils.js";
import { c as create_ssr_component, a as spread, e as escape_object, d as escape, b as escape_attribute_value, g as add_attribute } from "./ssr.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "title",
    "subTitle",
    "image",
    "imageAlt",
    "imagePlacement",
    "header",
    "footer",
    "width"
  ]);
  let $$slots = compute_slots(slots);
  let { title = "" } = $$props;
  let { subTitle = "" } = $$props;
  let { image = "" } = $$props;
  let { imageAlt = "" } = $$props;
  let { imagePlacement = "top" } = $$props;
  let { header = "" } = $$props;
  let { footer = "" } = $$props;
  let { width = "100%" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subTitle === void 0 && $$bindings.subTitle && subTitle !== void 0)
    $$bindings.subTitle(subTitle);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.imageAlt === void 0 && $$bindings.imageAlt && imageAlt !== void 0)
    $$bindings.imageAlt(imageAlt);
  if ($$props.imagePlacement === void 0 && $$bindings.imagePlacement && imagePlacement !== void 0)
    $$bindings.imagePlacement(imagePlacement);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.footer === void 0 && $$bindings.footer && footer !== void 0)
    $$bindings.footer(footer);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape($$restProps.class ?? "", true) + " card"
      },
      {
        style: escape_attribute_value(`width: ${width}`)
      }
    ],
    {}
  )}>${header || $$slots.header ? `<header class="card-header">${$$slots.header ? `${slots.header ? slots.header({}) : ``}` : `${escape(header)}`}</header>` : ``} ${image && imagePlacement === "top" ? `<img${add_attribute("src", image, 0)}${add_attribute("alt", imageAlt, 0)}>` : ``} <div class="card-body"><h4 class="card-title">${$$slots.title ? `${slots.title ? slots.title({}) : ``}` : `${escape(title)}`}</h4> <h5 class="card-subtitle">${$$slots.subTitle ? `${slots.subTitle ? slots.subTitle({}) : ``}` : `${escape(subTitle)}`}</h5> <p class="card-text">${slots.default ? slots.default({}) : ``}</p> ${$$slots.bottom ? `${slots.bottom ? slots.bottom({}) : ``}` : ``}</div> ${image && imagePlacement === "bottom" ? `<img${add_attribute("src", image, 0)} class="image-bottom"${add_attribute("alt", imageAlt, 0)}>` : ``} ${footer || $$slots.footer ? `<footer class="card-footer">${$$slots.footer ? `${slots.footer ? slots.footer({}) : ``}` : `${escape(footer)}`}</footer>` : ``} </div>`;
});
export {
  Card as C
};
