require(['./config'],() => {
  require(['template','header','footer','url'], (template) => {
    class Detail {
      constructor(){
        this.getData()
      }
      getData(){
       const id = location.search.slice(4)
       console.log(id)
       $.get('http://rap2api.taobao.org/app/mock/226928/detailurl')
      }
    }
    new Detail()
  })
})