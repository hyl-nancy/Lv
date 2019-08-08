require(['./config'], () => {
  require(['template','header', 'footer','carousel'], (template) => {
    class Index {
      constructor() {
        this.banner()
      }
      banner() {
        $('#carousel3').carousel({
          el : {
            imgsContainer	: '.carousel', // 图片容器
            prevBtn 		: '.carousel-prev', // 上翻按钮
            nextBtn 		: '.carousel-next', // 下翻按钮
            indexContainer	: '.carousel-index', // 下标容器
          },conf : {
            auto			: false, //是否自动播放 true/false 默认:true
            needIndexNum	: false, //是否需要下标数字 true/false 默认:true
          }
        });
      }
    }
    new Index()
  })
})