- 内置组件
1. swiper>swiper-item
- wxml里 {{}} 绑定数据
    wx:for 循环，wx:key 唯一值，每次遍历时名字为item
- app.wxss 全局样式
- 模块化
- 绑定事件 bind ，移动端tap事件
    事件处理函数在 Page({})中声明即可
- wx.navigateTo({
    url: ''
})
- wx 是命名空间