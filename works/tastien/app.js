// app.js
App({
    onLaunch() {
        wx.request({
            url: 'https://resources.ninghao.net/wxapp-case/db.json',
            success: (response) => {
                const {slides,stories,vehicles} = response.data;
                // console.log(slides,stories,vehicles);
                this.globalData.slides = slides;
                this.globalData.stories = stories;
                this.globalData.vehicles = vehicles;
            }
        })
    },
    globalData: {
        slides: null,
        stories: null,
        vehicles: null
    }
})