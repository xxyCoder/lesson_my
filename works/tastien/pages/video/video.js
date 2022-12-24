// 内置方法,获取应用实例
const app = getApp();
// pages/video/video.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        stories: [],
        currentVid: null,
        currentVideo: null
    },
    play(event) {
        let vid = event.target.dataset.vid;
        const currentVideo = wx.createVideoContext(`video-${vid}`);
        currentVideo.play();
        this.setData({
            currentVid: vid,
            currentVideo: currentVideo
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // console.log(app.globalData.stories);
        this.setData({
            stories: app.globalData.stories
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})