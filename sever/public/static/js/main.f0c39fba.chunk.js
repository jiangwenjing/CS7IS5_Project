(this.webpackJsonpcs7is5=this.webpackJsonpcs7is5||[]).push([[0],{253:function(e,t,s){"use strict";s.r(t);var a=s(7),i=s(0),c=s.n(i),r=s(27),n=s.n(r),l=(s(89),s(90),s(255)),j=s(128),d=s(263),o=s(261),b=s(260),m=s(257),x=s(258),g=s(264),p=s(265),O=s(43),u=s(266),h=s(267),v=s(6),f=function(){var e=c.a.useState(!1),t=Object(a.a)(e,2),s=t[0],i=t[1],r=c.a.useState(!1),n=Object(a.a)(r,2),l=n[0],j=n[1],d=c.a.useState("Content of the modal"),o=Object(a.a)(d,2),f=(o[0],o[1]);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("span",{tpye:"text",onClick:function(){i(!0)},children:"Login"}),Object(v.jsx)(b.a,{title:"Login",visible:s,onOk:function(){f("The modal will be closed after two seconds"),j(!0),setTimeout((function(){i(!1),j(!1)}),2e3)},confirmLoading:l,onCancel:function(){console.log("Clicked cancel button"),i(!1)},children:Object(v.jsxs)(m.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(e){console.log("Received values of form: ",e)},children:[Object(v.jsx)(m.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(v.jsx)(x.a,{prefix:Object(v.jsx)(u.a,{className:"site-form-item-icon"}),placeholder:"Username"})}),Object(v.jsx)(m.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(v.jsx)(x.a,{prefix:Object(v.jsx)(h.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(v.jsxs)(m.a.Item,{children:[Object(v.jsx)(m.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:Object(v.jsx)(g.a,{children:"Remember me"})}),Object(v.jsx)("a",{className:"login-form-forgot",href:"",children:"Forgot password"})]}),Object(v.jsxs)(m.a.Item,{children:[Object(v.jsx)(p.a,{message:"If you don't have an account, will create one.",banner:!0}),Object(v.jsx)("br",{}),Object(v.jsx)(O.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Log in"})]})]})})]})},y=s(259),w=function(){var e={height:"330px",color:"#fff",lineHeight:"330px",textAlign:"center",background:"#364d79"};return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(y.a,{autoplay:!0,children:[Object(v.jsx)("div",{children:Object(v.jsx)("h3",{style:e,children:"1"})}),Object(v.jsx)("div",{children:Object(v.jsx)("h3",{style:e,children:"2"})}),Object(v.jsx)("div",{children:Object(v.jsx)("h3",{style:e,children:"3"})}),Object(v.jsx)("div",{children:Object(v.jsx)("h3",{style:e,children:"4"})})]})})},C=s(11),k=s(12),T=s(14),q=s(13),I=s(155),A=s.n(I),H=function(e){Object(T.a)(s,e);var t=Object(q.a)(s);function s(e){var a;return Object(C.a)(this,s),(a=t.call(this,e)).state={name:"",gender:"",age:""},a}return Object(k.a)(s,[{key:"componentWillMount",value:function(){var e=this.props.steps,t=e.name,s=e.gender,a=e.age;this.setState({name:t,gender:s,age:a})}},{key:"render",value:function(){var e=this.state,t=e.name,s=e.gender,a=e.age;return Object(v.jsxs)("div",{style:{width:"100%"},children:[Object(v.jsx)("h3",{children:"Summary"}),Object(v.jsx)("table",{children:Object(v.jsxs)("tbody",{children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Name"}),Object(v.jsx)("td",{children:t.value})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Gender"}),Object(v.jsx)("td",{children:s.value})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Age"}),Object(v.jsx)("td",{children:a.value})]})]})})]})}}]),s}(i.Component);H.defaultProps={steps:void 0};var N=function(e){Object(T.a)(s,e);var t=Object(q.a)(s);function s(){return Object(C.a)(this,s),t.apply(this,arguments)}return Object(k.a)(s,[{key:"render",value:function(){return Object(v.jsx)(A.a,{steps:[{id:"1",message:"What is your name?",trigger:"name"},{id:"name",user:!0,trigger:"3"},{id:"3",message:"Hi {previousValue}! What is your gender?",trigger:"gender"},{id:"gender",options:[{value:"male",label:"Male",trigger:"5"},{value:"female",label:"Female",trigger:"5"}]},{id:"5",message:"How old are you?",trigger:"age"},{id:"age",user:!0,trigger:"7",validator:function(e){return isNaN(e)?"value must be a number":e<0?"value must be positive":!(e>120)||"".concat(e,"? Come on!")}},{id:"7",message:"Great! Check out your summary",trigger:"review"},{id:"review",component:Object(v.jsx)(H,{}),asMessage:!0,trigger:"update"},{id:"update",message:"Would you like to update some field?",trigger:"update-question"},{id:"update-question",options:[{value:"yes",label:"Yes",trigger:"update-yes"},{value:"no",label:"No",trigger:"end-message"}]},{id:"update-yes",message:"What field would you like to update?",trigger:"update-fields"},{id:"update-fields",options:[{value:"name",label:"Name",trigger:"update-name"},{value:"gender",label:"Gender",trigger:"update-gender"},{value:"age",label:"Age",trigger:"update-age"}]},{id:"update-name",update:"name",trigger:"7"},{id:"update-gender",update:"gender",trigger:"7"},{id:"update-age",update:"age",trigger:"7"},{id:"end-message",message:"Thanks! Your data was submitted successfully!",end:!0}]})}}]),s}(i.Component),z=s(256),L=s(77),W=s(45),F=s(262),S=s(268),X=s(269),D=s(116),G=function(){var e=z.a.Meta;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(L.a,{children:[Object(v.jsx)(W.a,{span:6,style:{padding:5},children:Object(v.jsx)(z.a,{cover:Object(v.jsx)("img",{alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}),actions:[Object(v.jsx)(S.a,{},"setting"),Object(v.jsx)(X.a,{},"edit"),Object(v.jsx)(D.a,{},"ellipsis")],children:Object(v.jsx)(e,{avatar:Object(v.jsx)(F.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:"Card title",description:"This is the description"})})}),Object(v.jsx)(W.a,{span:6,style:{padding:5},children:Object(v.jsx)(z.a,{cover:Object(v.jsx)("img",{alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}),actions:[Object(v.jsx)(S.a,{},"setting"),Object(v.jsx)(X.a,{},"edit"),Object(v.jsx)(D.a,{},"ellipsis")],children:Object(v.jsx)(e,{avatar:Object(v.jsx)(F.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:"Card title",description:"This is the description"})})}),Object(v.jsx)(W.a,{span:6,style:{padding:5},children:Object(v.jsx)(z.a,{cover:Object(v.jsx)("img",{alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}),actions:[Object(v.jsx)(S.a,{},"setting"),Object(v.jsx)(X.a,{},"edit"),Object(v.jsx)(D.a,{},"ellipsis")],children:Object(v.jsx)(e,{avatar:Object(v.jsx)(F.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:"Card title",description:"This is the description"})})}),Object(v.jsx)(W.a,{span:6,style:{padding:5},children:Object(v.jsx)(z.a,{cover:Object(v.jsx)("img",{alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}),actions:[Object(v.jsx)(S.a,{},"setting"),Object(v.jsx)(X.a,{},"edit"),Object(v.jsx)(D.a,{},"ellipsis")],children:Object(v.jsx)(e,{avatar:Object(v.jsx)(F.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:"Card title",description:"This is the description"})})})]})})},E=function(){var e=l.a.Header,t=l.a.Content,s=l.a.Footer,c=Object(i.useState)(!1),r=Object(a.a)(c,2),n=r[0],b=r[1];return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(l.a,{children:[Object(v.jsxs)(e,{style:{position:"fixed",zIndex:1,width:"100%"},children:[Object(v.jsx)("div",{className:"logo"}),Object(v.jsxs)(j.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:[Object(v.jsx)(j.a.Item,{children:"nav 1"},"1"),Object(v.jsx)(j.a.Item,{children:"nav 2"},"2"),Object(v.jsx)(j.a.Item,{children:"nav 3"},"3"),Object(v.jsxs)(j.a.Item,{children:[Object(v.jsx)("span",{type:"primary",onClick:function(){b(!0)},children:"ChatBot"}),Object(v.jsx)(d.a,{title:"Basic Drawer",placement:"right",closable:!1,onClose:function(){b(!1)},visible:n,width:400,children:Object(v.jsx)(N,{})})]},"4"),Object(v.jsx)(j.a.Item,{children:Object(v.jsx)(f,{})},"5")]})]}),Object(v.jsxs)(t,{className:"site-layout",style:{padding:"0 50px",marginTop:64},children:[Object(v.jsxs)(o.a,{style:{margin:"16px 0"},children:[Object(v.jsx)(o.a.Item,{children:"Home"}),Object(v.jsx)(o.a.Item,{children:"List"}),Object(v.jsx)(o.a.Item,{children:"App"})]}),Object(v.jsx)("div",{className:"site-layout-background",style:{margin:5,minHeight:380},children:Object(v.jsx)(w,{})}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{children:Object(v.jsx)(G,{})})]}),Object(v.jsx)(s,{style:{textAlign:"center"},children:"Ant Design \xa92018 Created by Ant UED"})]})})};n.a.render(Object(v.jsx)(E,{}),document.getElementById("container"))},90:function(e,t,s){}},[[253,1,2]]]);
//# sourceMappingURL=main.f0c39fba.chunk.js.map