//index.js
//获取应用实例
// const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  toUser() {
    wx.navigateTo({
      url: '../../pages/userInfo/userInfo',
    })
  },
  toCustomer() {
    wx.navigateTo({
      url: '../../pages/customer/customer',
    })
  },
  toAccount() {
    wx.navigateTo({
      url: '../../pages/account/account',
    })
  },
  toMoncome(){
    wx.navigateTo({
      url: '../../pages/moncome/moncome',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})