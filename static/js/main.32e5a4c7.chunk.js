(this["webpackJsonpvstore-app"]=this["webpackJsonpvstore-app"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),s=a.n(r),i=a(64),o=(a(71),a(8)),l=a(2),u=a(13),b=a.n(u),j=a(24),d=a(3),h=(a(73),a(74),a(75),a(18)),p=a(28),O=a(17),m=a(59),v=a(108),f="".concat("https://vstore-app-service.herokuapp.com","/vstore/tags"),x="".concat("https://vstore-app-service.herokuapp.com","/vstore/categories"),g="".concat("https://vstore-app-service.herokuapp.com","/vstore/store"),y="".concat("https://vstore-app-service.herokuapp.com","/vstore/biller"),N="".concat("https://vstore-app-service.herokuapp.com","/vstore"),C="".concat("https://vstore-app-service.herokuapp.com","/vstore/name-enquiry?accountNo="),k=a(25),w=a.n(k),R=a(1);var S,_=function(e){var t,a=e.show,c=e.handle_close,r=e.handle_submit,s=e.is_submitting,i=e.handle_input_change,o=e.get_ben_name,l=e.values,u=Object(n.useState)(Object.assign([])),x=Object(d.a)(u,2),g=(x[0],x[1]),y=Object(n.useState)(!1),N=Object(d.a)(y,2),C=N[0],k=N[1];Object(n.useEffect)((function(){S().then((function(e){e&&e.length>0&&g(e)}))}),[]);var S=function(){var e=Object(j.a)(b.a.mark((function e(){var t,a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,w.a.get(f,{});case 4:return a=e.sent,n=a.data,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(1),console.log("ERROR OCURRED");case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){k(!0)}),[l.beneficiaryName]),Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)(h.a,{show:a,onHide:c,backdrop:"static",keyboard:!1,children:[Object(R.jsx)(h.a.Header,{closeButton:!0,children:Object(R.jsx)(h.a.Title,{children:"Make payment"})}),Object(R.jsx)(h.a.Body,{children:Object(R.jsx)(O.a,{children:Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(m.a,{controlId:"amount",label:"Amount",className:"mb-3",children:Object(R.jsx)(O.a.Control,{type:"number",min:0,onChange:i})}),Object(R.jsx)(m.a,{controlId:"narration",label:"Narration",className:"mb-3",children:Object(R.jsx)(O.a.Control,{type:"text",placeholder:"narration",onChange:i})}),Object(R.jsx)(m.a,{controlId:"beneficaryAccountNo",label:"Beneficiary account number",className:"mb-3",children:Object(R.jsx)(O.a.Control,{type:"text",placeholder:"",onChange:o})}),C?Object(R.jsx)(m.a,{controlId:"beneficiaryName",label:"Beneficiary account name",className:"mb-3",children:Object(R.jsx)(O.a.Control,{type:"text",placeholder:"",readOnly:!0,value:null!==(t=l.beneficiaryName)&&void 0!==t?t:""})}):[]]})})}),Object(R.jsxs)(h.a.Footer,{children:[Object(R.jsx)(p.a,{variant:"secondary",onClick:c,children:"Close"}),s?Object(R.jsx)(v.a,{animation:"border",role:"status",children:Object(R.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):Object(R.jsx)(p.a,{variant:"primary",onClick:function(){r(l)},children:"Pay"})]})]})})},I=a(36),E=function(e){return null===e||void 0===e||0===e.length},A=(S="parentMenuName",function(e){var t=e;return E(e)||(t=e.length>0?e.charAt(0).toUpperCase()+e.slice(1):e),t}),D=c.a.forwardRef((function(e,t){var a=e.children,n=e.onClick;return Object(R.jsx)("a",{href:"#",ref:t,onClick:function(e){e.preventDefault(),n(e)},children:a})})),T=c.a.forwardRef((function(e,t){var a=e.children,r=e.style,s=e.className,i=e["aria-labelledby"],o=Object(n.useState)(""),l=Object(d.a)(o,2),u=l[0];l[1];return Object(R.jsx)("div",{ref:t,style:r,className:s,"aria-labelledby":i,children:Object(R.jsx)("ul",{className:"list-unstyled",children:c.a.Children.toArray(a).filter((function(e){return!u||e.props.children.toLowerCase().startsWith(u)}))})})})),B=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(Object.assign([])),s=Object(d.a)(r,2),i=s[0],o=s[1],l=function(){var e=Object(j.a)(b.a.mark((function e(t){var a,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(Object.assign([])),c(t.target.value),a=[],e.prev=3,e.next=6,w.a.get(N.concat("?searchBy=",t.target.value),{});case 6:return n=e.sent,r=n.data,o(r),e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(3),console.log("ERROR OCURRED");case 15:return e.abrupt("return",a);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),u=function(e){console.log("DATAT:::",e)};return Object(R.jsxs)(I.a,{children:[Object(R.jsx)(I.a.Toggle,{as:D,id:"dropdown-custom-components",children:Object(R.jsx)(m.a,{controlId:"searchBy",label:"Search",className:"mb-3",children:Object(R.jsx)(O.a.Control,{type:"text",onChange:l,value:a})})}),Object(R.jsx)(I.a.Menu,{as:T,className:"w-100",children:i&&Array.isArray(i)&&i.length>0?i.map((function(e,t){return"TRANSACTIONS"===e.data.tag?Object(R.jsx)(I.a.Item,{eventKey:t,onClick:u,data:e.data,children:Object(R.jsx)("div",{style:{display:"inline-block",wordWrap:"break-word"},children:Object(R.jsx)("span",{style:{textAlign:"right"},children:A(e.data.tag.toLowerCase(),0).concat("|",e.data.narration,"|",e.data.amount,"|",e.data.beneficiaryName,"|",e.data.transactionDate)})})}):Object(R.jsx)(I.a.Item,{eventKey:t,onClick:u,data:e.data,children:Object(R.jsx)("div",{style:{display:"inline-block",wordWrap:"break-word"},children:Object(R.jsx)("span",{style:{textAlign:"right"},children:A(e.data.tag.toLowerCase(),0).concat("|",e.data.beneficiaryName,"|",e.data.beneficiaryAccountNo,"|",e.data.beneficiaryBank)})})})})):[]})]})},F=function(e){var t=e.show,a=e.handle_close,c=e.handle_submit,r=e.is_submitting,s=e.handle_input_change,i=e.values,o=Object(n.useState)(Object.assign([])),l=Object(d.a)(o,2),u=l[0],f=l[1];Object(n.useEffect)((function(){g().then((function(e){e&&e.length>0&&f(e)}))}),[]);var g=function(){var e=Object(j.a)(b.a.mark((function e(){var t,a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,w.a.get(x,{});case 4:return a=e.sent,n=a.data,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(1),console.log("ERROR OCURRED");case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(R.jsxs)(h.a,{show:t,onHide:a,backdrop:"static",keyboard:!1,children:[Object(R.jsx)(h.a.Header,{closeButton:!0,children:Object(R.jsx)(h.a.Title,{children:"Create biller"})}),Object(R.jsx)(h.a.Body,{children:Object(R.jsx)(O.a,{children:Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(m.a,{controlId:"billerName",label:"Name",className:"mb-3",children:Object(R.jsx)(O.a.Control,{type:"text",placeholder:"billerName",onChange:s})}),Object(R.jsx)(m.a,{controlId:"categoryId",label:"Category",className:"mb-3",children:Object(R.jsxs)(O.a.Select,{"aria-label":"categoryId",onChange:s,children:[Object(R.jsx)("option",{children:"-- Choose option --"}),u&&u.map((function(e,t){return Object(R.jsx)("option",{value:e.name,children:e.name},t)}))]})})]})})}),Object(R.jsxs)(h.a.Footer,{children:[Object(R.jsx)(p.a,{variant:"primary",onClick:a,children:"Close"}),r?Object(R.jsx)(v.a,{animation:"border",role:"status",children:Object(R.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):Object(R.jsx)(p.a,{variant:"secondary",onClick:function(){c(i)},children:"Submit"})]})]})};var L=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(d.a)(r,2),i=s[0],u=s[1],h=Object(n.useState)(!1),p=Object(d.a)(h,2),O=p[0],m=p[1],v=Object(n.useState)(Object.assign({})),f=Object(d.a)(v,2),x=f[0],N=f[1],k=Object(n.useState)(Object.assign({})),S=Object(d.a)(k,2),I=S[0],E=S[1],A=function(){var e=Object(j.a)(b.a.mark((function e(t){var a,n,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,m(!1),a=new Date,n=Object.assign({},{tag:"TRANSACTIONS"},{data:Object.assign({},x,{transactionDate:a.toISOString(),transactionId:a.getTime()})}),e.next=7,w.a.post(g,[n]);case 7:r=e.sent,(s=r.data)&&s.length>0&&(alert("Successful"),c(!1),N({})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),alert("Failed"),console.log("ERROR OCCURRED:::",e.t0);case 16:return e.prev=16,m(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,12,16,19]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(j.a)(b.a.mark((function e(t){var a,n,c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,m(!1),a=new Date,n=Object.assign({},{tag:"BILLERS"},Object.assign({},I,{transactionDate:a.toISOString(),transactionId:a.getTime()})),e.next=7,w.a.post(y,[n]);case 7:c=e.sent,(r=c.data)&&r.length>0&&(alert("Successful"),u(!1),E({})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),alert("Failed"),console.log("ERROR OCCURRED:::",e.t0);case 16:return e.prev=16,m(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,12,16,19]])})));return function(t){return e.apply(this,arguments)}}(),T=function(e){N(Object(l.a)(Object(l.a)({},x),{},Object(o.a)({},e.target.id,e.target.value)))},L=function(){var e=Object(j.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T(t),10!==t.target.value.length){e.next=13;break}return e.prev=2,e.next=5,w.a.get(C.concat(t.target.value),{});case 5:a=e.sent,n=a.data,N(Object(l.a)(Object(l.a)({},x),{},{beneficiaryName:n.accountName})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("ERROR OCURRED",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(R.jsxs)("div",{className:"App",children:[Object(R.jsx)(_,{show:a,handle_close:function(){c(!a)},handle_submit:A,is_submitting:O,handle_input_change:T,get_ben_name:L,values:x}),Object(R.jsx)(F,{show:i,handle_close:function(){u(!i)},handle_submit:D,is_submitting:O,handle_input_change:function(e){E(Object(l.a)(Object(l.a)({},I),{},Object(o.a)({},e.target.id,e.target.value)))},values:I}),Object(R.jsxs)("div",{className:"py-5 my-5 text-center",children:[Object(R.jsx)("h1",{className:"display-5 fw-bold",children:"VStore"}),Object(R.jsxs)("div",{className:"col-lg-6 mx-auto",children:[Object(R.jsx)("p",{className:"lead mb-2",children:"transactions, bills and many more"}),Object(R.jsx)("div",{className:"d-grid gap-2 d-sm-flex justify-content-sm-center",children:Object(R.jsx)("div",{className:"row searchbar-div",children:Object(R.jsx)("div",{className:"col-sm-12",children:Object(R.jsx)(B,{})})})}),Object(R.jsx)("div",{className:"d-grid gap-2 d-sm-flex justify-content-sm-center",children:Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{className:"col-sm-12",children:Object(R.jsx)("button",{type:"button",className:"btn btn-secondary btn-lg px-4 mr-3 w-50 h-75 mb-20",onClick:function(){c(!0)},children:"Fund transfer"})}),Object(R.jsx)("div",{className:"col-sm-12",children:Object(R.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-lg px-4 mr-3 w-50 h-75 mb-20",onClick:function(){u(!0)},children:"Manage billers"})})]})})]})]})]})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,109)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(R.jsx)(i.a,{children:Object(R.jsx)(c.a.StrictMode,{children:Object(R.jsx)(L,{})})}),document.getElementById("root")),U()},71:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.32e5a4c7.chunk.js.map