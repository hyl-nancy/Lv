define(['jquery','cookie'], () => {
  class Header {
    constructor() {
      this.load().then(() => {
        this.cartfly()
        this.isCookie()
        this.logout()
      })
    }
    load() {
      return new Promise(resolve => {
        $('header').load('/html/modules/header.html', resolve)
      })
    }
    cartfly() {
      let cart = localStorage.getItem('cart');
      let num = 0;
      if (cart) {
        cart = JSON.parse(cart);
        num = cart.reduce((res, shop) => {
          res += shop.num
          return res
        }, 0)
        console.log(num)
      }
      $('#header-cart-num').html(num)

    }
    isCookie() {
      console.log(34)
      let userinfo = $.cookie('login')
      if (userinfo) {
        //有信息表示已登录
        userinfo = JSON.parse($.cookie('login'))
        $('.login-register').css({ 'display': 'none' })
        $('.nav-3').css({ 'display': 'block' })
        $('#user').html(userinfo.username)
      }
    }
    logout() {
      $('#logout').on('click', () => {
        if (confirm('确定退出吗？')) {
          $.removeCookie('login', { path: '/' })
          $('.login-register').css({ 'display': 'flex' })
          $('.nav-3').css({ 'display': 'none' })
        }
      })
    }
  }
  return new Header()
});