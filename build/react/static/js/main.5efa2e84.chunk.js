(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e){e.exports=[{msg:"Item 1"},{msg:"Item 2"},{msg:"Item 3"},{msg:"Item 4"},{msg:"Item 5"},{msg:"Item 6"},{msg:"Item 7"},{msg:"Item 8"},{msg:"Item 9"},{msg:"Item 10"},{msg:"Item 11"},{msg:"Item 12"},{msg:"Item 13"},{msg:"Item 14"},{msg:"Item 15"},{msg:"Item 16"},{msg:"Item 17"},{msg:"Item 18"},{msg:"Item 19"},{msg:"Item 20"},{msg:"Item 21"},{msg:"Item 22"},{msg:"Item 23"},{msg:"Item 24"},{msg:"Item 25"},{msg:"Item 26"},{msg:"Item 27"},{msg:"Item 28"},{msg:"Item 29"},{msg:"Item 30"},{msg:"Item 31"},{msg:"Item 32"},{msg:"Item 33"},{msg:"Item 34"},{msg:"Item 35"},{msg:"Item 36"},{msg:"Item 37"},{msg:"Item 38"},{msg:"Item 39"},{msg:"Item 40"},{msg:"Item 41"},{msg:"Item 42"},{msg:"Item 43"},{msg:"Item 44"},{msg:"Item 45"},{msg:"Item 46"},{msg:"Item 47"},{msg:"Item 48"},{msg:"Item 49"},{msg:"Item 50"}]},23:function(e,t,o){e.exports=o(40)},28:function(e,t,o){},29:function(e,t,o){},38:function(e,t,o){},39:function(e,t,o){},40:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),s=o(19),m=o.n(s),c=(o(28),o(12)),l=o(10),r=o(5),i=o(6),d=o(8),u=o(7),g=o(9),I=(o(29),function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("nav",{className:"menu-nav"},a.a.createElement("ul",{className:"menu-links"},a.a.createElement("li",null,a.a.createElement(c.b,{exact:!0,to:"/"},"ToDos")),a.a.createElement("li",null,a.a.createElement(c.b,{exact:!0,to:"/concluidos"},"Conclu\xeddos"))))}}]),t}(n.Component)),p=(o(38),function(e){function t(){var e,o;Object(r.a)(this,t);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(o=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).removeTodo=function(){o.props.removeTodo(o.props.todo)},o.editTodo=function(){o.props.editTodo(o.props.todo)},o.doneTodo=function(){o.props.doneTodo(o.props.todo)},o}return Object(g.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.editable?a.a.createElement("li",{className:"todo-item"},a.a.createElement("button",{className:"btn btn-outline-danger",onClick:this.removeTodo},"X"),a.a.createElement("button",{className:"btn btn-outline-warning",onClick:this.editTodo},"Edit"),a.a.createElement("span",{className:"todo-text"},this.props.todo.msg),a.a.createElement("button",{className:"btn btn-outline-success",onClick:this.doneTodo},"OK")):a.a.createElement("li",null,a.a.createElement("span",{className:"todo-text"},this.props.todo.msg))}}]),t}(n.Component)),f=(o(39),function(e){function t(e){var o;return Object(r.a)(this,t),(o=Object(d.a)(this,Object(u.a)(t).call(this,e))).newTodo=function(){o.props.newTodo({msg:o.state.newTodo}),o.setState({newTodo:""})},o.updateInputValue=function(e){o.setState({newTodo:e.target.value})},o.state={newTodo:""},o}return Object(g.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("form",{className:"todo-input"},a.a.createElement("input",{type:"text",value:this.state.newTodo,onChange:this.updateInputValue,placeholder:"Digite um todo"}),a.a.createElement("button",{type:"button",className:"btn btn-outline-success",onClick:this.newTodo},"Adicionar"))}}]),t}(n.Component)),b=function(e){function t(e){var o;return Object(r.a)(this,t),(o=Object(d.a)(this,Object(u.a)(t).call(this,e))).removeTodo=function(e){var t=o.state.todos;t.splice(t.indexOf(e),1),o.setState({todos:t}),localStorage.setItem("listaTodos",JSON.stringify(t))},o.editTodo=function(e){var t=o.state.todos,n={msg:prompt("Informe o novo texto do item:",e.msg)||e.msg};t.splice(t.indexOf(e),1,n),o.setState({todos:t}),localStorage.setItem("listaTodos",JSON.stringify(t))},o.doneTodo=function(e){var t=o.state.todos,n=JSON.parse(localStorage.getItem("listaTodosDone"))||[];t.splice(t.indexOf(e),1),o.setState({todos:t}),localStorage.setItem("listaTodos",JSON.stringify(t)),n.push(e),localStorage.setItem("listaTodosDone",JSON.stringify(n))},o.newTodo=function(e){var t=o.state.todos;t.unshift(e),o.setState({todos:t}),localStorage.setItem("listaTodos",JSON.stringify(t))},o.state={todos:JSON.parse(localStorage.getItem("listaTodos"))||[]},o}return Object(g.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"center-flex"},a.a.createElement(I,null),a.a.createElement("div",{className:"todos center-flex"},a.a.createElement("h1",null," Lista de Tarefas ")," ",a.a.createElement(f,{newTodo:this.newTodo}),a.a.createElement("ul",null,this.state.todos.map(function(t,o){return a.a.createElement(p,{key:o,todo:t,doneTodo:e.doneTodo,editTodo:e.editTodo,removeTodo:e.removeTodo,editable:!0})}))))}}]),t}(n.Component),T=function(e){function t(e){var o;return Object(r.a)(this,t),(o=Object(d.a)(this,Object(u.a)(t).call(this,e))).clearDoneTodos=function(){o.setState({todos:[]}),localStorage.setItem("listaTodosDone",JSON.stringify(o.state.todos))},o.state={todos:JSON.parse(localStorage.getItem("listaTodosDone"))||[]},o}return Object(g.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"center-flex"},a.a.createElement(I,null),a.a.createElement("div",{className:"todos center-flex"},a.a.createElement("h1",null,"Tarefas Conclu\xeddas",a.a.createElement("button",{className:"btn btn-outline-danger",onClick:this.clearDoneTodos},"Limpar")),a.a.createElement("ul",{className:"item-done"},this.state.todos.map(function(e,t){return a.a.createElement(p,{key:t,todo:e})}))))}}]),t}(n.Component),h=o(22);localStorage.setItem("listaTodos",JSON.stringify(h)),localStorage.setItem("listaTodosDone","[]"),m.a.render(a.a.createElement(c.a,null,a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/",exact:!0,component:b}),a.a.createElement(l.a,{path:"/concluidos",component:T}))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.5efa2e84.chunk.js.map