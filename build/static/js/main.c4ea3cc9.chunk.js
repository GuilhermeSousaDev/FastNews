(this["webpackJsonparanea-tec"]=this["webpackJsonparanea-tec"]||[]).push([[0],{24:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(18),a=c.n(s),i=(c(24),c(4)),j=c(10),l=c(0);var u=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],r=t[1];return Object(l.jsxs)("nav",{children:[Object(l.jsx)("h1",{children:"Sneecss"}),Object(l.jsx)(j.b,{to:"/",children:"Tecnologia"}),Object(l.jsx)(j.b,{to:"/politic",children:"IBGE"}),Object(l.jsxs)("div",{onClick:function(){r(!c)},style:{cursor:"pointer"},children:["M\xfasica",c?Object(l.jsxs)("div",{className:"link",children:[Object(l.jsx)(j.b,{to:"/music",children:"Principais Noticias"}),Object(l.jsx)(j.b,{to:"/artist",children:"Artistas"})]}):""]})]})},b=c(7),o=c.n(b),h=c(9);var d=function(e){var t=e.list;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"list-api",children:[Object(l.jsxs)("li",{style:{padding:"20px 10px",listStyleType:"none"},children:[Object(l.jsx)("a",{href:t.url,target:"_blank",children:t.title}),Object(l.jsx)("br",{}),Object(l.jsxs)("strong",{children:["Autor: ",t.author]})]}),Object(l.jsx)("button",{children:Object(l.jsx)("a",{style:{color:"#000"},href:t.url,target:"_blank",children:"Ver"})})]})})};var x=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),a=Object(i.a)(s,2),j=a[0],u=a[1];return Object(n.useEffect)(Object(h.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://hn.algolia.com/api/v1/search?query="+j);case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.next=8,setTimeout((function(){return r(c.hits)}),1e3);case 8:case"end":return e.stop()}}),e)}))),[j]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"search",children:Object(l.jsx)("input",{type:"text",placeholder:"O que Procura?",onChange:function(e){return u(e.target.value)}})}),Object(l.jsx)("div",{children:Object(l.jsx)(l.Fragment,{children:c.length?c.map((function(e){return Object(l.jsx)(d,{list:e},e.id)})):Object(l.jsx)("p",{children:"Carregando..."})})})]})};var O=function(e){var t=e.music;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"list-api",children:[Object(l.jsxs)("li",{style:{padding:"20px 10px",listStyleType:"none"},children:[Object(l.jsx)("a",{href:t.url,target:"_blank",children:t.headline}),Object(l.jsx)("br",{}),Object(l.jsxs)("h4",{children:["Not\xedcia: ",t.kicker]}),Object(l.jsxs)("h4",{children:["Tema: ",t.featured]}),Object(l.jsxs)("strong",{children:["Data: ",t.inserted]})]}),Object(l.jsx)("button",{children:Object(l.jsx)("a",{style:{color:"#000"},href:t.url,target:"_blank",children:"Ver"})})]})})};var p=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)(Object(h.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.vagalume.com.br/news/index.js");case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.next=8,setTimeout((function(){return r(c.news)}),1e3);case 8:console.log(c.news);case 9:case"end":return e.stop()}}),e)}))),[]),Object(l.jsx)("div",{children:c.length?c.map((function(e){return Object(l.jsx)(O,{music:e},e.id)})):Object(l.jsx)("p",{children:"Carregando..."})})};var f=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=(t[0],t[1],Object(n.useState)("")),r=Object(i.a)(c,2),s=(r[0],r[1]);return Object(n.useEffect)(Object(h.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"660a4395f992ff67786584e238f501aa",e.next=3,fetch("api.vagalume.com.br/hotspots.php?apikey=".concat("660a4395f992ff67786584e238f501aa"));case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,console.log(c);case 8:case"end":return e.stop()}}),e)}))),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"list-api",children:Object(l.jsx)("input",{type:"text",onChange:function(e){return s(e.target.value)}})})})};var v=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),a=Object(i.a)(s,2),j=a[0],u=a[1];return Object(n.useEffect)(Object(h.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://servicodados.ibge.gov.br/api/v3/noticias/?qtd=3/?busca="+j);case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.next=8,setTimeout((function(){return r(c.items)}),1e3);case 8:case"end":return e.stop()}}),e)}))),[j]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"search",children:Object(l.jsx)("input",{type:"text",placeholder:"O que Procura?",onChange:function(e){return u(e.target.value)}})}),Object(l.jsx)("div",{children:Object(l.jsx)(l.Fragment,{children:c.length?c.map((function(e){return Object(l.jsxs)("div",{className:"list-api",children:[Object(l.jsxs)("li",{style:{padding:"20px 10px",listStyleType:"none"},children:[Object(l.jsx)("a",{href:e.link,target:"_blank",children:e.titulo}),Object(l.jsx)("br",{}),Object(l.jsxs)("strong",{children:[e.tipo,": ",e.introducao]})]}),Object(l.jsx)("button",{children:Object(l.jsx)("a",{style:{color:"#000"},href:e.link,children:"Ver"})})]},e.id)})):Object(l.jsx)("p",{children:"Carregando..."})})})]})},g=c(2);var m=function(){return Object(l.jsxs)(j.a,{children:[Object(l.jsx)(u,{}),Object(l.jsxs)(g.c,{children:[Object(l.jsx)(g.a,{exact:!0,path:"/",children:Object(l.jsx)(x,{})}),Object(l.jsx)(g.a,{path:"/music",children:Object(l.jsx)(p,{})}),Object(l.jsx)(g.a,{path:"/artist",children:Object(l.jsx)(f,{})}),Object(l.jsx)(g.a,{path:"/politic",children:Object(l.jsx)(v,{})})]})]})};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.c4ea3cc9.chunk.js.map