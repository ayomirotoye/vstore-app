(this["webpackJsonpvstore-app"]=this["webpackJsonpvstore-app"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),s=a.n(r),i=a(64),o=(a(71),a(8)),l=a(2),u=a(13),d=a.n(u),b=a(24),j=a(3),O=(a(73),a(74),a(75),a(18)),h=a(28),p=a(17),v=a(59),m=a(108),x="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/vstore-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).apiBaseUrl,"/vstore/tags"),f="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/vstore-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).apiBaseUrl,"/vstore/categories"),g="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/vstore-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).apiBaseUrl,"/vstore/store"),S="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/vstore-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).apiBaseUrl,"/vstore/biller"),_="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/vstore-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).apiBaseUrl,"/vstore"),C="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/vstore-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).apiBaseUrl,"/vstore/name-enquiry?accountNo="),y=a(25),E=a.n(y),R=a(1);var N,T=function(e){var t,a=e.show,c=e.handle_close,r=e.handle_submit,s=e.is_submitting,i=e.handle_input_change,o=e.get_ben_name,l=e.values,u=Object(n.useState)(Object.assign([])),f=Object(j.a)(u,2),g=(f[0],f[1]),S=Object(n.useState)(!1),_=Object(j.a)(S,2),C=_[0],y=_[1];Object(n.useEffect)((function(){N().then((function(e){e&&e.length>0&&g(e)}))}),[]);var N=function(){var e=Object(b.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,E.a.get(x,{});case 4:return a=e.sent,n=a.data,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(1),console.log("ERROR OCURRED");case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){y(!0)}),[l.beneficiaryName]),Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)(O.a,{show:a,onHide:c,backdrop:"static",keyboard:!1,children:[Object(R.jsx)(O.a.Header,{closeButton:!0,children:Object(R.jsx)(O.a.Title,{children:"Make payment"})}),Object(R.jsx)(O.a.Body,{children:Object(R.jsx)(p.a,{children:Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(v.a,{controlId:"amount",label:"Amount",className:"mb-3",children:Object(R.jsx)(p.a.Control,{type:"number",min:0,onChange:i})}),Object(R.jsx)(v.a,{controlId:"narration",label:"Narration",className:"mb-3",children:Object(R.jsx)(p.a.Control,{type:"text",placeholder:"narration",onChange:i})}),Object(R.jsx)(v.a,{controlId:"beneficaryAccountNo",label:"Beneficiary account number",className:"mb-3",children:Object(R.jsx)(p.a.Control,{type:"text",placeholder:"",onChange:o})}),C?Object(R.jsx)(v.a,{controlId:"beneficiaryName",label:"Beneficiary account name",className:"mb-3",children:Object(R.jsx)(p.a.Control,{type:"text",placeholder:"",readOnly:!0,value:null!==(t=l.beneficiaryName)&&void 0!==t?t:""})}):[]]})})}),Object(R.jsxs)(O.a.Footer,{children:[Object(R.jsx)(h.a,{variant:"secondary",onClick:c,children:"Close"}),s?Object(R.jsx)(m.a,{animation:"border",role:"status",children:Object(R.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):Object(R.jsx)(h.a,{variant:"primary",onClick:function(){r(l)},children:"Pay"})]})]})})},D=a(42),w=function(e){return null===e||void 0===e||0===e.length},k=(N="parentMenuName",function(e){var t=e;return w(e)||(t=e.length>0?e.charAt(0).toUpperCase()+e.slice(1):e),t}),U=c.a.forwardRef((function(e,t){var a=e.children,n=e.onClick;return Object(R.jsx)("a",{href:"#",ref:t,onClick:function(e){e.preventDefault(),n(e)},children:a})})),A=c.a.forwardRef((function(e,t){var a=e.children,r=e.style,s=e.className,i=e["aria-labelledby"],o=Object(n.useState)(""),l=Object(j.a)(o,2),u=l[0];l[1];return Object(R.jsx)("div",{ref:t,style:r,className:s,"aria-labelledby":i,children:Object(R.jsx)("ul",{className:"list-unstyled",children:c.a.Children.toArray(a).filter((function(e){return!u||e.props.children.toLowerCase().startsWith(u)}))})})})),F=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(Object.assign([])),s=Object(j.a)(r,2),i=s[0],o=s[1],l=function(){var e=Object(b.a)(d.a.mark((function e(t){var a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(t.target.value),a=[],e.prev=2,e.next=5,E.a.get(_.concat("?searchBy=",t.target.value),{});case 5:return n=e.sent,r=n.data,o(r),e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(2),console.log("ERROR OCURRED");case 14:return e.abrupt("return",a);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),u=function(e){console.log("DATAT:::",e)};return Object(R.jsxs)(D.a,{children:[Object(R.jsx)(D.a.Toggle,{as:U,id:"dropdown-custom-components",children:Object(R.jsx)(v.a,{controlId:"searchBy",label:"Search",className:"mb-3",children:Object(R.jsx)(p.a.Control,{type:"text",onChange:l,value:a})})}),Object(R.jsx)(D.a.Menu,{as:A,className:"w-100",children:i&&Array.isArray(i)&&i.map((function(e,t){return Object(R.jsx)(D.a.Item,{eventKey:t,onClick:u,data:e.data,children:Object(R.jsxs)("div",{className:"d-flex",children:[Object(R.jsx)("div",{style:{textAlign:"right"},children:k(e.data.tag.toLowerCase(),0)}),Object(R.jsx)("div",{className:"mx-3",children:"|"}),Object(R.jsx)("div",{children:e.data.narration})]})})}))})]})},I=function(e){var t=e.show,a=e.handle_close,c=e.handle_submit,r=e.is_submitting,s=e.handle_input_change,i=e.values,o=Object(n.useState)(Object.assign([])),l=Object(j.a)(o,2),u=l[0],x=l[1];Object(n.useEffect)((function(){g().then((function(e){e&&e.length>0&&x(e)}))}),[]);var g=function(){var e=Object(b.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,E.a.get(f,{});case 4:return a=e.sent,n=a.data,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(1),console.log("ERROR OCURRED");case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(R.jsxs)(O.a,{show:t,onHide:a,backdrop:"static",keyboard:!1,children:[Object(R.jsx)(O.a.Header,{closeButton:!0,children:Object(R.jsx)(O.a.Title,{children:"Create biller"})}),Object(R.jsx)(O.a.Body,{children:Object(R.jsx)(p.a,{children:Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(v.a,{controlId:"billerName",label:"Name",className:"mb-3",children:Object(R.jsx)(p.a.Control,{type:"text",placeholder:"billerName",onChange:s})}),Object(R.jsx)(v.a,{controlId:"categoryId",label:"Category",className:"mb-3",children:Object(R.jsxs)(p.a.Select,{"aria-label":"categoryId",onChange:s,children:[Object(R.jsx)("option",{children:"-- Choose option --"}),u&&u.map((function(e,t){return Object(R.jsx)("option",{value:e.name,children:e.name},t)}))]})})]})})}),Object(R.jsxs)(O.a.Footer,{children:[Object(R.jsx)(h.a,{variant:"primary",onClick:a,children:"Close"}),r?Object(R.jsx)(m.a,{animation:"border",role:"status",children:Object(R.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):Object(R.jsx)(h.a,{variant:"secondary",onClick:function(){c(i)},children:"Submit"})]})]})};var B=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(j.a)(r,2),i=s[0],u=s[1],O=Object(n.useState)(!1),h=Object(j.a)(O,2),p=h[0],v=h[1],m=Object(n.useState)(Object.assign({})),x=Object(j.a)(m,2),f=x[0],_=x[1],y=Object(n.useState)(Object.assign({})),N=Object(j.a)(y,2),D=N[0],w=N[1],k=function(){var e=Object(b.a)(d.a.mark((function e(t){var a,n,r,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,v(!1),a=new Date,n=Object.assign({},{tag:"TRANSACTIONS"},{data:Object.assign({},f,{transactionDate:a.toISOString(),transactionId:a.getTime()})}),e.next=7,E.a.post(g,[n]);case 7:r=e.sent,(s=r.data)&&s.length>0&&(alert("Successful"),c(!1),_({})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),alert("Failed"),console.log("ERROR OCCURRED:::",e.t0);case 16:return e.prev=16,v(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,12,16,19]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(b.a)(d.a.mark((function e(t){var a,n,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,v(!1),a=new Date,n=Object.assign({},{tag:"BILLERS"},Object.assign({},D,{transactionDate:a.toISOString(),transactionId:a.getTime()})),e.next=7,E.a.post(S,[n]);case 7:c=e.sent,(r=c.data)&&r.length>0&&(alert("Successful"),u(!1),w({})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),alert("Failed"),console.log("ERROR OCCURRED:::",e.t0);case 16:return e.prev=16,v(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,12,16,19]])})));return function(t){return e.apply(this,arguments)}}(),A=function(e){_(Object(l.a)(Object(l.a)({},f),{},Object(o.a)({},e.target.id,e.target.value)))},B=function(){var e=Object(b.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A(t),10!==t.target.value.length){e.next=13;break}return e.prev=2,e.next=5,E.a.get(C.concat(t.target.value),{});case 5:a=e.sent,n=a.data,_(Object(l.a)(Object(l.a)({},f),{},{beneficiaryName:n.accountName})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("ERROR OCURRED",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(R.jsxs)("div",{className:"App",children:[Object(R.jsx)(T,{show:a,handle_close:function(){c(!a)},handle_submit:k,is_submitting:p,handle_input_change:A,get_ben_name:B,values:f}),Object(R.jsx)(I,{show:i,handle_close:function(){u(!i)},handle_submit:U,is_submitting:p,handle_input_change:function(e){w(Object(l.a)(Object(l.a)({},D),{},Object(o.a)({},e.target.id,e.target.value)))},values:D}),Object(R.jsxs)("div",{className:"py-5 my-5 text-center",children:[Object(R.jsx)("h1",{className:"display-5 fw-bold",children:"VStore"}),Object(R.jsxs)("div",{className:"col-lg-6 mx-auto",children:[Object(R.jsx)("p",{className:"lead mb-2",children:"transactions, bills and many more"}),Object(R.jsx)("div",{className:"d-grid gap-2 d-sm-flex justify-content-sm-center",children:Object(R.jsx)("div",{className:"row searchbar-div",children:Object(R.jsx)("div",{className:"col-sm-12",children:Object(R.jsx)(F,{})})})}),Object(R.jsx)("div",{className:"d-grid gap-2 d-sm-flex justify-content-sm-center",children:Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{className:"col-sm-12",children:Object(R.jsx)("button",{type:"button",className:"btn btn-secondary btn-lg px-4 mr-3 w-50 h-75 mb-20",onClick:function(){c(!0)},children:"Fund transfer"})}),Object(R.jsx)("div",{className:"col-sm-12",children:Object(R.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-lg px-4 mr-3 w-50 h-75 mb-20",onClick:function(){u(!0)},children:"Manage billers"})})]})})]})]})]})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,109)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(R.jsx)(i.a,{children:Object(R.jsx)(c.a.StrictMode,{children:Object(R.jsx)(B,{})})}),document.getElementById("root")),H()},71:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.eb544c9b.chunk.js.map