# 录像

## 项目主旨

本项目介绍如何使用媒体录制接口`MediaRecorder`录制视频.

## 用法

在`public`文件夹下双击`index.html`打开.可以选择你要的输入设备和输出设备,如果视频输入中选择了`Local Display`则会调用浏览器的屏幕共享接口,跳出对话框让选择捕获哪个屏幕.之后下方的video标签中会播放捕获的视频流.音频流则会通过你选择的输出设备输出.

下方会有一个表单可以选择录制使用的格式,选好后点击右侧录像图标按钮开始录制,再点一下同一位置的按钮停止录制.
录制过程中点击截图的图标按钮可以对视频截图,录制完成后点击下载按钮下载录完的视频.

注意录制的格式只能是`webm`

## 使用范围

本项目只在`mac osx`下用`chrome 72.0.3626.119`测试打开过,其他浏览器情况未知.