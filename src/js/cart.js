require(['./config'],() => {
  require(['template','header','footer'], (template) => {
    class Cart {
      constructor(){
        this.render()
      }
      render(){
        //从localstorage里取出数据，渲染页面
        let cart = localStorage.getItem('cart')
        if(cart){
          cart = JSON.parse(cart)
          $('#add-to-cart').html(template('addToCart',{cart}))
          this.checksChange ()
          this.calcTotalPrice()
          this.numChange()
          this.allCheck()
          this.remove()
        }else{
          //显示购物车为空的操作
        }
      }
      checksChange () {
        let $checks = $('.goods-info-important .check')
        $checks.on('change', () => {
          this.calcTotalPrice()
        })
      }

      numChange () {
        $('.goods-info-important').on('click', e => {
          if (e.target.className === 'reduce-num') {
            // 数量减
            var num, price;
            const id = $(e.target).parents('.goods-info-important').attr('data-id')
            console.log(id)
            let cart = JSON.parse(localStorage.getItem('cart'))
            cart = cart.map(detail => {
              if (detail.id === id) { 
                detail.num--
                num = detail.num
                price = detail.num * detail.price
              }
              return detail
            })
            localStorage.setItem('cart', JSON.stringify(cart))
            // 把页面显示做修改
            $(e.target).parents('.goods-info-important').find('.cart-num').val(num)
            $(e.target).parents('.goods-info-important').find('.product-cost').html(price.toFixed(0))
            this.calcTotalPrice()
          } else if (e.target.className === 'increase-num') {
            var num, price;
            // 数量加
            // 先取到这条数据的id
            const id = $(e.target).parents('.goods-info-important').attr('data-id')
            let cart = JSON.parse(localStorage.getItem('cart'))
            cart = cart.map(detail => {//
              if (detail.id === id) { 
                detail.num++
                num = detail.num
                price = detail.num * detail.price
              }
              return detail
            })
            localStorage.setItem('cart', JSON.stringify(cart))
            // 把页面显示做修改
            $(e.target).parents('.goods-info-important').find('.cart-num').val(num)
            $(e.target).parents('.goods-info-important').find('.product-cost').html(price.toFixed(0))
            this.calcTotalPrice()
          }
        })
      } 

      calcTotalPrice(){
        this.totalPrice = 0
        let $checks =$('.goods-info-important .check')
        $checks.each((index,check) => {
          if($(check).prop('checked')){
            console.log($(check).parents('.goods-info-important').find('.product-cost').html())
            this.totalPrice += Number($(check).parents('.goods-info-important').find('.product-cost').html())
          }
        })
        $('.cart-allPrice').html(this.totalPrice.toFixed(0))
      }  
      
      allCheck() {//全选按钮控制
        $('.calc').on('click', e => {
          console.log($('.calc'))
            if (e.target.className === 'allCheck') {
                let $checks = $('.goods-info-important .check')
                let $allChecks = $('.calc .all-Check .allCheck')
                // console.log($allChecks)
                if ($allChecks.prop('checked')) {
                    $checks.each((index, check) => {
                        // console.log($checks)
                        $(check).prop('checked', true)
                        this.calcTotalPrice()
                    })
                }
                else if ($allChecks.prop('checked', false)) {
                    $checks.each((index, check) => {
                        // console.log($checks)
                        $(check).prop('checked', false)
                        this.calcTotalPrice()
                    })
                }
            }
        })
    }
    remove() {//删除单个商品
        $('.goods-info-important').on('click', e => {
            if (e.target.className === 'remove-goods') {
                if(confirm('您确定删除当前物品吗？')){
                    const id = $(e.target).parents('.goods-info-important').attr('data-id')
                    let cart = JSON.parse(localStorage.getItem('cart'))
                    cart = cart.filter(item => {
                        if (item.id != id) {
                            return item
                        }
                    })
                localStorage.setItem('cart', JSON.stringify(cart))
                $(e.target).parents('.goods-info-important').remove()
                this.calcTotalPrice()
                }
            }  
        })
      }
    }
    new Cart()
  })
})



