define(['jquery'], () => {
  class Header {
    constructor() {
      this.load().then(() => {
        this.cartfly()
      })
    }
    load() {
      return new Promise(resolve => {
        $('header').load('/html/modules/header.html',resolve)
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
  }
  return new Header()
});