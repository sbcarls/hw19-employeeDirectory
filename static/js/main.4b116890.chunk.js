(this["webpackJsonphw19-employee-directory"]=this["webpackJsonphw19-employee-directory"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(12),s=n.n(i),j=(n(19),n(14)),d=(n(20),n(0));function h(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("table",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Picture"}),Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"DOB"}),Object(d.jsx)("th",{children:"Phone"}),Object(d.jsx)("th",{children:"Email"})]}),e.users.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("img",{src:e.picture.thumbnail})}),Object(d.jsx)("td",{children:e.name.first}),Object(d.jsx)("td",{children:e.dob.age}),Object(d.jsx)("td",{children:e.phone}),Object(d.jsx)("td",{children:e.email})]})}))]})})}var o=n(13),a=n.n(o),u=function(){return a.a.get("https://randomuser.me/api/?results=50&inc=name,email,dob,phone,picture")};var l=function(){var e=r.a.useState([]),t=Object(j.a)(e,2),n=t[0],c=t[1];r.a.useEffect((function(){i()}),[]);var i=function(){u().then((function(e){console.log(e),c(e.data.results)}))};return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(h,{users:n})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root")),b()}},[[40,1,2]]]);
//# sourceMappingURL=main.4b116890.chunk.js.map