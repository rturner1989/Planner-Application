(this["webpackJsonpplanner-app"]=this["webpackJsonpplanner-app"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n,c,s=a(2),r=a.n(s),i=a(10),d=a.n(i),l=(a(16),a(17),a(6)),o=a(3),j=function(e,t){var a=new Date(e),n=new Date(t);return a.getFullYear()===n.getFullYear()&&(a.getMonth()===n.getMonth()&&a.getDate()===n.getDate())},u=function(e){var t=new Date;return new Date(t.setDate(t.getDate()-t.getDay()+e)).toUTCString()},b=function(e){var t=3e5,a=new Date(e);return new Date(Math.ceil(a.getTime()/t)*t).toUTCString().slice(17,22)},O=function(e,t){var a=3e5,n=new Date(e),c=new Date(Math.ceil(n.getTime()/a)*a);return new Date(c.getTime()+6e4*t).toUTCString().slice(17,22)};!function(e){e.MONDAY="Mon",e.TUESDAY="Tue",e.WEDNESDAY="Wed",e.THURSDAY="Thur",e.FRIDAY="Fri",e.SATURDAY="Sat",e.SUNDAY="Sun"}(n||(n={})),function(e){e.PAST="past",e.PRESENT="present",e.FUTURE="future"}(c||(c={}));var h=function(e,t){return e.filter((function(e){if(j(e.endDate,t))return e}))},m=function(e,t){return e.filter((function(e){var a=e.endTime.split(":"),n=Object(o.a)(a,2),c=n[0],s=n[1],r=t.split(":"),i=Object(o.a)(r,2),d=i[0],l=i[1];return parseInt(c)>parseInt(d)||parseInt(c)===parseInt(d)&&parseInt(s)>=parseInt(l)?e:void 0}))},f=function(e,t){return e.filter((function(e){var a=e.endTime.split(":"),n=Object(o.a)(a,2),c=n[0],s=n[1],r=t.split(":"),i=Object(o.a)(r,2),d=i[0],l=i[1];return parseInt(c)<parseInt(d)||parseInt(c)===parseInt(d)&&parseInt(s)<=parseInt(l)?e:void 0}))},p=function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<16;a++)e+=t.charAt(Math.floor(Math.random()*t.length));return e},D=function(){return"#"+Math.floor(16777215*Math.random()).toString(16)},x=function(e){return e.replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()}))},T=a(4),v=a(1),S=function(e){var t=e.date,a=e.formData,n=e.handleSubmit,c=Object(s.useState)(a||function(){return{id:p(),name:"",description:"",endDate:new Date(t).toISOString().substr(0,10),startTime:b(t),endTime:O(t,30),color:D()}}),r=Object(o.a)(c,2),i=r[0],d=r[1];return Object(v.jsxs)("form",{className:"add-task-form",action:"#",onSubmit:function(e){e.preventDefault(),n(i),d({id:p(),name:"",description:"",endDate:i.endDate,startTime:b((new Date).toUTCString()),endTime:O((new Date).toUTCString(),30),color:D()})},children:[Object(v.jsxs)("div",{className:"title-description-container",children:[Object(v.jsxs)("label",{className:"title-input",htmlFor:"",children:["Title:",Object(v.jsx)("input",{value:i.name,type:"text",name:"title",placeholder:"Title",required:!0,onChange:function(e){d(Object(T.a)(Object(T.a)({},i),{},{name:e.target.value}))}})]}),Object(v.jsxs)("label",{className:"description-input",htmlFor:"",children:["Description:",Object(v.jsx)("textarea",{value:i.description,name:"description",placeholder:"Description",required:!0,onChange:function(e){return d(Object(T.a)(Object(T.a)({},i),{},{description:e.target.value}))}})]})]}),Object(v.jsxs)("div",{className:"type-input-container",children:[Object(v.jsxs)("label",{htmlFor:"",children:["Date:",Object(v.jsx)("input",{value:i.endDate,type:"date",name:"endDate",required:!0,onChange:function(e){d(Object(T.a)(Object(T.a)({},i),{},{endDate:e.target.value}))}})]}),Object(v.jsxs)("label",{htmlFor:"",children:["Start Time:",Object(v.jsx)("input",{value:i.startTime,type:"time",name:"startTime",required:!0,onChange:function(e){d(Object(T.a)(Object(T.a)({},i),{},{startTime:e.target.value}))}})]}),Object(v.jsxs)("label",{htmlFor:"",children:["End Time:",Object(v.jsx)("input",{value:i.endTime,type:"time",name:"endTime",required:!0,onChange:function(e){d(Object(T.a)(Object(T.a)({},i),{},{endTime:e.target.value}))}})]})]}),Object(v.jsx)("button",{className:"submit-btn",type:"submit",children:"Save"})]})},k=function(e){var t=e.date,a=e.tasks,n=e.setTaskFormData,c=Object(s.useState)(a),r=Object(o.a)(c,2),i=r[0],d=r[1],j=Object(s.useState)(void 0),u=Object(o.a)(j,2),b=u[0],O=u[1],m=i.sort((function(e,t){return e.startTime>t.startTime?1:e.startTime<t.startTime?-1:0}));Object(s.useEffect)((function(){d(h(a,t))}),[t,a]);var f=function(e){var t=a.findIndex((function(t){return t.id===e.id}));n([].concat(Object(l.a)(a.slice(0,t)),[e],Object(l.a)(a.slice(t+1))))};return Object(v.jsxs)("div",{className:"daily-detail-container",children:[Object(v.jsx)("div",{className:"chosen-date",children:t}),Object(v.jsx)("div",{className:"filtered-tasks",children:0!==i.length?m.map((function(e){return Object(v.jsxs)("div",{className:"task-container",children:[Object(v.jsxs)("div",{className:"sorted-task",children:[Object(v.jsx)("h1",{children:x(e.name)}),Object(v.jsx)("p",{children:e.description}),Object(v.jsxs)("p",{children:["Start: ",e.startTime]}),Object(v.jsxs)("p",{children:["End: ",e.endTime]}),Object(v.jsx)("button",{onClick:function(){return O(e.id)},children:"edit"})]}),b===e.id&&Object(v.jsxs)("div",{children:[Object(v.jsx)(S,{formData:e,handleSubmit:f,date:e.endDate}),Object(v.jsx)("button",{onClick:function(){return O(void 0)},children:"cancel"})]})]},p())})):Object(v.jsx)("h1",{children:"No Tasks"})})]})},g=a(11),y=(new Date).toUTCString(),N=y.slice(17,22),U=function(e){var t=e.handleDateUpdate,a=e.setIsModalVisible,n=e.handleClick,r=e.day,i=e.date,d=e.tasks,l=Object(s.useState)(!1),u=Object(o.a)(l,2),b=u[0],O=u[1],h=Object(s.useState)(d),p=Object(o.a)(h,2),D=p[0],T=p[1],S=Object(s.useState)(d),k=Object(o.a)(S,2),U=k[0],A=k[1],E=Object(s.useState)((function(){return function(e,t){var a=new Date(e),n=new Date(t);return a.getFullYear()<n.getFullYear()?c.FUTURE:a.getFullYear()>n.getFullYear()?c.PAST:a.getMonth()<n.getMonth()?c.FUTURE:a.getMonth()>n.getMonth()?c.PAST:a.getDate()<n.getDate()?c.FUTURE:a.getDate()>n.getDate()?c.PAST:c.PRESENT}(y,i)})),Y=Object(o.a)(E,2),w=Y[0],I=(Y[1],function(e){return e.slice(0,3)}),C=D.sort((function(e,t){return e.startTime>t.startTime?1:e.startTime<t.startTime?-1:0}));Object(s.useEffect)((function(){var e=void 0;return w===c.PRESENT&&(T(m(d,N)),A(f(d,N)),e=window.setInterval((function(){T(m(d,N)),A(f(d,N))}),6e4)),function(){e&&clearInterval(e)}}),[d]);var F=function(e){return Object(v.jsxs)("div",{className:"daily-task",children:[Object(v.jsx)("h3",{className:"daily-task-title",children:x(e.name)}),Object(v.jsxs)("div",{className:"daily-task-date-range",children:[Object(v.jsx)("p",{children:e.startTime}),Object(v.jsx)("p",{children:"-"}),Object(v.jsx)("p",{children:e.endTime})]})]},e.id)},M=Object(s.useRef)(null);return Object(s.useEffect)((function(){M.current&&M.current.scrollIntoView({block:"center"})}),[]),Object(v.jsxs)("div",{className:j(i,y)?"daily-overview-container active":"daily-overview-container",onMouseEnter:function(){O(!b)},onMouseLeave:function(){return O(!1)},ref:j(i,y)?M:null,children:[Object(v.jsxs)("div",{className:"daily-day-date-container container-child",children:[Object(v.jsx)("h1",{className:"daily-day",children:r}),Object(v.jsx)("h2",{className:"daily-date",children:i.slice(4,11)}),j(i,y)&&Object(v.jsx)("h4",{className:"today-marker",children:"Today"})]}),Object(v.jsx)("div",{className:"daily-task-container container-child",onClick:function(){n(i),t(i)},children:function(){switch(w){case c.PAST:return Object(v.jsxs)("div",{className:"daily-task-placeholder",children:[Object(v.jsx)("p",{children:"Past"}),Object(v.jsxs)("p",{children:["Tasks - ",d.length]})]});case c.PRESENT:return 0===D.length?Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"Present"}),Object(v.jsxs)("p",{children:["ElapsedTasks - ",U.length]})]}):I(C).map((function(e){return F(e)}));case c.FUTURE:return 0===D.length?Object(v.jsx)("div",{children:Object(v.jsx)("p",{children:"No Tasks today"})}):I(C).map((function(e){return F(e)}))}}()}),(w===c.FUTURE||w===c.PRESENT)&&Object(v.jsx)("div",{className:b?"add-task-btn-container toggle-active":"add-task-btn-container",children:Object(v.jsx)("button",{onClick:function(){a(!0),t(i)},children:Object(v.jsx)(g.a,{})})})]})},A=a(9),E=function(e){var t=e.setUpdateSelectedDate,a=e.setIsModalVisible,c=e.setSelectedDay,r=e.taskFormData,i=Object(s.useState)(1),d=Object(o.a)(i,2),l=d[0],j=d[1],b=function(){return[[{day:n.SUNDAY,date:u(-7),tasks:h(r,u(-7))},{day:n.MONDAY,date:u(-6),tasks:h(r,u(-6))},{day:n.TUESDAY,date:u(-5),tasks:h(r,u(-5))},{day:n.WEDNESDAY,date:u(-4),tasks:h(r,u(-4))},{day:n.THURSDAY,date:u(-3),tasks:h(r,u(-3))},{day:n.FRIDAY,date:u(-2),tasks:h(r,u(-2))},{day:n.SATURDAY,date:u(-1),tasks:h(r,u(-1))}],[{day:n.SUNDAY,date:u(0),tasks:h(r,u(0))},{day:n.MONDAY,date:u(1),tasks:h(r,u(1))},{day:n.TUESDAY,date:u(2),tasks:h(r,u(2))},{day:n.WEDNESDAY,date:u(3),tasks:h(r,u(3))},{day:n.THURSDAY,date:u(4),tasks:h(r,u(4))},{day:n.FRIDAY,date:u(5),tasks:h(r,u(5))},{day:n.SATURDAY,date:u(6),tasks:h(r,u(6))}],[{day:n.SUNDAY,date:u(7),tasks:h(r,u(7))},{day:n.MONDAY,date:u(8),tasks:h(r,u(8))},{day:n.TUESDAY,date:u(9),tasks:h(r,u(9))},{day:n.WEDNESDAY,date:u(10),tasks:h(r,u(10))},{day:n.THURSDAY,date:u(11),tasks:h(r,u(11))},{day:n.FRIDAY,date:u(12),tasks:h(r,u(12))},{day:n.SATURDAY,date:u(13),tasks:h(r,u(13))}]]},O=Object(s.useState)(b),m=Object(o.a)(O,2),f=m[0],D=m[1];return Object(s.useEffect)((function(){D(b())}),[r]),Object(v.jsxs)("div",{className:"weekly-overview-container",children:[Object(v.jsxs)("div",{className:"btn-group",children:[Object(v.jsx)("button",{onClick:function(){l>0&&j(l-1)},children:Object(v.jsx)(A.a,{})}),function(){switch(l){case 0:return Object(v.jsx)("p",{children:"Last Week"});case 1:return Object(v.jsx)("p",{children:"This Week"});case 2:return Object(v.jsx)("p",{children:"Next Week"})}}(),Object(v.jsx)("button",{onClick:function(){l<f.length-1&&j(l+1)},children:Object(v.jsx)(A.b,{})})]}),Object(v.jsx)("div",{className:"days",children:f[l].map((function(e){return Object(v.jsx)(U,{handleClick:c,handleDateUpdate:t,day:e.day,date:e.date,tasks:e.tasks,setIsModalVisible:a},p())}))})]})},Y=function(e,t){var a=Object(s.useState)((function(){var a=localStorage.getItem(e);return a?JSON.parse(a):t})),n=Object(o.a)(a,2),c=n[0],r=n[1];return Object(s.useEffect)((function(){c&&localStorage.setItem(e,JSON.stringify(c))}),[c]),[c,r]},w=function(e){var t=e.modal,a=e.children,n=e.handleClose;return Object(v.jsxs)("div",{className:t,children:[Object(v.jsx)("button",{className:"close-btn",onClick:n,children:"Close"}),a]})},I=function(){var e=Object(s.useState)((new Date).toUTCString()),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)((new Date).toUTCString()),r=Object(o.a)(c,2),i=r[0],d=r[1],j=Y("taskList",[]),u=Object(o.a)(j,2),b=u[0],O=u[1],h=Object(s.useState)(!1),m=Object(o.a)(h,2),f=m[0],p=m[1];return Object(v.jsxs)("div",{id:"weekly-calender-container",children:[Object(v.jsx)(E,{setIsModalVisible:p,setSelectedDay:n,setUpdateSelectedDate:d,taskFormData:b}),f&&Object(v.jsx)(w,{modal:"additional-task-modal",handleClose:function(){return p(!1)},children:Object(v.jsx)(S,{formData:void 0,handleSubmit:function(e){O([].concat(Object(l.a)(b),[e]))},date:i},(new Date).toUTCString())}),Object(v.jsx)(k,{date:a,tasks:b,setTaskFormData:O})]})};var C=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("div",{className:"title-bar",children:Object(v.jsx)("h1",{children:"Planner"})}),Object(v.jsx)(I,{})]})};d.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(C,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.6687d5cd.chunk.js.map