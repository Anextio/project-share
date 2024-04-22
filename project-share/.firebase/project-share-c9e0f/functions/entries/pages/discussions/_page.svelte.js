import { i as is_promise, n as noop } from "../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, d as escape, f as each } from "../../../chunks/ssr.js";
import { B as Button } from "../../../chunks/Hero.svelte_svelte_type_style_lang.js";
import { R as Row, C as Col } from "../../../chunks/Row.js";
import { g as getDiscussions } from "../../../chunks/discussionsApi.js";
import { C as Card } from "../../../chunks/Card.js";
/* empty css                                                           */
import "../../../chunks/client.js";
/* empty css                                                         */
const css = {
  code: ".discussion-header.svelte-q1pucm.svelte-q1pucm{margin-bottom:1rem}.discussion-header.svelte-q1pucm h3.svelte-q1pucm{font-size:1.25rem;margin-bottom:0.5rem}.discussion-header.svelte-q1pucm p.svelte-q1pucm{margin:0}.discussion-body.svelte-q1pucm.svelte-q1pucm{margin-bottom:1rem}.discussion-footer.svelte-q1pucm.svelte-q1pucm{text-align:right}",
  map: null
};
const DiscussionCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { discussion } = $$props;
  if ($$props.discussion === void 0 && $$bindings.discussion && discussion !== void 0)
    $$bindings.discussion(discussion);
  $$result.css.add(css);
  return `  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="discussion-header svelte-q1pucm"><h3 class="svelte-q1pucm">${escape(discussion.title)}</h3> <p class="svelte-q1pucm">Started by: ${escape(discussion.startedBy)}</p> <p class="svelte-q1pucm">Date and Time: ${escape(discussion.dateTime)}</p> <p class="svelte-q1pucm">Replies: ${escape(discussion.replies.length)}</p></div> <div class="discussion-body svelte-q1pucm"><p>${escape(discussion.description)}</p></div> <div class="discussion-footer svelte-q1pucm">${validate_component(Button, "Button").$$render($$result, { href: "/discussions/" + discussion.id }, {}, {
        default: () => {
          return `View Discussion`;
        }
      })}</div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let discussions = [];
  let loadingData = loadData();
  async function loadData() {
    try {
      const fetchedDiscussions = await getDiscussions();
      discussions = fetchedDiscussions;
    } catch (error) {
      console.error("Error loading data:", error);
      throw error;
    }
  }
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <p data-svelte-h="svelte-slw5li">Loading data...</p> `;
    }
    return function() {
      return ` <div>${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "12" }, {}, {
            default: () => {
              return `<h2 data-svelte-h="svelte-zyqm6b">Discussion Threads</h2> ${each(discussions, (discussion) => {
                return `${validate_component(DiscussionCard, "DiscussionCard").$$render($$result, { discussion }, {}, {})}`;
              })}`;
            }
          })}`;
        }
      })}</div> `;
    }();
  }(loadingData)}`;
});
export {
  Page as default
};
