import { c as compute_rest_props, i as is_promise, n as noop, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, a as spread, e as escape_object, d as escape, f as each, g as add_attribute, h as createEventDispatcher, v as validate_component } from "../../../../chunks/ssr.js";
import { B as Button } from "../../../../chunks/Hero.svelte_svelte_type_style_lang.js";
import { R as Row, C as Col } from "../../../../chunks/Row.js";
import { B as Badge } from "../../../../chunks/Badge.js";
import { I as Input } from "../../../../chunks/Input.js";
import { S as Select } from "../../../../chunks/Select.js";
import { a as getTags, g as getCategories } from "../../../../chunks/tagsApi.js";
import { a as authStore } from "../../../../chunks/authStore.js";
import "../../../../chunks/firebase.js";
import "firebase/firestore";
import "../../../../chunks/client.js";
import "../../../../chunks/auth.js";
const css$2 = {
  code: "form.svelte-1omlscs label{margin-block-end:0}form.svelte-1omlscs input{margin-block-start:0.5rem}",
  map: null
};
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  $$result.css.add(css$2);
  return `<form${spread(
    [
      escape_object($$restProps),
      {
        class: escape($$restProps.class ?? "", true) + " form-group"
      }
    ],
    { classes: "svelte-1omlscs" }
  )}>${slots.default ? slots.default({}) : ``} </form>`;
});
function hasContentFn(col) {
  return isColumnObj(col) && col.content && col;
}
function hasHTMLProp(col) {
  return isColumnObj(col) && col.html && col;
}
function isColumnObj(arg) {
  return arg.field;
}
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["columns", "data", "striped", "hoverable", "showHeader", "headerCLass", "cellCLass"]);
  let tmpCol;
  let { columns = [] } = $$props;
  let { data = [] } = $$props;
  let { striped = false } = $$props;
  let { hoverable = false } = $$props;
  let { showHeader = true } = $$props;
  let { headerCLass = "" } = $$props;
  let { cellCLass = "" } = $$props;
  function getColumnFromName(name) {
    return columns[displayedFields.indexOf(name)];
  }
  function getRowFiltered(row) {
    return Object.entries(row).filter(([key, _val]) => displayedFields.includes(key));
  }
  let displayedFields;
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.striped === void 0 && $$bindings.striped && striped !== void 0)
    $$bindings.striped(striped);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0)
    $$bindings.hoverable(hoverable);
  if ($$props.showHeader === void 0 && $$bindings.showHeader && showHeader !== void 0)
    $$bindings.showHeader(showHeader);
  if ($$props.headerCLass === void 0 && $$bindings.headerCLass && headerCLass !== void 0)
    $$bindings.headerCLass(headerCLass);
  if ($$props.cellCLass === void 0 && $$bindings.cellCLass && cellCLass !== void 0)
    $$bindings.cellCLass(cellCLass);
  {
    if (!columns.length) {
      columns = Object.keys(data[0] || {});
    }
  }
  displayedFields = columns.length ? columns.map((column) => typeof column === "string" ? column : column.field) : data[0] ? Object.keys(data[0]) : [];
  return `<table${spread([escape_object($$restProps)], {
    classes: (striped ? "table-alternating" : "") + " " + (hoverable ? "table-hover" : "")
  })}>${showHeader ? `<thead><tr>${each(columns, (column) => {
    return `<th${add_attribute("class", headerCLass, 0)}>${typeof column === "string" ? `${escape(column)}` : `${escape(column.label ?? column.field)}`} </th>`;
  })}</tr></thead>` : ``} <tbody>${each(data, (row) => {
    return `<tr>${each(getRowFiltered(row), ([columnName, val]) => {
      return `<td${add_attribute("class", cellCLass, 0)}>${(tmpCol = hasContentFn(getColumnFromName(columnName))) ? `${tmpCol.html ? `<!-- HTML_TAG_START -->${tmpCol.content(val)}<!-- HTML_TAG_END -->` : `${escape(tmpCol.content(val))}`}` : `${hasHTMLProp(getColumnFromName(columnName)) ? `<!-- HTML_TAG_START -->${val}<!-- HTML_TAG_END -->` : `${escape(val)}`}`} </td>`;
    })} </tr>`;
  })}</tbody> </table>`;
});
const css$1 = {
  code: ".file-input-wrapper.svelte-163utuy{display:flex;align-items:center}.file-input-wrapper.svelte-163utuy .spaper-input{flex:1;margin-right:8px}",
  map: null
};
const FileInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fileInput = {};
  let selectedFiles = [];
  createEventDispatcher();
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="file-input-wrapper svelte-163utuy">${validate_component(Input, "Input").$$render(
      $$result,
      {
        readonly: true,
        placeholder: selectedFiles.length ? selectedFiles.map((file) => file.name).join(", ") : "Select files",
        value: fileInput.files
      },
      {
        value: ($$value) => {
          fileInput.files = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Browse`;
      }
    })} <input type="file" data-testid="fileInput" multiple hidden> </div>`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: ".tag-wrapper.svelte-11bcvzh{cursor:pointer}",
  map: null
};
const ProjectForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isValid;
  let { projectData = {
    name: "",
    description: "",
    category: "",
    tags: [],
    files: []
  } } = $$props;
  let newTag = "";
  let categoryOptions = [];
  const dispatch = createEventDispatcher();
  let loadingData = loadData();
  async function loadData() {
    const [tags, categories] = await Promise.all([getTags(), getCategories()]);
    tags.map((tag) => tag.name);
    categoryOptions = categories.map((category) => category.name);
  }
  if ($$props.projectData === void 0 && $$bindings.projectData && projectData !== void 0)
    $$bindings.projectData(projectData);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isValid = projectData.name.trim() && projectData.description.trim() && projectData.category;
    {
      dispatch("input", { projectData, isValid });
    }
    $$rendered = `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` <p data-svelte-h="svelte-slw5li">Loading data...</p> `;
      }
      return function() {
        return ` ${validate_component(Form, "Form").$$render($$result, { "data-testid": "project-form" }, {}, {
          default: () => {
            return `<h2 data-svelte-h="svelte-mewzdn">Project Information</h2> ${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Input, "Input").$$render(
                      $$result,
                      {
                        label: "Project Name",
                        type: "text",
                        placeholder: "Enter project name",
                        value: projectData.name
                      },
                      {
                        value: ($$value) => {
                          projectData.name = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}`;
                  }
                })}`;
              }
            })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Input, "Input").$$render(
                      $$result,
                      {
                        label: "Project Description",
                        type: "text",
                        placeholder: "Enter project description",
                        value: projectData.description
                      },
                      {
                        value: ($$value) => {
                          projectData.description = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}`;
                  }
                })}`;
              }
            })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Select, "Select").$$render(
                      $$result,
                      {
                        label: "Project Category",
                        value: projectData.category
                      },
                      {
                        value: ($$value) => {
                          projectData.category = $$value;
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
                    )}`;
                  }
                })}`;
              }
            })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                  default: () => {
                    return `<div>${each(projectData.tags, (tag, index) => {
                      return `<span class="tag-wrapper svelte-11bcvzh">${validate_component(Badge, "Badge").$$render($$result, { type: "success" }, {}, {
                        default: () => {
                          return `${escape(tag)}`;
                        }
                      })} </span>`;
                    })} ${validate_component(Input, "Input").$$render(
                      $$result,
                      {
                        label: "Project Tags",
                        type: "text",
                        placeholder: "Enter a tag",
                        disabled: projectData.tags.length >= 5,
                        value: newTag
                      },
                      {
                        value: ($$value) => {
                          newTag = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} ${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        disabled: !newTag || projectData.tags.length >= 5
                      },
                      {},
                      {
                        default: () => {
                          return `Add Tag`;
                        }
                      }
                    )}</div>`;
                  }
                })}`;
              }
            })} ${validate_component(FileInput, "FileInput").$$render($$result, {}, {}, {})}`;
          }
        })} `;
      }();
    }(loadingData)}`;
  } while (!$$settled);
  return $$rendered;
});
const CollaboratorList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let collaborators = [];
  createEventDispatcher();
  return `<div><h2 data-svelte-h="svelte-grhen1">Collaborators</h2> ${validate_component(Table, "Table").$$render($$result, {}, {}, {
    default: () => {
      return ` <tbody>${each(collaborators, (collaborator) => {
        return `<tr><td>${escape(collaborator.name)}</td> <td>${escape(collaborator.email)}</td> <td>${escape(collaborator.role)}</td> <td></td> </tr>`;
      })}</tbody>`;
    }
  })}  ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Add Collaborator`;
    }
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => value);
  let projectData = {
    name: "",
    description: "",
    category: "",
    tags: [],
    files: []
  };
  let isFormValid = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="container">${``} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
          default: () => {
            return `<h1 data-svelte-h="svelte-vth4v5">Create Project</h1> <p data-svelte-h="svelte-22vnrg">A platform for students to share and discuss their projects.</p> ${validate_component(ProjectForm, "ProjectForm").$$render(
              $$result,
              { projectData },
              {
                projectData: ($$value) => {
                  projectData = $$value;
                  $$settled = false;
                }
              },
              {}
            )} ${validate_component(CollaboratorList, "CollaboratorList").$$render($$result, {}, {}, {})} ${validate_component(Button, "Button").$$render($$result, { disabled: !isFormValid }, {}, {
              default: () => {
                return `Save`;
              }
            })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `Cancel`;
              }
            })}`;
          }
        })}`;
      }
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_authStore();
  return $$rendered;
});
export {
  Page as default
};
