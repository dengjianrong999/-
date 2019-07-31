// pages/introduction/introduction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/banner2@2x.png',
      '../../images/banner3@2x.png',
    ],

    limeTime: [{
        id:1,
        time: '2003年-2008年',
        text: '国内最早涉足排污收费管理信息系统、12369环保热线开发的信息化公司',
      },
      {
        id: 2,
        time: '2009年-2010年',
        text: '重新组建研发和营销体系，积极开发新产品，储备各类相关技术，构建完善的数字环保产品',
      },
      {
        id: 3,
        time: '2011年-2013年',
        text: '广东省内首家研发推出机动车排气污染监督管理系统、环境监察移动执法系统',
      },
      {
        id: 4,
        time: '2014年-2015年',
        text: '在广州市开展环境监察移动执法和突发环境应急指挥系统推广，重点实施安康市南水北调环境应急指挥处置中心项目',
      },
      {
        id: 5,
        time: '2016年-2017年',
        text: '专注于“智慧环保”行业软件开发解决方案，开展新交付模式探索、新产品研发模式探索（污染源监管大数据应用信息化建设、水务应用）',
      },
      {
        id: 6,
        time: '未来',
        text: '紧紧围绕“智慧环水”和“智慧物联网”两大领域不断创新，聚焦研发方向，全力拓展市场',
      },
    ],
    // indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  backTo() {
    wx.navigateTo({
      url: '../index/index'
    })
  }
})