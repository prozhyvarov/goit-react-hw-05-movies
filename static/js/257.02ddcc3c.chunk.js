"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[257],{257:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,i,a,c,s,o=t(439),u=t(791),l=t(689),p=t(87),d=t(952),f=t(362),h=t(168),x=t(706),v=x.Z.div(r||(r=(0,h.Z)(["\n  display: flex;\n  margin: 24px;\n  gap: 24px;\n"]))),g=x.Z.ul(i||(i=(0,h.Z)(["\n  display: inline-flex;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"]))),Z=x.Z.ul(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"]))),m=(0,x.Z)(p.rU)(c||(c=(0,h.Z)(["\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 18px;\n  color: #191d1e;\n\n  &:hover {\n    color: #476fff;\n  }\n"]))),j=x.Z.button(s||(s=(0,h.Z)(["\n  padding: 8px 8px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 2px solid #476fff;\n  background-color: transparent;\n  color: #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n\n  &:hover {\n    color: #476fff;\n    border: 2px solid #476fff;\n  }\n"]))),w=t(184),y=function(){var n,e,t=(0,l.UO)().movieId,r=(0,u.useState)(null),i=(0,o.Z)(r,2),a=i[0],c=i[1],s=(0,u.useState)(!1),h=(0,o.Z)(s,2),x=h[0],y=h[1],b=(0,l.TH)();if((0,u.useEffect)((function(){y(!0),(0,d.Y5)(t).then((function(n){c(n)})).catch((function(n){console.log(n)})).finally((function(){y(!1)}))}),[t]),a){var _=a||{},k=_.title,U=_.release_date,S=_.popularity,C=_.overview,z=_.genres,A=_.poster_path,G=_.original_title;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p.rU,{to:null!==(n=null===(e=b.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:(0,w.jsx)(j,{type:"button",children:"\u2190 Go back"})}),x&&(0,w.jsx)(f.Z,{}),a&&(0,w.jsxs)(v,{children:[(0,w.jsx)("img",{width:"300px",src:A?"https://image.tmdb.org/t/p/w500".concat(A):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:G}),(0,w.jsxs)("div",{children:[(0,w.jsxs)("h1",{children:[k," (",U.slice(0,4),")"]}),(0,w.jsxs)("p",{children:["User score: ",S]}),(0,w.jsx)("h2",{children:"Overview"}),(0,w.jsx)("p",{children:C}),(0,w.jsx)("h2",{children:"Genres"}),(0,w.jsx)(g,{children:z.map((function(n){return(0,w.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,w.jsx)("hr",{}),(0,w.jsxs)("div",{children:[(0,w.jsx)("h3",{children:"Additional information"}),(0,w.jsxs)(Z,{children:[(0,w.jsx)("li",{children:(0,w.jsx)(m,{to:"cast",children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(m,{to:"reviews",children:"Reviews"})})]}),(0,w.jsx)("hr",{}),(0,w.jsx)(l.j3,{})]})]})}}},952:function(n,e,t){t.d(e,{Bt:function(){return p},Ml:function(){return o},Tg:function(){return s},Y5:function(){return u},wL:function(){return l}});var r=t(165),i=t(861),a=t(243);a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="f1a48bce74b470ddc6475541cec139b4",s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=257.02ddcc3c.chunk.js.map