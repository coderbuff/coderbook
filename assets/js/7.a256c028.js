(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{219:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),a("blockquote",[a("p",[t._v("工欲善其事必先利其器")])]),t._v(" "),a("h2",{attrs:{id:"elasticsearch安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch安装"}},[t._v("#")]),t._v(" ElasticSearch安装")]),t._v(" "),a("p",[t._v("ElasticSearch6.3.2下载地址（Linux、mac OS、Windows通用，下载zip包即可）："),a("a",{attrs:{href:"https://www.elastic.co/cn/downloads/past-releases/elasticsearch-6-3-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.elastic.co/cn/downloads/past-releases/elasticsearch-6-3-2"),a("OutboundLink")],1),t._v("。ES历史版本下载页面："),a("a",{attrs:{href:"https://www.elastic.co/cn/downloads/past-releases#elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.elastic.co/cn/downloads/past-releases#elasticsearch"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("在正式安装前，你需要确保你的系统已配置JDK8环境。")]),t._v(" "),a("h3",{attrs:{id:"mac-os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-os"}},[t._v("#")]),t._v(" mac OS")]),t._v(" "),a("p",[t._v("在上述下载地址下载完elasticsearch-6.3.2.tar.gz后，首先在当前登录用户的"),a("code",[t._v("home")]),t._v("下创建一个"),a("code",[t._v("Settings")]),t._v("目录，通过"),a("code",[t._v("tar -zxvf elasticsearch-6.3.2.tar.gz")]),t._v("解压到当前目录。")]),t._v(" "),a("p",[t._v("进入"),a("code",[t._v("elasticsearch-6.3.2.tar.gz")]),t._v("目录，执行"),a("code",[t._v("./bin/elasticsearch")]),t._v("命令，等待一小段时间，通过浏览器访问"),a("code",[t._v("http://localhost:9200/?pretty")]),t._v("出现以下响应：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("              \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x4x7wWJ"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("              \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cluster_name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"elasticsearch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("              \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cluster_uuid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sJ6LTYJ1TDmtR1kzl0M2Ig"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("              \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("              \n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"number"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6.3.2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("              \n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build_hash"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8bbedf5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("              \n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build_date"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-10-31T18:55:38.105Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("              \n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build_snapshot"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("              \n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lucene_version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6.6.1"')]),t._v("              \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("              \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tagline"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You Know, for Search"')]),t._v("              \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" Linux")]),t._v(" "),a("p",[t._v("Linux的安装过程和Linux相同。")]),t._v(" "),a("p",[a("strong",[t._v("ES需要使用普通用户安装、启动，如果你是root用户，需要先创建一个用户，用普通用户而不是root用户启动ES。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);