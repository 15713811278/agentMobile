//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    onOff: true, //true代表未登录  false代表登录
    userInfo:{}
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
  toMoncome() {
    wx.navigateTo({
      url: '../../pages/moncome/moncome',
    })
  },
  getData() {
    wx.request({
      url: 'https://pay.powerpms.com/api/agent/wx/user/briefInfo',
      method: "get",
      success: (res) => {
        console.log(res)
      }
    })
  },
  //登录授权
  login(e) {
    console.log(e)
    if (e.detail.errMsg == "getUserInfo:fail auth deny") {
      //拒绝授权  
      wx.showToast({
        title: '未登录',
        icon: "none"
      })
      return false
    }
    //同意授权
    this.setData({
      userInfo:e.detail.userInfo,
      onOff:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
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
    let _this = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          //证明已经授权
          wx.getUserInfo({
            complete: (res) => {
              console.log(res, '授权了获取用户信息')
              _this.setData({
                onOff: false,
                userInfo:res.userInfo
              })
            }
          })
        } else {
          //没有授权
          wx.showToast({
            title: '未登录',
            icon: "none"
          })
        }
      }
    })
  },

})