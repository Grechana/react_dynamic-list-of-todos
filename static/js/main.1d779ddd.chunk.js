(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var s,n=c(9),a=c.n(n),o=c(3),r=c(4),i=c(7),l=c(6),d=(c(14),c(15),c(1)),u=c.n(d),j=c(0),h=function(e){var t=e.todos,c=e.selectTodo,s=e.selectedTodoId;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),Object(j.jsx)("td",{className:"is-vcentered",children:e.completed?Object(j.jsx)("span",{className:"icon","data-cy":"completed",children:Object(j.jsx)("i",{className:"fas fa-check"})}):""}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:s===e.id?Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(0)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"far fa-eye-slash"})})}):Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(e.id)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var f=function(e){var t=e.changeCompleted,c=e.changeActive,n=e.changeAll,a=e.query,o=e.findQuery,r=e.resetQuery;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){switch(e.target.value){case s.All:n();break;case s.Active:c();break;case s.Completed:t()}},children:[Object(j.jsx)("option",{value:s.All,children:"All"}),Object(j.jsx)("option",{value:s.Active,children:"Active"}),Object(j.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:o}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:a&&Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:r})})]})]})},m=c(5),b=c(2),p=c.n(b),x=(c(18),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),y="https://mate-academy.github.io/react_dynamic-list-of-todos/api";function O(e){return new Promise((function(t){setTimeout(t,e)}))}function v(e){return N.apply(this,arguments)}function N(){return(N=Object(m.a)(p.a.mark((function e(t){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=y+t+".json",e.next=3,O(300);case 3:return e.abrupt("return",fetch(c).then((function(e){return e.json()})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=function(e){Object(i.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={user:{},selectedTodo:{},loader:!0},e}return Object(r.a)(c,[{key:"componentDidMount",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t,c,s,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,c=t.todos,s=t.selectedTodoId,!(n=c.find((function(e){return e.id===s})))){e.next=7;break}return e.next=5,o=n.userId,v("/users/".concat(o));case 5:a=e.sent,this.setState({user:a,selectedTodo:n,loader:!1});case 7:case"end":return e.stop()}var o}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.user,c=e.selectedTodo,s=e.loader,n=this.props.selectTodo,a=c.id,o=c.title,r=c.completed,i=t.email,l=t.name;return Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),Object(j.jsxs)("div",{className:"modal-card",children:[!t||s?Object(j.jsx)(x,{}):"",!s&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(a)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){n(0)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:o}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[r?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(i),children:l})]})]})]})]})]})}}]),c}(d.Component),C=function(e){Object(i.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={todos:[],queryTodos:[],loading:!0,todoId:0,query:"",filter:""},e.handleChangeAll=function(){e.setState((function(e){return{queryTodos:e.todos,filter:""}})),e.state.query&&e.setState((function(t){return{queryTodos:t.todos.filter((function(t){return t.title.toLowerCase().includes(e.state.query.toLowerCase().trim())})),filter:""}}))},e.handleChangeCompleted=function(){e.setState((function(e){return{queryTodos:e.todos.filter((function(e){return e.completed})),filter:"completed"}})),e.state.query&&e.setState((function(t){return{queryTodos:t.todos.filter((function(e){return e.completed})).filter((function(t){return t.title.toLowerCase().includes(e.state.query.toLowerCase().trim())})),filter:"completed"}}))},e.handleChangeActive=function(){e.setState((function(e){return{queryTodos:e.todos.filter((function(e){return!e.completed})),filter:"active"}})),e.state.query&&e.setState((function(t){return{queryTodos:t.todos.filter((function(e){return!e.completed})).filter((function(t){return t.title.toLowerCase().includes(e.state.query.toLowerCase().trim())})),filter:"active"}}))},e.findQuery=function(t){var c=t.target.value;e.setState({query:c}),"active"===e.state.filter?e.setState((function(e){return{queryTodos:e.todos.filter((function(e){return!e.completed})).filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase().trim())}))}})):"completed"===e.state.filter?e.setState((function(e){return{queryTodos:e.todos.filter((function(e){return e.completed})).filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase().trim())}))}})):e.setState((function(e){return{queryTodos:e.todos.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase().trim())}))}}))},e.resetQuery=function(){e.setState((function(e){return{queryTodos:e.todos,query:""}})),"active"===e.state.filter&&e.setState((function(e){return{queryTodos:e.todos.filter((function(e){return!e.completed}))}})),"completed"===e.state.filter&&e.setState((function(e){return{queryTodos:e.todos.filter((function(e){return e.completed}))}}))},e}return Object(r.a)(c,[{key:"componentDidMount",value:function(){var e=this;v("/todos").then((function(t){e.setState({todos:t,queryTodos:t,loading:!1})}))}},{key:"render",value:function(){var e=this,t=this.state,c=t.queryTodos,s=t.loading,n=t.todoId,a=t.query;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(f,{query:a,findQuery:this.findQuery,changeCompleted:this.handleChangeCompleted,changeActive:this.handleChangeActive,changeAll:this.handleChangeAll,resetQuery:this.resetQuery})}),Object(j.jsx)("div",{className:"block",children:s?Object(j.jsx)(x,{}):Object(j.jsx)(h,{todos:c,selectedTodoId:n,selectTodo:function(t){e.setState({todoId:t})}})})]})})}),!!n&&Object(j.jsx)(g,{todos:c,selectedTodoId:n,selectTodo:function(t){e.setState({todoId:t})}})]})}}]),c}(u.a.Component);a.a.render(Object(j.jsx)(C,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1d779ddd.chunk.js.map