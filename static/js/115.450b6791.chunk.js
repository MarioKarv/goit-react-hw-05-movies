"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{713:function(t,e,r){r.d(e,{Hg:function(){return i},M1:function(){return p},Pg:function(){return o},tx:function(){return f},z1:function(){return s}});var n=r(861),u=r(757),a=r.n(u),c=r(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"c8c5142f4be3b54c36c807e0ef85cecf"}}),i=function(){var t=(0,n.Z)(a().mark((function t(){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/trending/movie/day");case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/search/movie",{params:{query:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},115:function(t,e,r){r.r(e);var n=r(439),u=r(791),a=r(689),c=r(87),i=r(713),s=r(184);e.default=function(){var t=(0,a.TH)(),e=(0,u.useState)(),r=(0,n.Z)(e,2),o=r[0],f=r[1],p=(0,u.useState)([]),v=(0,n.Z)(p,2),h=v[0],l=v[1],m=(0,c.lr)(),d=(0,n.Z)(m,2),x=d[0],w=d[1],b=x.get("query"),g=null===h||void 0===h?void 0:h.map((function(e){var r=e.id,n=e.title;return(0,s.jsx)("li",{children:(0,s.jsx)(c.rU,{to:"/movies/".concat(r),state:{from:t},children:n})},r)}));return(0,u.useEffect)((function(){(0,i.z1)(b).then((function(t){var e=t.results;l(e)}))}),[x,b,l]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),w({query:o})},children:[(0,s.jsx)("input",{onChange:function(t){var e=t.target;f(e.value),w({query:e.value})},type:"text",name:"search"}),(0,s.jsx)("button",{type:"submit",children:"Search"})]}),(0,s.jsx)("ul",{children:g})]})}}}]);
//# sourceMappingURL=115.450b6791.chunk.js.map