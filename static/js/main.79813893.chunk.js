(this["webpackJsonpplanner-app"]=this["webpackJsonpplanner-app"]||[]).push([[0],{18:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var s,n,i=a(2),c=a.n(i),r=a(12),l=a.n(r),d=(a(18),a(19),a(5)),o=a(3),j=function(e,t){var a=new Date(e),s=new Date(t);return a.getFullYear()===s.getFullYear()&&(a.getMonth()===s.getMonth()&&a.getDate()===s.getDate())},u=function(e){var t=new Date;return new Date(t.setDate(t.getDate()-t.getDay()+e)).toUTCString()},b=function(e){var t=3e5,a=new Date(e);return new Date(Math.ceil(a.getTime()/t)*t).toUTCString().slice(17,22)},m=function(e,t){var a=3e5,s=new Date(e),n=new Date(Math.ceil(s.getTime()/a)*a);return new Date(n.getTime()+6e4*t).toUTCString().slice(17,22)};!function(e){e.MONDAY="Mon",e.TUESDAY="Tue",e.WEDNESDAY="Wed",e.THURSDAY="Thur",e.FRIDAY="Fri",e.SATURDAY="Sat",e.SUNDAY="Sun"}(s||(s={})),function(e){e.PAST="past",e.PRESENT="present",e.FUTURE="future"}(n||(n={}));var h=function(e,t){return e.filter((function(e){if(j(e.endDate,t))return e}))},O=function(e,t){return e.filter((function(e){var a=e.endTime.split(":"),s=Object(o.a)(a,2),n=s[0],i=s[1],c=t.split(":"),r=Object(o.a)(c,2),l=r[0],d=r[1];return parseInt(n)>parseInt(l)||parseInt(n)===parseInt(l)&&parseInt(i)>=parseInt(d)?e:void 0}))},p=function(e,t){return e.filter((function(e){var a=e.endTime.split(":"),s=Object(o.a)(a,2),n=s[0],i=s[1],c=t.split(":"),r=Object(o.a)(c,2),l=r[0],d=r[1];return parseInt(n)<parseInt(l)||parseInt(n)===parseInt(l)&&parseInt(i)<=parseInt(d)?e:void 0}))},x=function(e,t){var a=new Date(e),s=new Date(t);return a.getFullYear()<s.getFullYear()?n.FUTURE:a.getFullYear()>s.getFullYear()?n.PAST:a.getMonth()<s.getMonth()?n.FUTURE:a.getMonth()>s.getMonth()?n.PAST:a.getDate()<s.getDate()?n.FUTURE:a.getDate()>s.getDate()?n.PAST:n.PRESENT},f=function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<16;a++)e+=t.charAt(Math.floor(Math.random()*t.length));return e},v=function(){return"#"+Math.floor(16777215*Math.random()).toString(16)},k=function(e){return e.replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()}))},T=a(4),N=a(1),D=function(e){var t=e.date,a=e.formData,s=e.handleSubmit,n=e.style,c=Object(i.useState)(a||function(){return{id:f(),name:"",description:"",endDate:new Date(t).toISOString().substr(0,10),startTime:b(t),endTime:m(t,30),color:v()}}),r=Object(o.a)(c,2),l=r[0],d=r[1];return Object(N.jsxs)("form",{className:"add-task-form",action:"#",onSubmit:function(e){e.preventDefault(),s(l),d({id:f(),name:"",description:"",endDate:l.endDate,startTime:b((new Date).toUTCString()),endTime:m((new Date).toUTCString(),30),color:v()})},children:[Object(N.jsxs)("div",{className:"input-container",children:[Object(N.jsxs)("div",{className:"title-description-container",children:[Object(N.jsxs)("label",{className:"title-input-label",htmlFor:"title-input",children:["Title:",Object(N.jsx)("input",{id:"title-input",className:"title-input",value:l.name,type:"text",name:"title",placeholder:"Title",required:!0,onChange:function(e){d(Object(T.a)(Object(T.a)({},l),{},{name:e.target.value}))}})]}),Object(N.jsxs)("label",{className:"description-input-label",htmlFor:"description-input",children:["Description:",Object(N.jsx)("textarea",{id:"description-input",className:"description-input",value:l.description,name:"description",placeholder:"Description",required:!0,onChange:function(e){return d(Object(T.a)(Object(T.a)({},l),{},{description:e.target.value}))}})]})]}),Object(N.jsxs)("div",{className:"type-input-container",children:[Object(N.jsxs)("label",{htmlFor:"date-input",children:["Date:",Object(N.jsx)("input",{id:"date-input",className:"date-input",value:l.endDate,type:"date",name:"endDate",required:!0,onChange:function(e){d(Object(T.a)(Object(T.a)({},l),{},{endDate:e.target.value}))}})]}),Object(N.jsxs)("div",{className:"time-input",children:[Object(N.jsxs)("label",{htmlFor:"time-input-from",children:["From:",Object(N.jsx)("input",{id:"time-input-from",className:"time-input-from",value:l.startTime,type:"time",name:"startTime",required:!0,onChange:function(e){d(Object(T.a)(Object(T.a)({},l),{},{startTime:e.target.value}))}})]}),Object(N.jsxs)("label",{htmlFor:"time-input-to",children:["Until:",Object(N.jsx)("input",{id:"time-input-to",className:"time-input-to",value:l.endTime,type:"time",name:"endTime",required:!0,onChange:function(e){d(Object(T.a)(Object(T.a)({},l),{},{endTime:e.target.value}))}})]})]})]})]}),Object(N.jsx)("div",{className:"submit-btn-container",style:{borderTop:n.borderTop},children:Object(N.jsx)("button",{className:"submit-btn",style:{color:n.color},type:"submit",children:"Save Task"})})]})},S=a(13),g=a(9),y=a(10),U=function(e){var t=e.date,a=e.tasks,s=e.setTaskFormData,n=Object(i.useState)(a),c=Object(o.a)(n,2),r=c[0],l=c[1],j=Object(i.useState)(void 0),u=Object(o.a)(j,2),b=u[0],m=u[1],O=r.sort((function(e,t){return e.startTime>t.startTime?1:e.startTime<t.startTime?-1:0}));Object(i.useEffect)((function(){l(h(a,t))}),[t,a]);var p=function(e){var t=a.findIndex((function(t){return t.id===e.id}));s([].concat(Object(d.a)(a.slice(0,t)),[e],Object(d.a)(a.slice(t+1)))),m(void 0)},x={color:"black",borderTop:"1px solid rgb(195, 191, 255)"};return Object(N.jsxs)("div",{className:"daily-detail-container",children:[Object(N.jsx)("h2",{className:"chosen-date",children:t.slice(0,16)}),Object(N.jsx)("div",{className:"filtered-tasks",children:0!==r.length?O.map((function(e){return Object(N.jsxs)("div",{className:"task-container",children:[Object(N.jsxs)("div",{className:"sorted-task",children:[Object(N.jsxs)("div",{className:"task-title-disc",children:[Object(N.jsx)("h2",{children:k(e.name)}),Object(N.jsx)("p",{children:(t=e.description,t.replace(/(^\w{1})/g,(function(e){return e.toUpperCase()})))})]}),Object(N.jsx)("div",{className:"task-time",children:Object(N.jsxs)("p",{children:[e.startTime," - ",e.endTime]})}),Object(N.jsxs)("div",{className:"task-btn",children:[b===e.id?Object(N.jsxs)("button",{className:"task-edit-btn",onClick:function(){return m(void 0)},children:[Object(N.jsx)("span",{className:"visually-hidden",children:"collapse edit box"}),Object(N.jsx)(g.b,{className:"task-cancel-svg","aria-hidden":!0,focusable:!1})]}):Object(N.jsxs)("button",{className:"task-edit-btn",onClick:function(){return m(e.id)},children:[Object(N.jsx)("span",{className:"visually-hidden",children:"open edit box"}),Object(N.jsx)(S.a,{className:"task-edit-svg","aria-hidden":!0,focusable:!1})]}),Object(N.jsxs)("button",{className:"task-delete-btn",onClick:function(){return function(e){var t=a.findIndex((function(t){return t.id===e.id}));s([].concat(Object(d.a)(a.slice(0,t)),Object(d.a)(a.slice(t+1))))}(e)},children:[Object(N.jsx)("span",{className:"visually-hidden",children:"delete task"}),Object(N.jsx)(y.a,{className:"task-edit-svg","aria-hidden":!0,focusable:!1})]})]})]}),b===e.id&&Object(N.jsxs)("div",{className:"task-editor",children:[Object(N.jsx)("div",{className:"break"}),Object(N.jsx)(D,{formData:e,handleSubmit:p,date:e.endDate,style:x})]})]},f());var t})):Object(N.jsx)("h1",{className:"empty-tasks",children:"No Tasks"})})]})},A=(new Date).toUTCString(),w=A.slice(17,22),E=function(e){var t=e.handleDateUpdate,a=e.setIsModalVisible,s=e.handleClick,c=e.day,r=e.date,l=e.tasks,d=e.isActive,u=e.setActive,b=e.timeTense,m=Object(i.useState)(!1),h=Object(o.a)(m,2),x=h[0],f=h[1],v=Object(i.useState)(l),T=Object(o.a)(v,2),D=T[0],S=T[1],g=Object(i.useState)(l),U=Object(o.a)(g,2),E=U[0],F=U[1],Y=function(e){return e.slice(0,3)},C=D.sort((function(e,t){return e.startTime>t.startTime?1:e.startTime<t.startTime?-1:0}));Object(i.useEffect)((function(){var e=void 0;return b===n.PRESENT&&(S(O(l,w)),F(p(l,w)),e=window.setInterval((function(){S(O(l,w)),F(p(l,w))}),6e4)),function(){e&&clearInterval(e)}}),[l]);var I=function(e){return Object(N.jsxs)("div",{className:"daily-task",children:[Object(N.jsx)("h3",{className:"daily-task-title",children:k(e.name)}),Object(N.jsxs)("div",{className:"daily-task-date-range",children:[Object(N.jsx)("p",{children:e.startTime}),Object(N.jsx)("p",{children:"-"}),Object(N.jsx)("p",{children:e.endTime})]})]},e.id)};return Object(N.jsxs)("div",{className:d?"daily-overview-container active":"daily-overview-container",onMouseEnter:function(){f(!x)},onMouseLeave:function(){return f(!1)},onClick:function(e){e.preventDefault(),u(r),s(r),t(r)},tabIndex:0,children:[Object(N.jsxs)("div",{className:"daily-day-date-container container-child",children:[Object(N.jsx)("h1",{className:"daily-day",children:c}),Object(N.jsxs)("h2",{className:"daily-date-container",children:[Object(N.jsx)("span",{className:"daily-date",children:r.slice(4,7)}),Object(N.jsx)("span",{className:"daily-month",children:r.slice(8,11)})]}),j(r,A)&&Object(N.jsx)("h4",{className:"today-marker",children:"Today"})]}),Object(N.jsx)("div",{className:"daily-task-container container-child",children:function(){switch(b){case n.PAST:return Object(N.jsxs)("p",{className:"daily-task-placeholder",children:["Elapsed Tasks -"," ",Object(N.jsx)("span",{className:"tasks-length",children:l.length})]});case n.PRESENT:return 0===D.length?Object(N.jsxs)("p",{className:"daily-task-placeholder",children:["Elapsed Tasks -"," ",Object(N.jsx)("span",{className:"tasks-length",children:E.length})]}):Y(C).map((function(e){return I(e)}));case n.FUTURE:return 0===D.length?Object(N.jsx)("p",{className:"daily-task-placeholder",children:"No Tasks today"}):Y(C).map((function(e){return I(e)}))}}()}),(b===n.FUTURE||b===n.PRESENT)&&Object(N.jsx)("div",{className:x?"add-task-btn-container toggle-active":"add-task-btn-container",children:Object(N.jsx)("button",{className:"add-task-btn",onClick:function(e){e.preventDefault(),a(!0),t(r)},children:Object(N.jsx)(y.b,{className:"add-task-svg","aria-hidden":!0,focusable:!1})})})]})},F=a(7),Y=function(e){var t=e.setUpdateSelectedDate,a=e.setIsModalVisible,c=e.setSelectedDay,r=e.taskFormData,l=Object(i.useState)(1),d=Object(o.a)(l,2),j=d[0],b=d[1],m=(new Date).toUTCString(),O=Object(i.useState)(m),p=Object(o.a)(O,2),v=p[0],k=p[1],T=function(){return[[{day:s.SUNDAY,date:u(-7),tasks:h(r,u(-7)),timestate:n.PAST},{day:s.MONDAY,date:u(-6),tasks:h(r,u(-6)),timestate:n.PAST},{day:s.TUESDAY,date:u(-5),tasks:h(r,u(-5)),timestate:n.PAST},{day:s.WEDNESDAY,date:u(-4),tasks:h(r,u(-4)),timestate:n.PAST},{day:s.THURSDAY,date:u(-3),tasks:h(r,u(-3)),timestate:n.PAST},{day:s.FRIDAY,date:u(-2),tasks:h(r,u(-2)),timestate:n.PAST},{day:s.SATURDAY,date:u(-1),tasks:h(r,u(-1)),timestate:n.PAST}],[{day:s.SUNDAY,date:u(0),tasks:h(r,u(0)),timestate:x(m,u(0))},{day:s.MONDAY,date:u(1),tasks:h(r,u(1)),timestate:x(m,u(1))},{day:s.TUESDAY,date:u(2),tasks:h(r,u(2)),timestate:x(m,u(2))},{day:s.WEDNESDAY,date:u(3),tasks:h(r,u(3)),timestate:x(m,u(3))},{day:s.THURSDAY,date:u(4),tasks:h(r,u(4)),timestate:x(m,u(4))},{day:s.FRIDAY,date:u(5),tasks:h(r,u(5)),timestate:x(m,u(5))},{day:s.SATURDAY,date:u(6),tasks:h(r,u(6)),timestate:x(m,u(6))}],[{day:s.SUNDAY,date:u(7),tasks:h(r,u(7)),timestate:n.FUTURE},{day:s.MONDAY,date:u(8),tasks:h(r,u(8)),timestate:n.FUTURE},{day:s.TUESDAY,date:u(9),tasks:h(r,u(9)),timestate:n.FUTURE},{day:s.WEDNESDAY,date:u(10),tasks:h(r,u(10)),timestate:n.FUTURE},{day:s.THURSDAY,date:u(11),tasks:h(r,u(11)),timestate:n.FUTURE},{day:s.FRIDAY,date:u(12),tasks:h(r,u(12)),timestate:n.FUTURE},{day:s.SATURDAY,date:u(13),tasks:h(r,u(13)),timestate:n.FUTURE}]]},D=Object(i.useState)(T),S=Object(o.a)(D,2),g=S[0],y=S[1],U=function(){j>0&&b(j-1)},A=function(){j<g.length-1&&b(j+1)};return Object(i.useEffect)((function(){y(T())}),[r]),Object(N.jsxs)("aside",{className:"weekly-overview-container",tabIndex:-1,children:[Object(N.jsxs)("div",{className:"btn-group",children:[j<1?Object(N.jsxs)("button",{id:"prev-week",onClick:U,disabled:!0,children:[Object(N.jsx)("span",{className:"visually-hidden",children:"previous week"}),Object(N.jsx)(F.a,{className:"prev-svg","aria-hidden":!0,focusable:!1})]}):Object(N.jsxs)("button",{id:"prev-week",onClick:U,children:[Object(N.jsx)("span",{className:"visually-hidden",children:"previous week"}),Object(N.jsx)(F.a,{className:"prev-svg","aria-hidden":!0,focusable:!1})]}),function(){switch(j){case 0:return Object(N.jsxs)("p",{className:"selected-week",children:[Object(N.jsx)("span",{className:"selected-week-option",children:"Last"})," Week"]});case 1:return Object(N.jsxs)("p",{className:"selected-week",children:[Object(N.jsx)("span",{className:"selected-week-option",children:"Current"})," ","Week"]});case 2:return Object(N.jsxs)("p",{className:"selected-week",children:[Object(N.jsx)("span",{className:"selected-week-option",children:"Next"})," Week"]})}}(),j>1?Object(N.jsxs)("button",{id:"next-week",onClick:A,disabled:!0,children:[Object(N.jsx)("span",{className:"visually-hidden",children:"next week"}),Object(N.jsx)(F.b,{className:"next-svg","aria-hidden":!0,focusable:!1})]}):Object(N.jsxs)("button",{id:"next-week",onClick:A,children:[Object(N.jsx)("span",{className:"visually-hidden",children:"next week"}),Object(N.jsx)(F.b,{className:"next-svg","aria-hidden":!0,focusable:!1})]})]}),Object(N.jsx)("div",{className:"days",children:g[j].map((function(e){return Object(N.jsx)(E,{handleClick:c,handleDateUpdate:t,day:e.day,date:e.date,tasks:e.tasks,timeTense:e.timestate,setIsModalVisible:a,isActive:v===e.date,setActive:k},f())}))})]})},C=function(e,t){var a=Object(i.useState)((function(){var a=localStorage.getItem(e);return a?JSON.parse(a):t})),s=Object(o.a)(a,2),n=s[0],c=s[1];return Object(i.useEffect)((function(){n&&localStorage.setItem(e,JSON.stringify(n))}),[n]),[n,c]},I=function(e){var t=e.modal,a=e.children,s=e.handleClose;return Object(N.jsxs)("div",{className:t,children:[Object(N.jsx)("button",{className:"close-btn",onClick:s,children:Object(N.jsx)(g.a,{"aria-hidden":!0,focusable:!1})}),a]})},R=function(){var e=Object(i.useState)((new Date).toUTCString()),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(i.useState)((new Date).toUTCString()),c=Object(o.a)(n,2),r=c[0],l=c[1],j=C("taskList",[]),u=Object(o.a)(j,2),b=u[0],m=u[1],h=Object(i.useState)(!1),O=Object(o.a)(h,2),p=O[0],x=O[1];return Object(N.jsxs)("div",{id:"weekly-calender-container",children:[Object(N.jsx)(Y,{setIsModalVisible:x,setSelectedDay:s,setUpdateSelectedDate:l,taskFormData:b}),p&&Object(N.jsx)(I,{modal:"additional-task-modal",handleClose:function(){return x(!1)},children:Object(N.jsx)(D,{formData:void 0,handleSubmit:function(e){m([].concat(Object(d.a)(b),[e])),x(!1)},date:r,style:{color:"white",borderTop:"1px solid white"}},(new Date).toUTCString())}),Object(N.jsx)(U,{date:a,tasks:b,setTaskFormData:m})]})};var M=function(){return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)("header",{className:"title-bar",children:Object(N.jsx)("h1",{children:"Planner"})}),Object(N.jsx)(R,{})]})};l.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(M,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.79813893.chunk.js.map