module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/cgrountree.github.io/' : '/',
    css: {
        loaderOptions: {
            sass: { // for sass-loader < 8.0.0, use 'data', for 8 < version < 9, use prependData
                prependData: `
                  @import "@/assets/scss/main.scss";
                  `
            }
        }
    }
}
