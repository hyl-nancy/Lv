require(['./config'], () => {
  require(['template', 'header', 'footer','login'], (template) => {
    class List {
      constructor() {
        this.loginSucceed()
      }
      loginSucceed() {
        $('#login-btn').on('click', () => {
          let username = $('#username').val()
          let password = $('#password').val()
          // console.log(username,password)
          let userinfo = {
            username,
            password
          }
          userinfo = JSON.stringify(userinfo)
          console.log(userinfo)
          if ($('#sevenFree').prop('checked')) {
            $.cookie('login', userinfo, { expires: 7, path: '/' })
          } else {
            $.cookie('login', userinfo, { path: '/' })
          }
          window.location.href = '/index.html'
        })
      }
    }
    new List()
  })
})