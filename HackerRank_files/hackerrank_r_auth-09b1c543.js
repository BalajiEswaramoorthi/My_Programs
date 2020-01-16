(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"29IJ":function(e,t,a){"use strict";a.r(t),a.d(t,"PureResetPassword",(function(){return T}));a("CX2u"),a("f3/d");var n=a("lwsE"),r=a.n(n),s=a("W8MJ"),o=a.n(s),c=a("a1gu"),i=a.n(c),l=a("Nsbk"),u=a.n(l),d=a("PJYZ"),m=a.n(d),h=a("7W2i"),p=a.n(h),g=a("lSNA"),f=a.n(g),v=a("cDcd"),w=a.n(v),k=a("17x9"),y=a.n(k),E=a("/MKj"),P=a("fvjX"),b=a("OEX3"),N=a("1OM/"),R=a("ZaSc"),C=a("5J+W"),S=a("DM5n"),L=a("U7UD"),j=a("bjMU"),T=function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return a=i()(this,(e=u()(t)).call.apply(e,[this].concat(s))),f()(m()(a),"state",void 0),f()(m()(a),"state",{password:"",confirmPassword:""}),f()(m()(a),"changeValue",(function(e){var t=e.target,n=t.value,r=t.name;a.setState(f()({},r,n))})),f()(m()(a),"resetPassword",(function(e){e.preventDefault();var t=a.state,n=t.password,r=t.confirmPassword,s=a.props.appUtil.location.query.reset_password_token;a.setState({inProgress:!0});var o=Object(R.e)({url:S.a.resetPassword,data:{password:n,confirm_password:r,reset_password_token:s}});o.then((function(e){var t=e.status,n=e.errors;t?a.setState({showResetSuccess:!0}):a.setState({errorMessage:n})})),o.finally((function(){a.setState({inProgress:!1})}))})),a}return p()(t,e),o()(t,[{key:"renderError",value:function(){var e="EXPIRED_TOKEN"===this.props.resetTokenValidity?"Password reset link is expired.":"Password reset link is invalid.";return w.a.createElement("div",null,w.a.createElement(j.a,{icon:"ui-icon-broken-link",title:"Invalid Reset Link",message:e}),w.a.createElement(b.d,{size:"large",role:"link",to:"/auth/forgot_password","data-analytics":"AuthForgotPassword","data-attr1":"ResetPage",className:"auth-button-full"},"Generate Reset Link"))}},{key:"renderSuccess",value:function(){return w.a.createElement("div",{className:"reset-password-success"},w.a.createElement(j.a,{icon:"ui-icon-check-circle",title:"Password Reset Successful",message:"Awesome. You have successfully reset the password for your account."}),w.a.createElement(b.d,{size:"large",role:"link",to:"/auth/login","data-analytics":"ResetPasswordLogin","data-attr1":"success",className:"auth-button-full"},"Log In"))}},{key:"renderForm",value:function(){var e=this.state,t=e.password,a=e.confirmPassword,n=e.errorMessage,r=e.inProgress;return w.a.createElement("div",null,w.a.createElement(j.a,{title:"Enter New Password",message:"Looks like you are trying to reset the password for the account. Please enter your new password twice. So we can verify you typed it correctly."}),w.a.createElement("form",{className:"auth-form"},w.a.createElement(L.a,{message:{type:"error",data:n}}),w.a.createElement("div",{className:"form-item"},w.a.createElement(N.a,{icon:"ui-icon-lock",theme:"theme-m",size:"large",placeholder:"New Password",type:"password",name:"password","data-analytics":"AuthResetPasswordInput","data-attr1":"Password",value:t,onChange:this.changeValue})),w.a.createElement("div",{className:"form-item"},w.a.createElement(N.a,{icon:"ui-icon-lock",theme:"theme-m",size:"large",placeholder:"Confirm Password",type:"password",name:"confirmPassword","data-analytics":"AuthResetPasswordInput","data-attr1":"Confirm",value:a,onChange:this.changeValue})),w.a.createElement("div",{className:"form-item"},w.a.createElement(b.d,{size:"large",type:t&&a?"submit":"button",className:"auth-button-full","data-analytics":"Set New Password",loading:r,onClick:this.resetPassword},"Change Password"))))}},{key:"renderContent",value:function(){var e=this.state.showResetSuccess;return"VALID_TOKEN"!==this.props.resetTokenValidity?this.renderError():e?this.renderSuccess():this.renderForm()}},{key:"render",value:function(){return w.a.createElement("div",{className:"reset-password auth-content"},this.renderContent())}}]),t}(v.PureComponent);f()(T,"propTypes",{resetTokenValidity:y.a.string.isRequired,appUtil:y.a.object.isRequired});var A=Object(E.connect)((function(e){return{resetTokenValidity:e.community.profile.resetTokenValidity}}));t.default=Object(P.d)(A,C.a)(T)},DOFc:function(e,t,a){},EuAK:function(e,t,a){"use strict";a.r(t),a.d(t,"PureAuth",(function(){return i}));var n=a("cDcd"),r=a.n(n),s=a("17x9"),o=a.n(s),c=a("5J+W");a("DOFc"),a("baqF");function i(e){var t=e.appUtil,a=e.children,n=t.assetPath;return r.a.createElement("div",{className:"auth-container container theme-m"},r.a.createElement("div",{className:"auth-content-wrap"},r.a.createElement("div",{className:"logo-wrap"},r.a.createElement("img",{className:"logo-img",src:n("brand/hr-logo-new-black-green.svg"),alt:"HackerRank"})),a))}i.propTypes={appUtil:o.a.object.isRequired,children:o.a.element.isRequired},t.default=Object(c.a)(i)},"N5q/":function(e,t,a){"use strict";a.r(t),a.d(t,"PureAuthBoxContainer",(function(){return S}));a("f3/d");var n=a("lwsE"),r=a.n(n),s=a("W8MJ"),o=a.n(s),c=a("a1gu"),i=a.n(c),l=a("Nsbk"),u=a.n(l),d=a("PJYZ"),m=a.n(d),h=a("7W2i"),p=a.n(h),g=a("lSNA"),f=a.n(g),v=a("cDcd"),w=a.n(v),k=a("17x9"),y=a.n(k),E=a("/MKj"),P=a("fvjX"),b=a("5J+W"),N=a("N5o3"),R=a("qePO"),C=a("CZEq"),S=(a("pckj"),function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return a=i()(this,(e=u()(t)).call.apply(e,[this].concat(s))),f()(m()(a),"onAuth",(function(){var e=a.props.contest.slug,t=void 0===e?"master":e;Object(N.b)(t).then((function(e){e&&(document.location=e)}))})),a}return p()(t,e),o()(t,[{key:"renderContestTitle",value:function(){var e=this.props,t=e.tab,a=e.contest.name;if(!a)return null;var n="login"===t?"Login and join ".concat(a):"Create your HackerRank account and join ".concat(a);return w.a.createElement("h2",{className:"contest-title"},n)}},{key:"render",value:function(){var e=this.props,t=e.tab,a=e.contest.slug;return w.a.createElement("div",{className:"auth-box-container"},this.renderContestTitle(),w.a.createElement(C.a,{tab:t,contestSlug:a,checkWorkAccount:!0,enableTabLinks:!0,onAuth:this.onAuth}))}}]),t}(v.PureComponent));f()(S,"propTypes",{tab:y.a.string.isRequired,contest:y.a.object.isRequired});var L=Object(E.connect)((function(e,t){var a=t.appUtil.params.contestSlug;return{contest:Object(R.a)(a,e)||{}}}));t.default=Object(P.d)(b.a,L)(S)},U8hE:function(e,t,a){"use strict";a.r(t);a("CX2u");var n=a("lwsE"),r=a.n(n),s=a("W8MJ"),o=a.n(s),c=a("a1gu"),i=a.n(c),l=a("Nsbk"),u=a.n(l),d=a("PJYZ"),m=a.n(d),h=a("7W2i"),p=a.n(h),g=a("lSNA"),f=a.n(g),v=a("cDcd"),w=a.n(v),k=a("17x9"),y=a.n(k),E=a("MGin"),P=a("ZaSc"),b=a("5J+W"),N=a("DM5n"),R=a("OEX3"),C=a("1OM/"),S=(a("dRSK"),a("XfO3"),a("HEwt"),a("DNiP"),a("TSYQ")),L=a.n(S),j=a("wqqT"),T=a("w13Q"),A=a("7fp8"),O=(a("gG5y"),function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return a=i()(this,(e=u()(t)).call.apply(e,[this].concat(s))),f()(m()(a),"state",void 0),f()(m()(a),"captchaContainer",void 0),f()(m()(a),"recaptchaIframe",void 0),f()(m()(a),"observer",void 0),f()(m()(a),"loadTimeout",void 0),f()(m()(a),"state",{loadingRecaptcha:!0}),f()(m()(a),"markRecaptchaLoaded",(function(){a.setState({loadingRecaptcha:!1})})),f()(m()(a),"getCaptchaContainer",(function(e){a.captchaContainer=e})),f()(m()(a),"observerCallBack",(function(e){var t=e.reduce((function(e,t){return e.concat(Array.from(t.addedNodes))}),[]).find((function(e){return"IFRAME"===e.nodeName}));t&&(a.recaptchaIframe=t,t.addEventListener("load",a.markRecaptchaLoaded))})),a}return p()(t,e),o()(t,[{key:"componentDidMount",value:function(){this.observe(),this.getCaptcha()}},{key:"componentWillUnmount",value:function(){window.loadForgotPasswordCaptcha=null,this.recaptchaIframe&&this.recaptchaIframe.removeEventListener("load",this.markRecaptchaLoaded),clearTimeout(this.loadTimeout)}},{key:"getCaptcha",value:function(){var e=this;window.loadForgotPasswordCaptcha=function(){var t=e.props.onValidate,a=window.grecaptcha;a&&a.render&&!e.loadTimeout&&(window.grecaptcha.render(e.captchaContainer,{sitekey:A.c.RECAPTCHA_KEY,callback:t}),e.loadTimeout=setTimeout(e.markRecaptchaLoaded,3e3))},Object(T.c)("https://www.google.com/recaptcha/api.js?onload=loadForgotPasswordCaptcha&render=explicit").then(loadForgotPasswordCaptcha)}},{key:"observe",value:function(){window.MutationObserver&&(this.observer=new MutationObserver(this.observerCallBack),this.observer.observe(this.captchaContainer,{attributes:!0,childList:!0,subtree:!0}))}},{key:"render",value:function(){var e=this.state.loadingRecaptcha;return w.a.createElement("div",{className:"google-recaptcha"},e&&w.a.createElement("div",null,w.a.createElement(j.a,null),"Loading Recaptcha ..."),w.a.createElement("div",{ref:this.getCaptchaContainer,className:L()("recaptcha-container",{loading:e})}))}}]),t}(v.PureComponent));f()(O,"propTypes",{onValidate:y.a.func.isRequired});var M=O,F=a("U7UD"),I=a("bjMU");a.d(t,"PureForgotPassword",(function(){return q}));var q=function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return a=i()(this,(e=u()(t)).call.apply(e,[this].concat(s))),f()(m()(a),"state",void 0),f()(m()(a),"state",{inProgress:!1,loginId:"",captchaResponse:""}),f()(m()(a),"onLoginIdChange",(function(e){var t=e.target.value;a.setState({loginId:t})})),f()(m()(a),"onRecaptchaValidate",(function(e){a.setState({captchaResponse:e})})),f()(m()(a),"resetPassword",(function(e){e.preventDefault();var t=a.state,n=t.loginId,r=t.captchaResponse;a.setState({inProgress:!0});var s=Object(P.e)({url:N.a.forgotPassword,data:{login:n,"g-recaptcha-response":r}});s.then((function(e){var t=e.status,n=e.errors;t?a.setState({showResetSuccess:!0}):a.setState({errorMessage:n&&n.length?n:"Unknown Error"})})),s.finally((function(){a.setState({inProgress:!1})}))})),a}return p()(t,e),o()(t,[{key:"getLoginPageLink",value:function(){var e=this.props.appUtil.location.query.h_l;return"/auth/login".concat(e?"/".concat(e):"")}},{key:"renderSuccess",value:function(){var e=this.getLoginPageLink();return w.a.createElement("div",{className:"success-message"},w.a.createElement(I.a,{icon:"ui-icon-check-circle",title:"Forgot Password",message:"An email has been sent to your register email id with further instructions how to reset your password. Please check your email"}),w.a.createElement(R.d,{size:"large",role:"link",to:e,"data-analytics":"ForgotPasswordLogin",className:"auth-button-full"},"Log In"))}},{key:"renderForm",value:function(){var e=this.state,t=e.loginId,a=e.inProgress,n=e.errorMessage,r=this.getLoginPageLink();return w.a.createElement(v.Fragment,null,w.a.createElement(I.a,{title:"Forgot Password",message:"No Problem! Enter your email or username below and we will send you an email with instruction to reset your password."}),w.a.createElement("form",{className:"auth-form"},w.a.createElement(F.a,{message:{type:"error",data:n}}),w.a.createElement("div",{className:"form-item"},w.a.createElement(C.a,{size:"large",theme:"theme-m",placeholder:"Email or Username",value:t,onChange:this.onLoginIdChange})),w.a.createElement("div",{className:"form-item"},w.a.createElement(M,{onValidate:this.onRecaptchaValidate})),w.a.createElement("div",{className:"form-item"},w.a.createElement(R.d,{className:"auth-button-full",size:"large",type:"button",onClick:this.resetPassword,loading:a,"data-analytics":"Reset Password"},"Send Reset Link"),w.a.createElement("div",{className:"back-link"},"Back to ",w.a.createElement(E.Link,{to:r,className:"text-link login-link","data-analytics":"ForgotPasswordLogin"},"Login")))))}},{key:"render",value:function(){var e=this.state.showResetSuccess;return w.a.createElement("div",{className:"forgot-password auth-content"},e?this.renderSuccess():this.renderForm())}}]),t}(v.PureComponent);f()(q,"propTypes",{appUtil:y.a.object.isRequired});t.default=Object(b.a)(q)},bjMU:function(e,t,a){"use strict";var n=a("cDcd"),r=a.n(n),s=a("TSYQ"),o=a.n(s),c=a("17x9"),i=a.n(c);a("lc3K");function l(e){var t=e.title,a=e.message,n=e.icon;return r.a.createElement("div",{className:"auth-message"},n&&r.a.createElement("i",{className:o()(n,"auth-message-icon")}),r.a.createElement("h3",{className:"auth-message-title"},t),r.a.createElement("p",{className:"auth-message-content"},a))}l.propTypes={title:i.a.string.isRequired,message:i.a.string.isRequired,icon:i.a.string},t.a=l},gG5y:function(e,t,a){},lc3K:function(e,t,a){},pckj:function(e,t,a){}}]);
//# sourceMappingURL=https://preview-hrc.hackerrank.com/fcore-assets/sourcemaps/hackerrank_r_auth-09b1c543.js.map