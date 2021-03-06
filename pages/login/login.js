// pages/login/login.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: ""
  },
  goPersonal() {
    wx.navigateTo({
      url: '/pages/personal/personal',
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

  },
  bindKeyInput(e) {
    const key = e.target.dataset.name
    this.setData({
      [key]: e.detail.value
    })
  },
  login() {
    const username = encodeURIComponent(app.RC4(this.data.username))
    const password = encodeURIComponent(app.RC4(this.data.password))
    // var params = {
    //   username,
    //   password
    // }
    app.request("/api/agent/wx/user/login", "POST", {username,password}).then(function (data) {
    })
  }
})