(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{209:function(t,e,r){var content=r(214);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("76a687cc",content,!0,{sourceMap:!1})},210:function(t,e,r){"use strict";r.r(e);var n={name:"BarGraph",props:{colors:Array,numberOfBarsPerArea:Array,YScale:Array,XScale:Array,barBodyWidth:String,barWidth:String}},o=(r(213),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bargraph"},[r("div",{staticClass:"bargraph__bodyone"},[r("div",{staticClass:"bargraph__area bargraph__left"},t._l(t.YScale,(function(e,n){return r("div",{key:n},[r("span",[t._v(t._s(e))])])})),0),t._v(" "),r("div",{staticClass:"bargraph__area bargraph__right"},[r("div",{staticClass:"bargraph__barcontent"},t._l(t.numberOfBarsPerArea,(function(e,n){return r("div",{key:n,staticClass:"bargraph__barbody",style:{width:t.barBodyWidth}},[r("div",{staticClass:"bargraph__bars"},t._l(e,(function(e,n){return r("div",{key:n,staticClass:"bargraph__bar",style:{width:t.barWidth}},[r("div",{staticClass:"bargraph__barbox",style:{background:t.colors[n],height:e}})])})),0),t._v(" "),r("div",{staticClass:"bargraph__barlabel"},[r("label",{attrs:{for:""}},[t._v(t._s(t.XScale[n]))])])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},213:function(t,e,r){"use strict";r(209)},214:function(t,e,r){(e=r(18)(!1)).push([t.i,".bargraph,.bargraph__bodyone{width:100%;height:100%;position:relative}.bargraph__bodyone{display:flex;font-size:1.3rem;color:#000;font-weight:500}.bargraph__area{height:100%;display:flex;flex-direction:column;justify-content:space-between}.bargraph__left{opacity:.5;padding-bottom:2.5rem}.bargraph__right{padding:0 1rem;width:98%}.bargraph__barbody,.bargraph__barcontent{height:100%;justify-content:space-between;display:flex}.bargraph__barbody{flex-direction:column}.bargraph__bars{display:flex;width:100%;height:100%;justify-content:space-between}.bargraph__bar{position:relative;border-radius:.3rem;height:100%}.bargraph__barbox{border-radius:.3rem;position:absolute;bottom:0;left:0;width:100%}.bargraph__barlabel{display:flex;justify-content:space-between;opacity:.5;margin-top:1rem}",""]),t.exports=e},218:function(t,e,r){var content=r(221);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("acd79478",content,!0,{sourceMap:!1})},219:function(t,e,r){"use strict";r.r(e);r(20);var n={data:function(){return{value:"",dropOpen:!1}},watch:{value:function(t,e){this.inputValidator(t,this.name)}},props:{type:String,width:String,placeholder:String,values:Array,inputValidator:Function,name:String,dropIconColor:String,block:Boolean,dropIconSize:String},methods:{selectValue:function(t){this.value=t,this.dropOpen=!1},opendropdown:function(){this.dropOpen?this.dropOpen=!1:this.dropOpen=!0}}},o=(r(220),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"inputfield"},["text"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"inputfield__input",style:{width:t.width},attrs:{placeholder:t.placeholder,type:"text"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}):t._e(),t._v(" "),"dropdown"===t.type?r("input",{staticClass:"inputfield__input inputfield__input--dropdown",style:{width:t.width},attrs:{placeholder:t.placeholder,type:"text"},domProps:{value:t.value},on:{click:function(e){return e.stopPropagation(),t.opendropdown(e)}}}):t._e(),t._v(" "),"dropdown"===t.type?r("div",{staticClass:"inputfield__dropicon"},[t.block?t._e():r("span",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"19",viewBox:"0 0 20 19",fill:"none"}},[r("g",{attrs:{opacity:"0.9"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.61423 7.02866C5.34158 7.30132 5.3206 7.73035 5.55131 8.02707L5.61423 8.09832L9.39605 11.8801C9.66871 12.1528 10.0977 12.1738 10.3945 11.9431L10.4657 11.8801L14.2475 8.09832C14.5429 7.80294 14.5429 7.32404 14.2475 7.02866C13.9749 6.75601 13.5458 6.73503 13.2491 6.96574L13.1779 7.02866L9.93088 10.2751L6.68389 7.02866C6.41124 6.75601 5.9822 6.73503 5.68549 6.96574L5.61423 7.02866Z",fill:"#000000"}})])])]),t._v(" "),t.block?r("span",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.dropIconSize,height:t.dropIconSize,viewBox:"0 0 24 24",fill:"none"}},[r("path",{attrs:{d:"M4 9L12 17L20 9H4Z",fill:"#2F3147"}})])]):t._e()]):t._e(),t._v(" "),t.dropOpen?r("div",{staticClass:"inputfield__dropdowns"},t._l(t.values,(function(e,n){return r("div",{key:n,staticClass:"inputfield__drop",on:{click:function(r){return t.selectValue(e)}}},[t._v("\n      "+t._s(e)+"\n    ")])})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},220:function(t,e,r){"use strict";r(218)},221:function(t,e,r){(e=r(18)(!1)).push([t.i,".inputfield{position:relative;height:100%}.inputfield__input{background:#fff;border:1px solid #f3f4f6;box-sizing:border-box;border-radius:.6rem;height:100%;padding:1.5rem 2rem}.inputfield__input:focus{outline:none;border:1px solid #159183}.inputfield__input::-webkit-input-placeholder{color:#838a96}.inputfield__dropdowns{position:absolute;width:100%;left:0;border:1px solid #f3f4f6;background:#fff;z-index:3;overflow:scroll;overflow-x:hidden;height:20rem;bottom:-20.1rem!important}.inputfield__dropicon{position:absolute;top:0;right:0;height:100%;display:flex;align-items:center;justify-content:center;padding-right:2rem}.inputfield__drop{position:relative;font-weight:500;font-size:1.4rem;color:#2f3147;background:#fff;border-bottom:1px solid #f3f4f6;letter-spacing:1.2px;padding:.5rem 2rem;z-index:3;cursor:pointer;height:4.2rem;display:flex;align-items:center;transition:all .5s ease}.inputfield__drop:hover{background:rgba(178,190,195,.1)}",""]),t.exports=e},227:function(t,e,r){var content=r(259);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("179bf20d",content,!0,{sourceMap:!1})},258:function(t,e,r){"use strict";r(227)},259:function(t,e,r){(e=r(18)(!1)).push([t.i,'.container{padding-left:21rem}.container__body{padding:19rem 4.5rem 0 10rem;display:flex;justify-content:space-between}.container__body:before{content:"";right:42rem;position:fixed;top:0;width:1px;opacity:.1;background:#000;height:97%}.container__leftheader{display:flex;justify-content:space-between;width:100%;margin-bottom:2rem;font-size:.9rem}.container__leftheader h1{font-weight:500}.container__leftheader--drop{width:15rem;height:5rem;flex-shrink:0;border-radius:1.8rem}.container__leftheader--drop input{border-radius:1.8rem!important;border:none;background:rgba(227,230,236,.5)!important}.container__leftheader--drop input:focus{outline:none;border:none}.container__leftheader--drop input::-moz-placeholder{font-size:1.3rem;font-weight:500}.container__leftheader--drop input:-ms-input-placeholder{font-size:1.3rem;font-weight:500}.container__leftheader--drop input::placeholder{font-size:1.3rem;font-weight:500}.container__left{width:75rem}.container__right{width:34rem}.container__right,.container__righttop{flex-shrink:0;display:flex;flex-direction:column;align-items:center}.container__righttop{height:34rem;padding:3rem;width:33rem;border-radius:1.8rem;background:#fff;cursor:pointer;box-shadow:-3px 0 20px rgba(0,0,0,.1);-webkit-box-shadow:-3px 0 20px rgba(0,0,0,.1);-moz-box-shadow:-3px 0 20px rgba(0,0,0,.1);background:linear-gradient(180deg,hsla(0,0%,97.3%,.6),#fff);box-shadow:7px 14px 20px rgba(0,0,0,.2);-webkit-box-shadow:7px 14px 20px rgba(0,0,0,.2);-moz-box-shadow:7px 14px 20px rgba(0,0,0,.2);text-align:center}.container__righttop--h1{font-size:1.7rem;font-weight:500}.container__righttop--number{font-size:5.5rem;font-weight:700;color:#159183}.container__righttop--tip{font-size:1.3rem;width:18rem;margin-top:1rem;color:rgba(0,0,0,.3);font-weight:500}.container__righttop button{outline:none;border:none;box-shadow:-2px -2px 20px rgba(0,0,0,.3);-webkit-box-shadow:-2px -2px 20px rgba(0,0,0,.3);-moz-box-shadow:-2px -2px 20px rgba(0,0,0,.3);height:4rem;width:13rem;border-radius:1.4rem;margin-top:3rem;color:#159183;font-weight:600;cursor:pointer}.container__rightbottom{margin-top:5rem}.container__rightbottom--graph{height:30rem;width:30rem;margin-top:3rem}.container__lefttop{flex-shrink:0;height:46rem;padding:3rem;border-radius:1.8rem;background:#fff;cursor:pointer;box-shadow:-3px 0 20px rgba(0,0,0,.1);-webkit-box-shadow:-3px 0 20px rgba(0,0,0,.1);-moz-box-shadow:-3px 0 20px rgba(0,0,0,.1);background:linear-gradient(180deg,hsla(0,0%,97.3%,.6),#fff);box-shadow:7px 14px 20px rgba(0,0,0,.2);-webkit-box-shadow:7px 14px 20px rgba(0,0,0,.2);-moz-box-shadow:7px 14px 20px rgba(0,0,0,.2);position:relative}.container__leftbottom{display:flex;justify-content:space-between;margin-top:4rem}.container__leftbottomleft{display:flex;flex-shrink:0;width:35rem;padding:3rem 0 0;border-radius:1.8rem;background:#fff;cursor:pointer;box-shadow:-3px 0 20px rgba(0,0,0,.1);-webkit-box-shadow:-3px 0 20px rgba(0,0,0,.1);-moz-box-shadow:-3px 0 20px rgba(0,0,0,.1);background:linear-gradient(180deg,hsla(0,0%,97.3%,.6),#fff);box-shadow:7px 14px 20px rgba(0,0,0,.2);-webkit-box-shadow:7px 14px 20px rgba(0,0,0,.2);-moz-box-shadow:7px 14px 20px rgba(0,0,0,.2);position:relative;flex-direction:column}.container__leftbottomleft h1{padding:0 3rem}.container__leftbottomleft--tiles{margin-top:2rem;padding-bottom:3rem}.container__leftbottomleft--tile{border-bottom:.4px solid rgba(47,54,64,.1);padding:1rem 3rem 2.5rem;display:flex;align-items:flex-end}.container__leftbottomleft--setting{color:#5f75ee;font-size:1.2rem;font-weight:500;text-align:center;height:5rem;display:flex;align-items:center;justify-content:center;cursor:pointer}.container__leftbottomleft--contentdata{display:flex;flex-direction:column;line-height:2.2rem;margin-right:2rem}.container__leftbottomleft--contentdata span{display:inline-block}.container__leftbottomleft--contentdata span:first-child{font-size:.9rem;opacity:.6;font-weight:500}.container__leftbottomleft--contentdata span:nth-child(2){font-size:2rem;font-weight:500}.container__leftbottomleft--contentdata span:nth-child(3){color:#7fba7a;font-weight:500}.container__leftbottomleft--chart{width:14rem;height:7rem}.container__leftbottomright{display:flex;flex-shrink:0;width:35rem;padding:3rem;border-radius:1.8rem;background:#fff;cursor:pointer;box-shadow:-3px 0 20px rgba(0,0,0,.1);-webkit-box-shadow:-3px 0 20px rgba(0,0,0,.1);-moz-box-shadow:-3px 0 20px rgba(0,0,0,.1);background:linear-gradient(180deg,hsla(0,0%,97.3%,.9),#fff);box-shadow:7px 14px 20px rgba(0,0,0,.2);-webkit-box-shadow:7px 14px 20px rgba(0,0,0,.2);-moz-box-shadow:7px 14px 20px rgba(0,0,0,.2);position:relative;flex-direction:column}.container__leftbottomright--tiles{margin-top:2rem}.container__leftbottomright--btn{width:100%;display:flex;justify-content:center;position:absolute;bottom:2rem;left:0}.container__leftbottomright--btn button{font-weight:600;background:#159183;color:#fff;display:flex;align-items:center;justify-content:center;outline:none;cursor:pointer;border:none;font-size:1.3rem;border-radius:1.2rem;height:4.5rem;width:29rem}.container__leftbottomrighttile{display:flex;justify-content:space-between;line-height:2rem;padding:0 0 3rem}.container__leftbottomrighttile--left{display:flex;align-items:center}.container__leftbottomrighttile--icon{margin-right:1.3rem}.container__leftbottomrighttile--details{display:flex;flex-direction:column}.container__leftbottomrighttile--details span:first-child{font-size:1.5rem;font-weight:700}.container__leftbottomrighttile--details span:nth-child(2){font-size:1.1rem;font-weight:500;color:#808191}.container__leftbottomrighttile--right{margin-top:.2rem;color:#149158;font-weight:500;font-size:1.6rem}.container__middle{display:flex;justify-content:space-between}.container__middle--fundsavail{display:flex;align-items:center;margin-top:1.2rem;width:10.5rem;border-bottom:.2px solid rgba(47,54,64,.2);padding-bottom:1rem}.container__middle--bag{margin-right:1rem}.container__middle--left h2{font-size:4rem;margin-top:1rem}.container__middle--funds{display:flex;flex-direction:column;font-size:1.13rem;color:#3f8cff;font-weight:500}.container__middle--right{width:55rem;height:19rem}.container__middle--graphbody{height:19rem}.container__updatesettings{padding:1rem 0}.container__table{display:flex;align-items:center;border:.2px solid rgba(47,54,64,.2);border-radius:1.5rem}.container__table--box{width:22rem;height:12rem;flex-shrink:0;padding:2rem;display:flex;justify-content:center;flex-direction:column}.container__table--box:nth-child(2){border-right:.2px solid rgba(47,54,64,.2);border-left:.2px solid rgba(47,54,64,.2)}.container__table--boxheader{display:flex;align-items:center;color:#808191;font-weight:500;font-size:1.2rem}.container__table--boxheader span{display:inline-block}.container__table--boxheader span:first-child{margin-right:.8rem}.container__table--number{font-weight:600;font-size:2.4rem;padding-top:.5rem}.container__table--stat{position:relative;width:12rem;height:.2rem;border-radius:3rem;background:rgba(47,54,64,.2);margin-top:1.4rem}.container__table--stat span{display:inline-block;height:100%;width:50%;position:absolute;top:0;left:0;background:#159183}.container__table--stat span.middle{background:#a0d7e7}.container__table--stat span.last{background:#3f8cff}',""]),t.exports=e},294:function(t,e,r){"use strict";r.r(e);var n=r(219),o=r(210),l={components:{InputField:n.default,BarGraph:o.default},data:function(){return{names:["","","","",""],values:[[10,5,5,10,10],[40,10,10,20,10]]}},methods:{openCustomerpage:function(){this.$router.push("/customer")},inputValidator:function(){}},mounted:function(){this.$store.dispatch("getCustomers"),this.$store.dispatch("getTransactions")},computed:{customers:function(){var t=this.$store.getters.customers.filter((function(t){return"admin"!==t.accountType}));return t}},middleware:"auth"},d=(r(258),r(12)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"container__body"},[r("div",{staticClass:"container__left"},[r("div",{staticClass:"container__lefttop"},[r("div",{staticClass:"container__leftheader"},[r("h1",[t._v("Transaction Report")]),t._v(" "),r("div",{staticClass:"container__leftheader--drop"},[r("InputField",{attrs:{inputValidator:t.inputValidator,placeholder:"Filter",name:"Per",values:["Test","Test2","Test","Test2","Test","Test2"],type:"dropdown",width:"100%"}})],1)]),t._v(" "),r("div",{staticClass:"container__middle"},[r("div",{staticClass:"container__middle--left"},[r("h2",[t._v("N0")]),t._v(" "),r("div",{staticClass:"container__middle--fundsavail"},[r("div",{staticClass:"container__middle--bag"},[r("span",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"23",viewBox:"0 0 32 32",fill:"none"}},[r("rect",{attrs:{width:"32",height:"32",rx:"8",fill:"#FF9A7B"}}),t._v(" "),r("rect",{attrs:{width:"32",height:"32",rx:"8",fill:"#159183"}}),t._v(" "),r("path",{attrs:{d:"M15.325 4.975C14.62 4.975 14.1269 5.53562 13.78 6.025C13.4594 6.475 12.9381 6.49 11.965 6.49C11.4475 6.49 10.7838 6.53875 10.375 6.835C10.9844 7.85687 11.7794 8.61812 12.505 8.815C12.8894 8.92 13.1988 8.85062 13.48 8.62C13.9469 8.1775 14.4644 7.70125 15.1 7.75C15.5519 7.78187 15.9513 8.05937 16.42 8.65C16.5044 8.75312 16.6244 8.80562 16.765 8.815C17.0144 8.83187 17.3238 8.68375 17.59 8.44C17.8713 8.18875 18.1956 7.93187 18.535 7.66C19.0844 7.21937 20.0594 6.44125 20.215 6.07C20.0725 5.98375 19.8756 5.92 19.6 5.92C19.2194 5.92 18.85 6.01375 18.49 6.1C18.1825 6.17312 17.8956 6.235 17.65 6.235C17.4325 6.235 17.2731 6.18812 17.155 6.07C16.4163 5.30125 15.8725 4.975 15.325 4.975ZM20.485 7.255C20.1156 7.62625 19.6431 8.00312 19.135 8.41C18.8144 8.66687 18.4975 8.9275 18.235 9.16C17.7719 9.58375 17.2075 9.81062 16.69 9.775C16.2869 9.74687 15.9456 9.56312 15.685 9.25C15.3175 8.785 15.1113 8.7025 15.025 8.695C14.815 8.68937 14.4344 9.0475 14.125 9.34C13.7388 9.65875 13.2981 9.82 12.835 9.82C12.6419 9.82 12.4525 9.78437 12.25 9.73C11.8581 9.62312 11.4719 9.40562 11.095 9.115C11.5675 9.6175 12.2369 10.51 12.355 11.755C13.3488 12.37 15.6569 13.4087 18.355 11.89C18.5069 11.8037 18.6831 11.68 18.88 11.545C18.895 11.5337 18.9081 11.5262 18.925 11.515C18.7938 9.73187 19.84 8.35375 19.975 8.185L20.02 8.125C20.1831 7.86812 20.3706 7.56437 20.485 7.255ZM22.345 10.24C21.4056 10.1969 20.5675 10.5212 19.885 10.9C19.8719 11.0481 19.8775 11.1944 19.885 11.35C20.1006 11.4381 20.3144 11.5469 20.53 11.65C21.535 12.1337 22.5194 12.7956 23.41 13.6C23.4213 13.6019 23.4288 13.6 23.44 13.6C23.5581 13.6 23.6763 13.5531 23.77 13.465C23.9631 13.2831 23.9669 12.9831 23.785 12.79C22.9581 11.9162 21.9381 11.5319 20.935 11.455C21.7263 11.1362 22.6525 11.0481 23.695 11.62C23.9275 11.7475 24.2125 11.6575 24.34 11.425C24.4675 11.1925 24.3775 10.9075 24.145 10.78C23.5038 10.4294 22.9094 10.2662 22.345 10.24ZM19.57 12.235C19.5194 12.2687 19.4688 12.3062 19.42 12.34C19.1988 12.4919 19.0094 12.6156 18.835 12.715C17.6538 13.3806 16.5269 13.63 15.52 13.63C13.7725 13.63 12.385 12.9156 11.695 12.475C8.65001 13.78 5.92001 17.5881 5.92001 20.845C5.92001 26.08 9.31376 27.04 16 27.04C22.6863 27.04 26.08 26.08 26.08 20.845C26.08 16.9675 22.8438 13.5419 19.57 12.235ZM16.33 16.48C16.9694 16.48 17.6013 16.6956 18.235 17.14L17.74 18.025C17.2469 17.5394 16.7538 17.29 16.24 17.29C14.875 17.29 14.455 18.8069 14.335 19.39H17.32L17.035 20.02H14.26C14.2525 20.0762 14.26 20.1437 14.26 20.2V20.47C14.26 20.5056 14.2525 20.5394 14.26 20.575H16.885L16.615 21.22H14.32C14.5525 22.7331 15.2106 23.485 16.315 23.485C17.2038 23.485 17.6538 23.0087 17.95 22.735V23.83C17.4794 24.1319 16.9281 24.295 16.315 24.295C14.5919 24.295 13.5963 23.2675 13.3 21.22H12.475L12.76 20.575H13.255C13.2475 20.5394 13.24 20.5056 13.24 20.47V20.185C13.24 20.1287 13.2475 20.0687 13.255 20.02H12.475L12.76 19.39H13.33C13.4988 18.5256 14.1456 16.48 16.33 16.48Z",fill:"white"}})])])]),t._v(" "),t._m(0)])]),t._v(" "),r("div",{staticClass:"container__middle--right"},[r("div",{staticClass:"container__middle--graphbody"},[r("BarGraph",{attrs:{colors:["#159183","#AAF3EA"],numberOfBarsPerArea:[["20%","40%"],["20%","30%"],["45%","30%"],["67%","100%"],["100%","56%"]],YScale:[60,40,20,0],XScale:["Jan","Feb","Mar","Apr","May"],barBodyWidth:"7rem",barWidth:"3rem"}})],1)])]),t._v(" "),r("div",{staticClass:"container__updatesettings"}),t._v(" "),r("div",{staticClass:"container__table"},[r("div",{staticClass:"container__table--box"},[r("div",{staticClass:"container__table--boxheader"},[r("span",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"}},[r("rect",{attrs:{width:"16",height:"16",rx:"6",fill:"#159183"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.48329 5.62667H9.50663C10.7366 5.62667 11.3366 6.28333 11.3333 7.63V9.25333C11.3333 10.54 10.54 11.3333 9.24996 11.3333H6.74663C5.46329 11.3333 4.66663 10.54 4.66663 9.25V6.74667C4.66663 5.36667 5.27996 4.66667 6.48996 4.66667H7.01663C7.32696 4.66333 7.61663 4.80667 7.80663 5.05L8.09996 5.44C8.19329 5.55667 8.33329 5.62667 8.48329 5.62667ZM6.45663 9.09665H9.54329C9.67996 9.09665 9.78996 8.98332 9.78996 8.84665C9.78996 8.70665 9.67996 8.59665 9.54329 8.59665H6.45663C6.31663 8.59665 6.20663 8.70665 6.20663 8.84665C6.20663 8.98332 6.31663 9.09665 6.45663 9.09665Z",fill:"white"}})])]),t._v(" "),r("span",[t._v("Total Deposit")])]),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),r("div",{staticClass:"container__table--box"},[r("div",{staticClass:"container__table--boxheader"},[r("span",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"}},[r("rect",{attrs:{width:"16",height:"16",rx:"6",fill:"#A0D7E7"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.7266 5.47C9.7266 5.02666 10.0866 4.66666 10.5299 4.66666C10.9733 4.66666 11.3333 5.02666 11.3333 5.47C11.3333 5.91333 10.9733 6.27333 10.5299 6.27333C10.0866 6.27333 9.7266 5.91333 9.7266 5.47ZM8.44323 8.91976L9.40656 7.67676L9.39323 7.68342C9.44656 7.61009 9.45656 7.51676 9.4199 7.43342C9.38356 7.35009 9.30323 7.29342 9.2169 7.28676C9.12656 7.27676 9.0369 7.31676 8.98323 7.39009L8.1769 8.43342L7.25323 7.70676C7.19656 7.66342 7.1299 7.64642 7.06323 7.65342C6.9969 7.66342 6.9369 7.69976 6.89656 7.75309L5.91023 9.03676L5.8899 9.06676C5.83323 9.17309 5.8599 9.30976 5.9599 9.38342C6.00656 9.41342 6.05656 9.43342 6.11323 9.43342C6.19023 9.43676 6.26323 9.39642 6.3099 9.33342L7.14656 8.25642L8.09656 8.97009L8.12656 8.98976C8.23323 9.04642 8.36656 9.02009 8.44323 8.91976ZM9.1499 5.26009C9.13657 5.34343 9.1299 5.42676 9.1299 5.51009C9.1299 6.26009 9.73657 6.86643 10.4832 6.86643C10.5666 6.86643 10.6466 6.85676 10.7299 6.84343V9.53309C10.7299 10.6634 10.0632 11.3334 8.9299 11.3334H6.4669C5.33323 11.3334 4.66656 10.6634 4.66656 9.53309V7.06676C4.66656 5.93343 5.33323 5.26009 6.4669 5.26009H9.1499Z",fill:"white"}})])]),t._v(" "),r("span",[t._v("Total Withdrawal")])]),t._v(" "),t._m(3),t._v(" "),t._m(4)]),t._v(" "),r("div",{staticClass:"container__table--box"},[r("div",{staticClass:"container__table--boxheader"},[r("span",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"}},[r("rect",{attrs:{width:"16",height:"16",rx:"6",fill:"#3F8CFF"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.7143 7.50416L10.971 9.50083C11.1613 10.8042 10.4043 11.3342 9.38763 11.3342H6.6243C5.60463 11.3342 4.8243 10.9675 5.0343 9.50083L5.2943 7.50416C5.3343 7.2075 5.47763 6.93083 5.70096 6.7275C5.8713 6.57783 6.09097 6.4975 6.31763 6.4975V6.42083C6.29096 5.80416 6.60796 5.22083 7.14096 4.90416C7.6743 4.5875 8.34097 4.5875 8.8743 4.90416C9.40763 5.22083 9.72096 5.80416 9.69763 6.42083V6.4975C10.1176 6.4975 10.561 6.79083 10.7143 7.50416ZM6.8243 6.42084C6.8243 5.77417 7.35097 5.2475 8.00097 5.2475C8.6543 5.2475 9.18097 5.77417 9.18097 6.42084V6.4945H6.8243V6.42084ZM6.73429 7.86417C6.73429 8.02417 6.86763 8.1575 7.03096 8.1575C7.19429 8.1575 7.32429 8.02417 7.32429 7.86417C7.32429 7.70083 7.19429 7.57083 7.03096 7.57083C6.86763 7.57083 6.73429 7.70083 6.73429 7.86417ZM8.9643 8.1575C9.04097 8.1575 9.11763 8.1275 9.17097 8.07083C9.22763 8.0175 9.25763 7.94083 9.25763 7.86417C9.25763 7.70083 9.1243 7.57083 8.9643 7.57083C8.8013 7.57083 8.66763 7.70083 8.66763 7.86417C8.66763 8.02417 8.8013 8.1575 8.9643 8.1575Z",fill:"white"}})])]),t._v(" "),r("span",[t._v("Total Sales")])]),t._v(" "),t._m(5),t._v(" "),t._m(6)])])]),t._v(" "),r("div",{staticClass:"container__leftbottom"},[r("div",{staticClass:"container__leftbottomleft"},[t._m(7),t._v(" "),r("div",{staticClass:"container__leftbottomleft--tiles"},[r("div",{staticClass:"container__leftbottomleft--tile"},[r("div",{staticClass:"container__leftbottomleft--contentdata"},[r("span",[t._v("Lite")]),t._v(" "),r("span",[t._v(t._s(t.customers.filter((function(t){return"lite"===t.accountType})).length))]),t._v(" "),r("span",[t._v("21.77%")])]),t._v(" "),r("div",{staticClass:"container__leftbottomleft--chart"},[r("BarGraph",{attrs:{colors:["#A0D7E7","#0049C6","#A0D7E7","#A0D7E7","#A0D7E7"],numberOfBarsPerArea:[["20%","80%","20%","60%","67%"]],YScale:[],XScale:[],barBodyWidth:"100%",barWidth:"2rem"}})],1)]),t._v(" "),r("div",{staticClass:"container__leftbottomleft--tile"},[r("div",{staticClass:"container__leftbottomleft--contentdata"},[r("span",[t._v("Family")]),t._v(" "),r("span",[t._v(t._s(t.customers.filter((function(t){return"family"===t.accountType})).length))]),t._v(" "),r("span",[t._v("21.77%")])]),t._v(" "),r("div",{staticClass:"container__leftbottomleft--chart"},[r("BarGraph",{attrs:{colors:["#A0D7E7","#0049C6","#A0D7E7","#A0D7E7","#A0D7E7"],numberOfBarsPerArea:[["20%","80%","20%","30%","67%"]],YScale:[],XScale:[],barBodyWidth:"100%",barWidth:"2rem"}})],1)]),t._v(" "),r("div",{staticClass:"container__leftbottomleft--tile"},[r("div",{staticClass:"container__leftbottomleft--contentdata"},[r("span",[t._v("Pro")]),t._v(" "),r("span",[t._v(t._s(t.customers.filter((function(t){return"Pro"===t.accountType})).length))]),t._v(" "),r("span",[t._v("21.77%")])]),t._v(" "),r("div",{staticClass:"container__leftbottomleft--chart"},[r("BarGraph",{attrs:{colors:["#A0D7E7","#0049C6","#A0D7E7","#A0D7E7","#A0D7E7"],numberOfBarsPerArea:[["20%","30%","20%","37%","67%"]],YScale:[],XScale:[],barBodyWidth:"100%",barWidth:"2rem"}})],1)])]),t._v(" "),r("div",{staticClass:"container__leftbottomleft--setting",on:{click:function(e){return t.$router.push("/setting")}}},[t._v("\n            Go To settings\n          ")])]),t._v(" "),r("div",{staticClass:"container__leftbottomright"},[r("div",{staticClass:"container__leftheader"},[r("h1",[t._v("Recent Transaction")]),t._v(" "),r("span",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[r("path",{attrs:{d:"M14 8L18 12L14 16",stroke:"#11142D","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),r("path",{attrs:{d:"M18 12L7.6709 12",stroke:"#11142D","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),t._v(" "),r("div",{staticClass:"container__leftbottomright--tiles"},[r("div",{staticClass:"container__leftbottomrighttile"},[r("div",{staticClass:"container__leftbottomrighttile--left"},[r("div",{staticClass:"container__leftbottomrighttile--icon"},[r("span",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"49",viewBox:"0 0 48 49",fill:"none"}},[r("g",{attrs:{"clip-path":"url(#clip0)"}},[r("rect",{attrs:{y:"0.805237",width:"48",height:"48",rx:"12",fill:"#EBF2FF"}}),t._v(" "),r("path",{attrs:{d:"M15.4875 14.8C15.157 14.8305 14.9133 15.1258 14.9438 15.4562C14.9742 15.7867 15.2695 16.0305 15.6 16H19.2C19.4156 16.0023 19.6172 15.8898 19.7273 15.7023C19.8352 15.5148 19.8352 15.2851 19.7273 15.0976C19.6172 14.9101 19.4156 14.7976 19.2 14.8H15.6C15.5813 14.8 15.5625 14.8 15.5438 14.8C15.525 14.8 15.5063 14.8 15.4875 14.8ZM28.0875 14.8C27.757 14.8305 27.5133 15.1258 27.5437 15.4562C27.5742 15.7867 27.8695 16.0305 28.2 16H31.8C32.0156 16.0023 32.2172 15.8898 32.3273 15.7023C32.4352 15.5148 32.4352 15.2851 32.3273 15.0976C32.2172 14.9101 32.0156 14.7976 31.8 14.8H28.2C28.1812 14.8 28.1625 14.8 28.1437 14.8C28.125 14.8 28.1062 14.8 28.0875 14.8ZM12.6 16.6C10.6313 16.6 9.6 20.2211 9.6 23.8C9.6 26.1133 10.0383 28.4406 10.875 29.8H37.125C37.9617 28.4406 38.4 26.1133 38.4 23.8C38.4 20.2211 37.3687 16.6 35.4 16.6H12.6ZM24 20.0875C24 20.0875 26.4 23.0734 26.4 24.4C26.4 25.7266 25.3266 26.8 24 26.8C22.6734 26.8 21.6 25.7266 21.6 24.4C21.6 23.0734 24 20.0875 24 20.0875ZM10.0875 31C9.80156 31.0539 9.59531 31.307 9.6 31.6V32.8C9.6 33.1305 9.86953 33.4 10.2 33.4H10.2938C10.2422 33.5945 10.2 33.7891 10.2 34C10.2 35.3195 11.2805 36.4 12.6 36.4C13.5094 36.4 14.2922 35.8773 14.7 35.125C15.1078 35.8773 15.8906 36.4 16.8 36.4C18.1195 36.4 19.2 35.3195 19.2 34C19.2 33.7891 19.1578 33.5945 19.1062 33.4H28.8937C28.8422 33.5945 28.8 33.7891 28.8 34C28.8 35.3195 29.8805 36.4 31.2 36.4C32.1094 36.4 32.8922 35.8773 33.3 35.125C33.7078 35.8773 34.4906 36.4 35.4 36.4C36.7195 36.4 37.8 35.3195 37.8 34C37.8 33.7891 37.7578 33.5945 37.7062 33.4H37.8C38.1305 33.4 38.4 33.1305 38.4 32.8V31.6C38.4 31.2695 38.1305 31 37.8 31H10.2C10.1813 31 10.1625 31 10.1438 31C10.125 31 10.1063 31 10.0875 31ZM11.6438 33.4H13.5563C13.6711 33.5828 13.8 33.7703 13.8 34C13.8 34.6703 13.2703 35.2 12.6 35.2C11.9297 35.2 11.4 34.6703 11.4 34C11.4 33.7703 11.5289 33.5828 11.6438 33.4ZM15.8438 33.4H17.7563C17.8711 33.5828 18 33.7703 18 34C18 34.6703 17.4703 35.2 16.8 35.2C16.1297 35.2 15.6 34.6703 15.6 34C15.6 33.7703 15.7289 33.5828 15.8438 33.4ZM30.2437 33.4H32.1562C32.2711 33.5828 32.4 33.7703 32.4 34C32.4 34.6703 31.8703 35.2 31.2 35.2C30.5297 35.2 30 34.6703 30 34C30 33.7703 30.1289 33.5828 30.2437 33.4ZM34.4437 33.4H36.3562C36.4711 33.5828 36.6 33.7703 36.6 34C36.6 34.6703 36.0703 35.2 35.4 35.2C34.7297 35.2 34.2 34.6703 34.2 34C34.2 33.7703 34.3289 33.5828 34.4437 33.4Z",fill:"#0049C6"}})]),t._v(" "),r("defs",[r("clipPath",{attrs:{id:"clip0"}},[r("rect",{attrs:{width:"48",height:"47.895",fill:"white",transform:"translate(0 0.805237)"}})])])])])]),t._v(" "),t._m(8)]),t._v(" "),r("div",{staticClass:"container__leftbottomrighttile--right"},[t._v("+N55")])]),t._v(" "),r("div",{staticClass:"container__leftbottomrighttile"},[r("div",{staticClass:"container__leftbottomrighttile--left"},[r("div",{staticClass:"container__leftbottomrighttile--icon"},[r("span",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"49",viewBox:"0 0 48 49",fill:"none"}},[r("g",{attrs:{"clip-path":"url(#clip0)"}},[r("rect",{attrs:{y:"0.595184",width:"48",height:"48",rx:"12",fill:"#EBF2FF"}}),t._v(" "),r("g",{attrs:{"clip-path":"url(#clip1)"}},[r("path",{attrs:{d:"M26.9016 40.0117C26.6531 40.0117 26.4234 39.8594 26.332 39.6227C26.2266 39.3578 26.3203 39.0555 26.557 38.8938C28.2469 37.7406 29.9648 35.0945 29.9883 31.7805C30.0047 29.418 29.1797 25.8531 25.3641 21.8195C25.5586 26.8445 23.4469 31.0797 23.3461 31.2766C23.2219 31.525 22.9477 31.6563 22.6781 31.6C22.4062 31.5438 22.207 31.3141 22.1883 31.0399C22.1883 31.0164 22.0359 29.0406 20.707 27.3953C20.3859 28.4453 20.0297 29.282 19.7086 30.0414C19.0945 31.4828 18.6117 32.6219 18.6117 34.5672C18.6117 36.0531 19.8164 37.7992 20.9742 38.7203C21.1617 38.8258 21.2883 39.025 21.2883 39.257C21.2883 39.5945 21.0141 39.8688 20.6742 39.8688C20.6695 39.8688 20.6672 39.8688 20.6625 39.8688C20.5969 39.8688 20.5289 39.857 20.4633 39.8359C15.7711 38.2164 13.1883 34.9352 13.1883 30.5969C13.1883 26.9078 14.8781 23.9336 16.6664 20.7836C18.2766 17.9477 20.1023 14.7344 21 10.4734C21.0469 10.2602 21.2039 10.0844 21.4125 10.0164C21.6234 9.94844 21.8531 10.0023 22.0148 10.1523C30.5039 17.9922 34.8117 23.2984 34.8117 30.5266C34.8117 35.282 31.4508 39.3578 26.9906 40.007C26.9602 40.0117 26.9297 40.0117 26.9016 40.0117Z",fill:"#0049C6"}})])]),t._v(" "),r("defs",[r("clipPath",{attrs:{id:"clip0"}},[r("rect",{attrs:{width:"48",height:"47.895",fill:"white",transform:"translate(0 0.595184)"}})]),t._v(" "),r("clipPath",{attrs:{id:"clip1"}},[r("rect",{attrs:{width:"30",height:"30",fill:"white",transform:"translate(9 10)"}})])])])])]),t._v(" "),t._m(9)]),t._v(" "),r("div",{staticClass:"container__leftbottomrighttile--right"},[t._v("+N55")])]),t._v(" "),r("div",{staticClass:"container__leftbottomrighttile"},[r("div",{staticClass:"container__leftbottomrighttile--left"},[r("div",{staticClass:"container__leftbottomrighttile--icon"},[r("span",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"49",viewBox:"0 0 48 49",fill:"none"}},[r("g",{attrs:{"clip-path":"url(#clip0)"}},[r("rect",{attrs:{y:"0.385132",width:"48",height:"48",rx:"12",fill:"#EBF2FF"}}),t._v(" "),r("path",{attrs:{d:"M33.6 9C32.6719 9.07031 31.7297 9.52031 30.975 10.275L29.1 12.1687L30.375 13.425L32.25 11.55C32.6859 11.1141 33.2109 10.8469 33.6938 10.8H39V9H33.6ZM23.5875 11.7375C22.9313 11.7375 22.2586 11.9789 21.7688 12.4687L19.5 14.7562C19.1836 15.0727 19.0125 15.4969 19.0125 15.9375C19.0125 16.3781 19.1836 16.7836 19.5 17.1L27.5438 25.1437C27.8602 25.4602 28.2797 25.6312 28.725 25.6312C29.1562 25.6312 29.5734 25.4719 29.9438 25.1437L30.4875 24.6C30.8742 24.2133 31.1227 23.6883 31.2 23.0625V22.9687L30.6562 19.0125C30.7148 18.2508 30.4734 17.5711 29.9438 17.0437L29.6625 16.7625L29.9625 15.8437L29.9813 15.7687C30.0891 15.2344 29.9438 14.7 29.5875 14.3437L27.9563 12.7125C27.6609 12.4195 27.2742 12.2625 26.8875 12.2625C26.7234 12.2625 26.5711 12.2906 26.4563 12.3375L25.5375 12.6375L25.3875 12.4687C24.8977 11.9789 24.2438 11.7375 23.5875 11.7375ZM18.1688 17.2875L11.5688 23.8687C11.0461 24.3914 11.0297 25.2891 11.5688 25.9312L16.9125 31.2562C17.5195 31.8633 18.3164 32.2125 19.1625 32.2125C20.0086 32.2125 20.8242 31.8633 21.4313 31.2562L26.6813 25.9875L18.6562 17.9625C18.457 17.7633 18.3 17.5266 18.1688 17.2875ZM19.95 21.3C20.2336 21.3 20.5219 21.3609 20.7938 21.45C19.0383 23.3367 19.193 25.6266 19.2 25.725C19.2258 26.0391 19.4906 26.2875 19.8 26.2875C19.8164 26.2875 19.8398 26.2898 19.8563 26.2875C20.1867 26.2594 20.4281 25.9617 20.4 25.6312C20.3977 25.6125 20.2617 23.6695 21.7875 22.1437C21.8109 22.1203 21.825 22.0945 21.8438 22.0687L23.5125 23.7562C23.8734 24.1172 23.8734 24.6516 23.5125 25.0125L20.2875 28.2562C19.6875 28.9172 18.6562 28.9125 18.0563 28.3125L15.6 25.8562C15.2391 25.4953 15.2391 24.9609 15.6 24.6L18.1875 22.0125C18.668 21.532 19.2984 21.3 19.95 21.3ZM10.3313 26.1937C9.47813 27.4453 9 28.9758 9 30.5437C9 33.6352 11.0742 37.5867 15.6375 38.9625L16.1625 37.2375C12.2297 36.0539 10.8 32.5875 10.8 30.5437C10.8 29.5008 11.0742 28.4906 11.5688 27.6187L10.65 26.7C10.5188 26.543 10.425 26.3648 10.3313 26.1937Z",fill:"#0049C6"}})]),t._v(" "),r("defs",[r("clipPath",{attrs:{id:"clip0"}},[r("rect",{attrs:{width:"48",height:"47.895",fill:"white",transform:"translate(0 0.385132)"}})])])])])]),t._v(" "),t._m(10)]),t._v(" "),r("div",{staticClass:"container__leftbottomrighttile--right"},[t._v("+N55")])]),t._v(" "),r("div",{staticClass:"container__leftbottomrighttile"},[r("div",{staticClass:"container__leftbottomrighttile--left"},[r("div",{staticClass:"container__leftbottomrighttile--icon"},[r("span",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"49",viewBox:"0 0 48 49",fill:"none"}},[r("g",{attrs:{"clip-path":"url(#clip0)"}},[r("rect",{attrs:{y:"0.805237",width:"48",height:"48",rx:"12",fill:"#EBF2FF"}}),t._v(" "),r("path",{attrs:{d:"M15.4875 14.8C15.157 14.8305 14.9133 15.1258 14.9438 15.4562C14.9742 15.7867 15.2695 16.0305 15.6 16H19.2C19.4156 16.0023 19.6172 15.8898 19.7273 15.7023C19.8352 15.5148 19.8352 15.2851 19.7273 15.0976C19.6172 14.9101 19.4156 14.7976 19.2 14.8H15.6C15.5813 14.8 15.5625 14.8 15.5438 14.8C15.525 14.8 15.5063 14.8 15.4875 14.8ZM28.0875 14.8C27.757 14.8305 27.5133 15.1258 27.5437 15.4562C27.5742 15.7867 27.8695 16.0305 28.2 16H31.8C32.0156 16.0023 32.2172 15.8898 32.3273 15.7023C32.4352 15.5148 32.4352 15.2851 32.3273 15.0976C32.2172 14.9101 32.0156 14.7976 31.8 14.8H28.2C28.1812 14.8 28.1625 14.8 28.1437 14.8C28.125 14.8 28.1062 14.8 28.0875 14.8ZM12.6 16.6C10.6313 16.6 9.6 20.2211 9.6 23.8C9.6 26.1133 10.0383 28.4406 10.875 29.8H37.125C37.9617 28.4406 38.4 26.1133 38.4 23.8C38.4 20.2211 37.3687 16.6 35.4 16.6H12.6ZM24 20.0875C24 20.0875 26.4 23.0734 26.4 24.4C26.4 25.7266 25.3266 26.8 24 26.8C22.6734 26.8 21.6 25.7266 21.6 24.4C21.6 23.0734 24 20.0875 24 20.0875ZM10.0875 31C9.80156 31.0539 9.59531 31.307 9.6 31.6V32.8C9.6 33.1305 9.86953 33.4 10.2 33.4H10.2938C10.2422 33.5945 10.2 33.7891 10.2 34C10.2 35.3195 11.2805 36.4 12.6 36.4C13.5094 36.4 14.2922 35.8773 14.7 35.125C15.1078 35.8773 15.8906 36.4 16.8 36.4C18.1195 36.4 19.2 35.3195 19.2 34C19.2 33.7891 19.1578 33.5945 19.1062 33.4H28.8937C28.8422 33.5945 28.8 33.7891 28.8 34C28.8 35.3195 29.8805 36.4 31.2 36.4C32.1094 36.4 32.8922 35.8773 33.3 35.125C33.7078 35.8773 34.4906 36.4 35.4 36.4C36.7195 36.4 37.8 35.3195 37.8 34C37.8 33.7891 37.7578 33.5945 37.7062 33.4H37.8C38.1305 33.4 38.4 33.1305 38.4 32.8V31.6C38.4 31.2695 38.1305 31 37.8 31H10.2C10.1813 31 10.1625 31 10.1438 31C10.125 31 10.1063 31 10.0875 31ZM11.6438 33.4H13.5563C13.6711 33.5828 13.8 33.7703 13.8 34C13.8 34.6703 13.2703 35.2 12.6 35.2C11.9297 35.2 11.4 34.6703 11.4 34C11.4 33.7703 11.5289 33.5828 11.6438 33.4ZM15.8438 33.4H17.7563C17.8711 33.5828 18 33.7703 18 34C18 34.6703 17.4703 35.2 16.8 35.2C16.1297 35.2 15.6 34.6703 15.6 34C15.6 33.7703 15.7289 33.5828 15.8438 33.4ZM30.2437 33.4H32.1562C32.2711 33.5828 32.4 33.7703 32.4 34C32.4 34.6703 31.8703 35.2 31.2 35.2C30.5297 35.2 30 34.6703 30 34C30 33.7703 30.1289 33.5828 30.2437 33.4ZM34.4437 33.4H36.3562C36.4711 33.5828 36.6 33.7703 36.6 34C36.6 34.6703 36.0703 35.2 35.4 35.2C34.7297 35.2 34.2 34.6703 34.2 34C34.2 33.7703 34.3289 33.5828 34.4437 33.4Z",fill:"#0049C6"}})]),t._v(" "),r("defs",[r("clipPath",{attrs:{id:"clip0"}},[r("rect",{attrs:{width:"48",height:"47.895",fill:"white",transform:"translate(0 0.805237)"}})])])])])]),t._v(" "),t._m(11)]),t._v(" "),r("div",{staticClass:"container__leftbottomrighttile--right"},[t._v("+N55")])])]),t._v(" "),r("div",{staticClass:"container__leftbottomright--btn"},[r("button",{on:{click:function(e){return t.$router.push("/products/productorders")}}},[t._v("\n              View Orders\n            ")])])])])]),t._v(" "),r("div",{staticClass:"container__right"},[r("div",{staticClass:"container__righttop"},[r("h1",{staticClass:"container__righttop--h1"},[t._v("Total number of users")]),t._v(" "),r("div",{staticClass:"container__righttop--number"},[t._v(t._s(t.customers.length))]),t._v(" "),r("div",{staticClass:"container__righttop--tip"},[t._v("\n          Admin can delete and add users\n        ")]),t._v(" "),r("button",{on:{click:t.openCustomerpage}},[t._v("View all users")])]),t._v(" "),r("div",{staticClass:"container__rightbottom"},[r("h1",{staticClass:"container__righttop--h1"},[t._v("Transactions by Product Type")]),t._v(" "),r("div",{staticClass:"container__rightbottom--graph"},[r("BarGraph",{attrs:{colors:["#159183","#0049C6","#144A91"],numberOfBarsPerArea:[["20%","70%","60%"],["80%","50%","20%"]],YScale:["100k","60k","40k","20k","0"],XScale:["October","September"],barBodyWidth:"11rem",barWidth:"3rem"}})],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container__middle--funds"},[e("span",[this._v("Funds")]),this._v(" "),e("span",[this._v("Available")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container__table--number"},[e("p",[this._v("N0")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container__table--stat"},[e("span")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container__table--number"},[e("p",[this._v("N0")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container__table--stat"},[e("span",{staticClass:"middle"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container__table--number"},[e("p",[this._v("N0")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container__table--stat"},[e("span",{staticClass:"last"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container__leftheader"},[e("h1",[this._v("User Category")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container__leftbottomrighttile--details"},[e("span",[this._v("AGO")]),this._v(" "),e("span",[this._v("45 Litres")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container__leftbottomrighttile--details"},[e("span",[this._v("LPG")]),this._v(" "),e("span",[this._v("200 Litres")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container__leftbottomrighttile--details"},[e("span",[this._v("PMS")]),this._v(" "),e("span",[this._v("300 Litres")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container__leftbottomrighttile--details"},[e("span",[this._v("AGO")]),this._v(" "),e("span",[this._v("45 Litres")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{InputField:r(219).default,BarGraph:r(210).default})}}]);