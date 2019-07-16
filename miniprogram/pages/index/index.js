Page({
  data: {
    imgs: [
      "/images/qc1.jpg",
      "/images/qc6.jpg",
      "/images/qc3.jpg"
    ],
    array: [{
      mode: 'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }],
    src: '/images/cat.jpg',
    qicheng: [
        "/images/qc2.jpg"
    ],
    qicheng2: [
      "/images/qc5.jpg"
    ],
    // nav
    navs1: [{
      image: "/images/qc6.jpg",
      text: '十斤超大橙',
      price: '68'
    }, {
        image: "/images/qc6.jpg",
        text: '二十斤超大橙',
        price: '128'

    }],
    navs2: [{
      image: "/images/qc2.jpg",
      text: '十斤精品橙',
      price: '78'
    }, {
      image: "/images/qc2.jpg",
      text: '二十斤精品橙',
      price: '148'

    }]
  },
 
  goDetail: function (event) {
    var result = event.currentTarget.dataset.type.split(",");   
     wx.navigateTo({
       url: '../detail/detail_qc?title=' + result[0] + '&price=' + result[1] + '&imagepath='+result[2],
      success: function (res) {
        console.log('跳转到news页面成功') // success
      },
      fail: function () {
        console.log('跳转到news页面失败') // fail 
      },
      complete: function () {
        console.log('跳转到news页面完成') // complete
      }
    })
  },


  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },

  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})