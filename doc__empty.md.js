(self["webpackChunk_sd_react_web"]=self["webpackChunk_sd_react_web"]||[]).push([[484],{22231:function(e,t,n){"use strict";n.d(t,{m:function(){return r.m}});var r=n(9684);n(72255)},43207:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(67294),a=n(96089),l={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}},c=function(e){var t=e.identifier,n=e.export,c=(0,a.useApiData)(t),i=(0,r.useContext)(a.context),m=i.locale,o=/^zh|cn$/i.test(m)?l["zh-CN"]:l["en-US"];return r.createElement(r.Fragment,null,c&&r.createElement("table",{style:{marginTop:24}},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,o.name),r.createElement("th",null,o.description),r.createElement("th",null,o.type),r.createElement("th",null,o.default))),r.createElement("tbody",null,c[n].map((function(e){return r.createElement("tr",{key:e.identifier},r.createElement("td",null,e.identifier),r.createElement("td",null,e.description||"--"),r.createElement("td",null,r.createElement("code",null,e.type)),r.createElement("td",null,r.createElement("code",null,e.default||e.required&&o.required||"--")))})))))},i=n(4214),m=r.memo((e=>{var t=e.demos,n=t["empty-demo"].component;return r.createElement(r.Fragment,null,r.createElement(r.Fragment,null,r.createElement("div",{className:"markdown"},r.createElement("h1",{id:"empty-\u7a7a\u7684"},r.createElement(a.AnchorLink,{to:"#empty-\u7a7a\u7684","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"Empty \u7a7a\u7684"),r.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.createElement(a.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.createElement("h3",{id:"\u57fa\u672c\u7528\u6cd5"},r.createElement(a.AnchorLink,{to:"#\u57fa\u672c\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7528\u6cd5")),r.createElement(i.default,t["empty-demo"].previewerProps,r.createElement(n,null)),r.createElement("div",{className:"markdown"},r.createElement("h2",{id:"api"},r.createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"API"),r.createElement(c,{src:"../../components/empty/index.tsx",identifier:"empty",export:"default"}))))})),o=e=>{var t=r.useContext(a.context),n=t.demos;return r.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.createElement(m,{demos:n})}}}]);