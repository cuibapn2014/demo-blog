(function(e){function t(t){for(var o,a,s=t[0],c=t[1],l=t[2],d=0,f=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0936":function(e,t,n){"use strict";n("8df5")},"1be2":function(e,t,n){"use strict";n("faf5")},"3dfd":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[null===e.currentUser?n("div",{staticClass:"flex flex-col"},[n("button",{staticClass:"font-bold w-32 py-4 bg-green-400 font-mono text-white hover:bg-white hover:text-green-400 duration-200 text-xl rounded",on:{click:function(t){return e.appear()}}},[e._v("Login")]),n("LoginForm",{class:e.hide,on:{hideClass:e.updateAppear}})],1):n("div",{staticClass:"flex flex-col"},[n("button",{staticClass:"z-10 font-bold w-32 py-4 bg-gray-900 font-mono text-white hover:bg-white hover:text-gray-900 duration-200 text-xl rounded",on:{click:function(t){return e.appearPro()}}},[e._v("Profile")]),n("Profile",{class:e.appearProfile,on:{hideClass:e.updateAppearPro}})],1)])},r=[],i=n("5530"),a=n("2f62"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.appear,attrs:{id:"login-form"},on:{click:e.exitLogin}},[n("div",{staticClass:"flex items-center justify-center h-screen lg:w-2/5 m-auto"},[null===e.currentUser?n("div",{staticClass:"relative w-full bg-white flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10"},[n("button",{staticClass:"top-0 right-0 absolute mr-2 mt-2",on:{click:e.sendDataClass}},[n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])]),"login"===e.mode?n("form",{staticClass:"flex flex-col space-y-8 mt-10",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login.apply(null,arguments)}}},[e._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:e.crendentials.email,expression:"crendentials.email"}],staticClass:"border rounded-lg py-3 px-3 bg-gray-100 border-gray-700 placeholder-gray-500 focus:outline-none focus:ring",attrs:{type:"email",placeholder:"For-example@example.com"},domProps:{value:e.crendentials.email},on:{input:function(t){t.target.composing||e.$set(e.crendentials,"email",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.crendentials.password,expression:"crendentials.password"}],staticClass:"border rounded-lg py-3 px-3 bg-gray-100 border-gray-700 placeholder-gray-500 focus:outline-none focus:ring",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.crendentials.password},on:{input:function(t){t.target.composing||e.$set(e.crendentials,"password",t.target.value)}}}),n("div",{staticClass:"flex flex-col"},[n("button",{staticClass:"bg-green-400 text-white rounded-lg py-3 mt-1 hover:bg-green-500 duration-100 font-semibold",on:{click:function(t){return e.login()}}},[e._v("SIGN IN")]),n("p",{staticClass:"text-center my-1"},[e._v("OR")]),n("button",{staticClass:"bg-red-500 text-white rounded-lg py-3 hover:bg-red-600 duration-100 font-semibold",on:{click:function(t){return e.loginExternal()}}},[e._v("SIGN IN WITH GOOGLE ")])]),n("p",{staticClass:"message"},[e._v(" Not registered? "),n("a",{staticClass:"text-blue-400",attrs:{href:"#"},on:{click:e.toggleMode}},[e._v("Create an account")])])]):e._e(),"register"===e.mode?n("form",{staticClass:"flex flex-col space-y-8 mt-10",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.signup.apply(null,arguments)}}},[e._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:e.crendentials.name,expression:"crendentials.name"}],staticClass:"border rounded-lg py-3 px-3 bg-gray-100 border-gray-700 placeholder-gray-500 focus:outline-none focus:ring",attrs:{type:"text",placeholder:"Your name"},domProps:{value:e.crendentials.name},on:{input:function(t){t.target.composing||e.$set(e.crendentials,"name",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.crendentials.email,expression:"crendentials.email"}],staticClass:"border rounded-lg py-3 px-3 bg-gray-100 border-gray-700 placeholder-gray-500 focus:outline-none focus:ring",attrs:{type:"email",placeholder:"For-example@example.com"},domProps:{value:e.crendentials.email},on:{input:function(t){t.target.composing||e.$set(e.crendentials,"email",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.crendentials.password,expression:"crendentials.password"}],staticClass:"border rounded-lg py-3 px-3 bg-gray-100 border-gray-700 placeholder-gray-500 focus:outline-none focus:ring",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.crendentials.password},on:{input:function(t){t.target.composing||e.$set(e.crendentials,"password",t.target.value)}}}),n("button",{staticClass:"bg-green-400 text-white rounded-lg py-3 hover:bg-green-500 duration-100 font-semibold",on:{click:e.signup}},[e._v("REGISTER")]),n("p",{staticClass:"message"},[e._v(" Already registered? "),n("a",{staticClass:"text-blue-400",attrs:{href:"#"},on:{click:e.toggleMode}},[e._v("Log in")])])]):e._e()]):e._e()])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-black mt-5"},[n("h1",{staticClass:"font-bold text-4xl text-center"},[e._v("Login")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-black mt-5"},[n("h1",{staticClass:"font-bold text-4xl text-center"},[e._v("Register")])])}],l={name:"LoginForm",data:function(){return{className:"hide",crendentials:{name:"",password:"",email:""},mode:"login"}},computed:Object(i["a"])({},Object(a["c"])("auth",["currentUser"])),methods:Object(i["a"])(Object(i["a"])({sendDataClass:function(){this.$emit("hideClass",this.className)},exitLogin:function(e){var t=document.getElementById("login-form");e.target==t&&this.sendDataClass()}},Object(a["b"])("auth",["attemptLogin","attemptSignup","attemptExternalLogin"])),{},{toggleMode:function(){"register"===this.mode?this.mode="login":this.mode="register"},signup:function(){this.attemptSignup(this.crendentials).then((function(e){alert("Confirmation email has been sent to you! ".concat(e.id)),console.log(e)})).catch((function(e){alert("Somethings gone wrong signing up.\n                 Error: ".concat(e)),console.error(e,"Somethings gone wrong signing up")}))},login:function(){var e=this;this.attemptLogin(Object(i["a"])({},this.crendentials)).then((function(){alert("You have signed in!"),e.$router.push(e.$route.query.redirect||"/")})).catch((function(e){alert("Somethings gone wrong logging in.\n                 Error: ".concat(e)),console.error(e,"Somethings gone wrong logging in")}))},loginExternal:function(){this.attemptExternalLogin("Google")}})},u=l,d=(n("5ab5"),n("2877")),f=Object(d["a"])(u,s,c,!1,null,"92e98682",null),g=f.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"h-60 flex flex-col max-w-md bg-gray-200 opacity-100 font-poppins px-4 bg-no-repeat bg-cover bg-center border-solid rounded-b-3xl rounded-t-3xl"},[n("div",{staticClass:"flex justify-between px-1 pt-4 items-center"},[n("div",{staticClass:"cursor-pointer",on:{click:e.sendDataClass}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),n("path",{attrs:{d:"M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"}})])]),e._m(0)]),n("div",{staticClass:"flex items-center px-4 pt-12 justify-between"},[e._m(1),n("div",{staticClass:"w-9/12 flex items-center"},[n("div",{staticClass:"w-10/12 flex flex-col leading-none pl-4"},[n("p",{staticClass:"text-2xl font-bold"},[e._v(e._s(e.currentUser.user_metadata.full_name))]),n("p",{staticClass:"text-l pt-1 font-light text-gray-700"},[e._v(e._s(e.currentUser.email))])])])]),n("div",{staticClass:"flex px-4"},[n("button",{staticClass:"flex flex-row py-2 bg-red-400 text-white rounded px-2 font-semibold mt-2",on:{click:function(t){return e.logout()}}},[e._v(" Log out "),n("svg",{staticClass:"h-6 w-6 ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"}})])])])])])},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"font-semibold"},[e._v("My Profile")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-24 h-24 bg-green-400 flex items-center rounded-full"},[n("img",{staticClass:"h-20 w-20 mx-auto filter invert",attrs:{src:"https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"}})])}],m={name:"Profile",data:function(){return{className:"hide"}},methods:Object(i["a"])(Object(i["a"])({sendDataClass:function(){this.$emit("hideClass",this.className)}},Object(a["b"])("auth",["attemptLogout"])),{},{logout:function(){var e=this;this.attemptLogout().then((function(t){alert("logged out"),e.$router.push("/"),console.log("logged out",t)})).catch((function(e){alert("problem with logout"),location.reload(),console.error("problem with logout",e)}))}}),computed:Object(i["a"])({},Object(a["c"])("auth",["currentUser"]))},v=m,b=(n("1be2"),Object(d["a"])(v,p,h,!1,null,null,null)),y=b.exports,w={components:{LoginForm:g,Profile:y},name:"App",data:function(){return{hide:"hide",appearProfile:"hide"}},methods:Object(i["a"])({appear:function(){"hide"==this.hide?this.hide=null:this.hide="hide"},appearPro:function(){"hide"==this.appearProfile?this.appearProfile=null:this.appearProfile="hide"},updateAppear:function(e){this.hide=e},updateAppearPro:function(e){this.appearProfile=e}},Object(a["b"])("auth",["attemptLogin","attemptSignup","attemptExternalLogin"])),computed:Object(i["a"])({},Object(a["c"])("auth",["currentUser"]))},x=w,_=(n("0936"),Object(d["a"])(x,o,r,!1,null,"95ca73ca",null));t["default"]=_.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=n("3dfd"),i=(n("a2f0"),n("2f62")),a=n("bfa9"),s=(n("d3b7"),n("b0c0"),n("ac1f"),n("466d"),n("85ce")),c=n.n(s),l={strict:!1,namespaced:!0,state:function(){return{currentUser:null,GoTrueAuth:null}},getters:{loggedIn:function(e){return!!e.currentUser},currentUser:function(e){return e.currentUser},netlifyUserLoggedIn:function(e){return!!e.GoTrueAuth.currentUser()},currentNetlifyUser:function(e){return e.GoTrueAuth.currentUser()},GoTrueAuth:function(e){return e.GoTrueAuth}},mutations:{SET_GOTRUE:function(e,t){e.GoTrueAuth=t},SET_CURRENT_USER:function(e,t){e.currentUser=t}},actions:{invokeSignupFunction:function(e,t){return new Promise((function(e,n){var o="https://".concat(document.location.hostname,"/.netlify/functions/identity-external-signup");console.log("invoking external signup function @",o),fetch(o,{method:"POST",headers:{"cache-control":"no-cache",Authorization:"Bearer "+t}}).then((function(e){return e.json()})).then((function(t){t.code>=400&&(n(t.msg),console.error("There was an error invoking external signup",t)),e(t)})).catch((function(e){n("error invoking signup function directly",e)}))}))},attemptLogin:function(e,t){var n=e.commit,o=e.state;return console.log("Attempting login for ".concat(t.email)),new Promise((function(e,r){o.GoTrueAuth.login(t.email,t.password,!0).then((function(t){e(t),n("SET_CURRENT_USER",t)})).catch((function(e){console.log("An error occurred signing up",e),r(e)}))}))},attemptExternalLogin:function(e,t){var n=e.state;window.location.href=n.GoTrueAuth.loginExternalUrl(t)},completeExternalLogin:function(e,t){var n=e.commit,o=e.dispatch,r=e.state;return new Promise((function(e,i){r.GoTrueAuth.createUser(t).then((function(r){if(console.log("Completed external login for user ID ",r.id),r.app_metadata.db_token)return console.log("A db token has already been intialised for this userID ",r.id),n("SET_CURRENT_USER",r),void e("Signed in successfully");o("invokeSignupFunction",t.access_token).then((function(t){n("SET_CURRENT_USER",t),e("Signed in successfully")})).catch((function(e){i(e)}))})).catch((function(e){i(e)}))}))},attemptSignup:function(e,t){var n=e.state;return console.log("Attempting signup for ".concat(t.email,"..."),t),new Promise((function(e,o){n.GoTrueAuth.signup(t.email,t.password,{full_name:t.name}).then((function(t){console.log("Confirmation email sent",t),e(t)})).catch((function(e){console.log("An error occurred trying to signup",e),o(e)}))}))},attemptConfirmation:function(e,t){var n=e.state;return console.log("Attempting to verify token",t),new Promise((function(e,o){n.GoTrueAuth.confirm(t).then((function(t){console.log("User has been confirmed"),e(t)})).catch((function(e){console.log("An error occurred trying to confirm the user",e),o(e)}))}))},attemptLogout:function(e){var t=e.state,n=e.commit;return new Promise((function(e,o){t.GoTrueAuth.currentUser().logout().then((function(t){console.log("User logged out",t),alert("you have logged out"),n("SET_CURRENT_USER",null),e(t)})).catch((function(e){console.error("Could not log user out",e),n("SET_CURRENT_USER",null),o(e)}))}))},getUserJWTToken:function(e){var t=e.getters,n=e.state;if(console.log(t.currentNetlifyUser),!t.currentNetlifyUser)return alert("Please sign in again"),void console.warn("User needs to sign in again");n.GoTrueAuth.currentUser().jwt().then((function(e){alert("got user token: ",e)}))},getCurrentUser:function(e){var t=e.state;console.log("User Object",t.GoTrueAuth.currentUser())},initAuth:function(e){var t=e.commit,n=e.rootGetters,o=/\b((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b/,r=document.location.hostname,i="https://".concat(r,"/.netlify/identity"),a=function(e){return new c.a({APIUrl:e,audience:"",setCookie:!0})};if(r.match(o)||"localhost"===r)return console.log("Looks like your in a dev environment",r),t("app/SET_DEV_ENV",!0,{root:!0}),console.log("Initialising Go True client with","https://".concat(n["app/siteURL"],"/.netlify/identity")),t("SET_GOTRUE",a("https://".concat(n["app/siteURL"],"/.netlify/identity"))),void this.subscribe((function(e){"app/SET_SITE_URL"===e.type&&(console.log("Re-initialising Go True client with",n["app/siteURL"]),t("SET_GOTRUE",a("https://".concat(n["app/siteURL"],"/.netlify/identity"))))}));console.log("Initialising Go True client with ",i),t("SET_GOTRUE",a(i))},requestPasswordRecover:function(e,t){var n=e.state;n.GoTrueAuth.requestPasswordRecovery(t).then((function(e){return alert("Recovery email sent",{response:e})})).catch((function(e){return alert("Error sending recovery mail:",e)}))},attemptPasswordRecovery:function(e,t){var n=e.state,o=e.commit;return new Promise((function(e,r){n.GoTrueAuth.recover(t).then((function(t){console.log("Signing in user with recovery token"),o("SET_CURRENT_USER",t),e(t)})).catch((function(e){console.error("Failed to verify recover token: %o",e),r()}))}))},updateUserAccount:function(e,t){var n=e.state;return new Promise((function(e,o){var r=n.GoTrueAuth.currentUser();r.update(t).then((function(t){console.log("Updated user account details"),e(t)})).catch((function(e){console.error("Failed to update user account: %o",e),o(e)}))}))}}},u={strict:!1,namespaced:!0,state:function(){return{isDevEnvironment:!1,siteURL:null}},getters:{isDevEnvironment:function(e){return e.isDevEnvironment},siteURL:function(e){return e.siteURL}},mutations:{SET_DEV_ENV:function(e,t){e.isDevEnvironment=t},SET_SITE_URL:function(e,t){e.siteURL=t}}};o["a"].use(i["a"]);var d=new a["a"]({key:"store",storage:window.localStorage,module:["auth","app"]}),f=new i["a"].Store({strict:!1,modules:{auth:l,app:u},plugins:[d.plugin]}),g=f,p=n("3835"),h=(n("1276"),n("5319"),n("159b"),n("3ca3"),n("ddb0"),n("8c4f"));o["a"].use(h["a"]);var m=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:function(){return Promise.resolve().then(n.bind(null,"3dfd"))}}],v=new h["a"]({routes:m,mode:"history"});v.beforeEach((function(e,t,n){var o=e.matched.some((function(e){return e.meta.authRequired}));return o?g.getters["auth/loggedIn"]?n():(console.warn("Page restricted, you need to login"),void n({name:"home",query:{redirectFrom:e.fullPath}})):n()}));var b=v;function y(){var e=w(),t=x(),n=_();return e?(console.log("Detected email confirmation token",e),void C(e)):t?(console.log("Detected external access token, received object for external login",t),void E(t)):n?(console.log("found recovery token",n),void U(n)):void console.log("No tokens detected in URL hash")}function w(){try{var e=decodeURIComponent(document.location.hash).split("confirmation_token=")[1];return e}catch(t){return console.error("Something went wrong when trying to extract email confirmation email",t),null}}function x(){try{var e=/access_token=/,t=(document.location.hash||"").replace(/^#\/?/,"");if(t.match(e)){var n={};return t.split("&").forEach((function(e){var t=e.split("="),o=Object(p["a"])(t,2),r=o[0],i=o[1];n[r]=i})),n}}catch(o){return console.error("Something went wrong trying to extract the access token",o),null}}function _(){try{var e=decodeURIComponent(document.location.hash).split("recovery_token=")[1];return e}catch(t){return console.error("Something went wrong when trying to extract email confirmation email",t),null}}function C(e){g.dispatch("auth/attemptConfirmation",e).then((function(e){alert("".concat(e.email," has been confirmed, please login"))})).catch((function(e){alert("Can't authorise your account right now. Please try again"),console.error(e,"Somethings gone wrong logging in")}))}function E(e){g.dispatch("auth/completeExternalLogin",e).then((function(){alert("You have successfully signed in via external provider")})).catch((function(e){alert("Can't Authorise your account right now, try again"),console.error(e,"Somethings gone wrong logging in")}))}function U(e){g.dispatch("auth/attemptPasswordRecovery",e).then((function(){b.push("profile?showUpdateUserModal=true"),alert("Account has been recovered. Update your password now.")})).catch((function(){alert("Can't recover password")}))}var k=function(){y()};new o["a"]({render:function(e){return e(r["default"])},store:g}).$mount("#app"),g.dispatch("auth/initAuth"),k(),o["a"].config.productionTip=!1},"5ab5":function(e,t,n){"use strict";n("a3c8")},"8df5":function(e,t,n){},a2f0:function(e,t,n){},a3c8:function(e,t,n){},faf5:function(e,t,n){}});
//# sourceMappingURL=app.ef6ba842.js.map