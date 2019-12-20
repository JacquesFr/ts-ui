(this["webpackJsonpreact-social"]=this["webpackJsonpreact-social"]||[]).push([[29],{502:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(43),o=a(49),i=a(45),s=a(86),c=a(48),l=a(15),p=a(780),m=a(800),d=a(308),u=a(16),g=a(522),h=a(154),f=a.n(h),x=a(550),w=a(0),b=a.n(w),E=a(106),I=a(61),v=a(95),j=a(22),y=a(81),O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,r=t.name;switch(a.setState(Object(l.a)({},r,n)),r){case"passwordInput":a.setState({passwordInputError:""});break;case"confirmInput":a.setState({confirmInputError:"",passwordInputError:""})}},a.handleForm=function(){var e=a.props,t=e.t,n=e.updatePassword,r=!1;""===a.state.passwordInput?(a.setState({passwordInputError:t("changePassword.newPasswordRequiredError")}),r=!0):""===a.state.confirmInput?(a.setState({confirmInputError:t("changePassword.confirmPasswordRequiredError")}),r=!0):a.state.confirmInput!==a.state.passwordInput&&(a.setState({confirmInputError:t("changePassword.confirmPasswordEqualNewPasswordError")}),r=!0),r||n(a.state.passwordInput,a.state.confirmInput)},a.state={passwordInput:"",passwordInputError:"",confirmInput:"",confirmInputError:""},a.handleForm=a.handleForm.bind(Object(s.a)(a)),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.t,n=e.footerDisabled,r=e.logoDisabled,o=b.a.createElement("div",{style:{paddingLeft:"40px",paddingRight:"40px"}},b.a.createElement("img",{className:t.logo,src:j.a.settings.raisedLogo,alt:j.a.settings.companyName}));return b.a.createElement(p.a,{container:!0,spacing:2},b.a.createElement(p.a,{item:!0,xs:12,className:t.contain},b.a.createElement("div",{className:"animate-bottom"},b.a.createElement(d.a,{className:f()(t.paper,t.fullBox),elevation:1},b.a.createElement("div",{style:{padding:"48px 40px 36px"}},r?"":o,b.a.createElement(g.a,{autoFocus:!0,className:t.textField,onChange:this.handleInputChange,helperText:this.state.passwordInputError,name:"passwordInput",label:a("changePassword.newPasswordLabel"),type:"password",error:""!==this.state.passwordInputError.trim()}),b.a.createElement("br",null),b.a.createElement(g.a,{className:t.textField,onChange:this.handleInputChange,helperText:this.state.confirmInputError,name:"confirmInput",label:a("changePassword.confirmPasswordLabel"),type:"password",error:""!==this.state.confirmInputError.trim()}),b.a.createElement("br",null),b.a.createElement("br",null),b.a.createElement("br",null),b.a.createElement("div",{className:"settings__button-box"},b.a.createElement("div",null,b.a.createElement(m.a,{onClick:this.props.homePage}," ",a("changePassword.homeButton")," ")),b.a.createElement("div",null,b.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleForm}," ",a("changePassword.changePasswordButton")," "))))))),n?"":b.a.createElement(x.a,null))}}]),t}(w.Component),k=Object(E.c)("translations")(O),P=Object(v.withRouter)(Object(I.connect)((function(e,t){return{}}),(function(e,t){return{updatePassword:function(t,a){e(y.dbUpdatePassword(a,t))},homePage:function(){window.location.href="/"}}}))(Object(u.a)((function(e){return{textField:{minWidth:280,marginTop:20},contain:{margin:"0 auto",marginTop:50},paper:{minHeight:370,maxWidth:450,minWidth:337,textAlign:"center",display:"block",margin:"auto"},logo:{height:50,marginBottom:30},boxRoot:{padding:"20px 40px 36px"},fullBox:Object(l.a)({},e.breakpoints.down("xs"),{padding:0,with:"100%",maxWidth:"100%"})}}))(k)));t.default=P},550:function(e,t,a){"use strict";var n=a(8),r=a(43),o=a(49),i=a(45),s=a(48),c=a(780),l=a(16),p=a(0),m=a.n(p),d=a(106),u=a(61),g=a(180),h=a(22),f=a(15),x=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.t;return m.a.createElement("div",{className:t.root},m.a.createElement("div",{className:t.content},m.a.createElement(c.a,{item:!0,xs:12,sm:9,md:9,lg:9},m.a.createElement("nav",{className:t.nav},m.a.createElement("ul",{className:t.list},m.a.createElement("li",{className:t.item},m.a.createElement(g.a,{to:"/terms"},a("terms.privacyTitle"))),m.a.createElement("li",{className:t.item},m.a.createElement("a",{href:"mailto:".concat(h.a.settings.supportEmail,"?Subject=Hola"),target:"_top"},a("footer.supportEmail")))))),m.a.createElement("span",{className:t.companyName},"\xa9 ",(new Date).getFullYear()," ",h.a.settings.companyName)))}}]),t}(p.Component),w=Object(d.c)("translations")(x),b=Object(u.connect)((function(){return{}}),(function(e,t){return{}}))(Object(l.a)((function(e){return{root:{backgroundColor:"#fafafa",order:5,padding:"0 20px",alignItems:"stretch",display:"flex",flexDirection:"column",flexShrink:0,margin:0,position:"relative",width:"100%"},content:Object(f.a)({fontSize:"12px",fontWeight:500,display:"flex",margin:"0 auto",textTransform:"uppercase",width:"100%"},e.breakpoints.down("xs"),{flexDirection:"column",textAlign:"center",justifyContent:"center",alignItems:"center"}),nav:{alignItems:"stretch",display:"flex",flex:1,flexDirection:"column",flexShrink:0,margin:0,padding:0,position:"relative"},list:Object(f.a)({flexGrow:1,marginBottom:"3px",marginRight:"16px"},e.breakpoints.down("xs"),{maxWidth:"100%",textAlign:"center"}),item:{display:"inline-block",marginBottom:"7px",marginRight:"16px",fontWeight:500,whiteSpace:"nowrap"},companyName:{color:"#999",lineHeight:3,whiteSpace:"nowrap"},getAppRoot:{alignItems:"stretch",display:"flex",flexDirection:"column",flexShrink:0,margin:0,padding:0,position:"relative",marginTop:"15px"},getApp:{color:"#262626",fontSize:"14px",lineHeight:"18px",margin:"10px 20px",textAlign:"center"},getAppIconRoot:{flexDirection:"row",justifyContent:"center",margin:"10px 0",alignItems:"stretch",boxSizing:"border-box",display:"flex",flexShrink:0,padding:0,position:"relative"},iosAppLink:{marginRight:"8px",lineHeight:"85px"},appStoreIcon:{height:"40px"},googlePlayIcon:{height:"56px"}}}))(w));t.a=b}}]);