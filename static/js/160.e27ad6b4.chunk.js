"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[160],{361:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(87),r="Button_button__wiIYs",c="Button_buttonWrap__ZRtPo",s=n(184),o=function(e){var t=e.btnName,n=e.onClick;return(0,s.jsx)("div",{className:c,children:(0,s.jsx)("button",{className:r,onClick:n,type:"button",children:t})})},i="MovieList_buttonWrap__bPcX1",u="MovieList_list__yjDCC",l="MovieList_li__kXkJl",h=function(e){var t=e.location,n=e.movieList,r=e.paginationPage,c=e.totalPages,h=e.onLoadNextPage,g=e.onLoadPreviousPage,d=e.onToStartPage;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("ul",{className:u,children:n.map((function(e){var n=e.id,r=e.title;return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{className:l,to:"/movies/".concat(n),state:t,children:r})},n)}))}),(0,s.jsxs)("div",{className:i,children:[0!==n.length&&r>1&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{btnName:"Start page",onClick:d}),(0,s.jsx)(o,{btnName:"Previous page",onClick:g})]}),0!==n.length&&r<c&&(0,s.jsx)(o,{btnName:"Next page",onClick:h})]})]})}},160:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(439),r=n(791),c=n(689),s=n(87),o=n(468),i="Search_searchForm__0FeD+",u="Search_input__PXR0c",l="Search_searchBtn__kEs6t",h=n(184),g=function(e){var t=e.handleSubmit,n=e.handleSearchInputChange,a=e.searchText;return(0,h.jsxs)("form",{onSubmit:t,className:i,children:[(0,h.jsx)("label",{children:(0,h.jsx)("input",{className:u,value:a,name:"search",type:"text",onChange:n,autoComplete:"off"})}),(0,h.jsx)("button",{className:l,type:"submit",children:"Search"})]})},d=n(361),p=function(){var e,t,n,i=(0,c.TH)(),u=(0,s.lr)(),l=(0,a.Z)(u,2),p=l[0],f=l[1],m=(0,r.useState)([]),v=(0,a.Z)(m,2),_=v[0],x=v[1],b=(0,r.useState)(null!==(e=p.get("search"))&&void 0!==e?e:""),j=(0,a.Z)(b,2),N=j[0],P=j[1],S=(0,r.useRef)(0),k=null!==(t=Number(p.get("page")))&&void 0!==t?t:0,C="";(0,r.useEffect)((function(){(0,o.V)("/search/movie",k,N).then((function(e){if(200!==e.status)throw new Error(e.statusText);S.current=e.data.total_pages,x(e.data.results)}))}),[k,N]);return C=0===_.length?"No matches":'Search "'.concat(N,'" (Page ').concat(k," of ").concat(S.current,")"),(0,h.jsxs)("div",{children:[(0,h.jsx)(g,{handleSubmit:function(e){e.preventDefault(),k=1;var t=p.get("search");f({search:t.trim(),page:1}),P(t.trim())},handleSearchInputChange:function(e){var t=e.target.value;f({search:t,page:k})},searchText:null!==(n=p.get("search"))&&void 0!==n?n:""}),N&&(0,h.jsx)("h3",{children:C}),0!==_.length&&(0,h.jsx)(d.Z,{location:i,movieList:_,paginationPage:k,totalPages:S.current,onLoadNextPage:function(){f({search:N,page:k+=1})},onLoadPreviousPage:function(){f({search:N,page:k-=1})},onToStartPage:function(){k=1,f({search:N,page:1})}})]})}},468:function(e,t,n){n.d(t,{V:function(){return i}});var a=n(861),r=n(757),c=n.n(r),s=n(243),o=n(73);function i(e){return u.apply(this,arguments)}function u(){return u=(0,a.Z)(c().mark((function e(t){var n,a,r,i,u=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:1,a=u.length>2&&void 0!==u[2]?u[2]:"",e.prev=2,r="https://api.themoviedb.org/3"+t+"?api_key=".concat("6dfafd08c001fd3262dc3fe23504fa05"),a&&(r+="&query=".concat(a.trim())),n&&(r+="&page=".concat(n)),e.next=10,s.Z.get(r);case 10:return i=e.sent,e.abrupt("return",i);case 14:e.prev=14,e.t0=e.catch(2),o.Am.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[2,14]])}))),u.apply(this,arguments)}}}]);
//# sourceMappingURL=160.e27ad6b4.chunk.js.map