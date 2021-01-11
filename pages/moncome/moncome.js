// pages/moncome/moncome.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentDate: new Date().getTime(),
    minDate: new Date('2018-01').getTime(),
    date: '筛选',
    show:false,
    option1: [{
        text: '项目',
        value: 0
      }, {
        text: 'PowerPIP',
        value: 1
      },
      {
        text: 'PowerON',
        value: 2
      },
      {
        text: 'PowerEDU',
        value: 3
      },
    ],
    value1: 0,
  },
  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
  },
  onConfirm(event) {
    console.log(event)
    this.setData({
      date: event.detail,
      show:false
    });
  },
  onCancel(event) {
    this.setData({
      show: false,
    });
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  onSwitch1Change({
    detail
  }) {
    this.setData({
      switch1: detail
    });
  },

  onSwitch2Change({
    detail
  }) {
    this.setData({
      switch2: detail
    });
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
  itemOpen(e){
    console.log(e)
    this.setData({
      show:true
    })
  }
})