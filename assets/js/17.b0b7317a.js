(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{216:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"java客户端（下）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java客户端（下）"}},[t._v("#")]),t._v(" Java客户端（下）")]),t._v(" "),s("p",[t._v("基于"),s("a",{attrs:{href:"minimum_should_match"}},[t._v("Java客户端（上）")]),t._v("，本文不再赘述如何创建一个Spring Data ElasticSearch工程，也不再做过多文字叙述。更多的请一定配合源码使用，源码地址"),s("a",{attrs:{href:"https://github.com/yu-linfeng/elasticsearch6.x_tutorial/tree/master/code/spring-data-elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/yu-linfeng/elasticsearch6.x_tutorial/tree/master/code/spring-data-elasticsearch"),s("OutboundLink")],1),t._v("，具体代码目录在"),s("code",[t._v("complex")]),t._v("包。")]),t._v(" "),s("p",[t._v("本章请一定结合代码重点关注如何如何通过Java API进行"),s("strong",[t._v("父子文档的数据插入，以及查询。")])]),t._v(" "),s("h3",{attrs:{id:"父子文档的数据插入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#父子文档的数据插入"}},[t._v("#")]),t._v(" 父子文档的数据插入")]),t._v(" "),s("p",[t._v("父子文档在ES中存储的格式实际上是以"),s("strong",[t._v("键值对")]),t._v("方式存在，例如在定义映射Mapping时，我们将子文档定义为：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ......\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"join"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"relations"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"superior"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"staff"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"staff"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"junior"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ......\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在写入一条数据时：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ......\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"staff"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parent"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ......\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("对于于Java实体，我们可以把"),s("code",[t._v("level")]),t._v("字段设置为"),s("code",[t._v("Map<String, Object>")]),t._v("类型。关键注意的是，在使用Spring Data ElasticSearch时，我们不能直接调用"),s("code",[t._v("sava")]),t._v("或者"),s("code",[t._v("saveAll")]),t._v("方法。ES规定"),s("strong",[t._v("父子文档必须属于同一分片")]),t._v("，也就是说在写入子文档时，需要定义"),s("code",[t._v("routing")]),t._v("参数。下面是代码节选：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BulkRequestBuilder")]),t._v(" bulkRequestBuilder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepareBulk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbulkRequestBuilder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepareIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"company"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"employee"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" employeePO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRouting")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("routing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeValueAsString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("employeePO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XContentType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JSON"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("actionGet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("一定参考源码一起使用。")]),t._v(" "),s("p",[t._v("ES实在是一个非常强大的搜索引擎。能力有限，实在不能将所有的Java API一一举例讲解，如果你在编写代码时，遇到困难也请联系作者邮箱"),s("strong",[t._v("hellobug at outlook.com")]),t._v("，或者通过公众号"),s("strong",[t._v("coderbuff")]),t._v("，解答得了的一定解答，解答不了的一起解答。")])])}),[],!1,null,null,null);a.default=e.exports}}]);