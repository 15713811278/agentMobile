//app.js
'use strict';
const config = require('./utils/config.js');
const requestUrl = config.requestUrl;
App({
  onLaunch: function (options) {

    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     console.log(res)
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  // globalData: {
  //   userInfo: null
  // },
  onShow() {
    const param = wx.getLaunchOptionsSync();
  },
  // 加密算法 R4
  // 传入字符串 秘钥：默认powerpms
  RC4(data, secretKey) {
    var key = secretKey || "powerpms";
    var seq = Array(256); //int
    var das = Array(data.length); //code of data
    for (var i = 0; i < 256; i++) {
      seq[i] = i;
    }

    var j = 0;
    for (var i = 0; i < 256; i++) {
      var temp = seq[i];

      j = (j + seq[i] + key.charCodeAt(i % key.length)) % 256;
      seq[i] = seq[j];
      seq[j] = temp;
    }

    var i = 0
    for (; i < data.length; i++) {
      das[i] = data.charCodeAt(i);
    }

    for (var x = 0; x < das.length; x++) {
      i = (i + 1) % 256;
      j = (j + seq[i]) % 256;
      var temp = seq[i];

      seq[i] = seq[j];
      seq[j] = temp;

      var k = (seq[i] + seq[j]) % 256;
      das[x] = String.fromCharCode(das[x] ^ seq[k]);
    }
    return das.join('');
  },
  // 请求
  request(url, method, option) {
    const _this = this;
    wx.showLoading({
      title: '加载中...',
    });
    const promise = new Promise(function (resolve) {
      wx.request({
        url: requestUrl + url,
        method: method,
        data: {
          ...option,
        },
        success(res) {
          if (!res.code || res.code !== 200) {
            wx.hideLoading();
            wx.showModal({
              title: '提示',
              content: res.data.msg,
            });
            return;
          }
          wx.hideLoading();
          resolve(res.data);
        },
        fail(e) {
          wx.hideLoading();
          wx.showModal({
            title: '请求失败',
            content: JSON.stringify(e),
          });
        },
        complete() {

        },
      });
    });
    return promise;
  },

})