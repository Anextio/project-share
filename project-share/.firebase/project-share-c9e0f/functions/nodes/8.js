import * as server from '../entries/pages/profile/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/profile/+page.server.js";
export const imports = ["_app/immutable/nodes/8.Bq2qysGE.js","_app/immutable/chunks/scheduler.Cwazaqfz.js","_app/immutable/chunks/index.D0VKxQGj.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/authStore.D2BarfCy.js","_app/immutable/chunks/entry.Ci96r61m.js","_app/immutable/chunks/firebase.DhvNsPg9.js","_app/immutable/chunks/projectsApi.ClQSd6zU.js","_app/immutable/chunks/tagsApi.Drm_6kqI.js","_app/immutable/chunks/discussionsApi.CMBYx0O2.js","_app/immutable/chunks/Hero.svelte_svelte_type_style_lang.BqHQ8Oh_.js","_app/immutable/chunks/Card._3FSYCGU.js","_app/immutable/chunks/Row.CaZR2ylp.js","_app/immutable/chunks/ProjectCard.rAI2Sgts.js","_app/immutable/chunks/Badge.CRoZVWXB.js","_app/immutable/chunks/DiscussionCard.BVdKqY6K.js"];
export const stylesheets = ["_app/immutable/assets/Hero.DcJIjjWF.css","_app/immutable/assets/ProjectCard.DWHumXO2.css","_app/immutable/assets/DiscussionCard.CE-Svshz.css"];
export const fonts = [];
