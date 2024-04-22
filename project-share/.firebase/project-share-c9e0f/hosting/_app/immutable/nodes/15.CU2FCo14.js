import{s as le,e as v,t as E,a as w,c as b,b as P,d as L,f as p,g as C,r as S,i as m,h as q,j as T,k as se,q as re,m as y,n as j,l as I,o as z}from"../chunks/scheduler.Cwazaqfz.js";import{S as ne,i as oe,a as g,e as M,t as d,g as x,c as D,b as N,m as R,d as V}from"../chunks/index.D0VKxQGj.js";import{e as A}from"../chunks/each.D6YF6ztN.js";import{p as ce}from"../chunks/stores.dV9NvrlY.js";import{c as F,b as G,q as J,w as B,g as K}from"../chunks/firebase.DhvNsPg9.js";import"../chunks/Hero.svelte_svelte_type_style_lang.BqHQ8Oh_.js";import{C as O}from"../chunks/Card._3FSYCGU.js";import{R as U,C as W}from"../chunks/Row.CaZR2ylp.js";async function ae(f){try{const[e,n,t]=await Promise.all([ie(f),fe(f),ue(f)]);return{users:e,projects:n,discussions:t}}catch(e){throw console.error("Error searching:",e),e}}async function ie(f){const e=F(G,"users"),n=J(e,B("displayNameLower",">=",f.toLowerCase()),B("displayNameLower","<=",f.toLowerCase()+""));return(await K(n)).docs.map(l=>({id:l.id,...l.data()}))}async function fe(f){const e=F(G,"projects"),n=J(e,B("nameLower",">=",f.toLowerCase()),B("nameLower","<=",f.toLowerCase()+""));return(await K(n)).docs.map(l=>({id:l.id,...l.data()}))}async function ue(f){const e=F(G,"discussions"),n=J(e,B("titleLower",">=",f.toLowerCase()),B("titleLower","<=",f.toLowerCase()+""));return(await K(n)).docs.map(l=>({id:l.id,...l.data()}))}function X(f,e,n){const t=f.slice();return t[5]=e[n],t}function Y(f,e,n){const t=f.slice();return t[8]=e[n],t}function Z(f,e,n){const t=f.slice();return t[11]=e[n],t}function _e(f){let e,n="No results found for your search.";return{c(){e=v("p"),e.textContent=n},l(t){e=b(t,"P",{"data-svelte-h":!0}),y(e)!=="svelte-iq13un"&&(e.textContent=n)},m(t,l){m(t,e,l)},p:j,i:j,o:j,d(t){t&&p(e)}}}function pe(f){let e,n,t,l,c,s;return e=new U({props:{$$slots:{default:[ve]},$$scope:{ctx:f}}}),t=new U({props:{$$slots:{default:[je]},$$scope:{ctx:f}}}),c=new U({props:{$$slots:{default:[Se]},$$scope:{ctx:f}}}),{c(){D(e.$$.fragment),n=w(),D(t.$$.fragment),l=w(),D(c.$$.fragment)},l(r){N(e.$$.fragment,r),n=C(r),N(t.$$.fragment,r),l=C(r),N(c.$$.fragment,r)},m(r,o){R(e,r,o),m(r,n,o),R(t,r,o),m(r,l,o),R(c,r,o),s=!0},p(r,o){const u={};o&16386&&(u.$$scope={dirty:o,ctx:r}),e.$set(u);const $={};o&16386&&($.$$scope={dirty:o,ctx:r}),t.$set($);const i={};o&16386&&(i.$$scope={dirty:o,ctx:r}),c.$set(i)},i(r){s||(d(e.$$.fragment,r),d(t.$$.fragment,r),d(c.$$.fragment,r),s=!0)},o(r){g(e.$$.fragment,r),g(t.$$.fragment,r),g(c.$$.fragment,r),s=!1},d(r){r&&(p(n),p(l)),V(e,r),V(t,r),V(c,r)}}}function he(f){let e,n="<p>Loading search results...</p>";return{c(){e=v("div"),e.innerHTML=n,this.h()},l(t){e=b(t,"DIV",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-bd0bje"&&(e.innerHTML=n),this.h()},h(){S(e,"class","loading-container svelte-1mtp8an")},m(t,l){m(t,e,l)},p:j,i:j,o:j,d(t){t&&p(e)}}}function me(f){let e,n="No Users Match The Search Term";return{c(){e=v("p"),e.textContent=n},l(t){e=b(t,"P",{"data-svelte-h":!0}),y(e)!=="svelte-1wvsmpt"&&(e.textContent=n)},m(t,l){m(t,e,l)},p:j,i:j,o:j,d(t){t&&p(e)}}}function $e(f){let e,n,t=A(f[1].users),l=[];for(let s=0;s<t.length;s+=1)l[s]=Q(Z(f,t,s));const c=s=>g(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=I()},l(s){for(let r=0;r<l.length;r+=1)l[r].l(s);e=I()},m(s,r){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(s,r);m(s,e,r),n=!0},p(s,r){if(r&2){t=A(s[1].users);let o;for(o=0;o<t.length;o+=1){const u=Z(s,t,o);l[o]?(l[o].p(u,r),d(l[o],1)):(l[o]=Q(u),l[o].c(),d(l[o],1),l[o].m(e.parentNode,e))}for(x(),o=t.length;o<l.length;o+=1)c(o);M()}},i(s){if(!n){for(let r=0;r<t.length;r+=1)d(l[r]);n=!0}},o(s){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)g(l[r]);n=!1},d(s){s&&p(e),z(l,s)}}}function de(f){let e,n=f[11].displayName+"",t,l,c,s=f[11].email+"",r,o,u,$,i,h;return{c(){e=v("h4"),t=E(n),l=w(),c=v("p"),r=E(s),o=w(),u=v("a"),$=E("View Profile"),h=w(),this.h()},l(a){e=b(a,"H4",{});var _=P(e);t=L(_,n),_.forEach(p),l=C(a),c=b(a,"P",{});var k=P(c);r=L(k,s),k.forEach(p),o=C(a),u=b(a,"A",{href:!0});var H=P(u);$=L(H,"View Profile"),H.forEach(p),h=C(a),this.h()},h(){S(u,"href",i="/users/"+f[11].id)},m(a,_){m(a,e,_),q(e,t),m(a,l,_),m(a,c,_),q(c,r),m(a,o,_),m(a,u,_),q(u,$),m(a,h,_)},p(a,_){_&2&&n!==(n=a[11].displayName+"")&&T(t,n),_&2&&s!==(s=a[11].email+"")&&T(r,s),_&2&&i!==(i="/users/"+a[11].id)&&S(u,"href",i)},d(a){a&&(p(e),p(l),p(c),p(o),p(u),p(h))}}}function Q(f){let e,n;return e=new O({props:{$$slots:{default:[de]},$$scope:{ctx:f}}}),{c(){D(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p(t,l){const c={};l&16386&&(c.$$scope={dirty:l,ctx:t}),e.$set(c)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function ge(f){let e,n="Users",t,l,c,s,r;const o=[$e,me],u=[];function $(i,h){return i[1].users.length>0?0:1}return c=$(f),s=u[c]=o[c](f),{c(){e=v("h3"),e.textContent=n,t=w(),l=v("div"),s.c(),this.h()},l(i){e=b(i,"H3",{"data-svelte-h":!0}),y(e)!=="svelte-1xfskau"&&(e.textContent=n),t=C(i),l=b(i,"DIV",{class:!0});var h=P(l);s.l(h),h.forEach(p),this.h()},h(){S(l,"class","card-grid svelte-1mtp8an")},m(i,h){m(i,e,h),m(i,t,h),m(i,l,h),u[c].m(l,null),r=!0},p(i,h){let a=c;c=$(i),c===a?u[c].p(i,h):(x(),g(u[a],1,1,()=>{u[a]=null}),M(),s=u[c],s?s.p(i,h):(s=u[c]=o[c](i),s.c()),d(s,1),s.m(l,null))},i(i){r||(d(s),r=!0)},o(i){g(s),r=!1},d(i){i&&(p(e),p(t),p(l)),u[c].d()}}}function ve(f){let e,n;return e=new W({props:{$$slots:{default:[ge]},$$scope:{ctx:f}}}),{c(){D(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p(t,l){const c={};l&16386&&(c.$$scope={dirty:l,ctx:t}),e.$set(c)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function be(f){let e,n="No Projects Match The Search Term";return{c(){e=v("p"),e.textContent=n},l(t){e=b(t,"P",{"data-svelte-h":!0}),y(e)!=="svelte-k3gq2n"&&(e.textContent=n)},m(t,l){m(t,e,l)},p:j,i:j,o:j,d(t){t&&p(e)}}}function ke(f){let e,n,t=A(f[1].projects),l=[];for(let s=0;s<t.length;s+=1)l[s]=ee(Y(f,t,s));const c=s=>g(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=I()},l(s){for(let r=0;r<l.length;r+=1)l[r].l(s);e=I()},m(s,r){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(s,r);m(s,e,r),n=!0},p(s,r){if(r&2){t=A(s[1].projects);let o;for(o=0;o<t.length;o+=1){const u=Y(s,t,o);l[o]?(l[o].p(u,r),d(l[o],1)):(l[o]=ee(u),l[o].c(),d(l[o],1),l[o].m(e.parentNode,e))}for(x(),o=t.length;o<l.length;o+=1)c(o);M()}},i(s){if(!n){for(let r=0;r<t.length;r+=1)d(l[r]);n=!0}},o(s){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)g(l[r]);n=!1},d(s){s&&p(e),z(l,s)}}}function we(f){let e,n=f[8].name+"",t,l,c,s=f[8].description+"",r,o,u,$,i,h;return{c(){e=v("h4"),t=E(n),l=w(),c=v("p"),r=E(s),o=w(),u=v("a"),$=E("View Project"),h=w(),this.h()},l(a){e=b(a,"H4",{});var _=P(e);t=L(_,n),_.forEach(p),l=C(a),c=b(a,"P",{});var k=P(c);r=L(k,s),k.forEach(p),o=C(a),u=b(a,"A",{href:!0});var H=P(u);$=L(H,"View Project"),H.forEach(p),h=C(a),this.h()},h(){S(u,"href",i="/projects/"+f[8].id)},m(a,_){m(a,e,_),q(e,t),m(a,l,_),m(a,c,_),q(c,r),m(a,o,_),m(a,u,_),q(u,$),m(a,h,_)},p(a,_){_&2&&n!==(n=a[8].name+"")&&T(t,n),_&2&&s!==(s=a[8].description+"")&&T(r,s),_&2&&i!==(i="/projects/"+a[8].id)&&S(u,"href",i)},d(a){a&&(p(e),p(l),p(c),p(o),p(u),p(h))}}}function ee(f){let e,n;return e=new O({props:{$$slots:{default:[we]},$$scope:{ctx:f}}}),{c(){D(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p(t,l){const c={};l&16386&&(c.$$scope={dirty:l,ctx:t}),e.$set(c)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function Ce(f){let e,n="Projects",t,l,c,s,r;const o=[ke,be],u=[];function $(i,h){return i[1].projects.length>0?0:1}return c=$(f),s=u[c]=o[c](f),{c(){e=v("h3"),e.textContent=n,t=w(),l=v("div"),s.c(),this.h()},l(i){e=b(i,"H3",{"data-svelte-h":!0}),y(e)!=="svelte-dmvsri"&&(e.textContent=n),t=C(i),l=b(i,"DIV",{class:!0});var h=P(l);s.l(h),h.forEach(p),this.h()},h(){S(l,"class","card-grid svelte-1mtp8an")},m(i,h){m(i,e,h),m(i,t,h),m(i,l,h),u[c].m(l,null),r=!0},p(i,h){let a=c;c=$(i),c===a?u[c].p(i,h):(x(),g(u[a],1,1,()=>{u[a]=null}),M(),s=u[c],s?s.p(i,h):(s=u[c]=o[c](i),s.c()),d(s,1),s.m(l,null))},i(i){r||(d(s),r=!0)},o(i){g(s),r=!1},d(i){i&&(p(e),p(t),p(l)),u[c].d()}}}function je(f){let e,n;return e=new W({props:{$$slots:{default:[Ce]},$$scope:{ctx:f}}}),{c(){D(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p(t,l){const c={};l&16386&&(c.$$scope={dirty:l,ctx:t}),e.$set(c)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function qe(f){let e,n="No Discussions Match The Search Term";return{c(){e=v("p"),e.textContent=n},l(t){e=b(t,"P",{"data-svelte-h":!0}),y(e)!=="svelte-lqdmuq"&&(e.textContent=n)},m(t,l){m(t,e,l)},p:j,i:j,o:j,d(t){t&&p(e)}}}function Pe(f){let e,n,t=A(f[1].discussions),l=[];for(let s=0;s<t.length;s+=1)l[s]=te(X(f,t,s));const c=s=>g(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=I()},l(s){for(let r=0;r<l.length;r+=1)l[r].l(s);e=I()},m(s,r){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(s,r);m(s,e,r),n=!0},p(s,r){if(r&2){t=A(s[1].discussions);let o;for(o=0;o<t.length;o+=1){const u=X(s,t,o);l[o]?(l[o].p(u,r),d(l[o],1)):(l[o]=te(u),l[o].c(),d(l[o],1),l[o].m(e.parentNode,e))}for(x(),o=t.length;o<l.length;o+=1)c(o);M()}},i(s){if(!n){for(let r=0;r<t.length;r+=1)d(l[r]);n=!0}},o(s){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)g(l[r]);n=!1},d(s){s&&p(e),z(l,s)}}}function Ee(f){let e,n=f[5].title+"",t,l,c,s=f[5].description+"",r,o,u,$,i,h;return{c(){e=v("h4"),t=E(n),l=w(),c=v("p"),r=E(s),o=w(),u=v("a"),$=E("View Discussion"),h=w(),this.h()},l(a){e=b(a,"H4",{});var _=P(e);t=L(_,n),_.forEach(p),l=C(a),c=b(a,"P",{});var k=P(c);r=L(k,s),k.forEach(p),o=C(a),u=b(a,"A",{href:!0});var H=P(u);$=L(H,"View Discussion"),H.forEach(p),h=C(a),this.h()},h(){S(u,"href",i="/discussions/"+f[5].id)},m(a,_){m(a,e,_),q(e,t),m(a,l,_),m(a,c,_),q(c,r),m(a,o,_),m(a,u,_),q(u,$),m(a,h,_)},p(a,_){_&2&&n!==(n=a[5].title+"")&&T(t,n),_&2&&s!==(s=a[5].description+"")&&T(r,s),_&2&&i!==(i="/discussions/"+a[5].id)&&S(u,"href",i)},d(a){a&&(p(e),p(l),p(c),p(o),p(u),p(h))}}}function te(f){let e,n;return e=new O({props:{$$slots:{default:[Ee]},$$scope:{ctx:f}}}),{c(){D(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p(t,l){const c={};l&16386&&(c.$$scope={dirty:l,ctx:t}),e.$set(c)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function Le(f){let e,n="Discussions",t,l,c,s,r;const o=[Pe,qe],u=[];function $(i,h){return i[1].discussions.length>0?0:1}return c=$(f),s=u[c]=o[c](f),{c(){e=v("h3"),e.textContent=n,t=w(),l=v("div"),s.c(),this.h()},l(i){e=b(i,"H3",{"data-svelte-h":!0}),y(e)!=="svelte-ur28ul"&&(e.textContent=n),t=C(i),l=b(i,"DIV",{class:!0});var h=P(l);s.l(h),h.forEach(p),this.h()},h(){S(l,"class","card-grid svelte-1mtp8an")},m(i,h){m(i,e,h),m(i,t,h),m(i,l,h),u[c].m(l,null),r=!0},p(i,h){let a=c;c=$(i),c===a?u[c].p(i,h):(x(),g(u[a],1,1,()=>{u[a]=null}),M(),s=u[c],s?s.p(i,h):(s=u[c]=o[c](i),s.c()),d(s,1),s.m(l,null))},i(i){r||(d(s),r=!0)},o(i){g(s),r=!1},d(i){i&&(p(e),p(t),p(l)),u[c].d()}}}function Se(f){let e,n;return e=new W({props:{$$slots:{default:[Le]},$$scope:{ctx:f}}}),{c(){D(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p(t,l){const c={};l&16386&&(c.$$scope={dirty:l,ctx:t}),e.$set(c)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function De(f){let e,n,t,l,c,s,r,o,u;const $=[he,pe,_e],i=[];function h(a,_){return a[2]?0:a[1].users.length>0||a[1].projects.length>0||a[1].discussions.length>0?1:2}return r=h(f),o=i[r]=$[r](f),{c(){e=v("div"),n=v("h2"),t=E('Search Results for "'),l=E(f[0]),c=E('"'),s=w(),o.c(),this.h()},l(a){e=b(a,"DIV",{class:!0});var _=P(e);n=b(_,"H2",{});var k=P(n);t=L(k,'Search Results for "'),l=L(k,f[0]),c=L(k,'"'),k.forEach(p),s=C(_),o.l(_),_.forEach(p),this.h()},h(){S(e,"class","container svelte-1mtp8an")},m(a,_){m(a,e,_),q(e,n),q(n,t),q(n,l),q(n,c),q(e,s),i[r].m(e,null),u=!0},p(a,[_]){(!u||_&1)&&T(l,a[0]);let k=r;r=h(a),r===k?i[r].p(a,_):(x(),g(i[k],1,1,()=>{i[k]=null}),M(),o=i[r],o?o.p(a,_):(o=i[r]=$[r](a),o.c()),d(o,1),o.m(e,null))},i(a){u||(d(o),u=!0)},o(a){g(o),u=!1},d(a){a&&p(e),i[r].d()}}}function Ne(f,e,n){let t;se(f,ce,o=>n(3,t=o));let l="",c={users:[],projects:[],discussions:[]},s=!1;re(async()=>{n(0,l=t.url.searchParams.get("q")||""),l&&await r()});async function r(){n(2,s=!0),n(1,c=await ae(l)),n(2,s=!1),console.log("Search results: ",c)}return[l,c,s]}class Ae extends ne{constructor(e){super(),oe(this,e,Ne,De,le,{})}}export{Ae as component};