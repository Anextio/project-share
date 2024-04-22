import{s as j,e as k,a as w,c as E,b as H,g as C,f as h,r as z,i as b,h as S,k as A,q as G,m as J,n as K,u as D,v as N,t as L,d as Q}from"../chunks/scheduler.Cwazaqfz.js";import{S as T,i as W,c,b as p,m,t as _,a as g,d,f as B}from"../chunks/index.D0VKxQGj.js";import{a as M}from"../chunks/authStore.D2BarfCy.js";import{d as X,b as Y,u as Z}from"../chunks/firebase.DhvNsPg9.js";import{B as x}from"../chunks/Hero.svelte_svelte_type_style_lang.BqHQ8Oh_.js";import{I as U}from"../chunks/Input.Xqs69k3Z.js";import{R as F,C as O}from"../chunks/Row.CaZR2ylp.js";import{u as ee}from"../chunks/auth.DiwZwE0j.js";import{g as te}from"../chunks/entry.Ci96r61m.js";function ne(o){let e,n="Edit Profile";return{c(){e=k("h1"),e.textContent=n},l(t){e=E(t,"H1",{"data-svelte-h":!0}),J(e)!=="svelte-1o5ke4h"&&(e.textContent=n)},m(t,a){b(t,e,a)},p:K,d(t){t&&h(e)}}}function ae(o){let e,n;return e=new O({props:{$$slots:{default:[ne]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,a){m(e,t,a),n=!0},p(t,a){const s={};a&64&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function se(o){let e;return{c(){e=L("Save Changes")},l(n){e=Q(n,"Save Changes")},m(n,t){b(n,e,t)},d(n){n&&h(e)}}}function re(o){let e,n,t,a,s,u,i,f,l;function v(r){o[3](r)}let q={label:"Display Name",type:"text",required:!0};o[0]!==void 0&&(q.value=o[0]),n=new U({props:q}),D.push(()=>B(n,"value",v));function V(r){o[4](r)}let y={label:"Email",type:"email",required:!0,disabled:!0};return o[1]!==void 0&&(y.value=o[1]),s=new U({props:y}),D.push(()=>B(s,"value",V)),f=new x({props:{$$slots:{default:[se]},$$scope:{ctx:o}}}),f.$on("click",o[2]),{c(){e=k("form"),c(n.$$.fragment),a=w(),c(s.$$.fragment),i=w(),c(f.$$.fragment)},l(r){e=E(r,"FORM",{});var $=H(e);p(n.$$.fragment,$),a=C($),p(s.$$.fragment,$),i=C($),p(f.$$.fragment,$),$.forEach(h)},m(r,$){b(r,e,$),m(n,e,null),S(e,a),m(s,e,null),S(e,i),m(f,e,null),l=!0},p(r,$){const I={};!t&&$&1&&(t=!0,I.value=r[0],N(()=>t=!1)),n.$set(I);const P={};!u&&$&2&&(u=!0,P.value=r[1],N(()=>u=!1)),s.$set(P);const R={};$&64&&(R.$$scope={dirty:$,ctx:r}),f.$set(R)},i(r){l||(_(n.$$.fragment,r),_(s.$$.fragment,r),_(f.$$.fragment,r),l=!0)},o(r){g(n.$$.fragment,r),g(s.$$.fragment,r),g(f.$$.fragment,r),l=!1},d(r){r&&h(e),d(n),d(s),d(f)}}}function oe(o){let e,n;return e=new O({props:{$$slots:{default:[re]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,a){m(e,t,a),n=!0},p(t,a){const s={};a&67&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function ue(o){let e,n,t,a,s;return n=new F({props:{$$slots:{default:[ae]},$$scope:{ctx:o}}}),a=new F({props:{$$slots:{default:[oe]},$$scope:{ctx:o}}}),{c(){e=k("div"),c(n.$$.fragment),t=w(),c(a.$$.fragment),this.h()},l(u){e=E(u,"DIV",{class:!0});var i=H(e);p(n.$$.fragment,i),t=C(i),p(a.$$.fragment,i),i.forEach(h),this.h()},h(){z(e,"class","container")},m(u,i){b(u,e,i),m(n,e,null),S(e,t),m(a,e,null),s=!0},p(u,[i]){const f={};i&64&&(f.$$scope={dirty:i,ctx:u}),n.$set(f);const l={};i&67&&(l.$$scope={dirty:i,ctx:u}),a.$set(l)},i(u){s||(_(n.$$.fragment,u),_(a.$$.fragment,u),s=!0)},o(u){g(n.$$.fragment,u),g(a.$$.fragment,u),s=!1},d(u){u&&h(e),d(n),d(a)}}}function le(o,e,n){let t;A(o,M,l=>n(5,t=l));let a=t.displayName,s=t.email;async function u(){try{const l=X(Y,"users",t.userId);await Z(l,{displayName:a,email:s}),M.update(v=>({...v,displayName:a,email:s})),console.log("Profile updated successfully")}catch(l){console.error("Error updating profile:",l)}}G(async()=>{await ee.subscribe(v=>v)||te("/login")});function i(l){a=l,n(0,a)}function f(l){s=l,n(1,s)}return[a,s,u,i,f]}class he extends T{constructor(e){super(),W(this,e,le,ue,j,{})}}export{he as component};
