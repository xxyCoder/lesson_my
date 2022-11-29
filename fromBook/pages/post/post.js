var dataObj = require("../../data/data.js");

Page({
    data: {
        // object: {
        //     date:"Jan 28 2020"
        // },
        // title:"汽车",
        // postImg:"https://p3.dcarimg.com/img/motor-img/e1acc27d3434f67503bde03ba01408fa~332x0.webp",

        // readingNum:108,
        // collectionNum:92,
        // commentNum:{
        //     array:[97]
        // }
    },
    onLoad: function (options) {
        console.log("OnLoad页面被加载");
        this.setData({
            title: "一辆汽车的发展史",
            "commentNum.array[0]": 100,
            "object.date": "Jan 29 2020",
            // content:"看车就上懂车帝"
            postList: dataObj.postList
        })
    },
    onShow: function () {
        console.log("onShow页面被显示");
    },
    onReady: function () {
        console.log("onReady页面被渲染");
    },
    onHide: function () {
        console.log("onHide页面被隐藏");
    },
    onUnload: function () {
        console.log("onLoad页面被卸载");
    }
})
module.exports = {
    postList:postList
}