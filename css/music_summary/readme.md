# HTML5作品
- HTML5标签
    audio
    video
- background-size
    1. 在移动端rem 宽和高是多变的，而PC端没有该问题
    2. 移动端 retina 3倍
    3. background-size 背景图片大小
        - cover 等比例缩放图片，填满容器，超出则剪裁
        - contain 等比缩放图片，尽量填满，会有空着的部分
- 库文件引入位置
    1. CSS放在head里，CSS应该尽早参与网页的渲染
    2. JS放在body最下面，因为JS会阻塞页面渲染
- swiper 滑动组件库的使用
    1. 引入swiper组件库
        有JS CSS
    2. 固定的HTML结构
        .swiper-container（滑动区域大小）>.swiper-wrapper>.swiper-slide
    3. new Swiper(selector,{
        direction: '垂直或水平'
    })
- translate3d(-50%,0,0) translate(-50%,0)效果一样
    但是前者启动3D加速器，GPU渲染

- linear-gradient 生成背景图片
    1. 颜色渐变的图片
    2. 性能优化，图片下载较慢
    3. 图片下载越多，http并发越多就越慢