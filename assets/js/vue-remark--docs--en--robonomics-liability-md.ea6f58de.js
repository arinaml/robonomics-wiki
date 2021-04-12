(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{Tcyd:function(i,t,e){"use strict";e.r(t);var a=e("KHd+"),r=e("UQSp"),s=e("Kw5r");function o(i){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(i)}s.a.config.optionMergeStrategies;var n={VueRemarkRoot:r.a},l=function(i){var t=i.options.components=i.options.components||{},e=i.options.computed=i.options.computed||{};Object.keys(n).forEach((function(i){"object"===o(n[i])&&"function"==typeof n[i].render||"function"==typeof n[i]&&"function"==typeof n[i].options.render?t[i]=n[i]:e[i]=function(){return n[i]}}))},c=s.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",_={excerpt:null,title:"Robonomics Liability",contributors:["ensrationis","akru"],translated:!0};var b=function(i){i.options[d]&&(i.options[d]=_),s.a.util.defineReactive(i.options,d,_),i.options.computed=c.computed({$frontmatter:function(){return i.options[d]}},i.options.computed)},h=Object(a.a)({},(function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("VueRemarkRoot",[e("p",[i._v("The package is responsible for receiving "),e("code",{pre:!0},[i._v("New Liability")]),i._v(" events ("),e("code",{pre:!0},[i._v("listener")]),i._v(" node) and playing topics from "),e("code",{pre:!0},[i._v("objective")]),i._v(" field ("),e("code",{pre:!0},[i._v("executor")]),i._v(" node).\nThe launch file also include "),e("code",{pre:!0},[i._v("ipfs_channel")]),i._v(" node and "),e("code",{pre:!0},[i._v("signer")]),i._v(" node.")]),e("h2",{attrs:{id:"ros-parameters"}},[e("a",{attrs:{href:"#ros-parameters","aria-hidden":"true"}},[i._v("#")]),i._v("ROS Parameters")]),e("h3",{attrs:{id:"web3_http_provider"}},[e("a",{attrs:{href:"#web3_http_provider","aria-hidden":"true"}},[i._v("#")]),i._v("~web3_http_provider")]),e("p",[i._v("Web3 HTTP provider address. The type is "),e("code",{pre:!0},[i._v("string")]),i._v(", defaults to "),e("code",{pre:!0},[i._v("http://127.0.0.1:8545")])]),e("h3",{attrs:{id:"web3_ws_provider"}},[e("a",{attrs:{href:"#web3_ws_provider","aria-hidden":"true"}},[i._v("#")]),i._v("~web3_ws_provider")]),e("p",[i._v("Web3 WebSocket provider address. The type is "),e("code",{pre:!0},[i._v("string")]),i._v(", defaults to "),e("code",{pre:!0},[i._v("ws://127.0.0.1:8546")])]),e("h3",{attrs:{id:"ipfs_http_provider"}},[e("a",{attrs:{href:"#ipfs_http_provider","aria-hidden":"true"}},[i._v("#")]),i._v("~ipfs_http_provider")]),e("p",[i._v("IPFS HTTP provider address. The type is "),e("code",{pre:!0},[i._v("string")]),i._v(", defaults to "),e("code",{pre:!0},[i._v("http://127.0.0.1:5001")])]),e("h3",{attrs:{id:"ipfs_swarm_connect_addresses"}},[e("a",{attrs:{href:"#ipfs_swarm_connect_addresses","aria-hidden":"true"}},[i._v("#")]),i._v("~ipfs_swarm_connect_addresses")]),e("p",[i._v("IPFS nodes to connect to. The type is "),e("code",{pre:!0},[i._v("string")]),i._v(", defaults to "),e("code",{pre:!0},[i._v('""')])]),e("h3",{attrs:{id:"ipfs_public_providers"}},[e("a",{attrs:{href:"#ipfs_public_providers","aria-hidden":"true"}},[i._v("#")]),i._v("~ipfs_public_providers")]),e("p",[i._v("A public IPFS node to pin result files. The type is "),e("code",{pre:!0},[i._v("string")]),i._v(", defaults to "),e("code",{pre:!0},[i._v('""')])]),e("h3",{attrs:{id:"factory_contract"}},[e("a",{attrs:{href:"#factory_contract","aria-hidden":"true"}},[i._v("#")]),i._v("~factory_contract")]),e("p",[i._v("The name of the liability factory. The type is "),e("code",{pre:!0},[i._v("string")]),i._v(", defaults to "),e("code",{pre:!0},[i._v("factory.5.robonomics.eth")])]),e("h3",{attrs:{id:"lighthouse_contract"}},[e("a",{attrs:{href:"#lighthouse_contract","aria-hidden":"true"}},[i._v("#")]),i._v("~lighthouse_contract")]),e("p",[i._v("The name of a lighthouse you are working on. The type is "),e("code",{pre:!0},[i._v("string")]),i._v(", defaults to "),e("code",{pre:!0},[i._v("airalab.lighthouse.5.robonomics.eth")])]),e("h3",{attrs:{id:"enable_executor"}},[e("a",{attrs:{href:"#enable_executor","aria-hidden":"true"}},[i._v("#")]),i._v("~enable_executor")]),e("p",[i._v("Enable or disable executor node. If it's "),e("code",{pre:!0},[i._v("false")]),i._v(", no topics from objective would be published. The type is "),e("code",{pre:!0},[i._v("boolean")]),i._v(", defaults to "),e("code",{pre:!0},[i._v("true")])]),e("h3",{attrs:{id:"master_check_interval"}},[e("a",{attrs:{href:"#master_check_interval","aria-hidden":"true"}},[i._v("#")]),i._v("~master_check_interval")]),e("p",[i._v("Period (in seconds) to check master for new topic publications. It's necessary for the Recorder, which records all the topics a CPS publishes. The type is "),e("code",{pre:!0},[i._v("double")]),i._v(", defaults to "),e("code",{pre:!0},[i._v("0.1")])]),e("h3",{attrs:{id:"recording_topics"}},[e("a",{attrs:{href:"#recording_topics","aria-hidden":"true"}},[i._v("#")]),i._v("~recording_topics")]),e("p",[i._v("List of topics name separated by comma. It allows you to specify which topics would be recorded. The type is "),e("code",{pre:!0},[i._v("string")]),i._v(", defaults to "),e("code",{pre:!0},[i._v('""')])]),e("h3",{attrs:{id:"ens_contract"}},[e("a",{attrs:{href:"#ens_contract","aria-hidden":"true"}},[i._v("#")]),i._v("~ens_contract")]),e("p",[i._v("The checksumed address of ENS registry. The type is "),e("code",{pre:!0},[i._v("string")]),i._v(", defaults to "),e("code",{pre:!0},[i._v('""')])]),e("h3",{attrs:{id:"keyfile"}},[e("a",{attrs:{href:"#keyfile","aria-hidden":"true"}},[i._v("#")]),i._v("~keyfile")]),e("p",[i._v("Path to keyfile. The type is "),e("code",{pre:!0},[i._v("string")]),i._v(", defaults to "),e("code",{pre:!0},[i._v('""')]),i._v(". "),e("strong",[i._v("Required parameter")])]),e("h3",{attrs:{id:"keyfile_password_file"}},[e("a",{attrs:{href:"#keyfile_password_file","aria-hidden":"true"}},[i._v("#")]),i._v("~keyfile_password_file")]),e("p",[i._v("Path to a file with password for the keyfile. The type is "),e("code",{pre:!0},[i._v("string")]),i._v(", defaults to "),e("code",{pre:!0},[i._v('""')]),i._v(". "),e("strong",[i._v("Required parameter")])]),e("h2",{attrs:{id:"subscribed-topics"}},[e("a",{attrs:{href:"#subscribed-topics","aria-hidden":"true"}},[i._v("#")]),i._v("Subscribed topics")]),e("h3",{attrs:{id:"liabilityinfochanethsigningdemand-robonomics_msgsdemand"}},[e("a",{attrs:{href:"#liabilityinfochanethsigningdemand-robonomics_msgsdemand","aria-hidden":"true"}},[i._v("#")]),i._v("/liability/infochan/eth/signing/demand (robonomics_msgs/Demand)")]),e("p",[e("a",{attrs:{href:"/docs/market-messages#demand"}},[i._v("robonomics_msgs/Demand")]),i._v(" message to sign and send further to IPFS channel")]),e("h3",{attrs:{id:"liabilityinfochanethsigningoffer-robonomics_msgsoffer"}},[e("a",{attrs:{href:"#liabilityinfochanethsigningoffer-robonomics_msgsoffer","aria-hidden":"true"}},[i._v("#")]),i._v("/liability/infochan/eth/signing/offer (robonomics_msgs/Offer)")]),e("p",[e("a",{attrs:{href:"/docs/market-messages#offer"}},[i._v("robonomics_msgs/Offer")]),i._v(" message to sign and send further to IPFS channel")]),e("h3",{attrs:{id:"liabilityinfochanethsigningresult-robonomics_msgsresult"}},[e("a",{attrs:{href:"#liabilityinfochanethsigningresult-robonomics_msgsresult","aria-hidden":"true"}},[i._v("#")]),i._v("/liability/infochan/eth/signing/result (robonomics_msgs/Result)")]),e("p",[e("a",{attrs:{href:"/docs/market-messages#result"}},[i._v("robonomics_msgs/Result")]),i._v(" message to sign and send further to IPFS channel")]),e("h2",{attrs:{id:"published-topics"}},[e("a",{attrs:{href:"#published-topics","aria-hidden":"true"}},[i._v("#")]),i._v("Published topics")]),e("h3",{attrs:{id:"liabilityinfochanincomingdemand-robonomics_msgsdemand"}},[e("a",{attrs:{href:"#liabilityinfochanincomingdemand-robonomics_msgsdemand","aria-hidden":"true"}},[i._v("#")]),i._v("/liability/infochan/incoming/demand (robonomics_msgs/Demand)")]),e("p",[i._v("Contains a "),e("a",{attrs:{href:"/docs/market-messages#demand"}},[i._v("robonomics_msgs/Demand")]),i._v(" message which was read from IPFS channel")]),e("h3",{attrs:{id:"liabilityinfochanincomingoffer-robonomics_msgsoffer"}},[e("a",{attrs:{href:"#liabilityinfochanincomingoffer-robonomics_msgsoffer","aria-hidden":"true"}},[i._v("#")]),i._v("/liability/infochan/incoming/offer (robonomics_msgs/Offer)")]),e("p",[i._v("Contains a "),e("a",{attrs:{href:"/docs/market-messages#offer"}},[i._v("robonomics_msgs/Offer")]),i._v(" message which was read from IPFS channel")]),e("h3",{attrs:{id:"liabilityinfochanincomingresult-robonomics_msgsresult"}},[e("a",{attrs:{href:"#liabilityinfochanincomingresult-robonomics_msgsresult","aria-hidden":"true"}},[i._v("#")]),i._v("/liability/infochan/incoming/result (robonomics_msgs/Result)")]),e("p",[i._v("Contains a "),e("a",{attrs:{href:"/docs/market-messages#result"}},[i._v("robonomics_msgs/Result")]),i._v(" message which was read from IPFS channel")]),e("h3",{attrs:{id:"liabilityincoming-robonomics_liabilityliability"}},[e("a",{attrs:{href:"#liabilityincoming-robonomics_liabilityliability","aria-hidden":"true"}},[i._v("#")]),i._v("/liability/incoming (robonomics_liability/Liability)")]),e("p",[i._v("Contains all the information about the last created "),e("a",{attrs:{href:"/docs/robonomics-liability-messages#robonomics_liabilityliabilitymsg"}},[i._v("robonomics_liability/Liability")])]),e("h3",{attrs:{id:"liabilityready-robonomics_liabilityliability"}},[e("a",{attrs:{href:"#liabilityready-robonomics_liabilityliability","aria-hidden":"true"}},[i._v("#")]),i._v("/liability/ready (robonomics_liability/Liability)")]),e("p",[i._v("Signals when a "),e("a",{attrs:{href:"/docs/robonomics-liability-messages#robonomics_liabilityliabilitymsg"}},[i._v("robonomics_liability/Liability")]),i._v("is ready for execution")]),e("h3",{attrs:{id:"liabilitycomplete-robonomics_liabilityliability"}},[e("a",{attrs:{href:"#liabilitycomplete-robonomics_liabilityliability","aria-hidden":"true"}},[i._v("#")]),i._v("/liability/complete (robonomics_liability/Liability)")]),e("p",[i._v("Signals when a "),e("a",{attrs:{href:"/docs/robonomics-liability-messages#robonomics_liabilityliabilitymsg"}},[i._v("robonomics_liability/Liability")]),i._v(" has done its job")]),e("h3",{attrs:{id:"liabilityfinalized-std_msgsstring"}},[e("a",{attrs:{href:"#liabilityfinalized-std_msgsstring","aria-hidden":"true"}},[i._v("#")]),i._v("/liability/finalized (std_msgs/String)")]),e("p",[i._v("Signals when a liability has been finalized")]),e("h2",{attrs:{id:"services"}},[e("a",{attrs:{href:"#services","aria-hidden":"true"}},[i._v("#")]),i._v("Services")]),e("h3",{attrs:{id:"liabilitystart-robonomics_liabilitystartliability"}},[e("a",{attrs:{href:"#liabilitystart-robonomics_liabilitystartliability","aria-hidden":"true"}},[i._v("#")]),i._v("/liability/start (robonomics_liability/StartLiability)")]),e("p",[i._v("The service tells executor to play topics from the objective. It's required to pass a liability address ("),e("a",{attrs:{href:"/docs/robonomics-liability-messages#robonomics_liabilitystartliabilitysrv"}},[i._v("robonomics_liability/StartLiability")]),i._v("), which you can get from "),e("code",{pre:!0},[i._v("/liability/ready")]),i._v(" topic")]),e("h3",{attrs:{id:"liabilityfinish-robonomics_liabilityfinishliability"}},[e("a",{attrs:{href:"#liabilityfinish-robonomics_liabilityfinishliability","aria-hidden":"true"}},[i._v("#")]),i._v("/liability/finish (robonomics_liability/FinishLiability)")]),e("p",[i._v("CPS should call the service after performing the task. The input is "),e("a",{attrs:{href:"/docs/robonomics-liability-messages#robonomics_liabilityfinishiabilitysrv"}},[i._v("robonomics_liability/FinishLiability")])]),e("h3",{attrs:{id:"liabilityrestart-robonomics_liabilitystartliability"}},[e("a",{attrs:{href:"#liabilityrestart-robonomics_liabilitystartliability","aria-hidden":"true"}},[i._v("#")]),i._v("/liability/restart (robonomics_liability/StartLiability)")]),e("p",[i._v("The service allows to restart a liability after the system shutdown. The input is "),e("a",{attrs:{href:"/docs/robonomics-liability-messages#robonomics_liabilitystartliabilitysrv"}},[i._v("robonomics_liability/StartLiability")])]),e("h3",{attrs:{id:"liabilityresume-robonomics_liabilitystartliability"}},[e("a",{attrs:{href:"#liabilityresume-robonomics_liabilitystartliability","aria-hidden":"true"}},[i._v("#")]),i._v("/liability/resume (robonomics_liability/StartLiability)")]),e("p",[i._v("The service allows to resume a liability from the last timestamp available in the persistence store. The input is "),e("a",{attrs:{href:"/docs/robonomics-liability-messages#robonomics_liabilitystartliabilitysrv"}},[i._v("robonomics_liability/StartLiability")])]),e("h3",{attrs:{id:"liabilityread-robonomics_liabilityreadliability"}},[e("a",{attrs:{href:"#liabilityread-robonomics_liabilityreadliability","aria-hidden":"true"}},[i._v("#")]),i._v("/liability/read (robonomics_liability/ReadLiability)")]),e("p",[i._v("The service returns all the data about a liability by its address. The input is "),e("a",{attrs:{href:"/docs/robonomics-liability-messages#robonomics_liabilityreadliabilitysrv"}},[i._v("robonomics_liability/ReadLiability")])])])}),[],!1,null,null,null);"function"==typeof l&&l(h),"function"==typeof b&&b(h);t.default=h.exports},UQSp:function(i,t,e){"use strict";t.a={name:"VueRemarkRoot",render:function(i){return i("div",null,this.$slots.default)}}}}]);