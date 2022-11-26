# 阿里巴巴双11案例
- rem 单位
    1. 为了兼容，少用px
    2. 先给html标签设置font-size
    3. 等比例 1/10 布局 做栅格布局，如何在不同设备上让1rem = 设备宽度 / 10
    4. html 的 font-size 需动态设置
        window.innerWidth 拿到设备宽度
        document.documentElement.style.fontSize = window.innerWidth / 10 + 'px';