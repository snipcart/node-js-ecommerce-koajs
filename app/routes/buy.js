module.exports = (router, productsLoader) => {
  router.get("/buy/:slug", async ctx => {
    const product = await productsLoader.single(ctx.params.slug)
    if (product) {
      ctx.state.model = {
        title: product.name,
        product: product
      }
      await ctx.render('product')
    }
  })
}