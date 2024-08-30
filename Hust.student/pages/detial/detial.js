// pages/detial/detial.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:0,
    product: {
      id: 1,
      name: "好东西",
      price: 66,
      image: "/assert/食品_布丁.png" 
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // this.setData({
    //   product:options
    // })
  },

  getNumber: function(e) {
    var x = e.currentTarget.dataset.x; // 从事件对象中获取 data-x 的值
    if (x == 1) {
      this.setData({
        number: this.data.number + 1
      });
    } else if (x == 0) {
      this.setData({
        number: this.data.number - 1
      });
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})