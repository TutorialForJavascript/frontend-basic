/**
 * 计算乘法用的应用
 */
class MulApplication {

    constructor() {
        // 控件
        this.first = document.querySelector('#number1')
        this.second = document.querySelector('#number2')
        this.form = document.querySelector('form')
        this.result1 = document.querySelector('.result1')
        this.myWorker = new SharedWorker("worker.js")
        // 绑定事件
        this.bindEvent()
    }

    /**
     * 为输入输出设备和按钮绑定事件句柄的回调函数
     */
    bindEvent() {
        this.first.onchange = () => this.query()
        this.second.onchange = () => this.query()
        this.form.onsubmit = function (e) {
            e.preventDefault()
        }
        this.myWorker.port.onmessage = (event) => this.onResult(event)
    }
    /**
     * 向worker请求计算结果
     */
    query() {
        this.myWorker.port.postMessage([this.first.value, this.second.value])
        console.log('Message posted to worker')
    }
    /**
     * 收到结果后将其渲染到result位置
     * @param {Event} event - 消息传递事件
     */
    onResult(event) {
        this.result1.textContent = event.data;
        console.log('Message received from worker');
    }
}

/**
 * 入口函数,这个入口函数是一个异步函数
 */
function main() {
    let app = new MulApplication()
}

main()