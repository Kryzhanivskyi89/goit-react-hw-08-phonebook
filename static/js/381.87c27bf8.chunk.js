"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[381],{3381:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var a=n(2791),r=n(9434),s=n(6907),i=n(208),c=function(e){return e.contacts.contactsList},o=function(e){return e.contacts.isLoading},u=function(e){return e.contacts.error},l=function(e){return e.filter},m=n(4942),d=n(1413),f=n(9439),h=n(1686),p=n.n(h),b="ContactForm_title__jZguf",x="ContactForm_input__Bl93P",_="ContactForm_button__eSwX9",v=n(184),j=function(){var e=(0,r.I0)(),t=(0,a.useState)({name:"",number:""}),n=(0,f.Z)(t,2),s=n[0],o=n[1],u=function(e){var t=e.target,n=t.name,a=t.value;o((function(e){return(0,d.Z)((0,d.Z)({},e),{},(0,m.Z)({},n,a))}))},l=s.name,h=s.number,j=(0,r.v9)(c).some((function(e){return e.name.toLowerCase()===s.name.toLowerCase()||e.number===s.number}));return(0,v.jsxs)("form",{onSubmit:function(t){t.preventDefault(),j?p().Notify.warning("This contact already exists"):e((0,i.uK)(s))&&o((function(){return{name:"",number:""}}))},children:[(0,v.jsxs)("label",{className:b,children:[" Name",(0,v.jsx)("input",{className:x,type:"text",name:"name",value:l,id:"contactName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:u,required:!0})]}),(0,v.jsxs)("label",{className:b,children:["Number",(0,v.jsx)("input",{className:x,type:"tel",id:"contactNumber",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:h,onChange:u,required:!0})]}),(0,v.jsx)("button",{className:_,type:"submit",children:"Add contact"})]})},C=n(4691);var N=function(){return(0,v.jsx)(C.fe,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"loading",wrapperStyle:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",margin:"0 auto",position:"fixed",top:"0",left:"0",right:"0",bottom:"0",zIndex:"9999"},wrapperClass:"",visible:!0})},g="ContactList_list__csErn",y="ContactList_item__EZYHO",w="ContactList_button__7kL4l",L=function(){var e=(0,r.I0)();(0,a.useEffect)((function(){e((0,i.yF)())}),[e]);var t=(0,r.v9)(o),n=(0,r.v9)(u),s=(0,r.v9)(c),m=(0,r.v9)(l);return(0,v.jsxs)("ul",{className:g,children:[t&&!n&&(0,v.jsx)(N,{}),!t&&!n&&function(e){return e.filter((function(e){return e.name.toLowerCase().includes(m.toLowerCase())}))}(s).map((function(t){var n=t.id,a=t.name,r=t.number;return(0,v.jsxs)("li",{className:y,children:[(0,v.jsxs)("p",{children:[a,": ",r]}),(0,v.jsx)("button",{className:w,type:"button",onClick:function(){return e((0,i.GK)(n))},children:"Delete contact"})]},n)}))]})},Z="Filter_name__ZiNRr",F="Filter_input__N7T3z",k=n(4808),z=function(){var e=(0,r.v9)(l),t=(0,r.I0)();return(0,v.jsxs)("label",{className:Z,children:["Find contacts by name",(0,v.jsx)("input",{className:F,type:"text",value:e,onChange:function(e){t((0,k.T)(e.target.value))}})]})};function A(){var e=(0,r.I0)(),t=(0,r.v9)(o);return(0,a.useEffect)((function(){e((0,i.yF)())}),[e]),(0,v.jsxs)(s.B6,{children:[(0,v.jsx)(s.ql,{children:(0,v.jsx)("title",{children:"Your Contacts"})}),(0,v.jsx)(j,{}),(0,v.jsx)(z,{}),(0,v.jsx)("div",{children:t&&"Request in progress..."}),(0,v.jsx)(L,{})]})}}}]);
//# sourceMappingURL=381.87c27bf8.chunk.js.map