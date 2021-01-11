// pages/account/account.js
import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#FFDB5C", "#FF9F7F"],
    legend: {
      orient:"vertical",
      bottom:"center",
      right:'30px',
      position: 'right',
      verticalAlign: 'center',
      custom: true,
      itemMarginBottom: 10,
      selectedMode:false,
      nameStyle: {
        fill: '#808080',
        fontSize: '14',
        width: 80,
      }, // 图例项 key 值文本样式
    },
    series: [{
      label: {
        show: false,
        position: "left"
      },
      type: 'pie',
      center: ['25%', '50%'],
      radius: ['40%', '60%'],
      data: [{
        value: 55,
        name: '冻结税金：402.4'
      }, {
        value: 38,
        name: '可提现：1597.6'
      }],
      labelLine: {
        show: false
      }
    }]
  };

  chart.setOption(option);
  return chart;
}
Page({
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {}
});