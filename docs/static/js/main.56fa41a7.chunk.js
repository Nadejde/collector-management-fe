(this["webpackJsonpmanagement-fe"]=this["webpackJsonpmanagement-fe"]||[]).push([[0],{79:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var c=n(6),a=n(0),r=n.n(a),s=n(10),i=n.n(s),j=(n(79),n(39)),o=n(11),l=n(50),b=n(51),d=n(140),h=n(139),O=n(134),x=n(148),u=n(147),p=n(142),m=n(52),f=n.n(m),v=n(136),w=n(87),g=n(137),k=n(138),y=n(64),C=n.n(y),N=n(141),S=n(53),B=n(131),P=n(13),F=240,U=Object(B.a)((function(e){return{root:{display:"flex"},drawer:Object(b.a)({},e.breakpoints.up("sm"),{width:F,flexShrink:0}),appBar:Object(b.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(F,"px)"),marginLeft:F}),menuButton:Object(b.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:F},content:{flexGrow:1,padding:e.spacing(3)}}}));var A=function(e){var t=e.window,n=e.children,a=U(),s=Object(P.a)(),i=r.a.useState(!1),o=Object(l.a)(i,2),b=o[0],m=o[1],y=function(){m(!b)},B=Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:a.toolbar}),Object(c.jsx)(O.a,{}),Object(c.jsxs)(v.a,{children:[Object(c.jsx)(j.b,{to:"/",children:Object(c.jsxs)(w.a,{button:!0,children:[Object(c.jsx)(g.a,{children:Object(c.jsx)(f.a,{})}),Object(c.jsx)(k.a,{primary:"Card Scanner"})]},"Card Scanner")}),Object(c.jsx)(j.b,{to:"/about",children:Object(c.jsxs)(w.a,{button:!0,children:[Object(c.jsx)(g.a,{children:Object(c.jsx)(f.a,{})}),Object(c.jsx)(k.a,{primary:"About"})]},"About")}),Object(c.jsx)(j.b,{to:"/users",children:Object(c.jsxs)(w.a,{button:!0,children:[Object(c.jsx)(g.a,{children:Object(c.jsx)(f.a,{})}),Object(c.jsx)(k.a,{primary:"Users"})]},"Users")})]})]}),F=void 0!==t?function(){return t().document.body}:void 0;return Object(c.jsxs)("div",{className:a.root,children:[Object(c.jsx)(h.a,{}),Object(c.jsx)(d.a,{position:"fixed",className:a.appBar,children:Object(c.jsxs)(N.a,{children:[Object(c.jsx)(p.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:y,className:a.menuButton,children:Object(c.jsx)(C.a,{})}),Object(c.jsx)(S.a,{variant:"h6",noWrap:!0,children:"Responsive drawer"})]})}),Object(c.jsxs)("nav",{className:a.drawer,"aria-label":"mailbox folders",children:[Object(c.jsx)(u.a,{smUp:!0,implementation:"css",children:Object(c.jsx)(x.a,{container:F,variant:"temporary",anchor:"rtl"===s.direction?"right":"left",open:b,onClose:y,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0},children:B})}),Object(c.jsx)(u.a,{xsDown:!0,implementation:"css",children:Object(c.jsx)(x.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0,children:B})})]}),Object(c.jsxs)("main",{className:a.content,children:[Object(c.jsx)("div",{className:a.toolbar}),n]})]})},I=n(149),L=n(144),M=n(143),D=n(145);var E=function(e){e.window,e.children;var t=Object(a.useState)([]),n=Object(l.a)(t,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){fetch("https://nadejde-collector-api.azurewebsites.net/api/collections").then((function(e){return e.json()})).then((function(e){s(e),console.log(e),console.log(r)}))}),[]),Object(c.jsx)("div",{children:Object(c.jsxs)(M.a,{children:[Object(c.jsx)(I.a,{id:"demo-simple-select-label",children:"Collection"}),Object(c.jsx)(D.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",children:r.map((function(e){return Object(c.jsx)(L.a,{value:e.id,children:e.name})}))})]})})};function J(){return Object(c.jsx)(j.a,{children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/about",children:Object(c.jsx)(T,{})}),Object(c.jsx)(o.a,{path:"/users",children:Object(c.jsx)(z,{})}),Object(c.jsx)(o.a,{path:"/",children:Object(c.jsx)(R,{})})]})})}function R(){return Object(c.jsx)(A,{children:Object(c.jsx)(E,{})})}function T(){return Object(c.jsx)("h2",{children:"About"})}function z(){return Object(c.jsx)("h2",{children:"Users"})}var G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,151)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(J,{})}),document.getElementById("root")),G()}},[[86,1,2]]]);
//# sourceMappingURL=main.56fa41a7.chunk.js.map