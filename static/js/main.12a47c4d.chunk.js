(this.webpackJsonplearningpwa=this.webpackJsonplearningpwa||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),o=c.n(s),a=c(8),i=c.n(a),l=(c(15),c(4)),r=(c(16),c(17),c(9)),d=c(3);c(18);function j(e){var t=e.inputText,c=e.setInputText,s=e.todos,o=e.setTodos,a=e.setStatus;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("form",{action:"",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("input",{onChange:function(e){c(e.target.value)},className:"w-100 p-1 mb-4",type:"text",value:t}),Object(n.jsx)("button",{onClick:function(e){e.preventDefault(),o([].concat(Object(r.a)(s),[{text:t,completed:!1,id:1e3*Math.random()}])),c("")},className:"btn btn-sm btn-success submit",type:"button",children:Object(n.jsx)(d.FaPlus,{})})]})})}),Object(n.jsx)("div",{className:"col-12 selected",children:Object(n.jsxs)("select",{onChange:function(e){a(e.target.value)},name:"todos",id:"",children:[Object(n.jsx)("option",{value:"all",children:"All"}),Object(n.jsx)("option",{value:"completed",children:"Completed"}),Object(n.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})})})})}var u=c(7);c(19);function b(e){var t=e.text,c=e.todo,s=e.setTodos,o=e.todos;return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row no-gutters",children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("li",{className:"p-2 my-1 bg-warning text-center todo-item ".concat(c.completed?"completed":""),children:t})}),Object(n.jsxs)("div",{className:"col-12 d-flex flex-row justify-content-center",children:[Object(n.jsx)("button",{onClick:function(){s(o.map((function(e){return e.id===c.id?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e})))},className:"my-1 ml-1 btn btn-success",children:Object(n.jsx)(d.FaCheck,{})}),Object(n.jsx)("button",{onClick:function(){s(o.filter((function(e){return e.id!==c.id})))},className:"btn my-1 ml-1 btn-danger",children:Object(n.jsx)(d.FaTrash,{})})]})]})})}function m(e){var t=e.todos,c=e.setTodos,s=e.filterTodos;return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("ul",{className:"todo-list w-100 list-unstyled mt-5",children:s.map((function(e){return Object(n.jsx)(b,{todos:t,setTodos:c,todo:e,text:e.text},e.id)}))})})})})}var O=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],o=t[1],a=Object(s.useState)([]),i=Object(l.a)(a,2),r=i[0],d=i[1],u=Object(s.useState)("all"),b=Object(l.a)(u,2),O=b[0],x=b[1],h=Object(s.useState)([]),f=Object(l.a)(h,2),v=f[0],p=f[1];Object(s.useEffect)((function(){w()}),[]),Object(s.useEffect)((function(){g(),N()}),[r,O]);var g=function(){switch(O){case"completed":p(r.filter((function(e){return!0===e.completed})));break;case"uncompleted":p(r.filter((function(e){return!1===e.completed})));break;default:p(r)}},N=function(){localStorage.setItem("todos",JSON.stringify(r))},w=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));d(e)}};return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("h1",{className:"text-center my-5",children:"Shoping Cart"})})}),Object(n.jsx)(j,{inputText:c,setInputText:o,todos:r,setTodos:d,status:O,setStatus:x}),Object(n.jsx)(m,{filterTodos:v,todos:r,setTodos:d})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),o(e),a(e)}))};i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),x()}},[[20,1,2]]]);
//# sourceMappingURL=main.12a47c4d.chunk.js.map