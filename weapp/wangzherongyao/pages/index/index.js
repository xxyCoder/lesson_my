// index.js
// 获取应用实例
const app = getApp()

Page({
    // 页面数据，通过{{}} 驱动模板显示
    data: {
        nav: [],
        heroList: []
    },
    // 生命周期事件
    onLoad() {
        // 从客户端 去到 服务器端获取数据
        // 微信wx request
        wx.request({
            url: 'https://www.fastmock.site/mock/3ddf189404196ed14cb6531bf3596081/vue/hero',
            // 成功请求后
            success: function(res) {
                // 解析res数据
                let nav = res.data.nav;
                let list = res.data.heroList;
            },
            // 失败后回调
            fail:() => {
                console.log("error");
            }
        })
    }
})