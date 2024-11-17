"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6650],{8345:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"API Reference/unofficial-pf-v5-wc/pfbutton/pfbutton","title":"pfbutton","description":"PfButton class","source":"@site/docs/API Reference/unofficial-pf-v5-wc/pfbutton/pfbutton.md","sourceDirName":"API Reference/unofficial-pf-v5-wc/pfbutton","slug":"/API Reference/unofficial-pf-v5-wc/pfbutton/","permalink":"/pf-wc.io/docs/API Reference/unofficial-pf-v5-wc/pfbutton/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API Reference/unofficial-pf-v5-wc/pfbutton/pfbutton.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"readed","permalink":"/pf-wc.io/docs/API Reference/unofficial-pf-v5-wc/pfbadge/readed"},"next":{"title":"attributechangedcallback","permalink":"/pf-wc.io/docs/API Reference/unofficial-pf-v5-wc/pfbutton/attributechangedcallback"}}');var t=n(4848),d=n(8453);const i={},c=void 0,l={},h=[{value:"PfButton class",id:"pfbutton-class",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function x(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"pfbutton-class",children:"PfButton class"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"export declare class PfButton extends PfWebComponent \n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Extends:"})," ",(0,t.jsx)(s.a,{href:"./pfwebcomponent",children:"PfWebComponent"})]}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Property"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./danger",children:"danger"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:'"true" | "false" | null'})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./disabled",children:"disabled"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:'"true" | "false" | null'})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./isdanger",children:"isDanger"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"boolean"})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./isdisabled",children:"isDisabled"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"boolean"})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./isprimary",children:"isPrimary"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"boolean"})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./issecondary",children:"isSecondary"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"boolean"})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./istertiary",children:"isTertiary"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"boolean"})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./iswarning",children:"isWarning"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"boolean"})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./primary",children:"primary"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:'"true" | "false" | null'})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./secondary",children:"secondary"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:'"true" | "false" | null'})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./tertiary",children:"tertiary"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:'"true" | "false" | null'})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./warning",children:"warning"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:'"true" | "false" | null'})}),(0,t.jsx)("td",{})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Method"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./attributechangedcallback",children:"attributeChangedCallback(name, oldValue, newValue)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"./connectedcallback",children:"connectedCallback()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var r=n(6540);const t={},d=r.createContext(t);function i(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);