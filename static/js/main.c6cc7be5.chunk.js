(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=a(15),i=a(74),s=a(144),u=a(133),m=a(27),p=Object(m.d)(function(e){var t=e.history,a=r.a.useState(0),n=Object(o.a)(a,2),c=n[0],l=n[1];return r.a.createElement(i.a,null,r.a.createElement(s.a,{value:c,onChange:function(e,a){l(a),t.push("/".concat(a>0?"category/".concat(a):"news"))},indicatorColor:"primary",textColor:"primary",centered:!0},r.a.createElement(u.a,{label:"Home"}),r.a.createElement(u.a,{label:"Pol\xedtica"}),r.a.createElement(u.a,{label:"Internacionales"}),r.a.createElement(u.a,{label:"Tecnolog\xeda"}),r.a.createElement(u.a,{label:"Espect\xe1culos"}),r.a.createElement(u.a,{label:"Deportes"})))}),d=a(44),f=a(135),b=a(136),h=a(137),E=a(138),g=a(145),v=a(49),x=a(134),j=a(63),w=a.n(j),O=a(64),y=a.n(O),k=Object(x.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(d.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(d.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(v.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(v.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(d.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}}),I=Object(m.d)(function(e){var t=e.history,a=k();return r.a.createElement("div",null,r.a.createElement(f.a,{position:"static"},r.a.createElement(b.a,null,r.a.createElement(h.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"Open drawer"},r.a.createElement(w.a,null)),r.a.createElement(E.a,{className:a.title,variant:"h6",noWrap:!0},"Canillitapp"),r.a.createElement("div",{className:a.search},r.a.createElement("div",{className:a.searchIcon},r.a.createElement(y.a,null)),r.a.createElement(g.a,{placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput},onChange:function(e){t.push("/search/".concat(e.target.value))}})))))}),N=a(40),_=a(19),C=a.n(_),S=a(30),D=a(65),R=a(32),L=a(73),M=a(66),Y=a(72),z=a(23),B=a(24);function F(){var e=Object(z.a)(["\n  margin: 20px;\n"]);return F=function(){return e},e}var G=B.a.h1(F()),H=function(e){var t=e.title;return r.a.createElement(G,null,t)},q=(a(104),a(142)),J=(a(105),a(139)),P=a(140),T=a(141),W=function(e){return r.a.createElement("div",null,r.a.createElement(J.a,{className:"card",onClick:function(){return t=e.url,void window.open(t);var t}},r.a.createElement(P.a,null,r.a.createElement(T.a,{className:"img",image:e.img_url,title:e.source_name},r.a.createElement("div",{className:"info"},r.a.createElement("p",null,e.title),r.a.createElement("p",{className:"source"},"Fuente: ",e.source_name))))))},A=function(e){return r.a.createElement("div",null,r.a.createElement(q.a,{container:!0,className:"root",spacing:2},r.a.createElement(q.a,{container:!0,justify:"center",alignItems:"center",spacing:3},null!==e.noticias?e.noticias.map(function(e){return r.a.createElement(q.a,{item:!0,key:e.news_id},r.a.createElement(W,{title:e.title,img_url:e.img_url,name:e.name,source_name:e.source_name,news_id:e.news_id,url:e.url}))}):"")))},K=a(69),Q=a.n(K),U=a(143),V=Object(x.a)({root:{flexGrow:1}}),X=function(e){e.completed;var t=V();return r.a.createElement("div",{className:t.root},r.a.createElement(U.a,null))},Z=function(e){function t(){var e;return Object(D.a)(this,t),(e=Object(L.a)(this,Object(M.a)(t).call(this))).setLoading=function(t){e.setState({loading:t})},e.componentDidMount=Object(S.a)(C.a.mark(function t(){var a,n,r;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=Q()().format("YYYY-MM-DD"),t.prev=1,e.setLoading(!0),t.next=5,fetch("https://api.canillitapp.com/latest/".concat(a));case 5:return n=t.sent,t.next=8,n.json();case 8:n=t.sent,r=n.slice(0,21),e.setState({noticias:r}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:return t.prev=16,e.setLoading(!1),t.finish(16);case 19:case"end":return t.stop()}},t,null,[[1,13,16,19]])})),e.state={noticias:null,loading:!1},e}return Object(Y.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.loading?r.a.createElement(X,null):null,r.a.createElement(H,{title:"Hoy"}),r.a.createElement(A,{noticias:this.state.noticias}))}}]),t}(n.Component);function $(){var e=Object(z.a)(["\n  margin-left: 20px;\n  display: flex;\n  flex-direction: column;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  flex: 1 1 600px;\n  .title {\n    font-size: 20px;\n    font-weight: 300;\n  }\n  .small {\n  }\n"]);return $=function(){return e},e}function ee(){var e=Object(z.a)(["\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  flex-basis: 200px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n"]);return ee=function(){return e},e}function te(){var e=Object(z.a)(["\n  text-decoration: none;\n  color: #000000;\n  display: flex;\n  width: 60%;\n  height: 125px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background-color: #ffffff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  :hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n  margin-bottom: 20px;\n"]);return te=function(){return e},e}var ae=B.a.a(te()),ne=B.a.div(ee()),re=B.a.div($()),ce=function(e){var t=e.noticia;return r.a.createElement(ae,{href:t.url},r.a.createElement(ne,{style:{backgroundImage:"url(".concat(t.img_url,")")}}),r.a.createElement(re,{className:"right-side"},r.a.createElement("h3",{className:"title"},t.title),r.a.createElement("small",{className:"small"},"".concat(new Date(t.date).getHours(),":").concat(new Date(t.date).getMinutes()," | ").concat(t.source_name))))};function le(){var e=Object(z.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]);return le=function(){return e},e}var oe=B.a.div(le()),ie=function(e){var t=e.noticias;return r.a.createElement(oe,null,t.map(function(e){return r.a.createElement(ce,{noticia:e,key:e.news_id})}))},se=function(e){var t=e.match,a=Object(n.useState)([]),c=Object(o.a)(a,2),l=c[0],i=c[1],s=Object(n.useState)(!1),u=Object(o.a)(s,2),m=u[0],p=u[1],d=Object(n.useState)(null),f=Object(o.a)(d,2),b=f[0],h=f[1],E=t.params.categoryId-1;return Object(n.useEffect)(function(){!function(){var e=Object(S.a)(C.a.mark(function e(){var a,n,r;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,fetch("https://api.canillitapp.com/news/category/".concat(t.params.categoryId));case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,r=n.slice(0,21),i(r),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),h(e.t0);case 15:return e.prev=15,p(!1),e.finish(15);case 18:case"end":return e.stop()}},e,null,[[0,12,15,18]])}));return function(){return e.apply(this,arguments)}}()()},[t.params.categoryId]),r.a.createElement(r.a.Fragment,null,m?r.a.createElement(X,null):null,r.a.createElement(H,{title:["Pol\xedtica","Internacionales","Tecnolog\xeda","Espect\xe1culos","Deportes"][E]}),b?r.a.createElement("h1",null,b):r.a.createElement(ie,{noticias:l}))},ue=a(70),me=function(e){var t=e.match,a=Object(n.useState)([]),c=Object(o.a)(a,2),l=c[0],i=c[1],s=Object(n.useState)(!1),u=Object(o.a)(s,2),m=u[0],p=u[1],d=Object(n.useState)(null),f=Object(o.a)(d,2),b=f[0],h=f[1],E=t.params.query,g=Object(ue.useDebounce)(E,800),v=Object(o.a)(g,1)[0];return Object(n.useEffect)(function(){!function(){var e=Object(S.a)(C.a.mark(function e(){var t,a,n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,fetch("https://api.canillitapp.com/search/".concat(v));case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,n=a.slice(0,21),i(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),h(e.t0);case 15:return e.prev=15,p(!1),e.finish(15);case 18:return e.abrupt("return",function(){});case 19:case"end":return e.stop()}},e,null,[[0,12,15,18]])}));return function(){return e.apply(this,arguments)}}()()},[v]),r.a.createElement(r.a.Fragment,null,m?r.a.createElement(X,null):null,E?r.a.createElement(H,{title:"Resultados de: ".concat(E)}):r.a.createElement(H,{title:'No hay resultados de: ""'}),b?r.a.createElement("h1",null,b):r.a.createElement(ie,{noticias:l}))};var pe=function(){return r.a.createElement(N.a,null,r.a.createElement(I,null),r.a.createElement(p,null),r.a.createElement(m.a,{path:"/news",exact:!0,component:Z}),r.a.createElement(m.a,{path:"/category/:categoryId",component:se}),r.a.createElement(m.a,{exact:!0,path:"/search",component:me}),r.a.createElement(m.a,{path:"/search/:query",component:me}))};a(107);l.a.render(r.a.createElement(pe,null),document.getElementById("root"))},79:function(e,t,a){e.exports=a(108)}},[[79,1,2]]]);
//# sourceMappingURL=main.c6cc7be5.chunk.js.map