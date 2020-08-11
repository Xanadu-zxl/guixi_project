// vue.config.js
module.exports = {
  // 选项...
  proxy: {
    // '/'是指相对url
    '/': {
      //目标，指向绝对URL。
      target: `http://127.0.0.1:7000`,
      changeOrigin: true,
      pathRewrite: {
        '^/': ''
      }
    }
  }

}