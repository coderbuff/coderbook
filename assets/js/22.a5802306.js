(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{222:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[e._v("#")]),e._v(" 命令")]),e._v(" "),a("p",[e._v("按照"),a("strong",[e._v("第一章 准备工作")]),e._v("中的步骤，我们通过"),a("code",[e._v("redis-cli")]),e._v("命令进入redis命令行交互。")]),e._v(" "),a("p",[e._v("本章节将围绕上一章节的数据类型，针对不同的数据类型操作不同的Redis命令。")]),e._v(" "),a("h2",{attrs:{id:"字符串（string）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串（string）"}},[e._v("#")]),e._v(" 字符串（string）")]),e._v(" "),a("h3",{attrs:{id:"读-写-删简单命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读-写-删简单命令"}},[e._v("#")]),e._v(" 读/写/删简单命令")]),e._v(" "),a("p",[e._v("写命令通过"),a("code",[e._v("set")]),e._v("关键字实现，"),a("code",[e._v("set [key] [value]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1:6379> set hello world\nOK\n")])])]),a("p",[e._v("读命令通过"),a("code",[e._v("get")]),e._v("关键字实现，"),a("code",[e._v("get [key]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> get hello\n"world"\n')])])]),a("p",[e._v("删除命令通过"),a("code",[e._v("del")]),e._v("关键字实现（删除命令可以适用于所有的数据类型），"),a("code",[e._v("del [key]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1:6379> del hello\n(integer) 1\n")])])]),a("p",[e._v("字符串数据类型还有一个"),a("code",[e._v("mset")]),e._v("表示同时写入一个或多个字符串值，"),a("code",[e._v("mset [key1] [value1] [key2] [value2]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1:6379> mset key1 value1 key2 value2\nOK\n")])])]),a("h3",{attrs:{id:"自增-自减命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自增-自减命令"}},[e._v("#")]),e._v(" 自增/自减命令")]),e._v(" "),a("p",[e._v("自增+1命令通过"),a("code",[e._v("incr")]),e._v("关键字实现，"),a("code",[e._v("incr [key]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> set hello 1\t\t\t\t#写入key为hello的值为1\nOK\n127.0.0.1:6379> get hello\t\t\t\t\t#读取key为hello的值\n"1"\n127.0.0.1:6379> incr hello\t\t\t\t#将key为hello的值自增+1\n(integer) 2\n127.0.0.1:6379> get hello\t\t\t\t\t#读取key为hello的值\n"2"\n')])])]),a("p",[e._v("自减-1命令通过"),a("code",[e._v("decr")]),e._v("关键字实现，"),a("code",[e._v("decr [key]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> set world 1\t\t\t\t#写入key为world的值为1\nOK\n127.0.0.1:6379> get world\t\t\t\t\t#读取key为world的值\n"1"\n127.0.0.1:6379> decr world\t\t\t\t#将key为world的值自减-1\n(integer) 0\n127.0.0.1:6379> get world\t\t\t\t\t#读取key为world的值\n"0"\n')])])]),a("p",[e._v("自增"),a("strong",[e._v("任意整数")]),e._v("通过"),a("code",[e._v("incrby")]),e._v("实现，"),a("code",[e._v("incrby [key] [number]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> set coderbuff 1\t\t#写入key为coderbuff的值为1\nOK\n127.0.0.1:6379> get coderbuff\t\t\t#读取key为coderbuff的值\n"1"\n127.0.0.1:6379> incrby coderbuff 10\t#将key为coderbuff的值自增+10\n(integer) 11\n127.0.0.1:6379> get coderbuff\t\t\t#读取key为coderbuff的值\n"11"\n')])])]),a("p",[e._v("自减"),a("strong",[e._v("任意整数")]),e._v("通过"),a("code",[e._v("decrby")]),e._v("实现，"),a("code",[e._v("decrby [key] [number]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> set coderbook 1\t\t#写入key为coderbook的值为1\nOK\n127.0.0.1:6379> get coderbook\t\t\t#读取key为coderbook的值\n"1"\n127.0.0.1:6379> decrby coderbook 10\t\t#将key为coderbook的值自增-10\n(integer) -9\n127.0.0.1:6379> get coderbook\t\t\t#读取key为coderbook的值\n"-9"\n')])])]),a("p",[e._v("自增"),a("strong",[e._v("任意浮点数")]),e._v("通过"),a("code",[e._v("incrbyfloat")]),e._v("，"),a("code",[e._v("incrbyfloat [key] [float]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> set coderchat 1\t\t#写入key为coderchat的值为1\nOK\n127.0.0.1:6379> get coderchat\t\t\t#读取key为coderchat的值\n"1"\n127.0.0.1:6379> incrbyfloat coderchat 1.1\t\t#将key为coderchat的值自增+1.1\n"2.1"\n127.0.0.1:6379> get coderchat\t\t\t#读取key为coderchat的值\n"2.1"\n')])])]),a("h3",{attrs:{id:"字符串操作命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串操作命令"}},[e._v("#")]),e._v(" 字符串操作命令")]),e._v(" "),a("p",[e._v("redis中对字符串类型的数据类型不仅可以使用上述命令，它甚至还能像Java一样进行值得追加、获取子串等。")]),e._v(" "),a("p",[a("strong",[e._v("追加value值给指定key到末尾")]),e._v("通过"),a("code",[e._v("append")]),e._v("，"),a("code",[e._v("apppend [key] [append_string]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> set say hello\t\t#写入key为say的值为hello\nOK\n127.0.0.1:6379> get say\t\t\t\t\t#读取key为say的值\n"hello"\n127.0.0.1:6379> append say world\t\t#在key为say的value值末尾追加world\n(integer) 10\t\t\t\t\t\t\t\t\t\t#返回key当前value值得长度\n127.0.0.1:6379> get say\t\t\t\t\t#读取key为say的值\n"helloworld"\n')])])]),a("p",[e._v("接着这个示例，通过命令"),a("code",[e._v("getrange")]),a("strong",[e._v("获取子字符串")]),e._v("，"),a("code",[e._v("getrange [key] [start] [end]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> getrange say 1 10\t\t#获取位于位置1到10的子字符串\n"elloworld"\n127.0.0.1:6379> get say\t\t\t\t\t\t\t#可以看到，尽管我们上面获取了子字符串，但并未修改原字符串\n"helloworld"\n')])])]),a("p",[e._v("同样是这个示例，我们通过命令"),a("code",[e._v("setrange")]),a("strong",[e._v("替换子字符串为给定值")]),e._v("，我们会给出两个关键参数，第一个参数是[start]表示从哪里开始替换，第二个参数是[value]表示替换的内容，"),a("code",[e._v("setrange [key] [start] [value]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> setrange say 1 i\n(integer) 10\n127.0.0.1:6379> get say\n"hilloworld"\n')])])]),a("h3",{attrs:{id:"二进制位命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二进制位命令"}},[e._v("#")]),e._v(" 二进制位命令")]),e._v(" "),a("p",[e._v("任何数据在操作系统中都是以"),a("strong",[e._v("二进制位")]),e._v("形式存储的，字符串类型中redis提供了对其进行二进制位操作。通常情况下运用可能不多，但可以通过它实现一些“巧妙”的设计。")]),e._v(" "),a("p",[a("strong",[e._v("例如，在钉钉消息中，我们发送一条消息会显示“已读”和“未读”的人，我们需要将这两个信息存储在redis中，应该怎么设计？")])]),e._v(" "),a("p",[e._v("我们设计一条消息的key值结构为“[user_id]:[msg_id]”，所以key=“1:100”就表示“用户ID为1发送的消息ID为100”。"),a("strong",[e._v("注意")]),e._v("，此时如果用户ID=2的人读了这条消息，就通过命令"),a("code",[e._v("setbit 1:100 2 1")]),e._v("写入，如果用户ID=100的人读了这条消息，就通过"),a("code",[e._v("setbit 1:100 10 1")]),e._v("。这条命令的含义表示对key=1:100的二进制第2位写入1，对key=1:100的二进制第10位写入1，1表示已读，0则表示未读。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1:6379> set 1:100 0\t\t\t\t\t#定义key=1:100，表示用户ID为1发出的消息ID为100的消息\nOK\n127.0.0.1:6379> setbit 1:100 0 0\t\t#初始化1:100的第0位到第10位的二进制为0，表示刚发出来都是未读。\n(integer) 0\n127.0.0.1:6379> setbit 1:100 1 0\n(integer) 0\n127.0.0.1:6379> setbit 1:100 2 0\n(integer) 1\n127.0.0.1:6379> setbit 1:100 3 0\n(integer) 1\n127.0.0.1:6379> setbit 1:100 4 0\n(integer) 0\n127.0.0.1:6379> setbit 1:100 5 0\n(integer) 0\n127.0.0.1:6379> setbit 1:100 6 0\n(integer) 0\n127.0.0.1:6379> setbit 1:100 7 0\n(integer) 0\n127.0.0.1:6379> setbit 1:100 8 0\n(integer) 0\n127.0.0.1:6379> setbit 1:100 9 0\n(integer) 0\n127.0.0.1:6379> setbit 1:100 10 0\n")])])]),a("p",[e._v("上面我们就初始化好了一个bitmap（位图）。接下来，当用户ID=2和用户ID=10读了这条消息。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1:6379> setbit 1:100 1 1\t\t#实际上，发出消息的同时，自己也已读了\n(integer) 0\n127.0.0.1:6379> setbit 1:100 2 1\t\t#用户ID=2读了这条消息\n(integer) 0\n127.0.0.1:6379> setbit 1:100 10 1\t\t#用户ID=10读了这条消息\n(integer) 0\n")])])]),a("p",[e._v("我们通过"),a("code",[e._v("getbit")]),e._v("命令可以判断出哪些用户是否已读这条消息，例如，我们判断用户ID=3是否已读这条消息。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1:6379> getbit 1:100 3\t\t#读取key为1:100的二进制位第3位二进制值\n(integer) 0\t\t\t\t\t\t\t\t\t\t\t\t#返回0，表示未读\n")])])]),a("p",[e._v("判断用户ID=10是否已读这条消息。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1:6379> getbit 1:100 10\t\t#读取key为1:100的二进制位第10位二进制值\n(integer) 1\t\t\t\t\t\t\t\t\t\t\t\t#返回1，表示已读\n")])])]),a("p",[e._v("我们还可以通过"),a("code",[e._v("bitcount")]),e._v("统计值为1的数量，也就是有多少人已读这条消息。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1:6379> bitcount 1:100\t\t#统计二进制位为1的数量\n(integer) 3\t\t\t\t\t\t\t\t\t\t\t\t#只有3个，和我们上面的假定一致，用户自己（用户ID=1）和用户ID=2、用户ID=10的用户读了这条消息\n")])])]),a("p",[e._v("最后还有一个关于二进制位的命令"),a("code",[e._v("bittop [operation] [result] [key1] [key2]")]),e._v("，可以对多个key值的二进制位进行二进制运算，包括"),a("code",[e._v("并AND")]),e._v("、"),a("code",[e._v("或OR")]),e._v("、"),a("code",[e._v("异或XOR")]),e._v("、"),a("code",[e._v("非NOT")]),e._v("，计算结果保存在[result]中。")]),e._v(" "),a("h2",{attrs:{id:"列表（list）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列表（list）"}},[e._v("#")]),e._v(" 列表（list）")]),e._v(" "),a("h3",{attrs:{id:"推入-弹出常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推入-弹出常用命令"}},[e._v("#")]),e._v(" 推入/弹出常用命令")]),e._v(" "),a("p",[e._v("通过"),a("code",[e._v("rpush")]),e._v("、"),a("code",[e._v("lpush")]),e._v("，将一个或多个值向右或向左推入。")]),e._v(" "),a("p",[a("code",[e._v("rpush [key] [value1] [value2]")]),e._v("，将value值推入到列表的"),a("strong",[e._v("右端")]),e._v("。")]),e._v(" "),a("p",[a("code",[e._v("lpush [key] [value1] [value2]")]),e._v("，将value值推入到列表的"),a("strong",[e._v("左端")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> rpush books java\t\t#向列表key值为books的右侧推入value值java\n(integer) 1\n127.0.0.1:6379> lpush books c\t\t\t\t#向列表key值为books的左侧推入value值c\n(integer) 2\n127.0.0.1:6379> rpush books python\t#向列表key值为books的右侧推入value值python\n(integer) 3\n127.0.0.1:6379> lrange books 0 -1\t\t#查看列表key值为books的值\n1) "c"\n2) "java"\n3) "python"\n')])])]),a("p",[e._v("接着上面的示例，通过"),a("code",[e._v("rpop")]),e._v("、"),a("code",[e._v("lpop")]),e._v("，移除并返回列表中最后端、最左端的元素。")]),e._v(" "),a("p",[a("code",[e._v("rpop [key]")]),e._v("，移除列表最后端的元素。")]),e._v(" "),a("p",[a("code",[e._v("lpop [key]")]),e._v("，移除列表最左端的元素。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> rpop books\t\t\t\t\t#移除列表key值为books最右端的元素并返回\n"python"\n127.0.0.1:6379> lrange books 0 -1\t\t#查看列表key为books的所有元素\n1) "c"\n2) "java"\n127.0.0.1:6379> lpop books\t\t\t\t\t#移除列表key值为books最左端的元素并返回\n"c"\n127.0.0.1:6379> lrange books 0 -1\t\t#查看列表key为books的所有元素\n1) "java"\n')])])]),a("p",[e._v("在介绍完推入和弹出命令后，接下来将介绍与"),a("strong",[e._v("列表范围")]),e._v("查看的命令。")]),e._v(" "),a("p",[a("code",[e._v("lrange [key] [start] [end]")]),e._v("命令用于返回列表从[start]到[end]位置范围内的所有元素，注意，位于[start]、[end]的元素也会被返回，上面的例子已经出现过该命令。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> rpush level A B C D\t\t\t#对列表key为level的右侧连续推入value：A B C D\n(integer) 4\n127.0.0.1:6379> lrange level 0 1\t\t\t\t#返回key为level的位置0~1的元素\n1) "A"\n2) "B"\n127.0.0.1:6379> lrange level 0 -1\t\t\t\t#查看列表key为level的所有元素\n1) "A"\n2) "B"\n2) "C"\n2) "D"\n')])])]),a("p",[a("code",[e._v("lindex [key] [index]")]),e._v("命令用于返回指定位置[index]的元素，仍然使用上述示例。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> lindex level 3\n"D"\n')])])]),a("p",[a("code",[e._v("lrange")]),e._v("和"),a("code",[e._v("lindex")]),e._v("均不会修改原本的列表值，但"),a("code",[e._v("ltrim")]),e._v("则用于“修建”列表值。")]),e._v(" "),a("p",[a("code",[e._v("ltrim [key] [start] [end]")]),e._v("表示只保留列表从[start]到[end]范围的所有元素，注意，包含位于[start]、[end]的元素，同样采用上述示例。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> lrange level 0 -1\t\t#查看列表key为level的所有元素\n1) "A"\n2) "B"\n2) "C"\n2) "D"\n127.0.0.1:6379> ltrim level 1 2\t\t\t#保留列表位置为1~2的元素\nOK\n127.0.0.1:6379> lrange level 0 -1\t\t#查看列表key为level的所有元素\n1) "B"\n2) "C"\n')])])]),a("p",[e._v("列表基本的命令就是上面这些，还有一些比较“高级”的命令：将元素从一个队列移动到另外一个队列，或者阻塞式的执行弹出命令知道有新元素新加入到列表中。在这里就不再介绍，后面章节在介绍到redis的一些应用时再讲。")]),e._v(" "),a("h2",{attrs:{id:"哈希（hash）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哈希（hash）"}},[e._v("#")]),e._v(" 哈希（hash）")]),e._v(" "),a("p",[a("code",[e._v("hmset")]),e._v("命令可写入hash类型的值，"),a("code",[e._v("hmset [key] [field1] [value1] [field2] [value2]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1:6379> hmset okevin name kevin sex male\nOK\n")])])]),a("p",[a("code",[e._v("hmget")]),e._v("命令可读取hash类型的值，"),a("code",[e._v("hmget [key] [field]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> hmget okevin name\n1) "kevin"\n')])])]),a("p",[a("code",[e._v("hlen")]),e._v("返回hash包含的键值对数量，"),a("code",[e._v("hlen [key]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1:6379> hlen okevin\n(integer) 2\n")])])]),a("p",[a("code",[e._v("hmgetall")]),e._v("返回hash包含的所有键值对，"),a("code",[e._v("hmgetall [key]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> hgetall okevin\t\t#返回所有的键值对，奇数列为field，偶数列为value\n1) "name"\n2) "kevin"\n3) "sex"\n4) "male"\n')])])]),a("p",[a("code",[e._v("hexists")]),e._v("命令检查给定的field是否存在hash值中，返回0表示不存在，返回1表示存在，"),a("code",[e._v("hexists [key] [field]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1:6379> hexists okevin name\n(integer) 1\n127.0.0.1:6379> hexists okevin age\n(integer) 0\n")])])]),a("p",[a("code",[e._v("hkeys")]),e._v("获取hash包含的所有field键，"),a("code",[e._v("hkeys [key]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> hkeys okevin\n1) "name"\n2) "sex"\n')])])]),a("p",[a("code",[e._v("hvals")]),e._v("获取hash包含的所有field对应的value值，"),a("code",[e._v("hvals [key]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> hvals okevin\n1) "kevin"\n2) "male"\n')])])]),a("p",[a("code",[e._v("hincrby")]),e._v("给hash中指定的field键自增任意整数（和字符串类型的"),a("code",[e._v("incrby")]),e._v("类似），"),a("code",[e._v("hincrby [key] [field] [number]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> hmset okevin age 0\t\t\t\t#新增“年龄”field值为0\nOK\n127.0.0.1:6379> hmget okevin age\t\t\t\t\t#获取“年龄”\n1) "0"\n127.0.0.1:6379> hincrby okevin age 25\t\t\t#给“年龄”field自增“25”整数\n(integer) 25\n127.0.0.1:6379> hmget okevin age\t\t\t\t\t#获取“年龄”\n1) "25"\n')])])]),a("p",[a("code",[e._v("hincrbyfloat")]),e._v("给hash中指定的filed键自增任意浮点数（和字符串类型的"),a("code",[e._v("incrbyfloat")]),e._v("类似），"),a("code",[e._v("hincrbyfloat [key] [field] [number]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> hincrbyfloat okevin age 0.5\n"25.5"\n127.0.0.1:6379> hmget okevin age\n1) "25.5"\n')])])]),a("p",[a("code",[e._v("hdel")]),e._v("删除hash中指定的filed，"),a("code",[e._v("hmdel [key] [field]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> hgetall okevin\n1) "name"\n2) "kevin"\n3) "sex"\n4) "male"\n5) "age"\n6) "25.5"\n127.0.0.1:6379> hdel okevin age\n(integer) 1\n127.0.0.1:6379> hgetall okevin\n1) "name"\n2) "kevin"\n3) "sex"\n4) "male"\n')])])]),a("h2",{attrs:{id:"集合（set）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集合（set）"}},[e._v("#")]),e._v(" 集合（set）")]),e._v(" "),a("p",[e._v("在上一章节讲到，集合（set）是以无序方式存储各不相同元素的数据类型。它和Java中的Set类型类似。它同样具有新增、删除、读取等基本操作，还有两个集合之间运算的操作。")]),e._v(" "),a("h3",{attrs:{id:"读-写等常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读-写等常用命令"}},[e._v("#")]),e._v(" 读/写等常用命令")]),e._v(" "),a("p",[a("code",[e._v("sadd")]),e._v("命令将一个或多个元素添加到集合里，并返回被添加元素中原本并不存在集合中的元素数量，"),a("code",[e._v("sadd [key] [member] [member]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1:6379> sadd students kevin yulinfeng\n(integer) 2\n")])])]),a("p",[a("code",[e._v("sismember")]),e._v("命令检查元素是否存在集合中，返回1表示存在，返回0表示不存在，"),a("code",[e._v("sismember [key] [member]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1:6379> sismember students kevin\n(integer) 1\n127.0.0.1:6379> sismember students linfeng\n(integer) 0\n")])])]),a("p",[a("code",[e._v("smembers")]),e._v("命令返回集合中包含的所有元素，"),a("code",[e._v("smembers [key]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> smembers students\n1) "yulinfeng"\n2) "kevin"\n')])])]),a("p",[a("code",[e._v("scard")]),e._v("命令返回集合中元素的数量，"),a("code",[e._v("scards [key]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1:6379> scard students\n(integer) 2\n")])])]),a("p",[a("code",[e._v("srandmember")]),e._v("命令从集合中随机返回一个或多个元素，当返回的元素数量设置为正数时，元素不会重复，当返回的元素数量设置为负数时，元素可能会重复，"),a("code",[e._v("srandmember [key] [count]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> srandmember students 1\n1) "yulinfeng"\n127.0.0.1:6379> srandmember students 1\n1) "kevin"\n127.0.0.1:6379> srandmember students 3\n1) "kevin"\n2) "yulinfeng"\n127.0.0.1:6379> srandmember students -3\n1) "yulinfeng"\n2) "kevin"\n3) "kevin"\n')])])]),a("p",[a("code",[e._v("srem")]),e._v("命令从集合中移除一个或多个指定的元素，并返回被移除的元素数量，"),a("code",[e._v("srem [key] [member] [member]")]),e._v("。")]),e._v(" "),a("h3",{attrs:{id:"多个集合命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多个集合命令"}},[e._v("#")]),e._v(" 多个集合命令")]),e._v(" "),a("p",[e._v("redis可以对多个集合进行操作，例如数学中的差集运算、交集运算等。下面只列举多个集合操作的命令，不再举例，但如果有场景运用时一定要知道redis还可以做多集合运算。")]),e._v(" "),a("p",[a("code",[e._v("sdiff [key1] [key2]……")]),e._v("命令返回存在于key1，但不存在于其他集合（key2）中的元素（差集运算）。")]),e._v(" "),a("p",[a("code",[e._v("sdiff [dest-key] [key1] [key2]……")]),e._v("命令也是同上的差集运算，但它将元素存储到dest-key键中。")]),e._v(" "),a("p",[a("code",[e._v("sinter [key1] [key2]……")]),e._v("命令返回同时存在所有集合（key1、key2）中的元素（交集运算）。")]),e._v(" "),a("p",[a("code",[e._v("sinterstore [dest-key] [key1] [key2]……")]),e._v("命令也是同上的交集运算，但它将元素存储到dest-key键中。")]),e._v(" "),a("p",[a("code",[e._v("sunion [key1] [key2]……")]),e._v("命令返回所有集合中（key1、key2）的元素（并集运算）。")]),e._v(" "),a("p",[a("code",[e._v("sunionstore [dest-key] [key1] [key2]……")]),e._v("命令也是同上的并集运算，但它将元素存储到dest-key键中。")]),e._v(" "),a("h2",{attrs:{id:"有序集合（zset）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有序集合（zset）"}},[e._v("#")]),e._v(" 有序集合（zset）")]),e._v(" "),a("p",[e._v("在上一章"),a("strong",[e._v("数据类型")]),e._v("中，我们谈到尽管“有序集合”这种数据类型，更像是“集合”的有序版，但对于数据结构上讲，它更类似“哈希（hash）”。它同哈希类型一样，值也是k-v形式，不同的是有序集合的v代表的是用于排序的“分数”。")]),e._v(" "),a("h3",{attrs:{id:"读-写等常用命令-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读-写等常用命令-2"}},[e._v("#")]),e._v(" 读/写等常用命令")]),e._v(" "),a("p",[a("code",[e._v("zadd")]),e._v("用于有序集合的写入操作，"),a("code",[e._v("zadd [key] [score1] [member1] [score2] [member2]……")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1:6379> zadd sorted 2 a 3 b\n(integer) 2\n")])])]),a("p",[a("code",[e._v("zcard")]),e._v("命令用于返回有序集合中的成员数量，"),a("code",[e._v("zcard [key]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1:6379> zcard sorted\n(integer) 2\n")])])]),a("p",[a("code",[e._v("zrank")]),e._v("用于返回有序集合中成员member的排名（按分数从小到大排列），"),a("code",[e._v("zrank [key] [member]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1:6379> zrank sorted a\n(integer) 0\n127.0.0.1:6379> zrank sorted b\n(integer) 1\n")])])]),a("p",[a("code",[e._v("zrevrank")]),e._v("命令也是返回成员member的排名，但它和"),a("code",[e._v("zrank")]),e._v("排序规则相反，它是按分数从大到小排列，"),a("code",[e._v("zrevrank [key] [member]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1:6379> zrevrank sorted a\n(integer) 1\n127.0.0.1:6379> zrevrank sorted b\n(integer) 0\n")])])]),a("p",[a("code",[e._v("zscore")]),e._v("命令返回成员member的分数，"),a("code",[e._v("zscore [key] [member]")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> zscore sorted a\n"2"\n')])])]),a("p",[a("code",[e._v("zrange [key] [start] [stop] (withscores)")]),e._v("命令用于返回有序集合中排名介于start和stop之间的成员（按分数从小到大排列），withscores参数可选表示是否返回分数，start和end指的是排在第几名，从0开始。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> zrange sorted 0 0 withscores\n1) "a"\n2) "2"\n127.0.0.1:6379> zrange sorted 0 1 withscores\n1) "a"\n2) "2"\n3) "b"\n4) "3"\n')])])]),a("p",[a("code",[e._v("zrevrange")]),e._v("同"),a("code",[e._v("zrange")]),e._v("类似，但它是按分数从大到小排列，"),a("code",[e._v("zrevrange [key] [start] [end] (withscores)")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> zrevrange sorted 0 0 withscores\n1) "b"\n2) "3"\n127.0.0.1:6379> zrevrange sorted 0 1 withscores\n1) "b"\n2) "3"\n3) "a"\n4) "2"\n')])])]),a("p",[a("code",[e._v("zcount [key] [min_score] [max_score]")]),e._v("返回分数介于min_score和max_score之间的成员数量。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1:6379> zcount sorted 0 2\n(integer) 1\n127.0.0.1:6379> zcount sorted 0 3\n(integer) 2\n")])])]),a("p",[a("code",[e._v("zincrby [key] [incrment] [member]")]),e._v("命令用于给member成员的分数加上incrment。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('127.0.0.1:6379> zincrby sorted 2 a\n"4"\n')])])]),a("p",[a("code",[e._v("zrem")]),e._v("命令用于删除有序集合中指定的成员，"),a("code",[e._v("zrem [key] [member1] [member2]……")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1:6379> zrem sorted a\n(integer) 1\n")])])]),a("h3",{attrs:{id:"多个有序集合命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多个有序集合命令"}},[e._v("#")]),e._v(" 多个有序集合命令")]),e._v(" "),a("p",[e._v("同集合一样，有序集合也可以做多个集合的操作，例如交集、并集等。")]),e._v(" "),a("p",[a("code",[e._v("zinterstore")]),e._v("用于交集运算。")]),e._v(" "),a("p",[a("code",[e._v("zunionstore")]),e._v("用于并集运算。")])])}),[],!1,null,null,null);t.default=n.exports}}]);