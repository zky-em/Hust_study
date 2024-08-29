// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query:{},
    shopList:[
    ],
    page:1, 
    pageSize:10,
    total:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      query:options
    })
    this.getShopList()
  },

  getShopList(){
    switch(this.data.query.title){
      case "早餐":
        this.setData({
          shopList:[
            {id:1, name:"好东西", price:66, image:"/assert/食品_布丁.png"},
            {id:2, name:"好吃的", price:2.5, image:"/assert/食品_杏仁.png"},
            {id:3, name:"好喝的", price:6, image:"/assert/食品_鸡腿.png"},
          ]
        });
        break;
      case "正餐":
        this.setData({
          shopList:[
            {id:1, name:"好个头", price:3, image:"/assert/食品_杏仁.png"},
            {id:2, name:"好厉害", price:3, image:"/assert/食品_鸡腿.png"},
            {id:3, name:"好喝的", price:3, image:"/assert/食品_布丁.png"},
          ]
        });
        break;
      case "面食":
        this.setData({
          shopList:[
            {id:1, name:"可以涂", price:3, image:"/assert/食品_鸡腿.png"},
            {id:2, name:"路域看", price:3, image:"/assert/食品_杏仁.png"},
            {id:3, name:"好个头", price:3, image:"/assert/食品_布丁.png"},
          ]
        });
        break;
      case "西餐":
        this.setData({
          shopList:[
            {id:1, name:"好东西", price:3, image:"/assert/食品_杏仁.png"},
            {id:2, name:"好离谱", price:3, image:"/assert/食品_布丁.png"},
            {id:3, name:"好喝的", price:3, image:"/assert/食品_鸡腿.png"},
          ]
        });
        break;
      case "火锅":
        this.setData({
          shopList:[
            {id:1, name:"好东西", price:3, image:"/assert/食品_布丁.png"},
            {id:2, name:"好吃的", price:3, image:"/assert/食品_鸡腿.png"},
            {id:3, name:"太好了", price:3, image:"/assert/食品_杏仁.png"},
          ]
        });
        break;
      case "快餐":
        this.setData({
          shopList:[
            {id:1, name:"好东西", price:3, image:"/assert/食品_鸡腿.png"},
            {id:2, name:"好喝的", price:3, image:"/assert/食品_杏仁.png"},
            {id:3, name:"好好好", price:3, image:"/assert/食品_布丁.png"},
          ]
        });
        break;
      case "烧烤":
        this.setData({
          shopList:[
            {id:1, name:"好个头", price:3, image:"/assert/食品_杏仁.png"},
            {id:2, name:"太好了", price:3, image:"/assert/食品_布丁.png"},
            {id:3, name:"好吃的", price:3, image:"/assert/食品_鸡腿.png"},
          ]
        });
        break;
      case "饮品":
        this.setData({
          shopList:[
            {id:1, name:"好东西", price:3, image:"/assert/食品_杏仁.png"},
            {id:2, name:"好吃的", price:3, image:"/assert/食品_鸡腿.png"},
            {id:3, name:"好个头", price:3, image:"/assert/食品_布丁.png"},
          ]
        });
        break;
      case "水果":
        this.setData({
          shopList:[
            {id:1, name:"好厉害", price:3, image:"/assert/食品_杏仁.png"},
            {id:2, name:"好离谱", price:3, image:"/assert/食品_布丁.png"},
            {id:3, name:"好吃的", price:3, image:"/assert/食品_鸡腿.png"},
          ]
        });
        break;
      case "西一":
        this.setData({
          shopList:[
            {id:1, name:"好东西", price:3, image:"/assert/食品_杏仁.png"},
            {id:2, name:"好喝的", price:3, image:"/assert/食品_布丁.png"},
            {id:3, name:"好吃的", price:3, image:"/assert/食品_鸡腿.png"},
          ]
        });
        break;
      case "西二":
        this.setData({
          shopList:[
            {id:1, name:"好东西", price:3, image:"/assert/食品_杏仁.png"},
            {id:2, name:"好牛马", price:3, image:"/assert/食品_布丁.png"},
            {id:3, name:"好吃的", price:3, image:"/assert/食品_鸡腿.png"},
          ]
        });
        break;
      case "百惠园":
        this.setData({
          shopList:[
            {id:1, name:"好东西", price:3, image:"/assert/食品_布丁.png"},
            {id:2, name:"好个头", price:3, image:"/assert/食品_杏仁.png"},
            {id:3, name:"好好好", price:3, image:"/assert/食品_鸡腿.png"},
          ]
        });
        break;
      case "百景园":
        this.setData({
          shopList:[
            {id:1, name:"好东西", price:3, image:"/assert/食品_杏仁.png"},
            {id:2, name:"太好了", price:3, image:"/assert/食品_布丁.png"},
            {id:3, name:"好喝的", price:3, image:"/assert/食品_鸡腿.png"},
          ]
        });
        break;
      case "西华园":
        this.setData({
          shopList:[
            {id:1, name:"好东西", price:3, image:"/assert/食品_杏仁.png"},
            {id:2, name:"好好好", price:3, image:"/assert/食品_鸡腿.png"},
            {id:3, name:"好牛马", price:3, image:"/assert/食品_布丁.png"},
          ]
        });
        break;
      case "学一":
        this.setData({
          shopList:[
            {id:1, name:"好东西", price:3, image:"/assert/食品_鸡腿.png"},
            {id:2, name:"好厉害", price:3, image:"/assert/食品_布丁.png"},
            {id:3, name:"好离谱", price:3, image:"/assert/食品_杏仁.png"},
          ]
        });
        break;
      case "学二":
        this.setData({
          shopList:[
            {id:1, name:"好东西", price:3, image:"/assert/食品_布丁.png"},
            {id:2, name:"好牛马", price:3, image:"/assert/食品_鸡腿.png"},
            {id:3, name:"好好好", price:3, image:"/assert/食品_杏仁.png"},
          ]
        });
        break;
      case "东一":
        this.setData({
          shopList:[
            {id:1, name:"好东西", price:3, image:"/assert/食品_布丁.png"},
            {id:2, name:"好喝的", price:3, image:"/assert/食品_杏仁.png"},
            {id:3, name:"好牛马", price:3, image:"/assert/食品_鸡腿.png"},
          ]
        });
        break;
      case "东华园":
        this.setData({
          shopList:[
            {id:1, name:"好东西", price:3, image:"/assert/食品_布丁.png"},
            {id:2, name:"好个头", price:3, image:"/assert/食品_杏仁.png"},
            {id:3, name:"好好好", price:3, image:"/assert/食品_鸡腿.png"},
          ]
        });
        break;
      case "东园":
        this.setData({
          shopList:[
            {id:1, name:"好东西", price:3, image:"/assert/食品_布丁.png"},
            {id:2, name:"好牛马", price:3, image:"/assert/食品_鸡腿.png"},
            {id:3, name:"好厉害", price:3, image:"/assert/食品_杏仁.png"},
          ]
        });
        break;
      case "集锦园":
        this.setData({
          shopList:[
            {id:1, name:"好东西", price:3, image:"/assert/食品_布丁.png"},
            {id:2, name:"好好好", price:3, image:"/assert/食品_鸡腿.png"},
            {id:3, name:"好个头", price:3, image:"/assert/食品_杏仁.png"},
          ]
        });
        break;
      case "韵酒":
        this.setData({
          shopList:[
            {id:1, name:"好好好", price:3, image:"/assert/食品_布丁.png"},
            {id:2, name:"好厉害", price:3, image:"/assert/食品_杏仁.png"},
            {id:3, name:"好离谱", price:3, image:"/assert/食品_鸡腿.png"},
          ]
        });
        break;
    }
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.query.title 
    })
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