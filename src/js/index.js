require(['./config'],() => {
  require(['header','footer','banner'], () => {
    class Index {
      constructor(){
        this.banner()
      }
      banner(){
      }
    }
    new Index()
  })
})