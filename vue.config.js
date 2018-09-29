/* eslint-disable */
module.exports = {
    // 基本路径
    baseUrl: '/',

    // 输出文件目录
    outputDir: 'dist',

    assetsDir: 'dist/assetsDir',

    pages: undefined,

    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,

    runtimeCompiler: undefined,

    transpileDependencies: [],

    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: undefined,

    configureWebpack: () => {},

    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => {},

    // css相关配置
    css: {
        modules: false,
        extract: true,
        sourceMap: false,
        loaderOptions: {}
    },

    // webpack-dev-server 相关配置
    // See https://webpack.docschina.org/configuration/dev-server/
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null // 设置代理
    },

    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,

    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},

    // 第三方插件配置
    pluginOptions: {
        // ...
    }
};
