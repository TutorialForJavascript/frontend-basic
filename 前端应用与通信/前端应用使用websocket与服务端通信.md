## websocket

`websocket`则是一种相对颠覆协议,它用起来和tcp的套接字类似,可以实现客户端(浏览器)和服务器间的双工通信.

在websocket之前,大家往往使用轮询技术来实现双工通信,轮询是在特定的的时间间隔（如每1秒），由浏览器对服务器发出HTTP request，然后由服务器返回最新的数据给客户端的浏览器。这种传统的`HTTP request` 的模式带来很明显的缺点--浏览器需要不断的向服务器发出请求，然而`HTTP request`的`header`是非常长的，里面包含的有用数据可能只是一个很小的值，这样会占用很多的带宽。

`websocket`的话,浏览器和服务器只需要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道。两者之间就直接可以数据互相传送。在此WebSocket 协议中，为我们实现即时服务带来了两大好处:

1. Header

    互相沟通的Header是很小的-大概只有 2 Bytes

2. Server Push

    服务器的推送，服务器不再被动的接收到浏览器的request之后才返回数据，而是在有新数据时就主动推送给浏览器。

websocket需要服务器端支持,像python中可以使用gevent-websocket,flask-sockets来实现,像node中可以使用ws来实现

客户端的websocket同样有几个事件来绑定回调函数:

+ onopen

    连接成功会执行这个事件

+ onmessage

    接收websocket推送过来的消息

+ onconnecting

    这是个监听事件，当连接开始尝试进行，事件监听器被调用。

+ onclose

    websocket关闭会执行这个事件

以及几个常用方法:

+ send

    通过websocket向后端发送消息。

+ close

    关闭 WebSocket 连接／连接尝试，若连接已为 CLOSED，此方法沒有作用。


而服务器端,根据不同的框架实际上接口并不统一

## socket.io


因为websocket比较新,而且后端实现其实不太统一,于是就有了一种非官方的新协议[socket.io](http://socket.io/)它可以在轮询,websocket间切换,实现统一api下的多种连接方式自动切换,socket.io是目前最流行的websocket实现方法


socket.io整合并添加了许多接口,并且可以方便的做广播或者按房间(分组)来发送消息

下面是服务端可以用到的工具:

[flask-socketio](http://flask-socketio.readthedocs.io/en/latest/)

他的翻译在简书上,分为三篇
+ <http://www.jianshu.com/p/be4b23ea0ba5>
+ <http://www.jianshu.com/p/f4f85539ecbb>
+ <http://www.jianshu.com/p/f53c6dfdc59a>

[koa-socket](https://github.com/mattstyles/koa-socket)