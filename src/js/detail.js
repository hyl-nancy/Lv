require(['./config'],() => {
  require(['template','header','footer'], (template) => {
    class Detail {
      constructor(){
        this.getData()
      }
      getData(){
       const id = location.search.slice(4)
       console.log(id)
       $.get()
       if(resp.code === 200){
         let {detail}=resp.body
        $.get('http://rap2api.taobao.org/app/mock/226928/detailurl',{id},resp =>{
          this.detail = {...detail,id}
       })
      }
    }
    new Detail()
  })
})