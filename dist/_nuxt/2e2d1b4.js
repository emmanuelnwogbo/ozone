(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{385:function(e,t,r){var content=r(444);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("2c322782",content,!0,{sourceMap:!1})},443:function(e,t,r){"use strict";r(385)},444:function(e,t,r){(t=r(19)(!1)).push([e.i,".addmerchant{padding-left:21rem;min-height:160vh}.addmerchant__body{padding:19rem 4.5rem 0 10rem}.addmerchant__form{background:linear-gradient(180deg,hsla(0,0%,97.3%,.1),#fff);box-shadow:-3px 0 20px rgba(0,0,0,.01);-webkit-box-shadow:-3px 0 20px rgba(0,0,0,.01);-moz-box-shadow:-3px 0 20px rgba(0,0,0,.01);padding:3rem;border-radius:1.5rem;min-height:20rem}.addmerchant__form,.addmerchant__formbody{display:flex;flex-direction:column}.addmerchant__h2{display:flex;justify-content:space-between;margin-bottom:7.5rem}.addmerchant__h2 h2{width:100%;font-size:1.9rem;font-weight:500}.addmerchant__formarea{display:flex;justify-content:space-between;margin-bottom:5rem}.addmerchant__formarea input{height:4.8rem;border:1.4px solid rgba(0,0,0,.1);border-radius:.5rem;background:transparent;outline:none;font-size:1.4rem;font-weight:500;padding:0 2rem;width:100%}.addmerchant__buttonarea{margin-top:4rem}.addmerchant__inputarea{display:flex;flex-direction:column}.addmerchant__inputarea label{font-size:1.2rem;margin-bottom:.7rem;color:#000}.addmerchant__button button{font-weight:600;background:#159183;color:#fff;display:flex;align-items:center;justify-content:center;outline:none;cursor:pointer;border:none;font-size:1.3rem;border-radius:.6rem;height:4.5rem;width:29rem}.addmerchant__button:first-child button{color:#000;background:rgba(0,0,0,.1);width:25rem}",""]),e.exports=t},558:function(e,t,r){"use strict";r.r(t);var n={name:"AddMerchant",data:function(){return{email:"",password:"dummytext",phoneNumber:"",fullName:"",address:"",RCnumber:"",businessName:"",businessEmail:"",outlets:"",submitting:!1}},middleware:"auth",methods:{createMerchant:function(){var e=this;this.submitting=!0,this.$store.dispatch("createMerchant",{email:this.email,password:this.password,phoneNumber:this.phoneNumber,fullName:this.businessName,address:this.address,RCnumber:this.RCnumber,businessName:this.businessName,businessEmail:this.businessEmail,outlets:this.outlets}).then((function(t){console.log(t),e.submitting=!1,e.$router.push("/merchants")})).catch((function(e){console.log(e,"there is an err")}))}}},d=(r(443),r(12)),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"addmerchant"},[r("div",{staticClass:"addmerchant__body"},[r("form",{staticClass:"addmerchant__form",attrs:{action:""}},[e._m(0),e._v(" "),r("div",{staticClass:"addmerchant__formbody"},[r("div",{staticClass:"addmerchant__formarea"},[r("div",{staticClass:"addmerchant__inputarea",style:{width:"72rem"}},[r("label",{attrs:{for:""}},[e._v("Name/Business Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.businessName,expression:"businessName"}],attrs:{type:"text"},domProps:{value:e.businessName},on:{input:function(t){t.target.composing||(e.businessName=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"addmerchant__inputarea",style:{width:"31rem"}},[r("label",{attrs:{for:""}},[e._v("Number of Outlets")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.outlets,expression:"outlets"}],attrs:{type:"text"},domProps:{value:e.outlets},on:{input:function(t){t.target.composing||(e.outlets=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"addmerchant__formarea"},[r("div",{staticClass:"addmerchant__inputarea",style:{width:"100%"}},[r("label",{attrs:{for:""}},[e._v("Full Business Address")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{type:"text"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"addmerchant__formarea"},[r("div",{staticClass:"addmerchant__inputarea",style:{width:"72rem"}},[r("label",{attrs:{for:""}},[e._v("Is it a Registered Business")]),e._v(" "),r("input",{attrs:{type:"text"}})]),e._v(" "),r("div",{staticClass:"addmerchant__inputarea",style:{width:"31rem"}},[r("label",{attrs:{for:""}},[e._v("RC Number")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.RCnumber,expression:"RCnumber"}],attrs:{type:"text"},domProps:{value:e.RCnumber},on:{input:function(t){t.target.composing||(e.RCnumber=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"addmerchant__formarea"},[r("div",{staticClass:"addmerchant__inputarea",style:{width:"47%"}},[r("label",{attrs:{for:""}},[e._v("Contact Name")]),e._v(" "),r("input",{attrs:{type:"text"}})]),e._v(" "),r("div",{staticClass:"addmerchant__inputarea",style:{width:"47%"}},[r("label",{attrs:{for:""}},[e._v("Contact Email")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"addmerchant__formarea"},[r("div",{staticClass:"addmerchant__inputarea",style:{width:"47%"}},[r("label",{attrs:{for:""}},[e._v("Business Email")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.businessEmail,expression:"businessEmail"}],attrs:{type:"text"},domProps:{value:e.businessEmail},on:{input:function(t){t.target.composing||(e.businessEmail=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"addmerchant__inputarea",style:{width:"47%"}},[r("label",{attrs:{for:""}},[e._v("Phone Number")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNumber,expression:"phoneNumber"}],attrs:{type:"text"},domProps:{value:e.phoneNumber},on:{input:function(t){t.target.composing||(e.phoneNumber=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"addmerchant__formarea addmerchant__buttonarea"},[e._m(1),e._v(" "),r("div",{staticClass:"addmerchant__button"},[r("button",{on:{click:function(t){return t.preventDefault(),e.createMerchant(t)}}},[e._v("\n              "+e._s(e.submitting?"Adding Merchant":"Save and Proceed")+"\n            ")])])])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"addmerchant__h2"},[t("h2",[this._v("Merchant Registration")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"addmerchant__button"},[t("button",[this._v("Cancel")])])}],!1,null,null,null);t.default=component.exports}}]);