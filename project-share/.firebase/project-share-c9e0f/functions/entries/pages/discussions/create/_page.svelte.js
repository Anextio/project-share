import { i as is_promise, n as noop } from "../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, f as each, g as add_attribute, d as escape } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import { B as Button } from "../../../../chunks/Hero.svelte_svelte_type_style_lang.js";
import { B as Badge } from "../../../../chunks/Badge.js";
import { I as Input } from "../../../../chunks/Input.js";
import { S as Select } from "../../../../chunks/Select.js";
import { C as Card } from "../../../../chunks/Card.js";
import { R as Row, C as Col } from "../../../../chunks/Row.js";
import "../../../../chunks/discussionsApi.js";
import "../../../../chunks/firebase.js";
import "firebase/auth";
import { a as getTags, g as getCategories } from "../../../../chunks/tagsApi.js";
const css = {
  code: ".error.svelte-jvhf2q{color:red;margin-bottom:10px}.form-group.svelte-jvhf2q{margin-bottom:2rem;width:50%}label.svelte-jvhf2q{display:block;margin-bottom:5px}.tag-wrapper.svelte-jvhf2q{cursor:pointer}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title = "";
  let description = "";
  let tags = [];
  let newTag = "";
  let category = "";
  let categoryOptions = [];
  async function loadData() {
    const [fetchedTags, fetchedCategories] = await Promise.all([getTags(), getCategories()]);
    fetchedTags.map((tag) => tag.name);
    categoryOptions = fetchedCategories.map((category2) => category2.name);
  }
  let loadingData = loadData();
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` <p data-svelte-h="svelte-slw5li">Loading data...</p> `;
      }
      return function() {
        return ` ${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Col, "Col").$$render($$result, { fill: true }, {}, {
              default: () => {
                return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                  default: () => {
                    return `<h2 data-svelte-h="svelte-4oyg7e">Create Discussion</h2> ${``} <form><div class="form-group svelte-jvhf2q"><label for="title" class="svelte-jvhf2q" data-svelte-h="svelte-kpfkpc">Title:</label> ${validate_component(Input, "Input").$$render(
                      $$result,
                      {
                        type: "text",
                        id: "title",
                        block: true,
                        required: true,
                        value: title
                      },
                      {
                        value: ($$value) => {
                          title = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</div> <div class="form-group svelte-jvhf2q"><label for="description" class="svelte-jvhf2q" data-svelte-h="svelte-1jjlhqk">Description:</label> ${validate_component(Input, "Input").$$render(
                      $$result,
                      {
                        type: "textarea",
                        id: "description",
                        required: true,
                        block: true,
                        value: description
                      },
                      {
                        value: ($$value) => {
                          description = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</div> <div class="form-group svelte-jvhf2q"><label for="category" class="svelte-jvhf2q" data-svelte-h="svelte-1qmhjiw">Category:</label> ${validate_component(Select, "Select").$$render(
                      $$result,
                      {
                        id: "category",
                        block: true,
                        required: true,
                        value: category
                      },
                      {
                        value: ($$value) => {
                          category = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `<option value="" data-svelte-h="svelte-15aoo8g">Select Category</option> ${each(categoryOptions, (categoryName) => {
                            return `<option${add_attribute("value", categoryName, 0)}>${escape(categoryName)}</option>`;
                          })}`;
                        }
                      }
                    )}</div> <div class="form-group svelte-jvhf2q"><label class="svelte-jvhf2q" data-svelte-h="svelte-1uka2cl">Tags:</label> <div>${each(tags, (tag, index) => {
                      return `<span class="tag-wrapper svelte-jvhf2q">${validate_component(Badge, "Badge").$$render($$result, { type: "success" }, {}, {
                        default: () => {
                          return `${escape(tag)}`;
                        }
                      })} </span>`;
                    })} ${validate_component(Input, "Input").$$render(
                      $$result,
                      {
                        type: "text",
                        placeholder: "Enter a tag",
                        disabled: tags.length >= 5,
                        value: newTag
                      },
                      {
                        value: ($$value) => {
                          newTag = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} ${validate_component(Button, "Button").$$render($$result, { disabled: !newTag || tags.length >= 5 }, {}, {
                      default: () => {
                        return `Add Tag`;
                      }
                    })}</div></div> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
                      default: () => {
                        return `Create Discussion`;
                      }
                    })}</form>`;
                  }
                })}`;
              }
            })}`;
          }
        })} `;
      }();
    }(loadingData)}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
