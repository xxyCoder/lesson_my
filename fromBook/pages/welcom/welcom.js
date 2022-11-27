Page({
    onTapJump:function(event) {
        wx.navigateTo({
          url: '../post/post',
          success:function(){
              console.log('jump success');
          },
          fail:function(){
            console.log('jump fail');
          },
          complete:function() {
              console.log('jump complete');
          }
        })
    },
    onUnload:function(){
        console.log('welcome页面被卸载');
    },
    onHide:function(){
        console.log('welcome页面被隐藏');
    }
})