import{c as r,b as e,g as u,d,e as l,q as h,w as y,f as g,u as p,h as D}from"./firebase.DhvNsPg9.js";import{i as m,g as q,u as R,a as S}from"./tagsApi.Drm_6kqI.js";const w=r(e,"discussions");async function E(){return(await u(w)).docs.map(s=>({id:s.id,...s.data()}))}async function T(i){const s=await D(w,{...i,titleLower:i.title.toLowerCase(),tags:i.tags||[],category:i.category||""});await m(i.category);for(const t of i.tags){const a=await q(t);a?await R(a.id):await S(t)}return s.id}async function b(i,s){const t=d(e,"discussions",i);await l(t,s,{merge:!0})}async function A(i){try{const s=r(e,"discussions"),t=h(s,y("startedBy","==",i));return(await u(t)).docs.map(c=>({id:c.id,...c.data()}))}catch(s){return console.error("Error fetching user discussions:",s),[]}}async function B(i,s,t=null){const a=d(e,"discussions",i),o=await g(a);if(o.exists()){let n=o.data().replies||[];Array.isArray(n)||(n=[]),t?n=f(n,t,{replies:[...s.replies||[],s]}):n=[...n,s],await p(a,{replies:n})}else throw new Error("Discussion not found")}function f(i,s,t){return i.map(a=>a.id===s?{...a,...t,replies:[...a.replies||[],...t.replies||[]]}:a.replies?{...a,replies:f(a.replies,s,t)}:a)}async function L(i){const s=d(e,"discussions",i),t=await g(s);if(t.exists())return{id:t.id,...t.data()};throw new Error("Discussion not found")}async function N(i,s){const t=r(e,"discussions");(await u(t)).forEach(async o=>{const c=o.data(),n=f(c.replies,i,s);await p(o.ref,{replies:n})})}export{A as a,T as b,L as c,B as d,b as e,E as g,N as u};