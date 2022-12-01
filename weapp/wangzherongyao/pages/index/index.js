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
        wx.showLoading({
          title: '加载中....',
        })
        // 从客户端 去到 服务器端获取数据
        // 微信wx request
        wx.request({
            url: 'https://www.fastmock.site/mock/3ddf189404196ed14cb6531bf3596081/vue/hero',
            // 成功请求后
            success:(res) => {
                wx.hideLoading();
                // statusCode == 200 表示服务器端没有任何错误
                // if (res.statusCode === 200) {
                //     // 解析res数据
                //     let nav = res.data.nav;
                //     let list = res.data.heroList;
                // }
                if (res.errMsg == "request:ok") {
                    let data = res.data;
                    // es6 语法之解构，从data中拿出一个nav
                    let { nav,heroList } = data;
                    // 设置数据
                    // this 指向page对象
                    // 设置的同时，自动渲染模板
                    this.setData ({
                        nav: nav,
                        heroList: heroList
                    })
                }
            },
            // 失败后回调
            fail: () => {
                console.log("error");
            }
        })
    }
})