(this["webpackJsonpgamepigeon-client"]=this["webpackJsonpgamepigeon-client"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),i=n(14),o=n.n(i),r=(n(20),n(5)),s=(n(21),n(15)),p=n.n(s),u=n(1);var d=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(),o=Object(r.a)(i,2),s=o[0],d=o[1];return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{type:"file",id:"myFile",name:"filename",onChange:function(e){c(e.target.files[0])}}),Object(u.jsx)("input",{type:"submit",onClick:function(e){var t=new FormData;t.append("file",n);var a={method:"POST",url:"https://nothingtosee.herokuapp.com/tanks",headers:{"Content-Type":"multipart/form-data; boundary=---011000010111000001101001"},data:t};d("Loading..."),p.a.request(a).then((function(e){console.log(e.data),d(e.data)})).catch((function(e){console.error(e)})),e.preventDefault()}})]}),Object(u.jsx)("h3",{children:s})]})})};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.0152700d.chunk.js.map