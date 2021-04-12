(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{UQSp:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},nUuN:function(e,t,r){"use strict";r.r(t);var o=r("KHd+"),a=r("UQSp"),n=r("Kw5r");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var s={VueRemarkRoot:a.a},m=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===c(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?t[e]=s[e]:r[e]=function(){return s[e]}}))},h=n.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",_={excerpt:null,title:"Ethereum Common",contributors:["ensrationis","akru"],translated:!1};var i=function(e){e.options[u]&&(e.options[u]=_),n.a.util.defineReactive(e.options,u,_),e.options.computed=h.computed({$frontmatter:function(){return e.options[u]}},e.options.computed)},v=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("p",[e._v("The packages contains two launch files: "),r("code",{pre:!0},[e._v("erc20.launch")]),e._v(" and "),r("code",{pre:!0},[e._v("signer.launch")]),e._v(". The last one is included in "),r("a",{attrs:{href:"/docs/robonomics-liability"}},[e._v("Robonomics Liability")]),e._v(".")]),r("p",[e._v("Below is the description for "),r("code",{pre:!0},[e._v("erc20")]),e._v(" node which contains utils for convenient work with Ethereum accounts and XRT token.")]),r("h2",{attrs:{id:"ros-parameters"}},[r("a",{attrs:{href:"#ros-parameters","aria-hidden":"true"}},[e._v("#")]),e._v("ROS Parameters")]),r("h3",{attrs:{id:"web3_http_provider"}},[r("a",{attrs:{href:"#web3_http_provider","aria-hidden":"true"}},[e._v("#")]),e._v("~web3_http_provider")]),r("p",[e._v("Web3 HTTP provider address. The type is "),r("code",{pre:!0},[e._v("string")]),e._v(", defaults to "),r("code",{pre:!0},[e._v("http://127.0.0.1:8545")])]),r("h3",{attrs:{id:"erc20_token"}},[r("a",{attrs:{href:"#erc20_token","aria-hidden":"true"}},[e._v("#")]),e._v("~erc20_token")]),r("p",[e._v("ERC20 token to work with. Type is "),r("code",{pre:!0},[e._v("string")]),e._v(", defaults to "),r("code",{pre:!0},[e._v("xrt.5.robonomics.eth")])]),r("h3",{attrs:{id:"factory_contract"}},[r("a",{attrs:{href:"#factory_contract","aria-hidden":"true"}},[e._v("#")]),e._v("~factory_contract")]),r("p",[e._v("The name of the liability factory. The type is "),r("code",{pre:!0},[e._v("string")]),e._v(", defaults to "),r("code",{pre:!0},[e._v("factory.5.robonomics.eth")])]),r("h3",{attrs:{id:"ens_contract"}},[r("a",{attrs:{href:"#ens_contract","aria-hidden":"true"}},[e._v("#")]),e._v("~ens_contract")]),r("p",[e._v("The checksumed address of ENS registry. The type is "),r("code",{pre:!0},[e._v("string")]),e._v(", defaults to "),r("code",{pre:!0},[e._v('""')])]),r("h3",{attrs:{id:"keyfile"}},[r("a",{attrs:{href:"#keyfile","aria-hidden":"true"}},[e._v("#")]),e._v("~keyfile")]),r("p",[e._v("Path to keyfile. The type is "),r("code",{pre:!0},[e._v("string")]),e._v(", defaults to "),r("code",{pre:!0},[e._v('""')]),e._v(". "),r("strong",[e._v("Required parameter")])]),r("h3",{attrs:{id:"keyfile_password_file"}},[r("a",{attrs:{href:"#keyfile_password_file","aria-hidden":"true"}},[e._v("#")]),e._v("~keyfile_password_file")]),r("p",[e._v("Path to a file with password for the keyfile. The type is "),r("code",{pre:!0},[e._v("string")]),e._v(", defaults to "),r("code",{pre:!0},[e._v('""')]),e._v(". "),r("strong",[e._v("Required parameter")])]),r("h2",{attrs:{id:"published-topics"}},[r("a",{attrs:{href:"#published-topics","aria-hidden":"true"}},[e._v("#")]),e._v("Published topics")]),r("h3",{attrs:{id:"etheventtransfer-ethereum_commontransferevent"}},[r("a",{attrs:{href:"#etheventtransfer-ethereum_commontransferevent","aria-hidden":"true"}},[e._v("#")]),e._v("/eth/event/transfer (ethereum_common/TransferEvent)")]),r("p",[e._v("The event "),r("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commontransfereventmsg"}},[e._v("ethereum_common/TransferEvent")]),e._v(" is emitted after the transfer of tokens was made")]),r("h3",{attrs:{id:"etheventapproval-ethereum_commonapprovalevent"}},[r("a",{attrs:{href:"#etheventapproval-ethereum_commonapprovalevent","aria-hidden":"true"}},[e._v("#")]),e._v("/eth/event/approval (ethereum_common/ApprovalEvent)")]),r("p",[e._v("The event "),r("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonapprovaleventmsg"}},[e._v("ethereum_common/ApprovalEvent")]),e._v(" is emitted after the approval of tokens was made")]),r("h2",{attrs:{id:"services"}},[r("a",{attrs:{href:"#services","aria-hidden":"true"}},[e._v("#")]),e._v("Services")]),r("h3",{attrs:{id:"ethaccounts-ethereum_commonaccounts"}},[r("a",{attrs:{href:"#ethaccounts-ethereum_commonaccounts","aria-hidden":"true"}},[e._v("#")]),e._v("/eth/accounts (ethereum_common/Accounts)")]),r("p",[e._v("List of available Ethereum accounts. See "),r("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonaccountssrv"}},[e._v("ethereum_common/Accounts")])]),r("h3",{attrs:{id:"ethaccount_eth_balance-ethereum_commonaccountbalance"}},[r("a",{attrs:{href:"#ethaccount_eth_balance-ethereum_commonaccountbalance","aria-hidden":"true"}},[e._v("#")]),e._v("/eth/account_eth_balance (ethereum_common/AccountBalance)")]),r("p",[e._v("Returns the balance of the given address in Wei. See "),r("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonaccountbalancesrv"}},[e._v("ethereum_common/AccountBalance")])]),r("h3",{attrs:{id:"etheth_balance-ethereum_commonbalance"}},[r("a",{attrs:{href:"#etheth_balance-ethereum_commonbalance","aria-hidden":"true"}},[e._v("#")]),e._v("/eth/eth_balance (ethereum_common/Balance)")]),r("p",[e._v("Returns the balance of the default address. See :ref:"),r("code",{pre:!0},[e._v("Ethereum-common-Balance.srv")])]),r("h3",{attrs:{id:"ethcurrent_block-ethereum_commonblocknumber"}},[r("a",{attrs:{href:"#ethcurrent_block-ethereum_commonblocknumber","aria-hidden":"true"}},[e._v("#")]),e._v("/eth/current_block (ethereum_common/BlockNumber)")]),r("p",[e._v("Returns current block number. See :ref:"),r("code",{pre:!0},[e._v("Ethereum-common-BlockNumber.srv")])]),r("h3",{attrs:{id:"ethtransfer-ethereum_commontransfer"}},[r("a",{attrs:{href:"#ethtransfer-ethereum_commontransfer","aria-hidden":"true"}},[e._v("#")]),e._v("/eth/transfer (ethereum_common/Transfer)")]),r("p",[e._v("Transfers tokens from the default account to a given one. See :ref:"),r("code",{pre:!0},[e._v("Ethereum-common-Transfer.srv")])]),r("h3",{attrs:{id:"ethtransfer_from-ethereum_commontransferfrom"}},[r("a",{attrs:{href:"#ethtransfer_from-ethereum_commontransferfrom","aria-hidden":"true"}},[e._v("#")]),e._v("/eth/transfer_from (ethereum_common/TransferFrom)")]),r("p",[e._v("Transfers tokens from a given account to another one. See :ref:"),r("code",{pre:!0},[e._v("Ethereum-common-TransferFrom.srv")])]),r("h3",{attrs:{id:"ethapprove-ethereum_commonapprove"}},[r("a",{attrs:{href:"#ethapprove-ethereum_commonapprove","aria-hidden":"true"}},[e._v("#")]),e._v("/eth/approve (ethereum_common/Approve)")]),r("p",[e._v("Approves tokens from the default account to a given one. See :ref:"),r("code",{pre:!0},[e._v("Ethereum-common-Approve.srv")])]),r("h3",{attrs:{id:"ethaccount_xrt_balance-ethereum_commonaccountbalance"}},[r("a",{attrs:{href:"#ethaccount_xrt_balance-ethereum_commonaccountbalance","aria-hidden":"true"}},[e._v("#")]),e._v("/eth/account_xrt_balance (ethereum_common/AccountBalance)")]),r("p",[e._v("Returns the XRT balance of a given account. See :ref:"),r("code",{pre:!0},[e._v("Ethereum-common-AccountBalance.srv")])]),r("h3",{attrs:{id:"ethxrt_balance-ethereum_commonbalance"}},[r("a",{attrs:{href:"#ethxrt_balance-ethereum_commonbalance","aria-hidden":"true"}},[e._v("#")]),e._v("/eth/xrt_balance (ethereum_common/Balance)")]),r("p",[e._v("Return the XRT balance of the default account. See :ref:"),r("code",{pre:!0},[e._v("Ethereum-common-Balance.srv")])]),r("h3",{attrs:{id:"ethaccount_xrt_allowance-ethereum_commonaccounttoaddressallowance"}},[r("a",{attrs:{href:"#ethaccount_xrt_allowance-ethereum_commonaccounttoaddressallowance","aria-hidden":"true"}},[e._v("#")]),e._v("/eth/account_xrt_allowance (ethereum_common/AccountToAddressAllowance)")]),r("p",[e._v("Returns how much one account is allowed to spend from another account. See :ref:"),r("code",{pre:!0},[e._v("Ethereum-common-AccountToAddressAllowance.srv")])]),r("h3",{attrs:{id:"ethxrt_allowance-ethereum_commonallowance"}},[r("a",{attrs:{href:"#ethxrt_allowance-ethereum_commonallowance","aria-hidden":"true"}},[e._v("#")]),e._v("/eth/xrt_allowance (ethereum_common/Allowance)")]),r("p",[e._v("Returns how much the Factory is allowed to spend from the default account. See :ref:"),r("code",{pre:!0},[e._v("Ethereum-common-Allowance.srv")])])])}),[],!1,null,null,null);"function"==typeof m&&m(v),"function"==typeof i&&i(v);t.default=v.exports}}]);