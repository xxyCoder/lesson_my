// index.js
// 获取应用实例
const app = getApp()

Page({
    data: {
        map: null
    },
    // 事件处理函数
    bindViewTap() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    toReset() {
        this.data.map.moveToLocation();
    },
    onLoad() {
        wx.showLoading({
            title: '加载中....',
        })
        wx.getLocation({
            type: 'gcj02',
            success: (res) => {
                wx.hideLoading();
                // es6 解构 数组 json
                let {
                    latitude,
                    longitude
                } = res;
                this.setData({
                    longitude: longitude,
                    latitude: latitude
                })
                this.tocreate(res);
            }
        })
    },
    tocreate() {
        let ran = Math.ceil(Math.random() * 20 + 5);
        let makers = [];
        for(let i = 0;i < ran;++ i){
            let maker = {
                id: i,
                iconPath: "../../images/map-bicycle.png",
                "callout":{
                    content:"有车",
                    display:'ALWAYS'
                },    
                latitude: this.data.latitude + Math.random() / 1000,
                longitude: this.data.longitude +  Math.random() / 1000,
                width: 52,
                height: 30
            }
            makers.push(maker);
        }
        this.setData({
            makers:makers
        })
    },
    onShow() {
        this.data.map = wx.createMapContext('myMap');
    }
    ,
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