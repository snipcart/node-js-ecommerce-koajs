module.exports = (router, productsLoader) => {
    require('./home')(router, productsLoader)
    require('./buy')(router, productsLoader)
    require('./donate')(router)
}