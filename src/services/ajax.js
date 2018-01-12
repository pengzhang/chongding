import axios from 'axios'
export default {
  install (Vue, options) {
    Vue.prototype.$ajax = function (options) {
      let _this = this
      const data = new FormData()
      for (let i in options.data) {
        data.append(i, options.data[i])
      }
      axios({
        url: options.url,
        method: options.type || 'post',
        data: options.data,
        header: {},
        transformRequest: [function (data, headers) {
          headers['Content-Type'] = 'application/json'
          return JSON.stringify(data)
        }]
      }).then(res => {
        if (res.status === 200 && (res.data.code === 200 || res.data.code === 401)) {
          let body = res.data
          if (options.success) {
            options.success(body)
          }
        } else {
          options.success(res)
        }
      }).catch(err => {
        if (err.response.data.code === 401) {
          localStorage.removeItem('user')
          sessionStorage.clear()
          window.location.reload()
        } else {
          if (err.response.data.message) {
            _this.$alert(err.response.data.message, err.response.data.code, {
              type: 'error',
              callback: () => {}
            })
          } else {
            _this.$alert('出错了，无法连接服务器，请稍后重试', '出错了', {
              type: 'error',
              callback: () => {}
            })
          }
          options.success(err)
        }
      })
    }
  }
}
