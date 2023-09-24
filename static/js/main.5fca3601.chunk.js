(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(4),s=c.n(a),n=c(2),l=c(1),i=(c(10),c(11),c(5)),d=c.n(i),o=c(0),r=function(e,t){return t.filter((function(t){return t.title.toLocaleLowerCase().includes(e.trim().toLocaleLowerCase())}))},j=function(e){var t=e.todoList,c=e.modalActive,a=e.query,s=e.option,n=e.activeTaskId,l=[];return l=null===s?r(a,t):s?r(a,t).filter((function(e){return!0===e.completed})):r(a,t).filter((function(e){return!1===e.completed})),Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:l.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(o.jsx)("td",{className:"is-vcentered",children:Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}):Object(o.jsx)("td",{className:"is-vcentered"}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:(t=e.completed,d()({"has-text-danger":!t,"has-text-success":t})),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(o.jsx)("span",{className:"icon",children:n===e.id?Object(o.jsx)("i",{className:"far fa-eye-slash"}):Object(o.jsx)("i",{className:"far fa-eye"})})})})]},e.id);var t}))})]})},u=function(e){var t=e.handleQuery,c=e.handleOption,a=Object(l.useState)(""),s=Object(n.a)(a,2),i=s[0],d=s[1],r=Object(l.useState)("all"),j=Object(n.a)(r,2),u=j[0],b=j[1];return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:u,onChange:function(e){var t=e.target.value;b(t);var a=null;switch(t){case"all":default:a=null;break;case"active":a=!1;break;case"completed":a=!0}c(a)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:i,onChange:function(e){var c=e.target.value.trim();d(c),t(c)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:i&&Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){d(""),t("")}})})]})]})},b=(c(13),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.todo,c=e.closeModal,a=Object(l.useState)(null),s=Object(n.a)(a,2),i=s[0],d=s[1];return Object(l.useEffect)((function(){var e;(e=t.userId,h("/users/".concat(e))).then(d)}),[]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),i?Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",null===t||void 0===t?void 0:t.id]}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(null===i||void 0===i?void 0:i.email),children:null===i||void 0===i?void 0:i.name})]})]})]}):Object(o.jsx)(b,{})]})},O=function(){var e=Object(l.useState)(!0),t=Object(n.a)(e,2),c=t[0],a=t[1],s=Object(l.useState)([]),i=Object(n.a)(s,2),d=i[0],r=i[1],O=Object(l.useState)(null),x=Object(n.a)(O,2),f=x[0],v=x[1],p=Object(l.useState)(""),N=Object(n.a)(p,2),y=N[0],g=N[1],k=Object(l.useState)(null),S=Object(n.a)(k,2),w=S[0],C=S[1];Object(l.useEffect)((function(){a(!0),h("/todos").then((function(e){r(e)})).catch((function(e){console.error("Something bad happened!",e)})).finally((function(){a(!1)}))}),[]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(u,{handleQuery:function(e){g(e)},handleOption:function(e){C(e)}})}),Object(o.jsxs)("div",{className:"block",children:[c&&Object(o.jsx)(b,{}),Object(o.jsx)(j,{todoList:d,modalActive:function(e){return function(e){v(e)}(e)},query:y,option:w,activeTaskId:(null===f||void 0===f?void 0:f.id)||null})]})]})})}),f&&Object(o.jsx)(m,{todo:f,closeModal:function(){v(null)}})]})};s.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5fca3601.chunk.js.map