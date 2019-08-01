require(['./config'],() => {
  require(['template','header','footer'], (template) => {
    class List {
      constructor(){
        //this.listGoods()
        this.getData()
      }
      // listGoods(){
      //   $.get('/libs/json/list-goods.json',resp =>{
      //     console.log(resp)
      //     console.log(template)
      //     let str = template('list-template',{list:resp})
      //     console.log(str)
      //     $('#main-goods').html(str)
      //   })
      // }
      getData(){
        $.get('http://rap2api.taobao.org/app/mock/226928/url',resp =>{
        console.log(resp)
        console.log(template)
        let str = template('list-template',{list:resp.body.list})
        console.log(str)
        $('#main-goods').html(str)
        })
      }
    }
    new List()
  })
})