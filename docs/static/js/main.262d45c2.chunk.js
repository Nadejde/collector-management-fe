(this["webpackJsonpmanagement-fe"]=this["webpackJsonpmanagement-fe"]||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n(0),s=n.n(c),i=n(10),r=n.n(i),o=(n(96),n(41)),l=n(11),j=n(75),b=n(55),d=n(156),u=n(155),h=n(150),O=n(166),x=n(165),p=n(158),m=n(56),f=n.n(m),g=n(152),v=n(106),w=n(153),y=n(154),C=n(71),N=n.n(C),S=n(157),k=n(57),P=n(147),B=n(13),F=240,A=Object(P.a)((function(e){return{root:{display:"flex"},drawer:Object(b.a)({},e.breakpoints.up("sm"),{width:F,flexShrink:0}),appBar:Object(b.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(F,"px)"),marginLeft:F}),menuButton:Object(b.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:F},content:{flexGrow:1,padding:e.spacing(3)}}}));var M=function(e){var t=e.window,n=e.children,c=A(),i=Object(B.a)(),r=s.a.useState(!1),l=Object(j.a)(r,2),b=l[0],m=l[1],C=function(){m(!b)},P=Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:c.toolbar}),Object(a.jsx)(h.a,{}),Object(a.jsxs)(g.a,{children:[Object(a.jsx)(o.b,{to:"/",children:Object(a.jsxs)(v.a,{button:!0,children:[Object(a.jsx)(w.a,{children:Object(a.jsx)(f.a,{})}),Object(a.jsx)(y.a,{primary:"Card Scanner"})]},"Card Scanner")}),Object(a.jsx)(o.b,{to:"/about",children:Object(a.jsxs)(v.a,{button:!0,children:[Object(a.jsx)(w.a,{children:Object(a.jsx)(f.a,{})}),Object(a.jsx)(y.a,{primary:"About"})]},"About")}),Object(a.jsx)(o.b,{to:"/users",children:Object(a.jsxs)(v.a,{button:!0,children:[Object(a.jsx)(w.a,{children:Object(a.jsx)(f.a,{})}),Object(a.jsx)(y.a,{primary:"Users"})]},"Users")})]})]}),F=void 0!==t?function(){return t().document.body}:void 0;return Object(a.jsxs)("div",{className:c.root,children:[Object(a.jsx)(u.a,{}),Object(a.jsx)(d.a,{position:"fixed",className:c.appBar,children:Object(a.jsxs)(S.a,{children:[Object(a.jsx)(p.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:C,className:c.menuButton,children:Object(a.jsx)(N.a,{})}),Object(a.jsx)(k.a,{variant:"h6",noWrap:!0,children:"Responsive drawer"})]})}),Object(a.jsxs)("nav",{className:c.drawer,"aria-label":"mailbox folders",children:[Object(a.jsx)(x.a,{smUp:!0,implementation:"css",children:Object(a.jsx)(O.a,{container:F,variant:"temporary",anchor:"rtl"===i.direction?"right":"left",open:b,onClose:C,classes:{paper:c.drawerPaper},ModalProps:{keepMounted:!0},children:P})}),Object(a.jsx)(x.a,{xsDown:!0,implementation:"css",children:Object(a.jsx)(O.a,{classes:{paper:c.drawerPaper},variant:"permanent",open:!0,children:P})})]}),Object(a.jsxs)("main",{className:c.content,children:[Object(a.jsx)("div",{className:c.toolbar}),n]})]})},D=n(64),I=n(72),U=n(73),z=n(76),L=n(74),T=n(167),E=n(162),J=n(159),R=n(163),W=n(37),G=n(38),_=function(){return Object(a.jsx)("div",{className:"spinner fadein",children:Object(a.jsx)(W.a,{icon:G.a,size:"5x",color:"#3B5998"})})},q=function(e){return Object(a.jsx)("div",{className:"buttons fadein",children:Object(a.jsxs)("div",{className:"button",children:[Object(a.jsx)("label",{htmlFor:"multi",children:Object(a.jsx)(W.a,{icon:G.b,color:"#6d84b4",size:"10x"})}),Object(a.jsx)("input",{type:"file",id:"multi",onChange:e.onChange,multiple:!0})]})})},H=n(168),K=function(e){Object(z.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(I.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={uploading:!1,images:[],collections:[],numbers:[]},e.onChange=function(t){var n=Array.from(t.target.files);e.setState({uploading:!0});var a=new FormData;n.forEach((function(e,t){a.append(t,e)})),fetch("http://localhost:7071/api/collections/Panini - Football 2020/detect-numbers",{method:"POST",body:a}).then((function(e){return e.json()})).then((function(t){e.setState({uploading:!1,numbers:[].concat(Object(D.a)(e.state.numbers),Object(D.a)(t))})}))},e.removeImage=function(t){e.setState({images:e.state.images.filter((function(e){return e.public_id!==t}))})},e}return Object(U.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://nadejde-collector-api.azurewebsites.net/api/collections").then((function(e){return e.json()})).then((function(t){e.setState({images:t}),console.log(t)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.uploading,c=(t.images,t.numbers),s=t.collections;return Object(a.jsxs)("div",{children:[Object(a.jsxs)(J.a,{children:[Object(a.jsx)(T.a,{id:"demo-simple-select-label",children:"Collection"}),Object(a.jsx)(R.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",children:s.map((function(e){return Object(a.jsx)(E.a,{value:e.id,children:e.name})}))})]}),Object(a.jsx)("div",{className:"buttons",children:function(){switch(!0){case n:return Object(a.jsx)(_,{});default:return Object(a.jsx)(q,{onChange:e.onChange})}}()}),Object(a.jsx)(H.a,{id:"standard-multiline-flexible",label:"Multiline",multiline:!0,fullWidth:!0,value:c})]})}}]),n}(c.Component);function Q(){return Object(a.jsx)(o.a,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/about",children:Object(a.jsx)(X,{})}),Object(a.jsx)(l.a,{path:"/users",children:Object(a.jsx)(Y,{})}),Object(a.jsx)(l.a,{path:"/",children:Object(a.jsx)(V,{})})]})})}function V(){return Object(a.jsx)(M,{children:Object(a.jsx)(K,{})})}function X(){return Object(a.jsx)("h2",{children:"About"})}function Y(){return Object(a.jsx)("h2",{children:"Users"})}var Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,171)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(Q,{})}),document.getElementById("root")),Z()},96:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.262d45c2.chunk.js.map