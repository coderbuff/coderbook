(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{225:function(e,_,v){"use strict";v.r(_);var t=v(0),s=Object(t.a)({},(function(){var e=this,_=e.$createElement,v=e._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"分布式锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[e._v("#")]),e._v(" 分布式锁")]),e._v(" "),v("p",[e._v("redis在我们日常开发中，除了用来做缓存提高应用程序的性能，降低数据库压力之外。可能用途最广泛地当属用redis来做"),v("strong",[e._v("分布式锁")]),e._v("了。")]),e._v(" "),v("p",[e._v("在单机中，我们要解决并发时线程安全的问题会使用JDK的"),v("code",[e._v("synchronized")]),e._v("或者"),v("code",[e._v("Lock")]),e._v("类，或者直接使用线程安全的类，例如"),v("strong",[e._v("JUC（java.util.concurrent并发包）")]),e._v("。而在大型的应用程序中，单机部署显然不能满足我们的需求，这个时候要在分布式集群环境中对互斥资源进行控制访问，就需要使用到分布式锁。")]),e._v(" "),v("p",[e._v("在本章中，我们着重介绍基于redis的分布式锁，同时将简单介绍其他分布式锁的解决方案。")]),e._v(" "),v("p",[e._v("开始之前先总结无论什么方式的分布式锁，其核心都是"),v("strong",[e._v("如有不存在某个key则写入，存在则返回写入失败")]),e._v("。")]),e._v(" "),v("h2",{attrs:{id:"通过redis实现分布式锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通过redis实现分布式锁"}},[e._v("#")]),e._v(" 通过redis实现分布式锁")]),e._v(" "),v("p",[e._v("redis中主要通过"),v("code",[e._v("setnx")]),e._v("命令实现，全称是“"),v("strong",[e._v("SET")]),e._v(" if "),v("strong",[e._v("N")]),e._v("ot e"),v("strong",[e._v("X")]),e._v("ists”，意为如果存在则写入。如果不存在key则返回1，已经存在了这个key，则会返回0。释放锁时直接调用"),v("code",[e._v("del")]),e._v("命令删除即可。")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("127.0.0.1:6379> setnx redis_lock a\n(integer) 1\n127.0.0.1:6379> setnx redis_lock a\n(integer) 0\n")])])]),v("p",[e._v("但是"),v("strong",[e._v("请注意")]),e._v("，使用"),v("code",[e._v("setnx")]),e._v("有一定的风险，我们知道加锁就有存在“死锁”的可能性，而打破死锁的方法之一就是主动释放资源（设置锁过期时间），然而"),v("code",[e._v("setnx")]),e._v("并没有提供"),v("strong",[e._v("过期时间")]),e._v("的设置，redis提供了另外一个命令——"),v("code",[e._v("expire")]),e._v("来设置key值得过期时间，所以改造上面的例子为以下所示：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("127.0.0.1:6379> setnx redis_lock a\t\t\t#设置一个分布式锁的key为redis_lock\n(integer) 1\n127.0.0.1:6379> expire redis_lock 5\t\t\t#设置redis_lock的过期时间为5秒，到期自动删除\n(integer) 1\n127.0.0.1:6379> setnx redis_lock a\t\t\t#此时再设置分布式锁的key为redis_lock，返回0失败\n(integer) 0\n127.0.0.1:6379> setnx redis_lock a\t\t\t#过5秒再设置分布式锁的key为redis_lock，返回1成功\n(integer) 1\n")])])]),v("p",[e._v("可以看到通过组合"),v("code",[e._v("setnx")]),e._v("和"),v("code",[e._v("expire")]),e._v("命令，能达到我们想要的结果。但是"),v("strong",[e._v("请注意")]),e._v("，它仍然存在一个问题，那就是这两个命令并不是原子性的，如果在执行"),v("code",[e._v("expire redis_lock 5")]),e._v("时，redis服务恰好宕机，此时这个key将会一直存在。")]),e._v(" "),v("p",[e._v("好在redis为我们提供了"),v("code",[e._v("set")]),e._v("命令的分布式用法并且可以设置为过期时间，关键是原子性的。官方的命令参数为"),v("code",[e._v("set key value [expiration EX seconds|PX milliseconds] [NX|XX]")]),e._v("。")]),e._v(" "),v("p",[v("code",[e._v("[expiration EX seconds|PX milliseconds]")]),e._v("参数EX表示过期时间单位为“秒”，PX表示过期时间单位为“毫秒”。")]),e._v(" "),v("p",[v("code",[e._v("[NX|XX]")]),e._v("参数NX表示“"),v("strong",[e._v("SET")]),e._v(" if "),v("strong",[e._v("N")]),e._v("ot e"),v("strong",[e._v("X")]),e._v("ists”不存在则写入，XX表示“"),v("strong",[e._v("SET")]),e._v(" if e"),v("strong",[e._v("X")]),e._v("ists”存在则写入，分布式锁的场景中使用“NX”参数。")]),e._v(" "),v("p",[e._v("所以我们设置一个key值名为“lock”的锁，5秒后自动删除：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("127.0.0.1:6379> set lock a ex 5 nx\t\t\t#设置一个key值名为“lock”的锁，5秒后自动删除\nOK\n127.0.0.1:6379> set lock a ex 5 nx\t\t\t#5秒内设置一个key值名为“lock”的锁，5秒后自动删除。返回nil失败\n(nil)\n127.0.0.1:6379> set lock a ex 5 nx\t\t\t#5秒后设置一个key值名为“lock”的锁，5秒后自动删除。返OK成功\nOK\n")])])]),v("p",[e._v("使用redis作为分布式锁，最好要设置"),v("strong",[e._v("过期时间")]),e._v("，也就是最好使用"),v("strong",[e._v("set")]),e._v("命令。")]),e._v(" "),v("h2",{attrs:{id:"其他分布式锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他分布式锁"}},[e._v("#")]),e._v(" 其他分布式锁")]),e._v(" "),v("h3",{attrs:{id:"通过zookeeper实现分布式锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通过zookeeper实现分布式锁"}},[e._v("#")]),e._v(" 通过ZooKeeper实现分布式锁")]),e._v(" "),v("p",[e._v("ZooKeeper是一个分布式协调服务中间件，它可以用作"),v("strong",[e._v("注册中心")]),e._v("、"),v("strong",[e._v("动态配置中心")]),e._v("等等。")]),e._v(" "),v("p",[e._v("我们利用ZooKeeper的"),v("strong",[e._v("临时有序节点")]),e._v("也可以实现分布式锁。")]),e._v(" "),v("p",[e._v("ZooKeeper的数据结构类似Linux中的文件结构，总体来讲它时“一棵树”，节点中记录相关信息。节点分为“永久节点”和“临时节点”。当我们要获取一个锁时，需要在ZooKeeper的结构中创建一个"),v("strong",[e._v("临时有序节点")]),e._v("，释放锁同样时删除节点。获取分布式锁，即获取一个ZooKeeper的临时有序节点，如果获取到的有序节点存在比序号比自己更小的兄弟节点，即获取锁失败。")]),e._v(" "),v("p",[e._v("基于ZooKeeper实现分布式锁可以利用ZooKeeper监听的特性，一旦有节点发生变化可以进行通知。这点是Redis不具备的。但由于它的实现方式是创建和删除节点，所以在性能上不如redis。")]),e._v(" "),v("h3",{attrs:{id:"通过mysql实现分布式锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通过mysql实现分布式锁"}},[e._v("#")]),e._v(" 通过MySQL实现分布式锁")]),e._v(" "),v("p",[e._v("通过MySQL实现分布式锁是我以前遇到的一个面试问题，思考以下实现方式：")]),e._v(" "),v("blockquote",[v("p",[e._v("在MySQL创建一个有关锁的表“tb_lock”，一共有两列，一列叫“key”并设置为"),v("strong",[e._v("唯一索引")]),e._v("，另一列设置为“value”。")]),e._v(" "),v("p",[e._v("获取锁时，通过"),v("code",[e._v("insert")]),e._v("插入一条记录，如果插入成功则获取锁成功；插入失败则获取锁失败。")])]),e._v(" "),v("p",[e._v("一听，是不是觉得有点意思，好像确实能通过MySQL来实现分布式锁，这样我们就不必引入redis或ZooKeeper。那为什么我们日常开发中几乎没有人这样用过呢？实际上，MySQL实现分布式锁，它仅仅满足了"),v("strong",[e._v("控制互斥资源")]),e._v("这一点，尽管它是最核心的，但分布式锁不仅是控制互斥资源，它还需要具备以下特性：")]),e._v(" "),v("ul",[v("li",[e._v("可设置过期时间，防止死锁")]),e._v(" "),v("li",[e._v("需要具备阻塞获取锁的特性")]),e._v(" "),v("li",[e._v("较高的性能和可靠性")]),e._v(" "),v("li",[e._v("锁还需要可重入")]),e._v(" "),v("li",[e._v("……")])]),e._v(" "),v("p",[e._v("所以如果要使用MySQL来实现分布式锁，你需要去解决以上的问题，对于成熟的redis和ZooKeeper分布式锁方案，我们大可不必再造一个不可靠的轮子。")])])}),[],!1,null,null,null);_.default=s.exports}}]);