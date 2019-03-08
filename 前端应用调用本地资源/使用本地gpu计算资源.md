# 使用本地GPU的计算资源

[webgl](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API)是浏览器上的opengl,它可以直接操作gpu进行运算渲染,然后渲染到canvas或者其他什么上面

webgl相当底层,并不适合没有opengl基础的人,而我们也没兴趣拿他做什么渲染,高性能计算才是我们感兴趣的.

google在2018年开源了他们基于webgl的前端高性能计算框架`tensorflow for javascript`(tfjs),当然这个框架主要是做deeplearning的,但即便如此我们也可以使用它来调用gpu来做一些计算工作.


## 前端项目使用tfjs进行矩阵计算

这个项目在[C2-S6-P1]



<!-- ## 使用keras训练好的模型
<https://www.tensorflow.org/js/tutorials/conversion/import_keras>

## 使用TensorFlow训练好的模型
<https://www.tensorflow.org/js/tutorials/conversion/import_saved_model> -->