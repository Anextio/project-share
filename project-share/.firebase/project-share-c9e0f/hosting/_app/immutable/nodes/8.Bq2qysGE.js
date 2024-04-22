import{s as ae,l as S,i as d,f as _,q as fe,e as j,a as x,c as E,b as I,g as N,h as b,m as y,n as Q,t as V,d as M,r as H,j as Y,o as se}from"../chunks/scheduler.Cwazaqfz.js";import{S as ce,i as ie,t as m,a as g,e as z,c as C,b as v,m as w,g as F,d as k}from"../chunks/index.D0VKxQGj.js";import{e as T}from"../chunks/each.D6YF6ztN.js";import{a as ue}from"../chunks/authStore.D2BarfCy.js";import{g as $e}from"../chunks/projectsApi.ClQSd6zU.js";import{a as me}from"../chunks/discussionsApi.CMBYx0O2.js";import{B as Z}from"../chunks/Hero.svelte_svelte_type_style_lang.BqHQ8Oh_.js";import{C as pe}from"../chunks/Card._3FSYCGU.js";import{R as W,C as X}from"../chunks/Row.CaZR2ylp.js";import{P as _e}from"../chunks/ProjectCard.rAI2Sgts.js";import{D as ge}from"../chunks/DiscussionCard.BVdKqY6K.js";import{g as ee}from"../chunks/entry.Ci96r61m.js";function te(c,t,r){const e=c.slice();return e[5]=t[r],e}function le(c,t,r){const e=c.slice();return e[8]=t[r],e}function re(c){let t,r,e,l,n,i;r=new W({props:{$$slots:{default:[ve]},$$scope:{ctx:c}}});const a=[ke,we],u=[];function o(s,f){return s[3]?0:1}return l=o(c),n=u[l]=a[l](c),{c(){t=j("div"),C(r.$$.fragment),e=x(),n.c()},l(s){t=E(s,"DIV",{});var f=I(t);v(r.$$.fragment,f),e=N(f),n.l(f),f.forEach(_)},m(s,f){d(s,t,f),w(r,t,null),b(t,e),u[l].m(t,null),i=!0},p(s,f){const h={};f&2049&&(h.$$scope={dirty:f,ctx:s}),r.$set(h);let L=l;l=o(s),l===L?u[l].p(s,f):(F(),g(u[L],1,1,()=>{u[L]=null}),z(),n=u[l],n?n.p(s,f):(n=u[l]=a[l](s),n.c()),m(n,1),n.m(t,null))},i(s){i||(m(r.$$.fragment,s),m(n),i=!0)},o(s){g(r.$$.fragment,s),g(n),i=!1},d(s){s&&_(t),k(r),u[l].d()}}}function he(c){let t;return{c(){t=V("Edit Profile")},l(r){t=M(r,"Edit Profile")},m(r,e){d(r,t,e)},d(r){r&&_(t)}}}function de(c){let t;return{c(){t=V("Go to Reports")},l(r){t=M(r,"Go to Reports")},m(r,e){d(r,t,e)},d(r){r&&_(t)}}}function be(c){let t,r="Profile",e,l,n,i="Display Name:",a,u,o=c[0].displayName+"",s,f,h,L="Email:",J,B,U=c[0].email+"",G,K,D,O,P,R;return D=new Z({props:{href:"/profile/edit",$$slots:{default:[he]},$$scope:{ctx:c}}}),P=new Z({props:{$$slots:{default:[de]},$$scope:{ctx:c}}}),P.$on("click",c[4]),{c(){t=j("h1"),t.textContent=r,e=x(),l=j("div"),n=j("label"),n.textContent=i,a=x(),u=j("h4"),s=V(o),f=x(),h=j("label"),h.textContent=L,J=x(),B=j("h4"),G=V(U),K=x(),C(D.$$.fragment),O=x(),C(P.$$.fragment),this.h()},l(p){t=E(p,"H1",{"data-svelte-h":!0}),y(t)!=="svelte-12yu42p"&&(t.textContent=r),e=N(p),l=E(p,"DIV",{class:!0});var $=I(l);n=E($,"LABEL",{for:!0,"data-svelte-h":!0}),y(n)!=="svelte-1taloyc"&&(n.textContent=i),a=N($),u=E($,"H4",{id:!0,class:!0});var q=I(u);s=M(q,o),q.forEach(_),f=N($),h=E($,"LABEL",{for:!0,"data-svelte-h":!0}),y(h)!=="svelte-1flf0h4"&&(h.textContent=L),J=N($),B=E($,"H4",{id:!0,class:!0});var A=I(B);G=M(A,U),A.forEach(_),K=N($),v(D.$$.fragment,$),O=N($),v(P.$$.fragment,$),$.forEach(_),this.h()},h(){H(n,"for","displayName"),H(u,"id","displayName"),H(u,"class","mb-4"),H(h,"for","email"),H(B,"id","email"),H(B,"class","mb-4"),H(l,"class","user-info")},m(p,$){d(p,t,$),d(p,e,$),d(p,l,$),b(l,n),b(l,a),b(l,u),b(u,s),b(l,f),b(l,h),b(l,J),b(l,B),b(B,G),b(l,K),w(D,l,null),b(l,O),w(P,l,null),R=!0},p(p,$){(!R||$&1)&&o!==(o=p[0].displayName+"")&&Y(s,o),(!R||$&1)&&U!==(U=p[0].email+"")&&Y(G,U);const q={};$&2048&&(q.$$scope={dirty:$,ctx:p}),D.$set(q);const A={};$&2048&&(A.$$scope={dirty:$,ctx:p}),P.$set(A)},i(p){R||(m(D.$$.fragment,p),m(P.$$.fragment,p),R=!0)},o(p){g(D.$$.fragment,p),g(P.$$.fragment,p),R=!1},d(p){p&&(_(t),_(e),_(l)),k(D),k(P)}}}function Ce(c){let t,r;return t=new pe({props:{$$slots:{default:[be]},$$scope:{ctx:c}}}),{c(){C(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,l){w(t,e,l),r=!0},p(e,l){const n={};l&2049&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){k(t,e)}}}function ve(c){let t,r;return t=new X({props:{fill:!0,$$slots:{default:[Ce]},$$scope:{ctx:c}}}),{c(){C(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,l){w(t,e,l),r=!0},p(e,l){const n={};l&2049&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){k(t,e)}}}function we(c){let t,r,e,l;return t=new W({props:{$$slots:{default:[xe]},$$scope:{ctx:c}}}),e=new W({props:{$$slots:{default:[Ne]},$$scope:{ctx:c}}}),{c(){C(t.$$.fragment),r=x(),C(e.$$.fragment)},l(n){v(t.$$.fragment,n),r=N(n),v(e.$$.fragment,n)},m(n,i){w(t,n,i),d(n,r,i),w(e,n,i),l=!0},p(n,i){const a={};i&2050&&(a.$$scope={dirty:i,ctx:n}),t.$set(a);const u={};i&2052&&(u.$$scope={dirty:i,ctx:n}),e.$set(u)},i(n){l||(m(t.$$.fragment,n),m(e.$$.fragment,n),l=!0)},o(n){g(t.$$.fragment,n),g(e.$$.fragment,n),l=!1},d(n){n&&_(r),k(t,n),k(e,n)}}}function ke(c){let t,r="Loading user data...";return{c(){t=j("p"),t.textContent=r},l(e){t=E(e,"P",{"data-svelte-h":!0}),y(t)!=="svelte-9u4hfj"&&(t.textContent=r)},m(e,l){d(e,t,l)},p:Q,i:Q,o:Q,d(e){e&&_(t)}}}function ne(c){let t,r;return t=new _e({props:{project:c[8]}}),{c(){C(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,l){w(t,e,l),r=!0},p(e,l){const n={};l&2&&(n.project=e[8]),t.$set(n)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){k(t,e)}}}function je(c){let t,r="Projects",e,l,n,i=T(c[1]),a=[];for(let o=0;o<i.length;o+=1)a[o]=ne(le(c,i,o));const u=o=>g(a[o],1,1,()=>{a[o]=null});return{c(){t=j("h2"),t.textContent=r,e=x();for(let o=0;o<a.length;o+=1)a[o].c();l=S()},l(o){t=E(o,"H2",{"data-svelte-h":!0}),y(t)!=="svelte-7jt1gw"&&(t.textContent=r),e=N(o);for(let s=0;s<a.length;s+=1)a[s].l(o);l=S()},m(o,s){d(o,t,s),d(o,e,s);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(o,s);d(o,l,s),n=!0},p(o,s){if(s&2){i=T(o[1]);let f;for(f=0;f<i.length;f+=1){const h=le(o,i,f);a[f]?(a[f].p(h,s),m(a[f],1)):(a[f]=ne(h),a[f].c(),m(a[f],1),a[f].m(l.parentNode,l))}for(F(),f=i.length;f<a.length;f+=1)u(f);z()}},i(o){if(!n){for(let s=0;s<i.length;s+=1)m(a[s]);n=!0}},o(o){a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)g(a[s]);n=!1},d(o){o&&(_(t),_(e),_(l)),se(a,o)}}}function xe(c){let t,r;return t=new X({props:{fill:!0,$$slots:{default:[je]},$$scope:{ctx:c}}}),{c(){C(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,l){w(t,e,l),r=!0},p(e,l){const n={};l&2050&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){k(t,e)}}}function oe(c){let t,r;return t=new ge({props:{discussion:c[5]}}),{c(){C(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,l){w(t,e,l),r=!0},p(e,l){const n={};l&4&&(n.discussion=e[5]),t.$set(n)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){k(t,e)}}}function Ee(c){let t,r="Discussions",e,l,n,i=T(c[2]),a=[];for(let o=0;o<i.length;o+=1)a[o]=oe(te(c,i,o));const u=o=>g(a[o],1,1,()=>{a[o]=null});return{c(){t=j("h2"),t.textContent=r,e=x();for(let o=0;o<a.length;o+=1)a[o].c();l=S()},l(o){t=E(o,"H2",{"data-svelte-h":!0}),y(t)!=="svelte-1h20wn9"&&(t.textContent=r),e=N(o);for(let s=0;s<a.length;s+=1)a[s].l(o);l=S()},m(o,s){d(o,t,s),d(o,e,s);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(o,s);d(o,l,s),n=!0},p(o,s){if(s&4){i=T(o[2]);let f;for(f=0;f<i.length;f+=1){const h=te(o,i,f);a[f]?(a[f].p(h,s),m(a[f],1)):(a[f]=oe(h),a[f].c(),m(a[f],1),a[f].m(l.parentNode,l))}for(F(),f=i.length;f<a.length;f+=1)u(f);z()}},i(o){if(!n){for(let s=0;s<i.length;s+=1)m(a[s]);n=!0}},o(o){a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)g(a[s]);n=!1},d(o){o&&(_(t),_(e),_(l)),se(a,o)}}}function Ne(c){let t,r;return t=new X({props:{fill:!0,$$slots:{default:[Ee]},$$scope:{ctx:c}}}),{c(){C(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,l){w(t,e,l),r=!0},p(e,l){const n={};l&2052&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){k(t,e)}}}function Pe(c){let t,r,e=c[0]&&re(c);return{c(){e&&e.c(),t=S()},l(l){e&&e.l(l),t=S()},m(l,n){e&&e.m(l,n),d(l,t,n),r=!0},p(l,[n]){l[0]?e?(e.p(l,n),n&1&&m(e,1)):(e=re(l),e.c(),m(e,1),e.m(t.parentNode,t)):e&&(F(),g(e,1,1,()=>{e=null}),z())},i(l){r||(m(e),r=!0)},o(l){g(e),r=!1},d(l){l&&_(t),e&&e.d(l)}}}function De(c,t,r){let e=null,l=[],n=[],i=!1;fe(async()=>{if(r(0,e=ue.getCurrentUser()),!e)ee("/login");else{r(3,i=!0);try{r(1,l=await $e(e.displayName)),r(2,n=await me(e.displayName))}catch(u){console.error("Error loading user data:",u)}finally{r(3,i=!1)}}});function a(){ee("/reports")}return[e,l,n,i,a]}class Me extends ce{constructor(t){super(),ie(this,t,De,Pe,ae,{})}}export{Me as component};
