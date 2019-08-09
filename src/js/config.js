require.config({
  baseUrl:'/',
  paths:{
    'jquery':'/libs/jquery-plugins/jquery-1.11.3.min',
    'header':'/js/modules/header',
    'footer':'/js/modules/footer',
    'carousel': '/libs/jquery-plugins/carousel',
    'list':'/js/list',
    'template':'libs/art-template/template-web',
    'detail':'/js/detail',
    'cart':'/js/cart',
    'magnifier':'/libs/jquery-plugins/magnifier',
    'fly':'/libs/jquery-plugins/jquery.fly.min',
    'cookie':'/libs/jquery-plugins/jquery.cookie',
  },
  shim:{
    'carousel':{
      deps:['jquery']
    },
    'magnifier':{
      deps:['jquery']
    },
    'fly':{
      deps:['jquery']
    },
    'cookie':{
      deps:['jquery']
    }
  }
})