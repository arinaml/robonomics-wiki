(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{M8Ee:function(t,e,a){"use strict";a("isk7")},aIeo:function(t,e,a){"use strict";a.r(e);var n={computed:{locale:function(){return this.$store.state.locale},currentPath:function(){return this.$route.path},langs:function(){return this.$static.metadata.locales}},methods:{changelocale:function(t){var e=t.target.value;this.$store.commit("setlocale",e);var a=this.$path(this.currentPath,e);this.$router.push(a)}}},o=(a("M8Ee"),a("KHd+")),c=a("Kw5r"),s=c.a.config.optionMergeStrategies.computed,r={metadata:{locales:["en","ru","es"]}},i=function(t){var e=t.options;e.__staticData?e.__staticData.data=r:(e.__staticData=c.a.observable({data:r}),e.computed=s({$static:function(){return e.__staticData.data}},e.computed))},u=Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.langs?a("select",{attrs:{tabindex:"0"},on:{change:function(e){return t.changelocale(e)}}},[t._l(t.langs,(function(e,n){return[a("option",{key:n,domProps:{selected:e==t.locale,value:e}},[t._v(t._s(e))])]}))],2):t._e()}),[],!1,null,"7fee8e38",null);"function"==typeof i&&i(u);e.default=u.exports},isk7:function(t,e,a){}}]);