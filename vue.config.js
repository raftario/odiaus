module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/_variables.scss";'
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      enableInSFC: true
    }
  }
}
