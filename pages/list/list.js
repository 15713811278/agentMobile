// pages/list/list.js
let allImg = [
  "../../pic/jiandao.png",
  "../../pic/shitou.png",
  "../../pic/bu.png",
]
let timer;
let kg = true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picImg: "../../pic/jiandao.png",
    myImg: "../../pic/wenhao.png",
    allImg,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.pcChuquan()

  },
  pcChuquan() {
    timer = setInterval(() => {
      let picIndex = Math.floor(Math.random() * 3)
      this.setData({
        picImg: allImg[picIndex],
        picIndex
      })
    }, 100);
  },
  mychuquan(e) {
    if (!kg) {
      return false;
    }
    let myIndex = e.target.dataset.index;
    clearInterval(timer)
    this.setData({
      myImg: allImg[myIndex]
    })
    kg = false;
    let picIndex = this.data.picIndex;
    if (picIndex == myIndex) {
      console.log('平局')
    }
  },
  aglin() {
    this.pcChuquan();
    this.setData({
      myImg: "../../pic/wenhao.png"
    })
    kg = true;
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