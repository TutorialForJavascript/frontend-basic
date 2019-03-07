# Web Worker

当在 HTML 页面中执行脚本时，页面的状态是不可响应的，直到脚本已完成。
web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行。


webworker的运行逻辑如下:

我们通过new方法生成一个worker实例,

实例与对应执行脚本间的通信可以使用`.onmessage`来绑定回调函数,也就是当worker发送消息来时,就会触发回调函数,同理还有报错时的回调函数是`.onerror`

而脚本则使用`postMessage(any):void`来发送消息

这一过程的反向对应的则是`.postMessage`和

```js
addEventListener('message', callback(e):void)
```
传到的数据会保存在`e.data`中



TypeScript对webworker的接口有一些bug,如果碰到有问题可以看下面的d.ts文件照着修改
<https://github.com/Microsoft/TypeScript/blob/master/src/lib/webworker.generated.d.ts>

注意,本例子需要使用静态服务器,可以使用python3的httpserver:

`python3 -m http.server --cgi 4000`

或者使用node.js的`http-server`
