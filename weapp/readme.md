# 小程序
## 知识点
1. 开发一个page
        /pages
2. page结构
    - wxml 结构
    - wxss 样式
        vw 适配所有手机
        vh 
        居中
        page 相对定位 relative
        container absolute
                    top:50%
                    left:50%
                    transform: translate(-50%,-50%);
    - js 逻辑
        Page({
            data: { //绑定数据
                title: '奔驰',
                car : 'https://p3.dcarimg.com/img/mosaic-legacy/bef0000143dc274e82cf~216x0.webp'
            }
        }