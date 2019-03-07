# 数据通信

前端项目往往只是作为展现,数据,运算往往要依赖后端服务器,因此与服务器间的通信是非常重要的.在最开始的时候http协议只想做个用于发布和接收HTML页面的协议,它不想搞得太复杂,但随着时代的变迁,越来越多的通信需求让它与服务器间的交互手段越来越多,web的发展是在太快,很少有实现快于标准的技术,而web技术就是一个.html5协议规定了两个新的通信协议,分别是`web messaging`,`EventSource`和`websocket`.

总结html通信技术,在客户端/服务器结构上

+ 从最早的`客户端请求,服务器响应模式`
+ 到`ajax`实现的伪双向通信
+ 到`ajax轮询技术`实现的伪服务器端主动通信
+ 到`EventSource`实现的服务器端主动通信
+ 再到`web socket`实现的双向通信

在对等通信上,

+ 有`web Messaging`实现跨文档通信
+ 有`WebRTC`实现跨客户端p2p通信

本部分代码都需要服务器,不是纯前端技术,不感兴趣的可以直接下一章


## ajax

最常见的服务端通信无疑是`ajax`技术,但ajax有跨域访问问题.所谓跨域,就是服务器"A"上的页面获取服务器"B"上的资源，
这种情况浏览器默认是不允许的.跨域的严格一点的定义是：只要 协议，域名，端口有任何一个的不同，就被当作是跨域.
浏览器会检查服务器B的HTTP头(HEAD请求)，如果`Access-Control-Allow-Origin`中有"A"，或者是通配符`*`，浏览器就会允许跨域,这叫`CORS`.

解决跨域问题,当然可以在服务器端使用反向代理(nginx),把不同的域放到一起,但如果我们要跨的域我们无法这么操作,就会很麻烦.



## EventSource

ajax实现了"伪"服务器端向浏览器主动发送消息,而`EventSource`则是真正实现这一功能的技术,

`EventSource`依然不支持跨域访问(至少chrome不支持),也就是说如果是要多服务架构,也得像之前的ajax一样放在代理之后.

前端方面用`EventSource(URL)`来实例化一个与对应url相连的通道,之后可以使用`onopen`,`onmessage`等来监听事件,当然如果是自定义事件,可以使用`addEventListener`来实现


nodejs上可以使用expresse和express搭配构建




## messaging

为了解决跨域问题,就有了`jsonp`技术,JSONP是一种非正式传输协议,因此本文不提供例子，本质上是利用`<script>`标签不受跨域限制的历史遗留漏洞来实现跨域请求的.该协议的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据.

`jsonp`是一种非正式传输协议,显然不是html5协议会收录的,而官方的解决方案则是使用`web messaging`.

webmessaging主要用在iframe中使用.他可以跨域的不依靠服务器在两个html/js文件间交换数据.当然不跨域也行它主要是跨文档通信

其通信主要依靠

+ 发送:需要一个iframe对象,使用`.contentWindow.postMessage(content, targetOrigin)`方法来发送信息

    `targetOrigin`是目标源，可以限定只接收来自某个域下的数据

+ 使用`window.addEventListener("message", receiveMessage, false);`来接收消息


