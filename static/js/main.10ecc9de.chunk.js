(this.webpackJsonpannouncements=this.webpackJsonpannouncements||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var s=n(7),i=n(0),c=n.n(i),a=n(24),r=n.n(a),l=c.a.createContext(),u=[{id:1,title:"Lorem Ipsum",descr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis metus commodo, mollis neque id, tincidunt turpis. Morbi imperdiet lacus a efficitur tempus. Mauris eget libero molestie, scelerisque purus in, elementum sem. Sed porttitor nisl quis mi euismod lacinia. Cras feugiat auctor justo at interdum.",date:"2021.12.06"},{id:2,title:"Duis mattis",descr:"Duis mattis semper convallis. Sed fringilla sagittis ultricies. Morbi luctus, dui non placerat facilisis, libero orci pretium ipsum, sed gravida ante libero vel justo.",date:"2021.12.06"},{id:3,title:"Nulla semper libero",descr:"Nulla semper libero sed justo convallis, vitae laoreet nisi tincidunt. Mauris at massa iaculis, pharetra sem ac, lacinia felis. Ut non ipsum pellentesque, mattis turpis eget, vulputate massa.",date:"2021.12.07"},{id:4,title:"Fusce pulvinar",descr:"Fusce pulvinar tortor quis porta hendrerit. Praesent id volutpat urna, in vulputate eros. Suspendisse sit amet libero sit amet arcu convallis finibus et non ante.",date:"2021.12.07"},{id:5,title:"Donec tincidunt",descr:"Donec tincidunt dapibus est non rhoncus. Integer ut enim sapien. Duis vitae ipsum quis nisi feugiat gravida id sed turpis.",date:"2021.12.08"},{id:6,title:"Integer metus",descr:"Integer metus massa, dictum non mattis accumsan, tincidunt nec justo. Donec consectetur auctor ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.",date:"2021.12.08"},{id:7,title:"Vivamus egestas",descr:"Vivamus egestas, dolor id molestie malesuada, mi odio bibendum leo, eget rhoncus leo quam vel felis. Donec ultrices convallis luctus. Cras scelerisque laoreet lorem, a tempor nulla venenatis eu.",date:"2021.12.09"},{id:8,title:"Pellentesque fringilla",descr:"Pellentesque fringilla ullamcorper lectus, sed aliquet mauris mollis et. Donec consequat, dui at pulvinar aliquet, ligula erat bibendum neque, hendrerit tempor enim nulla a massa.",date:"2021.12.09"},{id:9,title:"Morbi eu tempor justo",descr:"Morbi eu tempor justo. Praesent lacinia sapien nulla, ac hendrerit felis ullamcorper nec. Nunc tristique auctor semper. Sed vitae dolor in ligula ultrices mattis.",date:"2021.12.10"},{id:10,title:"Maecenas vulputate",descr:"Maecenas vulputate, lacus ac hendrerit bibendum, lacus diam dapibus metus, ac efficitur leo massa ut ligula. Donec ut lectus id nulla posuere efficitur sit amet ut sem.",date:"2021.12.10"},{id:11,title:"Vestibulum eget eros sit amet",descr:"Vestibulum eget eros sit amet lacus ultricies convallis finibus vehicula leo. Quisque ante nisl, gravida vel pulvinar eu, imperdiet at ipsum.",date:"2021.12.11"},{id:12,title:"Etiam mauris lacus",descr:"Etiam mauris lacus, eleifend nec enim sed, ultricies dapibus justo. Cras tincidunt tellus justo, a tempor lacus sollicitudin sed. Curabitur arcu ex, tristique et consequat id, vestibulum a felis. Etiam elementum lorem neque, sed vehicula dui pharetra at. Cras eget nisl eros.",date:"2021.12.11"}],d=n(25),o=n(8),j=(n(60),n(61),n(77)),m=n(74),b=n(78),h=n(1),O=function(){return Object(h.jsx)(j.a,{sticky:"top",children:Object(h.jsxs)(m.a,{children:[Object(h.jsx)(j.a.Brand,{children:"Announcements"}),Object(h.jsxs)(b.a,{children:[Object(h.jsx)(b.a.Item,{children:Object(h.jsx)(d.b,{to:"/announcements",children:"List"})}),Object(h.jsx)(b.a.Item,{children:Object(h.jsx)(d.b,{to:"/search",children:"Search"})}),Object(h.jsx)(b.a.Item,{children:Object(h.jsx)(d.b,{to:"/add",children:"Add"})})]})]})})},x=n(9),p=n(40),v=n.n(p),f=n(79),g=n(75),N=n(53),C=n(54),q=n(76),S=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(""),r=Object(s.a)(a,2),u=r[0],d=r[1],o=Object(i.useContext)(l).announcements,j=function(e){var t=e.target.value;c(t)},m=function(e){var t=e.target.value;d(t)};return Object(h.jsxs)(f.a,{className:"fields",children:[Object(h.jsx)(g.a,{className:"justify-content-center",children:Object(h.jsx)(N.a,{md:6,children:Object(h.jsx)(C.a,{label:"Announcement title",children:Object(h.jsx)(f.a.Control,{placeholder:"Title",onClick:j,onChange:j})})})}),Object(h.jsx)(g.a,{className:"justify-content-center",children:Object(h.jsxs)(N.a,{md:6,children:[Object(h.jsx)(C.a,{label:"Announcement description",children:Object(h.jsx)(f.a.Control,{as:"textarea",rows:3,placeholder:"Description",onClick:m,onChange:m})}),Object(h.jsx)(q.a,{variant:"success",onClick:function(){return function(){var e=Object(x.a)(o.list),t={id:e[e.length-1].id+1,title:n,descr:u,date:v()().format("YYYY.MM.DD")};e.push(t),o.setList(e),console.log(o.list)}()},children:"Add Announcement"})]})})]})},M=function(){return Object(h.jsx)("div",{className:"Add-page",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(S,{})})})},D=n(42),k=function(e){return Object(h.jsx)("div",{className:"list",children:e.list.map((function(e){return Object(h.jsxs)("div",{className:"pre-announcement",children:[Object(h.jsx)("h3",{children:e.item.title}),Object(h.jsx)(d.c,{className:"read-more",to:"/announcement/".concat(e.item.id),children:"Read More \u2192"})]},e.item.id)}))})},A=n(80),I=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(i.useContext)(l).announcements,r=Object(i.useState)([]),u=Object(s.a)(r,2),d=u[0],o=u[1];return Object(h.jsx)("div",{className:"Search-page",children:Object(h.jsxs)(m.a,{children:[Object(h.jsx)(g.a,{className:"justify-content-center",children:Object(h.jsx)(N.a,{md:6,className:"search-wrapper",children:Object(h.jsxs)(A.a,{children:[Object(h.jsx)(f.a.Control,{id:"search",type:"text",placeholder:"What are you looking for?",onChange:function(e){c(e.target.value)}}),Object(h.jsx)(q.a,{variant:"primary",onClick:function(){var e=new D.a(a.list,{keys:["title"]});o(e.search(n))},children:"Search"})]})})}),Object(h.jsx)(k,{list:d})]})})},_=function(){var e=Object(i.useContext)(l).announcements;return Object(h.jsx)("div",{className:"List-page",children:Object(h.jsx)(m.a,{children:Object(h.jsx)("div",{className:"list",children:e.list.map((function(t){return Object(h.jsxs)("div",{className:"pre-announcement",children:[Object(h.jsxs)("div",{className:"pre-title",children:[Object(h.jsx)("h3",{children:t.title}),Object(h.jsx)(q.a,{variant:"danger",size:"sm",onClick:function(){return function(t){var n=Object(x.a)(e.list),s=n.findIndex((function(e){return e.id===t}));n.splice(s,1),e.setList(n)}(t.id)},children:"Delete"})]}),Object(h.jsx)(d.c,{className:"read-more",to:"/announcement/".concat(t.id),children:"Read More \u2192"})]},t.id)}))})})})},y=function(e){var t=Object(i.useState)(e.default),n=Object(s.a)(t,2),c=n[0],a=(n[1],Object(i.useState)("")),r=Object(s.a)(a,2),u=r[0],d=r[1],o=Object(i.useState)(""),j=Object(s.a)(o,2),m=j[0],b=j[1],O=Object(i.useContext)(l).announcements,p=function(e){var t=e.target.value;d(t)},v=function(e){var t=e.target.value;b(t)};return Object(h.jsxs)(f.a,{className:"fields",children:[Object(h.jsx)(g.a,{children:Object(h.jsx)(N.a,{md:4,children:Object(h.jsx)(C.a,{label:"Announcement title",children:Object(h.jsx)(f.a.Control,{placeholder:"Title",onClick:p,onChange:p})})})}),Object(h.jsx)(g.a,{children:Object(h.jsxs)(N.a,{md:6,children:[Object(h.jsx)(C.a,{label:"Announcement description",children:Object(h.jsx)(f.a.Control,{as:"textarea",rows:3,placeholder:"Description",onClick:v,onChange:v})}),Object(h.jsx)(q.a,{variant:"success",onClick:function(){return function(){var e=Object(x.a)(O.list),t=e.findIndex((function(e){return e.id===Number(c.id)}));e[t].title=u,e[t].descr=m,O.setList(e)}()},children:"Edit Announcement"})]})})]})},L=function(e){var t=Object(i.useContext)(l).announcements,n=t.list.find((function(t){return t.id===Number(e.match.params.id)})),c=Object(i.useState)([]),a=Object(s.a)(c,2),r=a[0],u=a[1],d=new D.a(t.list,{includeScore:!0,keys:["title","descr"]}).search(n.descr);return Object(i.useEffect)((function(){for(var e=Object(x.a)(d),t=0;t<e.length;t++)e[t].score<.1&&e.splice(t,1);e.length>3&&(e=e.slice(0,3)),u(e)}),[]),Object(h.jsx)("div",{className:"Announcement-page",children:Object(h.jsxs)(m.a,{children:[Object(h.jsxs)("div",{className:"announcement__info",children:[Object(h.jsxs)("div",{className:"announcement__head",children:[Object(h.jsx)("h2",{className:"announcement__title",children:n.title}),Object(h.jsx)("span",{className:"announcement__date",children:v()(n.date).format("dddd DD, MMMM YYYY")})]}),Object(h.jsx)("div",{className:"announcement__contain",children:Object(h.jsx)("p",{children:n.descr})})]}),Object(h.jsx)(y,{default:n}),Object(h.jsxs)("div",{className:"related_search",children:[Object(h.jsx)("h2",{className:"related",children:"Related search:"}),Object(h.jsx)(k,{list:r})]})]})})},Y=function(){return Object(h.jsx)("div",{className:"NotFound",children:Object(h.jsx)(m.a,{children:Object(h.jsx)("h1",{children:"Page Not Found!"})})})};var w=function(){return Object(h.jsx)(d.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(O,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/announcements",children:Object(h.jsx)(_,{})}),Object(h.jsx)(o.a,{path:"/search",children:Object(h.jsx)(I,{})}),Object(h.jsx)(o.a,{path:"/add",children:Object(h.jsx)(M,{})}),Object(h.jsx)(o.a,{path:"/announcement/:id",component:L}),Object(h.jsx)(o.a,{path:"/",children:Object(h.jsx)(Y,{})})]})]})})};function E(){var e=Object(i.useState)(u),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(l.Provider,{value:{announcements:{list:n,setList:a}},children:Object(h.jsx)(w,{})})})}r.a.render(Object(h.jsx)(E,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.10ecc9de.chunk.js.map