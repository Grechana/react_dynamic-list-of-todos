(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var s=c(9),a=c.n(s),n=c(3),o=c(4),r=c(7),l=c(6),i=(c(14),c(15),c(1)),d=c.n(i),j=c(0),h=function(e){var t=e.todos,c=e.selectTodo,s=e.selectedTodoID;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),Object(j.jsx)("td",{className:"is-vcentered",children:e.completed?Object(j.jsx)("span",{className:"icon","data-cy":"completed",children:Object(j.jsx)("i",{className:"fas fa-check"})}):""}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:s===e.id?Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(0)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"far fa-eye-slash"})})}):Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(e.id)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},u=function(e){var t=e.changeCompleted,c=e.changeActive,s=e.changeAll,a=e.qwery,n=e.findQwery,o=e.resetQwery;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){switch(e.target.value){case"all":s();break;case"active":c();break;case"completed":t()}},children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"active",children:"Active"}),Object(j.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:n}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:a&&Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:o})})]})]})},b=c(5),m=c(2),f=c.n(m),x=(c(18),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),O="https://mate-academy.github.io/react_dynamic-list-of-todos/api";function p(e){return new Promise((function(t){setTimeout(t,e)}))}function v(e){return y.apply(this,arguments)}function y(){return(y=Object(b.a)(f.a.mark((function e(t){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=O+t+".json",e.next=3,p(300);case 3:return e.abrupt("return",fetch(c).then((function(e){return e.json()})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(n.a)(this,c);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={user:{},selectedTodo:{},loader:!0},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t,c,s,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,c=t.todos,s=t.selectedTodoID,!(a=c.find((function(e){return e.id===s})))){e.next=7;break}return e.next=5,o=a.userId,v("/users/".concat(o));case 5:n=e.sent,this.setState({user:n,selectedTodo:a,loader:!1});case 7:case"end":return e.stop()}var o}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.user,c=e.selectedTodo,s=e.loader,a=this.props.selectTodo;return Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),Object(j.jsxs)("div",{className:"modal-card",children:[!t||s?Object(j.jsx)(x,{}):"",!s&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(c.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){a(0)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:c.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[c.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(t.email),children:t.name})]})]})]})]})]})}}]),c}(i.Component),g=function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(n.a)(this,c);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={todos:[],filteredTodos:[],loading:!0,todoId:0,qwery:""},e.handlechangeAll=function(){e.setState((function(e){return{filteredTodos:e.todos}}))},e.handlechangeCompleted=function(){e.setState((function(e){return{filteredTodos:e.todos.filter((function(e){return!0===e.completed}))}}))},e.handlechangeActive=function(){e.setState((function(e){return{filteredTodos:e.todos.filter((function(e){return!1===e.completed}))}}))},e.findQwery=function(t){var c=t.target.value;e.setState({qwery:c}),e.setState((function(e){return{filteredTodos:e.filteredTodos.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase().trim())}))}}))},e.resetQwery=function(){e.setState({qwery:""}),e.handlechangeAll()},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=this;v("/todos").then((function(t){e.setState({todos:t,filteredTodos:t,loading:!1})}))}},{key:"render",value:function(){var e=this,t=this.state,c=t.filteredTodos,s=t.loading,a=t.todoId,n=t.qwery;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(u,{qwery:n,findQwery:this.findQwery,changeCompleted:this.handlechangeCompleted,changeActive:this.handlechangeActive,changeAll:this.handlechangeAll,resetQwery:this.resetQwery})}),Object(j.jsxs)("div",{className:"block",children:[s?Object(j.jsx)(x,{}):"",Object(j.jsx)(h,{todos:c,selectedTodoID:a,selectTodo:function(t){e.setState({todoId:t})}})]})]})})}),0!==a&&Object(j.jsx)(N,{todos:c,selectedTodoID:a,selectTodo:function(t){e.setState({todoId:t})}})]})}}]),c}(d.a.Component);a.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.668149e7.chunk.js.map