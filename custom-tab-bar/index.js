
'use strict';
/* eslint-disable no-undef */

const app = getApp();
Component({
  data: {
    active: null,
    list: [
      {
        url: '/pages/product/product',
      },
      {
        url: '/pages/personal/personal',
      },
    ],
  },

  methods: {
    onChange(e) {
      this.setData({ active: e.detail });
      if(e.detail === 1) {
        wx.navigateTo({
          url: '/pages/goLogin/goLogin',
        });
        return
      }
     
      wx.switchTab({
        url: this.data.list[e.detail].url,
      });
    },
    init() {
      const page = getCurrentPages().pop();
      this.setData({
        active: this.data.list.findIndex(item => item.url === `/${page.route}`),
      });
    },
  },
});
