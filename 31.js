(self["webpackChunk_sd_react_web"]=self["webpackChunk_sd_react_web"]||[]).push([[31],{88492:function(){},68993:function(){},71812:function(){},72404:function(){},27034:function(){},36157:function(){},30956:function(){},13378:function(e,t,n){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},49215:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a=i(n(67294)),l=o(n(96433));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function i(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}function u(e,t){return p(e)||d(e,t)||m(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(l.push(r.value),t&&l.length===t)break}catch(i){c=!0,a=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw a}}return l}}function p(e){if(Array.isArray(e))return e}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e,t){var n=function(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var l=r[1].replace(/([^^])\/$/,"$1");return v(v({},(null===(e=r[0].find((function(e){var t=e.path;return t===l})))||void 0===e?void 0:e.meta)||{}),{},{__pathname:t})},r=(0,a.useState)(n(e,t)),l=u(r,2),o=l[0],c=l[1];return(0,a.useLayoutEffect)((function(){c(n(e,t))}),[t]),o},b=function(e,t){var n=function(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(null===(t=r[0].find((function(e){return new RegExp("/".concat(e.name,"(/|$)")).test(r[1])})))||void 0===t?void 0:t.name)||e[0].name},r=(0,a.useState)(n(e,t)),l=u(r,2),o=l[0],c=l[1];return(0,a.useLayoutEffect)((function(){c(n(e,t))}),[t]),o},E=function(e,t,n){var r=function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var a=n[0].navs[n[1]]||[],l="*",o=a.length-1;o>=0;o-=1){var c=a[o],i=[c].concat(c.children).filter(Boolean),u=i.find((function(e){return e.path&&new RegExp("^".concat(e.path.replace(/\.html$/,""),"(/|.|$)")).test(n[2])}));if(u){l=u.path;break}}return(null===(e=n[0].menus[n[1]])||void 0===e?void 0:e[l])||[]},l=(0,a.useState)(r(e,t,n)),o=u(l,2),c=o[0],i=o[1];return(0,a.useLayoutEffect)((function(){i(r(e,t,n))}),[e.navs,e.menus,t,n]),c},w=function(e,t,n){var r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return r[0]===r[1][0].name?r[2].path:"".concat(n.path,"/").concat(e).replace(/\/\//,"/")},l=(0,a.useState)(r(e,t,n)),o=u(l,2),c=o[0],i=o[1];return(0,a.useLayoutEffect)((function(){i(r(e,t,n))}),[e]),c},_=function e(t){var n;return null===(n=t.find((function(t){return!!t.__dumiRoot||!!t.routes&&e(t.routes)})))||void 0===n?void 0:n.routes},k=function(e){var t=e.location,n=e.route,r=e.children,o=e.config,c=e.apis,i=e.demos,u=t.pathname.replace(n.path.replace(/^\/$/,"//"),""),s=_(e.routes)||[],m=g(s,t.pathname),f=b(o.locales,u),d=E(o,f,t.pathname),p=w(f,o.locales,n);return a.default.createElement(l.default.Provider,{value:{config:o,meta:m.__pathname===t.pathname?m:{},locale:f,nav:o.navs[f]||[],menu:d,base:p,routes:s,apis:c,demos:i}},r)},S=k;t.Z=S},48749:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(67294),a=n(96089),l=n(22231),o=(n(68993),function(e){var t=e.location,n=(0,r.useContext)(a.context),o=n.base,c=n.locale,i=n.config.locales,u=i.find((function(e){var t=e.name;return t!==c}));function s(e){var n=o.replace("/".concat(c),""),r=t.pathname.replace(new RegExp("^".concat(o,"(/|$)")),"".concat(n,"$1"))||"/";if(e!==i[0].name){var a="".concat(n,"/").concat(e).replace(/\/\//,"/"),l=t.pathname.replace(o.replace(/^\/$/,"//"),"");return"".concat(a).concat(l).replace(/\/$/,"")}return r}return u?r.createElement("div",{className:"__dumi-default-locale-select","data-locale-count":i.length},i.length>2?r.createElement("select",{value:c,onChange:function(e){return l.m.push(s(e.target.value))}},i.map((function(e){return r.createElement("option",{value:e.name,key:e.name},e.label)}))):r.createElement(a.Link,{to:s(u.name)},u.label)):null}),c=o,i=(n(71812),function(e){var t=e.onMobileMenuClick,n=e.navPrefix,l=e.location,o=e.darkPrefix,i=(0,r.useContext)(a.context),u=i.base,s=i.config,m=s.mode,f=s.title,d=s.logo,p=i.nav;return r.createElement("div",{className:"__dumi-default-navbar","data-mode":m},r.createElement("button",{className:"__dumi-default-navbar-toggle",onClick:t}),r.createElement(a.Link,{className:"__dumi-default-navbar-logo",style:{backgroundImage:d&&"url('".concat(d,"')")},to:u,"data-plaintext":!1===d||void 0},f),r.createElement("nav",null,n,p.map((function(e){var t,n=Boolean(null===(t=e.children)||void 0===t?void 0:t.length)&&r.createElement("ul",null,e.children.map((function(e){return r.createElement("li",{key:e.path},r.createElement(a.NavLink,{to:e.path},e.title))})));return r.createElement("span",{key:e.title||e.path},e.path?r.createElement(a.NavLink,{to:e.path,key:e.path},e.title):e.title,n)})),r.createElement("div",{className:"__dumi-default-navbar-tool"},r.createElement(c,{location:l}),o)))}),u=i,s=(n(36157),["slugs"]);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=d(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function d(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var p=function(e){var t=e.slugs,n=f(e,s);return r.createElement("ul",m({role:"slug-list"},n),t.filter((function(e){var t=e.depth;return t>1&&t<4})).map((function(e){return r.createElement("li",{key:e.heading,title:e.value,"data-depth":e.depth},r.createElement(a.AnchorLink,{to:"#".concat(e.heading)},r.createElement("span",null,e.value)))})))},h=p,v=(n(27034),function(e){var t=e.mobileMenuCollapsed,n=e.location,l=e.darkPrefix,o=(0,r.useContext)(a.context),i=o.config,u=i.logo,s=i.title,m=i.description,f=i.mode,d=i.repository.url,p=o.menu,v=o.nav,y=o.base,g=o.meta,b=Boolean((g.hero||g.features||g.gapless)&&"site"===f)||!1===g.sidemenu||void 0;return r.createElement("div",{className:"__dumi-default-menu","data-mode":f,"data-hidden":b,"data-mobile-show":!t||void 0},r.createElement("div",{className:"__dumi-default-menu-inner"},r.createElement("div",{className:"__dumi-default-menu-header"},r.createElement(a.Link,{to:y,className:"__dumi-default-menu-logo",style:{backgroundImage:u&&"url('".concat(u,"')")}}),r.createElement("h1",null,s),r.createElement("p",null,m),/github\.com/.test(d)&&"doc"===f&&r.createElement("p",null,r.createElement("object",{type:"image/svg+xml",data:"https://img.shields.io/github/stars".concat(d.match(/((\/[^\/]+){2})$/)[1],"?style=social")}))),r.createElement("div",{className:"__dumi-default-menu-mobile-area"},!!v.length&&r.createElement("ul",{className:"__dumi-default-menu-nav-list"},v.map((function(e){var t,n=Boolean(null===(t=e.children)||void 0===t?void 0:t.length)&&r.createElement("ul",null,e.children.map((function(e){return r.createElement("li",{key:e.path||e.title},r.createElement(a.NavLink,{to:e.path},e.title))})));return r.createElement("li",{key:e.path||e.title},e.path?r.createElement(a.NavLink,{to:e.path},e.title):e.title,n)}))),r.createElement(c,{location:n}),l),r.createElement("ul",{className:"__dumi-default-menu-list"},!b&&p.map((function(e){var t,l=Boolean(null===(t=g.slugs)||void 0===t?void 0:t.length),o=e.children&&Boolean(e.children.length),c="menu"===g.toc&&!o&&l&&e.path===n.pathname.replace(/([^^])\/$/,"$1"),i=o?e.children.map((function(e){return e.path})):[e.path,n.pathname.startsWith("".concat(e.path,"/"))&&g.title===e.title?n.pathname:null];return r.createElement("li",{key:e.path||e.title},r.createElement(a.NavLink,{to:e.path,isActive:function(){return i.includes(n.pathname)}},e.title),Boolean(e.children&&e.children.length)&&r.createElement("ul",null,e.children.map((function(e){return r.createElement("li",{key:e.path},r.createElement(a.NavLink,{to:e.path,exact:!0},r.createElement("span",null,e.title)),Boolean("menu"===g.toc&&"undefined"!==typeof window&&e.path===n.pathname&&l)&&r.createElement(h,{slugs:g.slugs}))}))),c&&r.createElement(h,{slugs:g.slugs}))})))))}),y=v;n(72404);function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function b(e,t){return S(e)||k(e,t)||w(e,t)||E()}function E(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function w(e,t){if(e){if("string"===typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(l.push(r.value),t&&l.length===t)break}catch(i){c=!0,a=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw a}}return l}}function S(e){if(Array.isArray(e))return e}var O=function(e,t){var n=t.toLowerCase().indexOf(e.toLowerCase()),a=e.length;return r.createElement(r.Fragment,null,t.substring(0,n),r.createElement("span",{className:"__dumi-default-search-highlight"},t.substring(n,n+a)),t.substring(n+a,t.length))},j=function(){var e=(0,r.useState)(""),t=b(e,2),n=t[0],l=t[1],o=(0,r.useState)([]),c=b(o,2),i=c[0],u=c[1],s=(0,r.useRef)(),m=(0,a.useSearch)(n),f=r.createElement("svg",{className:"__dumi-default-search-empty",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2347",width:"32",height:"32"},r.createElement("path",{d:"M855.6 427.2H168.5c-12.7 0-24.4 6.9-30.6 18L4.4 684.7C1.5 689.9 0 695.8 0 701.8v287.1c0 19.4 15.7 35.1 35.1 35.1H989c19.4 0 35.1-15.7 35.1-35.1V701.8c0-6-1.5-11.8-4.4-17.1L886.2 445.2c-6.2-11.1-17.9-18-30.6-18zM673.4 695.6c-16.5 0-30.8 11.5-34.3 27.7-12.7 58.5-64.8 102.3-127.2 102.3s-114.5-43.8-127.2-102.3c-3.5-16.1-17.8-27.7-34.3-27.7H119c-26.4 0-43.3-28-31.1-51.4l81.7-155.8c6.1-11.6 18-18.8 31.1-18.8h622.4c13 0 25 7.2 31.1 18.8l81.7 155.8c12.2 23.4-4.7 51.4-31.1 51.4H673.4zM819.9 209.5c-1-1.8-2.1-3.7-3.2-5.5-9.8-16.6-31.1-22.2-47.8-12.6L648.5 261c-17 9.8-22.7 31.6-12.6 48.4 0.9 1.4 1.7 2.9 2.5 4.4 9.5 17 31.2 22.8 48 13L807 257.3c16.7-9.7 22.4-31 12.9-47.8zM375.4 261.1L255 191.6c-16.7-9.6-38-4-47.8 12.6-1.1 1.8-2.1 3.6-3.2 5.5-9.5 16.8-3.8 38.1 12.9 47.8L337.3 327c16.9 9.7 38.6 4 48-13.1 0.8-1.5 1.7-2.9 2.5-4.4 10.2-16.8 4.5-38.6-12.4-48.4zM512 239.3h2.5c19.5 0.3 35.5-15.5 35.5-35.1v-139c0-19.3-15.6-34.9-34.8-35.1h-6.4C489.6 30.3 474 46 474 65.2v139c0 19.5 15.9 35.4 35.5 35.1h2.5z"}));return(0,r.useEffect)((function(){Array.isArray(m)?u(m):"function"===typeof m&&m(".".concat(s.current.className))}),[m]),r.createElement("div",{className:"__dumi-default-search"},r.createElement("input",g({className:"__dumi-default-search-input",type:"search",ref:s},Array.isArray(m)?{value:n,onChange:function(e){return l(e.target.value)}}:{})),r.createElement("ul",null,i.length>0&&i.map((function(e){var t;return r.createElement("li",{key:e.path,onClick:function(){return l("")}},r.createElement(a.AnchorLink,{to:e.path},(null===(t=e.parent)||void 0===t?void 0:t.title)&&r.createElement("span",null,e.parent.title),O(n,e.title)))})),0===i.length&&n&&r.createElement("li",{style:{textAlign:"center"}},f)))};n(88492);function x(e,t){return C(e)||M(e,t)||N(e,t)||A()}function A(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function N(e,t){if(e){if("string"===typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function M(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(l.push(r.value),t&&l.length===t)break}catch(i){c=!0,a=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw a}}return l}}function C(e){if(Array.isArray(e))return e}var P=function(e){var t=e.darkSwitch,n=e.onDarkSwitchClick,l=e.isSideMenu,o=["dark","light","auto"],c=(0,a.usePrefersColor)(),i=x(c,2),u=i[0],s=i[1],m=u,f=r.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4026",width:"22",height:"22"},r.createElement("path",{d:"M915.2 476.16h-43.968c-24.704 0-44.736 16-44.736 35.84s20.032 35.904 44.736 35.904H915.2c24.768 0 44.8-16.064 44.8-35.904s-20.032-35.84-44.8-35.84zM512 265.6c-136.704 0-246.464 109.824-246.464 246.4 0 136.704 109.76 246.464 246.464 246.464S758.4 648.704 758.4 512c0-136.576-109.696-246.4-246.4-246.4z m0 425.6c-99.008 0-179.2-80.128-179.2-179.2 0-98.944 80.192-179.2 179.2-179.2S691.2 413.056 691.2 512c0 99.072-80.192 179.2-179.2 179.2zM197.44 512c0-19.84-19.136-35.84-43.904-35.84H108.8c-24.768 0-44.8 16-44.8 35.84s20.032 35.904 44.8 35.904h44.736c24.768 0 43.904-16.064 43.904-35.904zM512 198.464c19.776 0 35.84-20.032 35.84-44.8v-44.8C547.84 84.032 531.84 64 512 64s-35.904 20.032-35.904 44.8v44.8c0 24.768 16.128 44.864 35.904 44.864z m0 627.136c-19.776 0-35.904 20.032-35.904 44.8v44.736C476.096 940.032 492.16 960 512 960s35.84-20.032 35.84-44.8v-44.736c0-24.768-16.064-44.864-35.84-44.864z m329.92-592.832c17.472-17.536 20.288-43.072 6.4-57.024-14.016-14.016-39.488-11.2-57.024 6.336-4.736 4.864-26.496 26.496-31.36 31.36-17.472 17.472-20.288 43.008-6.336 57.024 13.952 14.016 39.488 11.2 57.024-6.336 4.8-4.864 26.496-26.56 31.296-31.36zM213.376 759.936c-4.864 4.8-26.56 26.624-31.36 31.36-17.472 17.472-20.288 42.944-6.4 56.96 14.016 13.952 39.552 11.2 57.024-6.336 4.8-4.736 26.56-26.496 31.36-31.36 17.472-17.472 20.288-43.008 6.336-56.96-14.016-13.952-39.552-11.072-56.96 6.336z m19.328-577.92c-17.536-17.536-43.008-20.352-57.024-6.336-14.08 14.016-11.136 39.488 6.336 57.024 4.864 4.864 26.496 26.56 31.36 31.424 17.536 17.408 43.008 20.288 56.96 6.336 14.016-14.016 11.264-39.488-6.336-57.024-4.736-4.864-26.496-26.56-31.296-31.424z m527.168 628.608c4.864 4.864 26.624 26.624 31.36 31.424 17.536 17.408 43.072 20.224 57.088 6.336 13.952-14.016 11.072-39.552-6.4-57.024-4.864-4.8-26.56-26.496-31.36-31.36-17.472-17.408-43.072-20.288-57.024-6.336-13.952 14.016-11.008 39.488 6.336 56.96z","p-id":"4027"})),d=r.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3854",width:"22",height:"22"},r.createElement("path",{d:"M991.816611 674.909091a69.166545 69.166545 0 0 0-51.665455-23.272727 70.795636 70.795636 0 0 0-27.438545 5.585454A415.674182 415.674182 0 0 1 754.993338 698.181818c-209.594182 0-393.472-184.785455-393.472-395.636363 0-52.363636 38.539636-119.621818 69.515637-173.614546 4.887273-8.610909 9.634909-16.756364 14.103272-24.901818A69.818182 69.818182 0 0 0 384.631156 0a70.842182 70.842182 0 0 0-27.438545 5.585455C161.678429 90.298182 14.362065 307.898182 14.362065 512c0 282.298182 238.824727 512 532.38691 512a522.286545 522.286545 0 0 0 453.957818-268.334545A69.818182 69.818182 0 0 0 991.816611 674.909091zM546.679156 954.181818c-248.785455 0-462.941091-192-462.941091-442.181818 0-186.647273 140.637091-372.829091 300.939637-442.181818-36.817455 65.629091-92.578909 151.970909-92.578909 232.727273 0 250.181818 214.109091 465.454545 462.917818 465.454545a488.331636 488.331636 0 0 0 185.181091-46.545455 453.003636 453.003636 0 0 1-393.565091 232.727273z m103.656728-669.323636l-14.266182 83.781818a34.909091 34.909091 0 0 0 50.362182 36.770909l74.775272-39.563636 74.752 39.563636a36.142545 36.142545 0 0 0 16.174546 3.956364 34.909091 34.909091 0 0 0 34.210909-40.727273l-14.289455-83.781818 60.509091-59.345455a35.025455 35.025455 0 0 0-19.223272-59.578182l-83.61891-12.101818-37.376-76.101818a34.56 34.56 0 0 0-62.254545 0l-37.376 76.101818-83.618909 12.101818a34.909091 34.909091 0 0 0-19.246546 59.578182z m70.423272-64.698182a34.280727 34.280727 0 0 0 26.135273-19.083636l14.312727-29.090909 14.336 29.090909a34.257455 34.257455 0 0 0 26.135273 19.083636l32.046546 4.887273-23.272728 22.574545a35.234909 35.234909 0 0 0-10.007272 30.952727l5.46909 32.116364-28.625454-15.127273a34.490182 34.490182 0 0 0-32.302546 0l-28.695272 15.127273 5.469091-32.116364a35.141818 35.141818 0 0 0-9.984-30.952727l-23.272728-22.574545z","p-id":"3855"})),p=r.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"11002",width:"22",height:"22"},r.createElement("path",{d:"M127.658667 492.885333c0-51.882667 10.24-101.717333 30.378666-149.162666s47.786667-88.064 81.92-122.538667 75.093333-61.781333 122.538667-81.92 96.938667-30.378667 149.162667-30.378667 101.717333 10.24 149.162666 30.378667 88.405333 47.786667 122.88 81.92 61.781333 75.093333 81.92 122.538667 30.378667 96.938667 30.378667 149.162666-10.24 101.717333-30.378667 149.162667-47.786667 88.405333-81.92 122.88-75.093333 61.781333-122.88 81.92-97.28 30.378667-149.162666 30.378667-101.717333-10.24-149.162667-30.378667-88.064-47.786667-122.538667-81.92-61.781333-75.093333-81.92-122.88-30.378667-96.938667-30.378666-149.162667z m329.045333 0c0 130.048 13.994667 244.394667 41.984 343.381334h12.970667c46.762667 0 91.136-9.216 133.461333-27.306667s78.848-42.666667 109.568-73.386667 54.954667-67.242667 73.386667-109.568 27.306667-86.698667 27.306666-133.461333c0-46.421333-9.216-90.794667-27.306666-133.12s-42.666667-78.848-73.386667-109.568-67.242667-54.954667-109.568-73.386667-86.698667-27.306667-133.461333-27.306666h-11.605334c-28.672 123.562667-43.349333 237.909333-43.349333 343.722666z","p-id":"11003"})),h=o.filter((function(e){return e!==m})),v=function(e,t){!l&&n&&n(e),t!==m&&s(t)},y=function(e){switch(e){case"dark":return r.createElement("button",{key:"dumi-dark-btn-moon",title:"Dark theme",onClick:function(t){return v(t,e)},className:"__dumi-default-dark-moon ".concat(e===m?"__dumi-default-dark-switch-active":"")},d);case"light":return r.createElement("button",{key:"dumi-dark-btn-sun",title:"Light theme",onClick:function(t){return v(t,e)},className:"__dumi-default-dark-sun ".concat(e===m?"__dumi-default-dark-switch-active":"")},f);case"auto":return r.createElement("button",{key:"dumi-dark-btn-auto",title:"Default to system",onClick:function(t){return v(t,e)},className:"__dumi-default-dark-auto ".concat(e===m?"__dumi-default-dark-switch-active":"")},p);default:}};return r.createElement("div",{className:"__dumi-default-dark"},r.createElement("div",{className:"__dumi-default-dark-switch ".concat(!l&&t?"__dumi-default-dark-switch-open":"")},l?o.map((function(e){return y(e)})):y(m)),!l&&t&&r.createElement("div",{className:"__dumi-default-dark-switch-list"},h.map((function(e){return y(e)}))))},z=P;n(30956);function I(e,t){return T(e)||H(e,t)||B(e,t)||$()}function $(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function B(e,t){if(e){if("string"===typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function H(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(l.push(r.value),t&&l.length===t)break}catch(i){c=!0,a=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw a}}return l}}function T(e){if(Array.isArray(e))return e}var R=function(e){return r.createElement(r.Fragment,null,r.createElement("div",{className:"__dumi-default-layout-hero"},e.image&&r.createElement("img",{src:e.image}),r.createElement("h1",null,e.title),r.createElement("div",{dangerouslySetInnerHTML:{__html:e.desc}}),e.actions&&e.actions.map((function(e){return r.createElement(a.Link,{to:e.link,key:e.text},r.createElement("button",{type:"button"},e.text))}))))},U=function(e){return r.createElement("div",{className:"__dumi-default-layout-features"},e.map((function(e){return r.createElement("dl",{key:e.title,style:{backgroundImage:e.icon?"url(".concat(e.icon,")"):void 0}},e.link?r.createElement(a.Link,{to:e.link},r.createElement("dt",null,e.title)):r.createElement("dt",null,e.title),r.createElement("dd",{dangerouslySetInnerHTML:{__html:e.desc}}))})))},W=function(e){var t,n,l=e.children,o=e.location,c=(0,r.useContext)(a.context),i=c.config,s=i.mode,m=i.repository,f=(c.nav,c.meta),d=c.locale,p=m.url,v=m.branch,g=m.platform,b=(0,r.useState)(!0),E=I(b,2),w=E[0],_=E[1],k=(0,r.useState)(!1),S=I(k,2),O=S[0],x=S[1],A="site"===s,N=A&&f.hero,L=A&&f.features,M=!1!==f.sidemenu&&!N&&!L&&!f.gapless,C=!N&&!L&&Boolean(null===(t=f.slugs)||void 0===t?void 0:t.length)&&("content"===f.toc||void 0===f.toc)&&!f.gapless,P=/^zh|cn$/i.test(d),$=new Date(f.updatedTime),B="".concat($.toLocaleDateString([],{hour12:!1})," ").concat($.toLocaleTimeString([],{hour12:!1})),D={github:"GitHub",gitlab:"GitLab"}[(null===(n=(p||"").match(/(github|gitlab)/))||void 0===n?void 0:n[1])||"nothing"]||g;return r.createElement("div",{className:"__dumi-default-layout","data-route":o.pathname,"data-show-sidemenu":String(M),"data-show-slugs":String(C),"data-site-mode":A,"data-gapless":String(!!f.gapless),onClick:function(){x(!1),w||_(!0)}},r.createElement(u,{location:o,navPrefix:r.createElement(j,null),darkPrefix:r.createElement(z,{darkSwitch:O,onDarkSwitchClick:function(e){x((function(e){return!e})),e.stopPropagation()},isSideMenu:!1}),onMobileMenuClick:function(e){_((function(e){return!e})),e.stopPropagation()}}),r.createElement(y,{darkPrefix:r.createElement(z,{darkSwitch:O,isSideMenu:!0}),mobileMenuCollapsed:w,location:o}),C&&r.createElement(h,{slugs:f.slugs,className:"__dumi-default-layout-toc"}),N&&R(f.hero),L&&U(f.features),r.createElement("div",{className:"__dumi-default-layout-content"},l,!N&&!L&&f.filePath&&!f.gapless&&r.createElement("div",{className:"__dumi-default-layout-footer-meta"},D&&r.createElement(a.Link,{to:"".concat(p,"/edit/").concat(v,"/").concat(f.filePath)},P?"\u5728 ".concat(D," \u4e0a\u7f16\u8f91\u6b64\u9875"):"Edit this doc on ".concat(D)),r.createElement("span",{"data-updated-text":P?"\u6700\u540e\u66f4\u65b0\u65f6\u95f4\uff1a":"Last update: "},B)),(N||L)&&f.footer&&r.createElement("div",{className:"__dumi-default-layout-footer",dangerouslySetInnerHTML:{__html:f.footer}})))},Z=W}}]);