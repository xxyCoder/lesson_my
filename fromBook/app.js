// var dataObj = require("data/data.js");
App({
    onLaunch: function() {
        // wx.setStorage({
        //     key: 'postList',
        //     data: dataObj.postList,
        //     success: function() {

        //     },
        //     fail: function() {

        //     },
        //     complete: function() {
                
        //     }
        // })
        // wx.setStorageSync('postList', dataObj.postList);
        var storageData = wx.getStorageSync('postList');
        if(!storageData) {
            var dataObj = require("data/data.js");
            wx.clearStorageSync();
            wx.setStorageSync('postList', dataObj);
        }
    }
})
