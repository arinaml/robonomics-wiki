(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{I68y:function(n,e,t){},Lag0:function(n,e,t){"use strict";t("I68y")},"y6/h":function(n,e,t){"use strict";t.r(e);t("07d7");var o={props:{icon:{type:String,default:"Menu"},section:{type:String,default:!1},sectionClass:{type:String,default:""}},computed:{iconOpenAttr:function(){return{height:"20px",class:"sectionTogglerOpen"}}},components:{IconMenu:function(){return t.e(65).then(t.bind(null,"c6tL"))},IconDots:function(){return t.e(64).then(t.bind(null,"uiEw"))},IconSideLeft:function(){return t.e(66).then(t.bind(null,"7lhq"))},IconSideRight:function(){return t.e(67).then(t.bind(null,"0XeU"))},IconClose:function(){return t.e(63).then(t.bind(null,"nsvV"))}},methods:{showBlock:function(n,e){var t=document.getElementById(n),o=e.currentTarget.querySelector(".sectionTogglerOpen"),i=e.currentTarget.querySelector(".sectionTogglerClose");t.classList.contains("hiddenMobile")?(t.classList.remove("hiddenMobile"),i.style.display="block",o.style.display="none"):(t.classList.add("hiddenMobile"),i.style.display="none",o.style.display="block")}}},i=(t("Lag0"),t("KHd+")),c=Object(i.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"sectionToggler",class:n.sectionClass,on:{click:function(e){return n.showBlock(n.section,e)}}},["Menu"==n.icon?t("IconMenu",n._b({},"IconMenu",n.iconOpenAttr,!1)):n._e(),"Dots"==n.icon?t("IconDots",n._b({},"IconDots",n.iconOpenAttr,!1)):n._e(),"SideLeft"==n.icon?t("IconSideLeft",n._b({},"IconSideLeft",n.iconOpenAttr,!1)):n._e(),"SideRight"==n.icon?t("IconSideRight",n._b({},"IconSideRight",n.iconOpenAttr,!1)):n._e(),t("IconClose",{staticClass:"sectionTogglerClose",staticStyle:{display:"none"},attrs:{height:"20px"}})],1)}),[],!1,null,null,null);e.default=c.exports}}]);