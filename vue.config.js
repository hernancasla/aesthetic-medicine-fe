module.exports = {
  devServer: {
    disableHostCheck: true,
//    port: 80,

    },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
