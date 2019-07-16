Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '',
    nickName: '',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
  about: function () {
    wx.navigateTo({
      url: '../../pages/about/about',
    })
  }
})