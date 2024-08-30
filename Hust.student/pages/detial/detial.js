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
    },
    sumprice:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      product:options
    });
    const app = getApp()
  },

  getNumber: function(e) {
    var x = e.currentTarget.dataset.x; // 从事件对象中获取 data-x 的值
    var newNumber = null; // 声明新的数量值
    var newPrice = 0; // 声明新的总价
  
    // 根据 x 的值来增加或减少 number
    if (x == 1) {
      newNumber = this.data.number + 1;
      newPrice = this.data.sumprice + this.data.product.price;
    } else if (x == 0) {
      newNumber = this.data.number - 1;
      newPrice = this.data.sumprice - this.data.product.price;
    }
  
    // 使用 setData 更新页面数据
    this.setData({
      number: newNumber,
      sumprice: newPrice // 更新页面的 sumprice
    });
  
    // 如果需要，更新 App 实例的全局数据
    const app = getApp();
    app.globalData.sumprice = newPrice; // 假设您在 globalData 中维护 sumprice
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