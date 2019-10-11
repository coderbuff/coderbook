(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{142:function(t,e,a){"use strict";a.r(e);var r=a(0),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"基本术语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本术语","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本术语")]),t._v(" "),a("blockquote",[a("p",[t._v("白马非马")])]),t._v(" "),a("p",[t._v("ES是一个搜索引擎，同时它也是一个分布式文档存储数据库（当然是非关系型的）。为了保证后续的实战教程顺利进行，这里通过对比传统的关系型数据库MySQL介绍在ES中的一些术语。")]),t._v(" "),a("p",[t._v("在MySQL中共有数据库（Database）、表（Table）、记录（Row）、列（Column）的概念，同样在ES中也有类似的概念，索引（Index），类型（Type），文档（Document），字段（Field）。")]),t._v(" "),a("p",[t._v("可以这么理解：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("数据库")]),t._v(" "),a("th",[t._v("表")]),t._v(" "),a("th",[t._v("记录")]),t._v(" "),a("th",[t._v("列")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("MySQL")]),t._v(" "),a("td",[t._v("DB")]),t._v(" "),a("td",[t._v("Table")]),t._v(" "),a("td",[t._v("Row")]),t._v(" "),a("td",[t._v("Column")])]),t._v(" "),a("tr",[a("td",[t._v("ES")]),t._v(" "),a("td",[t._v("Index")]),t._v(" "),a("td",[t._v("Document")]),t._v(" "),a("td",[t._v("Document")]),t._v(" "),a("td",[t._v("Field")])])])]),t._v(" "),a("h3",{attrs:{id:"索引index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引index","aria-hidden":"true"}},[t._v("#")]),t._v(" 索引Index")]),t._v(" "),a("p",[t._v("ES中的索引概念可不是关系型数据库中的“索引”，ES中的索引指的是存储数据的地方，类似关系型数据库中的数据库概念。")]),t._v(" "),a("h3",{attrs:{id:"类型type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型type","aria-hidden":"true"}},[t._v("#")]),t._v(" 类型Type")]),t._v(" "),a("p",[t._v("有的文章指出ES中的类型Type对应的就是关系型数据库中的表，在使用ES中我们会遇到另外一个概念"),a("strong",[t._v("映射（Mapping）")]),t._v("，也有不少的文章指出Mapping对应的就是关系型数据库中的表。关系型数据库中表与表是物理独立的，即使在两个表中存在相同名称不同类型的列，这在我们的关系型数据库也是极为合理的，但这在ES中就不合理，ES中即使是在同一个索引Index下，如果字段Field存在于不同的类型Type中，即使他们代表不同的含义，但是只要它们的"),a("strong",[t._v("名称相同也必须要求类型相同")]),t._v("，在ES中类型Type对应于关系型数据库中表的概念已经名存实亡。实际上在ES中Type作为表的概念在后期版本中越来越被弱化，在未被ES正式移除前，ES后期版本已经不允许一个索引Index创建多个Type，相信在后面的版本会彻底移除类型Type。")]),t._v(" "),a("p",[t._v("（注：ES6已经不允许一个Index创建多个Type，"),a("a",{attrs:{href:"https://github.com/elastic/elasticsearch/pull/24317",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/elastic/elasticsearch/pull/24317"),a("OutboundLink")],1),t._v("）")]),t._v(" "),a("p",[t._v("如果在现阶段一定要理解ES中的Type，那么一定要和Mapping结合起来。可以理解为类型Type就是定义一个表，仅仅是定义而已，而映射Mapping定义了表结构（有哪些列，列的类型是什么）。")]),t._v(" "),a("h3",{attrs:{id:"文档document"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档document","aria-hidden":"true"}},[t._v("#")]),t._v(" 文档Document")]),t._v(" "),a("p",[t._v("在非关系型数据库中，有部分被称之为“文档数据库”，对应于关系型数据库中的一行记录。")]),t._v(" "),a("h3",{attrs:{id:"字段field"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字段field","aria-hidden":"true"}},[t._v("#")]),t._v(" 字段Field")]),t._v(" "),a("p",[t._v("对应关系型数据库中的列。")]),t._v(" "),a("h3",{attrs:{id:"节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节点","aria-hidden":"true"}},[t._v("#")]),t._v(" 节点")]),t._v(" "),a("p",[t._v("一个ES实例称之为一个节点，单机部署的ES有且只有一个节点，集群部署的ES有多个节点且有一个主节点。")]),t._v(" "),a("h3",{attrs:{id:"分片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分片","aria-hidden":"true"}},[t._v("#")]),t._v(" 分片")]),t._v(" "),a("p",[t._v("ES可作为分布式集群部署，同样也可以作为单机单节点部署。ES中的数据被分散存储在分片中，ES屏蔽了底层的分片实现，我们直接与索引交互而不与分片交互。分片数量的多少与是否是集群部署和单机部署无关，即使是单机部署在创建索引时仍然也可以指定划分多个分片（默认5个主分片1份备份（包含5个备分片））。分片有主分片和备分片之分，顾名思义，备分片是主分片的备份，当主分片出现故障时，备份片充当主分片。")]),t._v(" "),a("h4",{attrs:{id:"对于单机部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对于单机部署","aria-hidden":"true"}},[t._v("#")]),t._v(" 对于单机部署")]),t._v(" "),a("p",[t._v("单机部署的ES，即表示ES有且只有一个节点，在创建索引时，如果不指定主分片与备分片的数量，默认创建5个主分片和1份备份（5个备分片），实际上对于单机部署的ES服务来讲，多个主分片并没有意义，多个分片存在的意义本身就是将数据分散存储到多个ES节点中进行同时查询，此时只有一个节点多个分片也没有意义。备分片在单机部署中同样也没有意义，备份存在的意义本身就是当主分片故障时，仍然能对外提供服务，此时主备都在一个节点上，如果主分片故障，备分片也同样会导致故障。")]),t._v(" "),a("h4",{attrs:{id:"对于集群部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对于集群部署","aria-hidden":"true"}},[t._v("#")]),t._v(" 对于集群部署")]),t._v(" "),a("p",[t._v("对于集群部署的ES来讲，此时存在多个节点，主分片的分配与备分片机制就显得尤为重要（这涉及查询性能以及服务高可用），例如现在有3个节点，此时如果在创建索引时只分配1个主分片就显得有点浪费（注：主分片一旦在创建索引时确定便不能修改）。主分片的划分并没有一定放之四海而皆准的规则，更多的是取决于用户的数据量以及ES节点数量等。通常所理解的是，分片数量越多越好，因为这能将数据分散到不同分片，以便以后在扩容新增节点时，ES能将自动将分片重新进行均匀分布。但这条理论也不绝对，如果你的节点只有3个，设置了100个分片，每个节点就有33个节点，当搜索请求调度到同一节点的不同分片时，此时会引发硬件资源（CPU）的抢夺，造成性能问题。反过来，如果3个节点只分配了3个分片，随着业务的发展，数据量越来越大，单个分片已不能承受它最大的数据量，此时就算新增节点，但是分片数量只有3个，分片的数量在创建索引时便确定且不可修改，此时只能通过重新创建索引。")]),t._v(" "),a("p",[t._v("既要对合理的数据增长有一个判断（规划较大的分片），又要对期望有一个度的把握（合理的分片数量）。官方给出了一点建议，每个分片的数据量最好是在20G~40G左右，这就意味着如果你有4个节点，数据量预估在200G左右甚至更大，此时分片数量设置为5~10个比较合适，7、8个差不多，每个节点有2个分片。（官方博客的建议，"),a("a",{attrs:{href:"https://www.elastic.co/cn/blog/how-many-shards-should-i-have-in-my-elasticsearch-cluster",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.elastic.co/cn/blog/how-many-shards-should-i-have-in-my-elasticsearch-cluster"),a("OutboundLink")],1),t._v("）")]),t._v(" "),a("p",[t._v("上面谈到的是主分片，副分片的划分也同等重要。如果不对分片备份，主分片故障则导致数据丢失，部分数据不可查询。副本分片设置过多造成额外的存储空间，默认情况下，创建索引时会创建一个分片副本（一个分片副本不代表一个备分片，如果有5个主分片，那么分片副本就有5个备分片，同理如果指定创建两个分片副本，此时一共就有10个备分片。）需要注意的是备分片是可以修改的，所以备分片可以直接采用默认一个分片副本。")])])}),[],!1,null,null,null);e.default=v.exports}}]);