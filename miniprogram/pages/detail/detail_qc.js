//var json = require('../../data/Home_data.js')

Page({
  data: {
    imagepath: '/image/goods1.png',
    title: '正宗赣南脐橙',
    price: 0.01
  },
  goPay: function (event) {
    var result = event.currentTarget.dataset.type.split(",");   
    wx.navigateTo({
      url: '../pay/pay?title=' + result[0] + '&price=' + result[1] + '&imagepath=' + result[2],
    })
  },
  boxtwo: function (e) {
    var index = parseInt(e.currentTarget.dataset.index)
    this.setData({
      HomeIndex: index
    })
  },
  addcart: function (e) {
    var cartItems = wx.getStorageSync("cartItems") || []
    var exist = cartItems.find(function (el) {
      return el.id == e.target.dataset.id
    })

    //如果购物车里面有该商品那么他的数量每次加一
    if (exist) {
      exist.value = parseInt(exist.value) + 1
    } else {
      cartItems.push({
        id: e.target.dataset.id,
        title: e.target.dataset.title,
        image: e.target.dataset.image,
        price: e.target.dataset.price,
        value: 1,
        selected: true
      })
    }
    wx.showToast({
      title: "加入成功！",
      duration: 1000
    })

    //更新缓存数据
    wx.setStorageSync("cartItems", cartItems)

  },

  onLoad: function (options) {
    this.setData({
      title: options.title,
      price: options.price,
      imagepath: options.imagepath
    })
  } 

})