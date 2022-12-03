// index.js
// 获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
        result:''
    },
    num1: 0,
    num2: 0,
    // 事件处理函数
    bindViewTap() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    change: function(e) {
        this[e.currentTarget.id] = Number(e.detail.value); // 获取用户输入的值
    },
    compare: function(e) {
        // console.log(e);
        var str = "两数相等";
        if(this.num1 > this.num2) {
            str = "第一个数大";
        }
        else if(this.num1 < this.num2) {
            str = "第二个数大";
        }
        this.setData({
            result: str
        })
    },
    formCompare: function(e) {
        var str = "两数相等";
        var num1 = Number(e.detail.value.num1);
        var num2 = Number(e.detail.value.num2);
        if(num1 > num2) {
            str = "第一个数大";
        }
        else if(num2 > num1) {
            str = "第二个数大";
        }
        this.setData({
            result:str
        })
    },
    onPullDownRefresh() {
        console.log('用户下拉触顶');
    },
    onReachBottom() {
        console.log('用户上拉触底');
    },
    onPageScroll(options) {
        console.log('用户正在滚动页面');
        console.log('滚动距离:' + options.scrollTop);
    },
    onLoad() {
        if (wx.getUserProfile) {
            this.setData({
                canIUseGetUserProfile: true
            })
        }
        console.log(app.num);
        console.log(app.test());
    },
    onReady() {
        // wx.navigateTo({
        //     url: '/pages/text/text?name1=value1&name2=value2',
        // })
    },
    getUserProfile(e) {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
            desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                console.log(res)
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        })
    },
    getUserInfo(e) {
        // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
        console.log(e)
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})