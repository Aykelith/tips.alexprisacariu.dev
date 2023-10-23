!function(){"use strict";let e=g;const t=1,n=2,r={owned:null,cleanups:null,context:null,owner:null};var o=null;let l=null,s=null,u=null,i=null,f=0;function c(e,n,l){const s=function(e,n,l,s=t,u){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:o,context:o?o.context:null,pure:l};null===o||o!==r&&(o.owned?o.owned.push(i):o.owned=[i]);return i}(e,n,!1,t);d(s)}function a(e){if(null===s)return e();const t=s;s=null;try{return e()}finally{s=t}}function d(e){if(!e.fn)return;w(e);const n=o,r=s,c=f;s=o=e,function(e,n,r){let o;try{o=e.fn(n)}catch(n){return e.pure&&(e.state=t,e.owned&&e.owned.forEach(w),e.owned=null),e.updatedAt=r+1,A(n)}(!e.updatedAt||e.updatedAt<=r)&&(null!=e.updatedAt&&"observers"in e?function(e,n,r){let o=e.value;e.comparator&&e.comparator(o,n)||(e.value=n,e.observers&&e.observers.length&&h((()=>{for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n],o=l&&l.running;o&&l.disposed.has(r),(o?r.tState:r.state)||(r.pure?u.push(r):i.push(r),r.observers&&v(r)),o||(r.state=t)}if(u.length>1e6)throw u=[],new Error}),!1))}(e,o):e.value=o,e.updatedAt=r)}(e,e.value,c),s=r,o=n}function p(e){if(0===e.state)return;if(e.state===n)return y(e);if(e.suspense&&a(e.suspense.inFallback))return e.suspense.effects.push(e);const r=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<f);)e.state&&r.push(e);for(let o=r.length-1;o>=0;o--)if((e=r[o]).state===t)d(e);else if(e.state===n){const t=u;u=null,h((()=>y(e,r[0])),!1),u=t}}function h(t,n){if(u)return t();let r=!1;n||(u=[]),i?r=!0:i=[],f++;try{const n=t();return function(t){u&&(g(u),u=null);if(t)return;const n=i;i=null,n.length&&h((()=>e(n)),!1)}(r),n}catch(e){r||(i=null),u=null,A(e)}}function g(e){for(let t=0;t<e.length;t++)p(e[t])}function y(e,r){e.state=0;for(let o=0;o<e.sources.length;o+=1){const l=e.sources[o];if(l.sources){const e=l.state;e===t?l!==r&&(!l.updatedAt||l.updatedAt<f)&&p(l):e===n&&y(l,r)}}}function v(e){for(let t=0;t<e.observers.length;t+=1){const r=e.observers[t];r.state||(r.state=n,r.pure?u.push(r):i.push(r),r.observers&&v(r))}}function w(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)w(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function A(e,t=o){const n=function(e){return e instanceof Error?e:new Error("string"==typeof e?e:"Unknown error",{cause:e})}(e);throw n}function b(e,t,n){let r;const o=()=>{const t=document.createElement("template");return t.innerHTML=e,n?t.content.firstChild.firstChild:t.content.firstChild},l=t?()=>a((()=>document.importNode(r||(r=o()),!0))):()=>(r||(r=o())).cloneNode(!0);return l.cloneNode=l,l}function m(e,t,n,r,o){for(;"function"==typeof n;)n=n();if(t===n)return n;const l=typeof t,s=void 0!==r;if(e=s&&n[0]&&n[0].parentNode||e,"string"===l||"number"===l)if("number"===l&&(t=t.toString()),s){let o=n[0];o&&3===o.nodeType?o.data=t:o=document.createTextNode(t),n=S(e,n,r,o)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t;else if(null==t||"boolean"===l)n=S(e,n,r);else{if("function"===l)return c((()=>{let o=t();for(;"function"==typeof o;)o=o();n=m(e,o,n,r)})),()=>n;if(Array.isArray(t)){const l=[],u=n&&Array.isArray(n);if(x(l,t,n,o))return c((()=>n=m(e,l,n,r,!0))),()=>n;if(0===l.length){if(n=S(e,n,r),s)return n}else u?0===n.length?C(e,l,r):function(e,t,n){let r=n.length,o=t.length,l=r,s=0,u=0,i=t[o-1].nextSibling,f=null;for(;s<o||u<l;)if(t[s]!==n[u]){for(;t[o-1]===n[l-1];)o--,l--;if(o===s){const t=l<r?u?n[u-1].nextSibling:n[l-u]:i;for(;u<l;)e.insertBefore(n[u++],t)}else if(l===u)for(;s<o;)f&&f.has(t[s])||t[s].remove(),s++;else if(t[s]===n[l-1]&&n[u]===t[o-1]){const r=t[--o].nextSibling;e.insertBefore(n[u++],t[s++].nextSibling),e.insertBefore(n[--l],r),t[o]=n[l]}else{if(!f){f=new Map;let e=u;for(;e<l;)f.set(n[e],e++)}const r=f.get(t[s]);if(null!=r)if(u<r&&r<l){let i,c=s,a=1;for(;++c<o&&c<l&&null!=(i=f.get(t[c]))&&i===r+a;)a++;if(a>r-u){const o=t[s];for(;u<r;)e.insertBefore(n[u++],o)}else e.replaceChild(n[u++],t[s++])}else s++;else t[s++].remove()}}else s++,u++}(e,n,l):(n&&S(e),C(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(s)return n=S(e,n,r,t);S(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}}return n}function x(e,t,n,r){let o=!1;for(let l=0,s=t.length;l<s;l++){let s,u=t[l],i=n&&n[l];if(null==u||!0===u||!1===u);else if("object"==(s=typeof u)&&u.nodeType)e.push(u);else if(Array.isArray(u))o=x(e,u,i)||o;else if("function"===s)if(r){for(;"function"==typeof u;)u=u();o=x(e,Array.isArray(u)?u:[u],Array.isArray(i)?i:[i])||o}else e.push(u),o=!0;else{const t=String(u);i&&3===i.nodeType&&i.data===t?e.push(i):e.push(document.createTextNode(t))}}return o}function C(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function S(e,t,n,r){if(void 0===n)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(o!==s){const t=s.parentNode===e;r||l?t&&s.remove():t?e.replaceChild(o,s):e.insertBefore(o,n)}else r=!0}}else e.insertBefore(o,n);return[o]}const T=b('<div class="w-full h-full">Tips'),B=()=>T();!function(e,t,n,l={}){let u;(function(e,t){const n=s,l=o,u=0===e.length,i=void 0===t?l:t,f=u?r:{owned:null,cleanups:null,context:i?i.context:null,owner:i},c=u?e:()=>e((()=>a((()=>w(f)))));o=f,s=null;try{return h(c,!0)}finally{s=n,o=l}})((r=>{u=r,t===document?e():function(e,t,n,r){void 0===n||r||(r=[]);if("function"!=typeof t)return m(e,t,r,n);c((r=>m(e,t(),r,n)),r)}(t,e(),t.firstChild?null:void 0,n)}),l.owner)}((()=>{return e=B,t={},a((()=>e(t||{})));var e,t}),document.getElementById("root"))}();
//# sourceMappingURL=script.js.map
