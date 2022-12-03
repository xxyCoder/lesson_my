# 小程序基础
## 页面组件
1. 小程序使用WXML(WeiXin Markup Language)来实现页面结构
    - view 用于定义视图容器，与HTML中的div作用类似
    - text 文本域
    - button 按钮
    - image 图片
    - form 表单
    - icon 图标文件
    - checkbox 复选框
    - radio 单选框
    - input 输入框
        type 属性值：
            text(默认) number idcard(身份证) digit(带小数点)
    - progress 进度条
2. page标签是最外层标签，是一个根节点，用户编写的所有结构代码都在根节点下面

## 页面样式
1. WXSS(WeiXin Style Sheets) 用于描述WXML的组件样式，具有CSS大部分特性，并在此基础上补充和修改
    - 选择器
        .class #id element element,element ::after ::before
    - 直接通过标签中style属性设置样式
2. 尺寸单位
    - 不同手机有不同的宽度和设备像素比，换算麻烦
    - 物理像素指屏幕上实际有多少个像素
    - 逻辑像素是指CSS中使用的像素单位
    - rpx (responsive pixel)响应式像素，rpx规定了任何手机屏幕宽度都为750rpx(逻辑像素)，由小程序内部负责将逻辑像素转换为当前手机中的物理像素
3. 样式导入
    - @import 语句导入外联样式表，在其后面写上需要导入样式的路径，用";"结尾
4. 全局样式
    根目录下的 app.wxss，当全局样式和页面样式发生冲突的时候，页面样式的优先级更高

## 配置文件
    小程序每一个页面都可以使用json文件对页面的效果进行配置
1. 页面级配置
    - navigationBarBackgroundColor 导航栏背景颜色
    - navigationBarTextStyle 导航栏标题颜色
    - navigationBarTitleText    导航栏标题文字
    - backgroundColor   窗口背景色
    - backgroundTextStyle   下拉loading颜色
    - enablePullDownRefresh 是否开启全局下拉刷新
    - onReachBottomDistance 页面上拉触底触发时候距底部距离
    - disableScroll 页面上下滚动
2. 应用级配置文件
    - pages 页面路径列表
    - window    全局的默认窗口配置
    - tabBar    底部tab栏的表现
    - networkTimeout    网络超时时间
        request connectSocket uploadFile downloadFile
    - debug 是否开启调式模式
    - requiredBackgroundModes   需要在后台使用的能力
    - plugins   使用的插件

## 页面逻辑
    js文件是用于编写页面逻辑的
1. Page() 函数用来注册一个页面，该函数是一个对象，通过该对象可以指定页面的初始数据、生命周期、事件处理函数等
    - data 对象，页面的初始数据
    - onLoad    监听页面加载,有一个options参数可以获取页面路径参数
    - onReady   监听页面初次渲染完成
    - onShow    监听页面显示
    - onHide    监听页面隐藏
    - onUnload  监听页面卸载
    - onPullDownRefresh 监听用户下拉动作，需要在配置文件中设置enablePullDownRefresh为true才有效
    - onReachBottom 页面上拉触底，需要在配置文件中将onReachBottomDistance设置为true才有效
    - onShareAppMessage 用户点击右上角分享按钮  
    - onPageScroll  页面连续滚动触发，开发者工具没有自动生成onPageScroll函数，需要手动添加并且要确保内容高度超显示区域，使页面出现滚动条
    对于生命周期函数的执行顺序
        onLoad -> onShow -> onReady
2. 组件事件处理函数
    - 函数有一个参数e，表示事件对象，通过它可以获得事件发生时的一些相关信息
    有type（事件类型）、timestamp（事件生成时的时间戳）、target（触发事件的组件的一些属性集合）、currentTarget（当前组件的一些属性值集合）、detail（额外的信息）
    target: 触发事件的源组件
    currentTarget: 事件绑定的当前组件
    - 小程序不是运行在浏览器环境，故不能使用DOM BOM
    - bind事件是不会阻止冒泡事件向上冒泡
    - catch可以阻止冒险事件往上冒泡
3. 组成程序
    - App() 函数用于注册小程序，接收一个对象参数，通过参数指定小程序的生命周期回调等，必须在app.js中调用，且只能调用一次
    - 可以利用App() 函数保存一些在所有页面中共享的数据
    - 在页面中获取App使用getApp()