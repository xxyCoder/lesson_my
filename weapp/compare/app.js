App({
    onLaunch: function(options) {
        // 生命周期回调-监听小程序初始化
        // 小程序初始化完成时触发
        console.log('onLaunch执行');
        console.log(options);
    },
    // 生命周期回调-监听小程序显示
    // 小程序启动，或从后台进入前台时触发
    onShow: function(options) {
        console.log('onShow显示');
        console.log(options);
    },
    // 生命周期回调-监听小程序隐藏
    // 小程序从前台进入后台触发
    onHide: function() {
        console.log("onHide执行");
    },
    // 错误监听函数
    // 小程序发生脚本错误，或者API调用失败时触发
    onError: function(error) {
        console.log("error执行");
        console.log(error);
    },
    // 页面不存在监听
    // 小程序要打开的页面不存在时触发
    onPageNotFound: function(options) {
        console.log("页面不存在");
    },
    num: 123,
    test: function() {
        console.log("test");
    }
})