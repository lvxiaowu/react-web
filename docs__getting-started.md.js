(self["webpackChunk_sd_react_web"]=self["webpackChunk_sd_react_web"]||[]).push([[906],{9959:function(e,n,t){"use strict";t.r(n);var l=t(67294),a=t(96089),r=t(65659),c=l.memo((e=>{e.demos;return l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"\u5feb\u901f\u4e0a\u624b"},l.createElement(a.AnchorLink,{to:"#\u5feb\u901f\u4e0a\u624b","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u5feb\u901f\u4e0a\u624b"),l.createElement("h2",{id:"\u5b89\u88c5"},l.createElement(a.AnchorLink,{to:"#\u5b89\u88c5","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u5b89\u88c5"),l.createElement("p",null,l.createElement("strong",null,"\u4f7f\u7528 npm \u6216 yarn \u5b89\u88c5")),l.createElement(r.Z,{code:"npm install @sd/react-web",lang:"shell"}),l.createElement(r.Z,{code:"yarn add @sd/react-web",lang:"shell"}),l.createElement("h2",{id:"\u793a\u4f8b"},l.createElement(a.AnchorLink,{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),l.createElement(r.Z,{code:"import Alert from '@sd/react-web/es/alert'; // \u624b\u52a8\u6309\u9700\u52a0\u8f7d js\nimport '@sd/react-web/es/alert/style'; // \u624b\u52a8\u6309\u9700\u52a0\u8f7d less\n\nReactDOM.render(<Alert kind=\"warning\">\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u63d0\u793a</Alert>, mountNode);",lang:"js"}),l.createElement("h3",{id:"\u81ea\u52a8\u6309\u9700\u52a0\u8f7d"},l.createElement(a.AnchorLink,{to:"#\u81ea\u52a8\u6309\u9700\u52a0\u8f7d","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u81ea\u52a8\u6309\u9700\u52a0\u8f7d"),l.createElement("p",null,"\u4f7f\u7528 ",l.createElement(a.Link,{to:"https://www.npmjs.com/package/babel-plugin-import"},"babel-plugin-import ")," \u4f18\u5316\u5f15\u5165\u65b9\u5f0f\uff0c\u5982\u4e0b\uff1a"),l.createElement(r.Z,{code:"import { Alert } from '@sd/react-web'; // \u4e0e\u4e0a\u8ff0\u793a\u4f8b\u7b49\u4ef7\n\nReactDOM.render(<Alert kind=\"warning\">\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u63d0\u793a</Alert>, mountNode);",lang:"js"}),l.createElement("p",null,"\u5b89\u88c5 ",l.createElement("code",null,"babel-plugin-import")),l.createElement(r.Z,{code:"yarn add babel-plugin-import --dev",lang:"unknown"}),l.createElement("p",null,"\u914d\u7f6e",l.createElement("code",null,".babelrc")," \u6216 ",l.createElement("code",null,"babel-loader")),l.createElement(r.Z,{code:'{\n  "plugins": [\n    [\n      "import",\n      {\n        "libraryName": "@sd/react-web",\n        "libraryDirectory": "esm", // default: lib\n        "style": true // or \'css\'\n      }\n    ]\n  ]\n}',lang:"json"})))}));n["default"]=e=>{var n=l.useContext(a.context),t=n.demos;return l.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(c,{demos:t})}}}]);