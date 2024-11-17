"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9956],{9166:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"API Reference/unofficial-pf-v5-wc/pfalert/pfalert","title":"pfalert","description":"PfAlert class","source":"@site/docs/API Reference/unofficial-pf-v5-wc/pfalert/pfalert.md","sourceDirName":"API Reference/unofficial-pf-v5-wc/pfalert","slug":"/API Reference/unofficial-pf-v5-wc/pfalert/","permalink":"/pf-wc.io/docs/API Reference/unofficial-pf-v5-wc/pfalert/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API Reference/unofficial-pf-v5-wc/pfalert/pfalert.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"pfactionlistitem","permalink":"/pf-wc.io/docs/API Reference/unofficial-pf-v5-wc/pfactionlistitem"},"next":{"title":"attributechangedcallback","permalink":"/pf-wc.io/docs/API Reference/unofficial-pf-v5-wc/pfalert/attributechangedcallback"}}');var t=r(4848),c=r(8453);const i={},l=void 0,d={},h=[{value:"PfAlert class",id:"pfalert-class",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function a(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"pfalert-class",children:"PfAlert class"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"export declare class PfAlert extends PfWebComponent \n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Extends:"})," ",(0,t.jsx)(s.a,{href:"./pfwebcomponent",children:"PfWebComponent"})]}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Property"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./custom",children:"custom"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:'"true" | "false" | null'})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./danger",children:"danger"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:'"true" | "false" | null'})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./info",children:"info"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:'"true" | "false" | null'})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./iscustom",children:"isCustom"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"boolean"})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./isdanger",children:"isDanger"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"boolean"})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./isinfo",children:"isInfo"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"boolean"})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./issuccess",children:"isSuccess"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"boolean"})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./iswarning",children:"isWarning"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"boolean"})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./success",children:"success"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:'"true" | "false" | null'})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./warning",children:"warning"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:'"true" | "false" | null'})}),(0,t.jsx)("td",{})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Method"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Description"})})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./attributechangedcallback",children:"attributeChangedCallback(name, oldValue, newValue)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{})]})})]})]})}function x(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>l});var n=r(6540);const t={},c=n.createContext(t);function i(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);