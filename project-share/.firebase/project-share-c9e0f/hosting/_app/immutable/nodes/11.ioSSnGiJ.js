import{s as oe,a as D,g as I,i as _,f as a,e as v,t as P,c as C,b as B,d as E,h as N,j as V,l as A,m as M,n as k,o as se,q as ue,r as re,k as we}from"../chunks/scheduler.Cwazaqfz.js";import{h as _e,u as je}from"../chunks/await_block.BHOq8cZi.js";import{S as ce,i as fe,c as z,b as H,m as L,t as g,a as b,d as S,g as y,e as ee}from"../chunks/index.D0VKxQGj.js";import{p as Pe}from"../chunks/stores.dV9NvrlY.js";import{e as Y}from"../chunks/each.D6YF6ztN.js";import{B as $e}from"../chunks/Hero.svelte_svelte_type_style_lang.BqHQ8Oh_.js";import{B as Ee}from"../chunks/Badge.CRoZVWXB.js";import{R as le,C as ne}from"../chunks/Row.CaZR2ylp.js";import{C as Ce}from"../chunks/Card._3FSYCGU.js";import{g as ae}from"../chunks/entry.Ci96r61m.js";import{d as Ne,e as De}from"../chunks/projectsApi.ClQSd6zU.js";function pe(f,t,n){const e=f.slice();return e[1]=t[n],e}function me(f,t,n){const e=f.slice();return e[4]=t[n],e}function Ie(f){let t,n=f[0].name+"",e,l,c,r=f[0].description+"",s;return{c(){t=v("h2"),e=P(n),l=D(),c=v("p"),s=P(r)},l(o){t=C(o,"H2",{});var i=B(t);e=E(i,n),i.forEach(a),l=I(o),c=C(o,"P",{});var m=B(c);s=E(m,r),m.forEach(a)},m(o,i){_(o,t,i),N(t,e),_(o,l,i),_(o,c,i),N(c,s)},p(o,i){i&1&&n!==(n=o[0].name+"")&&V(e,n),i&1&&r!==(r=o[0].description+"")&&V(s,r)},d(o){o&&(a(t),a(l),a(c))}}}function Be(f){let t,n;return t=new ne({props:{$$slots:{default:[Ie]},$$scope:{ctx:f}}}),{c(){z(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,l){L(t,e,l),n=!0},p(e,l){const c={};l&129&&(c.$$scope={dirty:l,ctx:e}),t.$set(c)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){S(t,e)}}}function Te(f){let t,n="No collaborators.";return{c(){t=v("p"),t.textContent=n},l(e){t=C(e,"P",{"data-svelte-h":!0}),M(t)!=="svelte-61zx38"&&(t.textContent=n)},m(e,l){_(e,t,l)},p:k,d(e){e&&a(t)}}}function Re(f){let t,n=Y(f[0].collaborators),e=[];for(let l=0;l<n.length;l+=1)e[l]=de(me(f,n,l));return{c(){t=v("ul");for(let l=0;l<e.length;l+=1)e[l].c()},l(l){t=C(l,"UL",{});var c=B(t);for(let r=0;r<e.length;r+=1)e[r].l(c);c.forEach(a)},m(l,c){_(l,t,c);for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(t,null)},p(l,c){if(c&1){n=Y(l[0].collaborators);let r;for(r=0;r<n.length;r+=1){const s=me(l,n,r);e[r]?e[r].p(s,c):(e[r]=de(s),e[r].c(),e[r].m(t,null))}for(;r<e.length;r+=1)e[r].d(1);e.length=n.length}},d(l){l&&a(t),se(e,l)}}}function de(f){let t,n=f[4]+"",e;return{c(){t=v("li"),e=P(n)},l(l){t=C(l,"LI",{});var c=B(t);e=E(c,n),c.forEach(a)},m(l,c){_(l,t,c),N(t,e)},p(l,c){c&1&&n!==(n=l[4]+"")&&V(e,n)},d(l){l&&a(t)}}}function ze(f){let t,n="Collaborators",e,l;function c(o,i){return o[0].collaborators.length>0?Re:Te}let r=c(f),s=r(f);return{c(){t=v("h3"),t.textContent=n,e=D(),s.c(),l=A()},l(o){t=C(o,"H3",{"data-svelte-h":!0}),M(t)!=="svelte-1ucne39"&&(t.textContent=n),e=I(o),s.l(o),l=A()},m(o,i){_(o,t,i),_(o,e,i),s.m(o,i),_(o,l,i)},p(o,i){r===(r=c(o))&&s?s.p(o,i):(s.d(1),s=r(o),s&&(s.c(),s.m(l.parentNode,l)))},d(o){o&&(a(t),a(e),a(l)),s.d(o)}}}function He(f){let t,n;return t=new ne({props:{$$slots:{default:[ze]},$$scope:{ctx:f}}}),{c(){z(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,l){L(t,e,l),n=!0},p(e,l){const c={};l&129&&(c.$$scope={dirty:l,ctx:e}),t.$set(c)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){S(t,e)}}}function Le(f){let t,n="No tags.";return{c(){t=v("p"),t.textContent=n},l(e){t=C(e,"P",{"data-svelte-h":!0}),M(t)!=="svelte-j4hbkq"&&(t.textContent=n)},m(e,l){_(e,t,l)},p:k,i:k,o:k,d(e){e&&a(t)}}}function Se(f){let t,n,e=Y(f[0].tags),l=[];for(let r=0;r<e.length;r+=1)l[r]=he(pe(f,e,r));const c=r=>b(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();t=A()},l(r){for(let s=0;s<l.length;s+=1)l[s].l(r);t=A()},m(r,s){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(r,s);_(r,t,s),n=!0},p(r,s){if(s&1){e=Y(r[0].tags);let o;for(o=0;o<e.length;o+=1){const i=pe(r,e,o);l[o]?(l[o].p(i,s),g(l[o],1)):(l[o]=he(i),l[o].c(),g(l[o],1),l[o].m(t.parentNode,t))}for(y(),o=e.length;o<l.length;o+=1)c(o);ee()}},i(r){if(!n){for(let s=0;s<e.length;s+=1)g(l[s]);n=!0}},o(r){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)b(l[s]);n=!1},d(r){r&&a(t),se(l,r)}}}function Ve(f){let t=f[1]+"",n;return{c(){n=P(t)},l(e){n=E(e,t)},m(e,l){_(e,n,l)},p(e,l){l&1&&t!==(t=e[1]+"")&&V(n,t)},d(e){e&&a(n)}}}function he(f){let t,n;return t=new Ee({props:{type:"success",$$slots:{default:[Ve]},$$scope:{ctx:f}}}),{c(){z(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,l){L(t,e,l),n=!0},p(e,l){const c={};l&129&&(c.$$scope={dirty:l,ctx:e}),t.$set(c)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){S(t,e)}}}function Ae(f){let t,n="Tags",e,l,c,r,s;const o=[Se,Le],i=[];function m(u,p){return u[0].tags.length>0?0:1}return l=m(f),c=i[l]=o[l](f),{c(){t=v("h3"),t.textContent=n,e=D(),c.c(),r=A()},l(u){t=C(u,"H3",{"data-svelte-h":!0}),M(t)!=="svelte-1nl40cx"&&(t.textContent=n),e=I(u),c.l(u),r=A()},m(u,p){_(u,t,p),_(u,e,p),i[l].m(u,p),_(u,r,p),s=!0},p(u,p){let j=l;l=m(u),l===j?i[l].p(u,p):(y(),b(i[j],1,1,()=>{i[j]=null}),ee(),c=i[l],c?c.p(u,p):(c=i[l]=o[l](u),c.c()),g(c,1),c.m(r.parentNode,r))},i(u){s||(g(c),s=!0)},o(u){b(c),s=!1},d(u){u&&(a(t),a(e),a(r)),i[l].d(u)}}}function qe(f){let t,n;return t=new ne({props:{$$slots:{default:[Ae]},$$scope:{ctx:f}}}),{c(){z(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,l){L(t,e,l),n=!0},p(e,l){const c={};l&129&&(c.$$scope={dirty:l,ctx:e}),t.$set(c)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){S(t,e)}}}function Oe(f){let t,n,e,l,c,r;return t=new le({props:{$$slots:{default:[Be]},$$scope:{ctx:f}}}),e=new le({props:{$$slots:{default:[He]},$$scope:{ctx:f}}}),c=new le({props:{$$slots:{default:[qe]},$$scope:{ctx:f}}}),{c(){z(t.$$.fragment),n=D(),z(e.$$.fragment),l=D(),z(c.$$.fragment)},l(s){H(t.$$.fragment,s),n=I(s),H(e.$$.fragment,s),l=I(s),H(c.$$.fragment,s)},m(s,o){L(t,s,o),_(s,n,o),L(e,s,o),_(s,l,o),L(c,s,o),r=!0},p(s,[o]){const i={};o&129&&(i.$$scope={dirty:o,ctx:s}),t.$set(i);const m={};o&129&&(m.$$scope={dirty:o,ctx:s}),e.$set(m);const u={};o&129&&(u.$$scope={dirty:o,ctx:s}),c.$set(u)},i(s){r||(g(t.$$.fragment,s),g(e.$$.fragment,s),g(c.$$.fragment,s),r=!0)},o(s){b(t.$$.fragment,s),b(e.$$.fragment,s),b(c.$$.fragment,s),r=!1},d(s){s&&(a(n),a(l)),S(t,s),S(e,s),S(c,s)}}}function Fe(f,t,n){let{project:e}=t;return f.$$set=l=>{"project"in l&&n(0,e=l.project)},f.$$.update=()=>{f.$$.dirty&1&&console.log(e)},[e]}class Me extends ce{constructor(t){super(),fe(this,t,Fe,Oe,oe,{project:0})}}function ge(f,t,n){const e=f.slice();return e[6]=t[n],e}function Ue(f){let t;return{c(){t=P("Add Discussion")},l(n){t=E(n,"Add Discussion")},m(n,e){_(n,t,e)},d(n){n&&a(t)}}}function Ge(f){let t,n,e=Y(f[0]),l=[];for(let r=0;r<e.length;r+=1)l[r]=be(ge(f,e,r));const c=r=>b(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();t=A()},l(r){for(let s=0;s<l.length;s+=1)l[s].l(r);t=A()},m(r,s){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(r,s);_(r,t,s),n=!0},p(r,s){if(s&1){e=Y(r[0]);let o;for(o=0;o<e.length;o+=1){const i=ge(r,e,o);l[o]?(l[o].p(i,s),g(l[o],1)):(l[o]=be(i),l[o].c(),g(l[o],1),l[o].m(t.parentNode,t))}for(y(),o=e.length;o<l.length;o+=1)c(o);ee()}},i(r){if(!n){for(let s=0;s<e.length;s+=1)g(l[s]);n=!0}},o(r){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)b(l[s]);n=!1},d(r){r&&a(t),se(l,r)}}}function Je(f){let t,n="No discussions found for this project.";return{c(){t=v("p"),t.textContent=n},l(e){t=C(e,"P",{"data-svelte-h":!0}),M(t)!=="svelte-17mi2o0"&&(t.textContent=n)},m(e,l){_(e,t,l)},p:k,i:k,o:k,d(e){e&&a(t)}}}function Ke(f){let t,n;return{c(){t=v("p"),n=P(f[2])},l(e){t=C(e,"P",{});var l=B(t);n=E(l,f[2]),l.forEach(a)},m(e,l){_(e,t,l),N(t,n)},p(e,l){l&4&&V(n,e[2])},i:k,o:k,d(e){e&&a(t)}}}function Qe(f){let t,n="Loading discussions...";return{c(){t=v("p"),t.textContent=n},l(e){t=C(e,"P",{"data-svelte-h":!0}),M(t)!=="svelte-36ynsv"&&(t.textContent=n)},m(e,l){_(e,t,l)},p:k,i:k,o:k,d(e){e&&a(t)}}}function We(f){let t;return{c(){t=P("View Discussion")},l(n){t=E(n,"View Discussion")},m(n,e){_(n,t,e)},d(n){n&&a(t)}}}function Xe(f){let t,n=f[6].title+"",e,l,c,r,s=f[6].startedBy+"",o,i,m,u,p=f[6].dateTime+"",j,h,w,G,q=f[6].replies+"",J,K,O,U=f[6].description+"",Q,W,T,X,R;function ie(){return f[5](f[6])}return T=new $e({props:{$$slots:{default:[We]},$$scope:{ctx:f}}}),T.$on("click",ie),{c(){t=v("h3"),e=P(n),l=D(),c=v("p"),r=P("Started by: "),o=P(s),i=D(),m=v("p"),u=P("Date and Time: "),j=P(p),h=D(),w=v("p"),G=P("Replies: "),J=P(q),K=D(),O=v("p"),Q=P(U),W=D(),z(T.$$.fragment),X=D()},l($){t=C($,"H3",{});var d=B(t);e=E(d,n),d.forEach(a),l=I($),c=C($,"P",{});var F=B(c);r=E(F,"Started by: "),o=E(F,s),F.forEach(a),i=I($),m=C($,"P",{});var Z=B(m);u=E(Z,"Date and Time: "),j=E(Z,p),Z.forEach(a),h=I($),w=C($,"P",{});var x=B(w);G=E(x,"Replies: "),J=E(x,q),x.forEach(a),K=I($),O=C($,"P",{});var te=B(O);Q=E(te,U),te.forEach(a),W=I($),H(T.$$.fragment,$),X=I($)},m($,d){_($,t,d),N(t,e),_($,l,d),_($,c,d),N(c,r),N(c,o),_($,i,d),_($,m,d),N(m,u),N(m,j),_($,h,d),_($,w,d),N(w,G),N(w,J),_($,K,d),_($,O,d),N(O,Q),_($,W,d),L(T,$,d),_($,X,d),R=!0},p($,d){f=$,(!R||d&1)&&n!==(n=f[6].title+"")&&V(e,n),(!R||d&1)&&s!==(s=f[6].startedBy+"")&&V(o,s),(!R||d&1)&&p!==(p=f[6].dateTime+"")&&V(j,p),(!R||d&1)&&q!==(q=f[6].replies+"")&&V(J,q),(!R||d&1)&&U!==(U=f[6].description+"")&&V(Q,U);const F={};d&512&&(F.$$scope={dirty:d,ctx:f}),T.$set(F)},i($){R||(g(T.$$.fragment,$),R=!0)},o($){b(T.$$.fragment,$),R=!1},d($){$&&(a(t),a(l),a(c),a(i),a(m),a(h),a(w),a(K),a(O),a(W),a(X)),S(T,$)}}}function be(f){let t,n;return t=new Ce({props:{class:"discussion-card",$$slots:{default:[Xe]},$$scope:{ctx:f}}}),{c(){z(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,l){L(t,e,l),n=!0},p(e,l){const c={};l&513&&(c.$$scope={dirty:l,ctx:e}),t.$set(c)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){S(t,e)}}}function Ye(f){let t,n,e="Discussions",l,c,r,s,o,i,m;c=new $e({props:{$$slots:{default:[Ue]},$$scope:{ctx:f}}}),c.$on("click",f[3]);const u=[Qe,Ke,Je,Ge],p=[];function j(h,w){return h[1]?0:h[2]?1:h[0].length===0?2:3}return s=j(f),o=p[s]=u[s](f),{c(){t=v("div"),n=v("h2"),n.textContent=e,l=D(),z(c.$$.fragment),r=D(),o.c(),i=A(),this.h()},l(h){t=C(h,"DIV",{class:!0});var w=B(t);n=C(w,"H2",{"data-svelte-h":!0}),M(n)!=="svelte-1h20wn9"&&(n.textContent=e),l=I(w),H(c.$$.fragment,w),w.forEach(a),r=I(h),o.l(h),i=A(),this.h()},h(){re(t,"class","discussion-header")},m(h,w){_(h,t,w),N(t,n),N(t,l),L(c,t,null),_(h,r,w),p[s].m(h,w),_(h,i,w),m=!0},p(h,w){const G={};w&512&&(G.$$scope={dirty:w,ctx:h}),c.$set(G);let q=s;s=j(h),s===q?p[s].p(h,w):(y(),b(p[q],1,1,()=>{p[q]=null}),ee(),o=p[s],o?o.p(h,w):(o=p[s]=u[s](h),o.c()),g(o,1),o.m(i.parentNode,i))},i(h){m||(g(c.$$.fragment,h),g(o),m=!0)},o(h){b(c.$$.fragment,h),b(o),m=!1},d(h){h&&(a(t),a(r),a(i)),S(c),p[s].d(h)}}}function Ze(f){let t,n;return t=new ne({props:{$$slots:{default:[Ye]},$$scope:{ctx:f}}}),{c(){z(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,l){L(t,e,l),n=!0},p(e,l){const c={};l&519&&(c.$$scope={dirty:l,ctx:e}),t.$set(c)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){S(t,e)}}}function xe(f){let t,n;return t=new le({props:{$$slots:{default:[Ze]},$$scope:{ctx:f}}}),{c(){z(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,l){L(t,e,l),n=!0},p(e,[l]){const c={};l&519&&(c.$$scope={dirty:l,ctx:e}),t.$set(c)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){S(t,e)}}}function ye(f,t,n){let{projectId:e}=t,l=[],c=!0,r=null;ue(async()=>{try{const i=await fetch(`/api/discussions?projectId=${e}`);i.ok?n(0,l=await i.json()):n(2,r="Failed to fetch discussions")}catch{n(2,r="An error occurred while fetching discussions")}finally{n(1,c=!1)}});function s(){ae("/discussions/create")}const o=i=>ae(`/discussions/${i.id}`);return f.$$set=i=>{"projectId"in i&&n(4,e=i.projectId)},[l,c,r,s,e,o]}class et extends ce{constructor(t){super(),fe(this,t,ye,xe,oe,{projectId:4})}}function ke(f,t,n){const e=f.slice();return e[5]=t[n],e}function tt(f){let t,n,e=Y(f[0]),l=[];for(let r=0;r<e.length;r+=1)l[r]=ve(ke(f,e,r));const c=r=>b(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();t=A()},l(r){for(let s=0;s<l.length;s+=1)l[s].l(r);t=A()},m(r,s){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(r,s);_(r,t,s),n=!0},p(r,s){if(s&1){e=Y(r[0]);let o;for(o=0;o<e.length;o+=1){const i=ke(r,e,o);l[o]?(l[o].p(i,s),g(l[o],1)):(l[o]=ve(i),l[o].c(),g(l[o],1),l[o].m(t.parentNode,t))}for(y(),o=e.length;o<l.length;o+=1)c(o);ee()}},i(r){if(!n){for(let s=0;s<e.length;s+=1)g(l[s]);n=!0}},o(r){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)b(l[s]);n=!1},d(r){r&&a(t),se(l,r)}}}function lt(f){let t,n="No related projects found.";return{c(){t=v("p"),t.textContent=n},l(e){t=C(e,"P",{"data-svelte-h":!0}),M(t)!=="svelte-1wcjsy8"&&(t.textContent=n)},m(e,l){_(e,t,l)},p:k,i:k,o:k,d(e){e&&a(t)}}}function nt(f){let t,n;return{c(){t=v("p"),n=P(f[2])},l(e){t=C(e,"P",{});var l=B(t);n=E(l,f[2]),l.forEach(a)},m(e,l){_(e,t,l),N(t,n)},p(e,l){l&4&&V(n,e[2])},i:k,o:k,d(e){e&&a(t)}}}function rt(f){let t,n="Loading related projects...";return{c(){t=v("p"),t.textContent=n},l(e){t=C(e,"P",{"data-svelte-h":!0}),M(t)!=="svelte-1oj0bqf"&&(t.textContent=n)},m(e,l){_(e,t,l)},p:k,i:k,o:k,d(e){e&&a(t)}}}function ot(f){let t;return{c(){t=P("View Project")},l(n){t=E(n,"View Project")},m(n,e){_(n,t,e)},d(n){n&&a(t)}}}function st(f){let t,n=f[5].title+"",e,l,c,r,s=f[5].createdBy+"",o,i,m,u,p=f[5].dateTime+"",j,h,w,G,q=f[5].collaborators.join(", ")+"",J,K,O,U=f[5].description+"",Q,W,T,X,R;function ie(){return f[4](f[5])}return T=new $e({props:{$$slots:{default:[ot]},$$scope:{ctx:f}}}),T.$on("click",ie),{c(){t=v("h3"),e=P(n),l=D(),c=v("p"),r=P("Created by: "),o=P(s),i=D(),m=v("p"),u=P("Date and Time: "),j=P(p),h=D(),w=v("p"),G=P("Collaborators: "),J=P(q),K=D(),O=v("p"),Q=P(U),W=D(),z(T.$$.fragment),X=D()},l($){t=C($,"H3",{});var d=B(t);e=E(d,n),d.forEach(a),l=I($),c=C($,"P",{});var F=B(c);r=E(F,"Created by: "),o=E(F,s),F.forEach(a),i=I($),m=C($,"P",{});var Z=B(m);u=E(Z,"Date and Time: "),j=E(Z,p),Z.forEach(a),h=I($),w=C($,"P",{});var x=B(w);G=E(x,"Collaborators: "),J=E(x,q),x.forEach(a),K=I($),O=C($,"P",{});var te=B(O);Q=E(te,U),te.forEach(a),W=I($),H(T.$$.fragment,$),X=I($)},m($,d){_($,t,d),N(t,e),_($,l,d),_($,c,d),N(c,r),N(c,o),_($,i,d),_($,m,d),N(m,u),N(m,j),_($,h,d),_($,w,d),N(w,G),N(w,J),_($,K,d),_($,O,d),N(O,Q),_($,W,d),L(T,$,d),_($,X,d),R=!0},p($,d){f=$,(!R||d&1)&&n!==(n=f[5].title+"")&&V(e,n),(!R||d&1)&&s!==(s=f[5].createdBy+"")&&V(o,s),(!R||d&1)&&p!==(p=f[5].dateTime+"")&&V(j,p),(!R||d&1)&&q!==(q=f[5].collaborators.join(", ")+"")&&V(J,q),(!R||d&1)&&U!==(U=f[5].description+"")&&V(Q,U);const F={};d&256&&(F.$$scope={dirty:d,ctx:f}),T.$set(F)},i($){R||(g(T.$$.fragment,$),R=!0)},o($){b(T.$$.fragment,$),R=!1},d($){$&&(a(t),a(l),a(c),a(i),a(m),a(h),a(w),a(K),a(O),a(W),a(X)),S(T,$)}}}function ve(f){let t,n;return t=new Ce({props:{$$slots:{default:[st]},$$scope:{ctx:f}}}),{c(){z(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,l){L(t,e,l),n=!0},p(e,l){const c={};l&257&&(c.$$scope={dirty:l,ctx:e}),t.$set(c)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){S(t,e)}}}function ct(f){let t,n="Related Projects",e,l,c,r,s;const o=[rt,nt,lt,tt],i=[];function m(u,p){return u[1]?0:u[2]?1:u[0].length===0?2:3}return l=m(f),c=i[l]=o[l](f),{c(){t=v("h2"),t.textContent=n,e=D(),c.c(),r=A()},l(u){t=C(u,"H2",{"data-svelte-h":!0}),M(t)!=="svelte-e5pu65"&&(t.textContent=n),e=I(u),c.l(u),r=A()},m(u,p){_(u,t,p),_(u,e,p),i[l].m(u,p),_(u,r,p),s=!0},p(u,p){let j=l;l=m(u),l===j?i[l].p(u,p):(y(),b(i[j],1,1,()=>{i[j]=null}),ee(),c=i[l],c?c.p(u,p):(c=i[l]=o[l](u),c.c()),g(c,1),c.m(r.parentNode,r))},i(u){s||(g(c),s=!0)},o(u){b(c),s=!1},d(u){u&&(a(t),a(e),a(r)),i[l].d(u)}}}function ft(f){let t,n;return t=new ne({props:{$$slots:{default:[ct]},$$scope:{ctx:f}}}),{c(){z(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,l){L(t,e,l),n=!0},p(e,l){const c={};l&263&&(c.$$scope={dirty:l,ctx:e}),t.$set(c)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){S(t,e)}}}function it(f){let t,n;return t=new le({props:{$$slots:{default:[ft]},$$scope:{ctx:f}}}),{c(){z(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,l){L(t,e,l),n=!0},p(e,[l]){const c={};l&263&&(c.$$scope={dirty:l,ctx:e}),t.$set(c)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){S(t,e)}}}function at(f,t,n){let{tags:e=[]}=t,l=[],c=!0,r=null;ue(async()=>{try{n(0,l=e.length>0?await Ne(e):[]),n(1,c=!1)}catch{n(2,r="An error occurred while fetching related projects"),n(1,c=!1)}});const s=o=>ae(`/projects/${o.id}`);return f.$$set=o=>{"tags"in o&&n(3,e=o.tags)},[l,c,r,e,s]}class ut extends ce{constructor(t){super(),fe(this,t,at,it,oe,{tags:3})}}function $t(f){let t,n="Loading project...";return{c(){t=v("p"),t.textContent=n},l(e){t=C(e,"P",{"data-svelte-h":!0}),M(t)!=="svelte-db1ml3"&&(t.textContent=n)},m(e,l){_(e,t,l)},p:k,i:k,o:k,d(e){e&&a(t)}}}function _t(f){let t,n,e,l,c,r,s,o,i;n=new Me({props:{project:f[0]}}),c=new et({props:{projectId:f[1].params.id}});let m={ctx:f,current:null,token:null,hasCatch:!1,pending:dt,then:mt,catch:pt,blocks:[,,,]};return _e(o=f[0],m),{c(){t=v("section"),z(n.$$.fragment),e=D(),l=v("section"),z(c.$$.fragment),r=D(),s=A(),m.block.c(),this.h()},l(u){t=C(u,"SECTION",{class:!0});var p=B(t);H(n.$$.fragment,p),p.forEach(a),e=I(u),l=C(u,"SECTION",{class:!0});var j=B(l);H(c.$$.fragment,j),j.forEach(a),r=I(u),s=A(),m.block.l(u),this.h()},h(){re(t,"class","project-details svelte-b3zfbz"),re(l,"class","discussion-list svelte-b3zfbz")},m(u,p){_(u,t,p),L(n,t,null),_(u,e,p),_(u,l,p),L(c,l,null),_(u,r,p),_(u,s,p),m.block.m(u,m.anchor=p),m.mount=()=>s.parentNode,m.anchor=s,i=!0},p(u,p){f=u;const j={};p&1&&(j.project=f[0]),n.$set(j);const h={};p&2&&(h.projectId=f[1].params.id),c.$set(h),m.ctx=f,p&1&&o!==(o=f[0])&&_e(o,m)||je(m,f,p)},i(u){i||(g(n.$$.fragment,u),g(c.$$.fragment,u),g(m.block),i=!0)},o(u){b(n.$$.fragment,u),b(c.$$.fragment,u);for(let p=0;p<3;p+=1){const j=m.blocks[p];b(j)}i=!1},d(u){u&&(a(t),a(e),a(l),a(r),a(s)),S(n),S(c),m.block.d(u),m.token=null,m=null}}}function pt(f){return{c:k,l:k,m:k,p:k,i:k,o:k,d:k}}function mt(f){let t,n,e;return n=new ut({props:{tags:f[0].tags}}),{c(){t=v("section"),z(n.$$.fragment),this.h()},l(l){t=C(l,"SECTION",{class:!0});var c=B(t);H(n.$$.fragment,c),c.forEach(a),this.h()},h(){re(t,"class","related-projects svelte-b3zfbz")},m(l,c){_(l,t,c),L(n,t,null),e=!0},p(l,c){const r={};c&1&&(r.tags=l[0].tags),n.$set(r)},i(l){e||(g(n.$$.fragment,l),e=!0)},o(l){b(n.$$.fragment,l),e=!1},d(l){l&&a(t),S(n)}}}function dt(f){let t,n="Loading Related Projects...";return{c(){t=v("p"),t.textContent=n},l(e){t=C(e,"P",{"data-svelte-h":!0}),M(t)!=="svelte-s9kw4n"&&(t.textContent=n)},m(e,l){_(e,t,l)},p:k,i:k,o:k,d(e){e&&a(t)}}}function ht(f){let t,n,e,l;const c=[_t,$t],r=[];function s(o,i){return o[0]?0:1}return n=s(f),e=r[n]=c[n](f),{c(){t=v("div"),e.c()},l(o){t=C(o,"DIV",{});var i=B(t);e.l(i),i.forEach(a)},m(o,i){_(o,t,i),r[n].m(t,null),l=!0},p(o,[i]){let m=n;n=s(o),n===m?r[n].p(o,i):(y(),b(r[m],1,1,()=>{r[m]=null}),ee(),e=r[n],e?e.p(o,i):(e=r[n]=c[n](o),e.c()),g(e,1),e.m(t,null))},i(o){l||(g(e),l=!0)},o(o){b(e),l=!1},d(o){o&&a(t),r[n].d()}}}function gt(f,t,n){let e;we(f,Pe,c=>n(1,e=c));let l=null;return ue(async()=>{console.log(e.params.id),n(0,l=await De(e.params.id))}),[l,e]}class Bt extends ce{constructor(t){super(),fe(this,t,gt,ht,oe,{})}}export{Bt as component};