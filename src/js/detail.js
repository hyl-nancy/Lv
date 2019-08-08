require(['./config'], () => {
  require(['template', 'header', 'footer','magnifier','fly'], (template,header) => {
    class Detail {
      constructor() {
        this.getData().then(() => {
          this.zoom()
          this.addToCart()
        })
      }
      getData() {
        const id = location.search.slice(4)
        return new Promise((resolve => {
          $.get('http://rap2api.taobao.org/app/mock/226928/detailurl', { id }, resp => {
            console.log(resp, 'resp')
            if (resp.code === 200) {
              let detail = resp.body
              this.detail = { ...detail, id }
              $('#detail-goods').html(template('detail-template', { detail: this.detail }))
              resolve()
            }
          })
        }))
      }
      zoom() {
        var magnifierConfig = {
          magnifier : "#magnifier1",
          width : 500,
          height : 500,
          moveWidth : null,
          zoom : 5
        };
        var _magnifier = magnifier(magnifierConfig);
      }
      addToCart() {
        $('#add-cart').on('click', (e) => {
          let cart = localStorage.getItem('cart')
          if (cart) {
            cart = JSON.parse(cart)
            console.log({cart, detail: this.detail})
            const isExist = cart.some(item => {
              return item.id === this.detail.id
            })
            if (isExist) {
              cart = cart.map(item => {
                if (item.id === this.detail.id) item.num++
                return item
              })
            } else {
              cart.push({ ...this.detail, num: 1 })
            }
            localStorage.setItem('cart', JSON.stringify(cart))
          } else {
            var arr = []
            arr.push({...this.detail, num: 1})
            localStorage.setItem('cart', JSON.stringify(arr))
          }
          $(`<img src="${this.detail.imgs[0]}" style="width:50px;height:50px;border-radius:50%;" />`).fly({
            start: {
                left: e.pageX - $(window).scrollLeft(),  //开始位置（必填）#fly元素会被设置成position: fixed
                top: e.pageY - $(window).scrollTop(),  //开始位置（必填）
            },
            end: {
                left: $('#fly-cart').offset().left - $(window).scrollLeft(), //结束位置（必填）
                top: $('#fly-cart').offset().top - $(window).scrollTop(),  //结束位置（必填）
                width: 0, //结束时高度
                height: 0, //结束时高度
            },
            speed: 1.2, //越大越快，默认1.2
            onEnd: function () {
                this.destroy(); //移除dom
                header.cartfly()
            } //结束回调
            
        });
        //   $('#fly').play(); //autoPlay: false后，手动调用运动
        })
      }
    }
    new Detail()
  })
})