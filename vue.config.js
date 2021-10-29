module.exports = {
  // 基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: process.env.outputDir,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 用于放置生成的静态资源
  assetsDir: 'static',
  // 指定生成的 index.html 的输出路径  (打包之后，改变系统默认的index.html的文件名)
  indexPath: 'index.html',
  filenameHashing: true,
  // vue-loader 配置项
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,

  devServer: {
    open: true, // 是否自动打开浏览器页面
    host: '0.0.0.0',
    port: 8081,
    https: false, // 使用https提供服务
    hotOnly: false,
    proxy: null
  },
  // image-webpack-loader图片压缩配置
  // chainWebpack: config => {
  //   config.module
  //     .rule('images')
  //     .use('image-webpack-loader')
  //     .loader('image-webpack-loader')
  //     .options({
  //       bypassOnDebug: true
  //     })
  //     .end()
  // },
  chainWebpack: (config) => {
    config.module
        .rule('css')
        .test(/\.css$/)
        .oneOf('vue')
        .resourceQuery(/\?vue/)
        .use('px2rem')
        .loader('px2rem-loader')
        .options({
          remUnit: 65
        })
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 65, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
            // unitPrecision: 5, //允许REM单位增长到的十进制数字。
            //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            // propBlackList: [], //黑名单
            exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            selectorBlackList: ['menu-list'], //要忽略并保留为px的选择器
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
          }),
        ]
      }
    }
  },
    // 第三方插件配置
  pluginOptions: {},
  // module: {
  //   rules: [{
  //     test: /\.css$/,
  //     use: [{
  //       loader: 'style-loader'
  //     }, {
  //       loader: 'css-loader'
  //     }, {
  //       loader: 'px2rem-loader',
  //       // options here
  //       options: {
  //         remUnit: 192,//设计图的宽度/10 比如你的设计图是1920的宽度 这里你就1920/10=192
  //         // remPrecision: 8//换算的rem保留几位小数点
  //       }
  //     }]
  //   }]
  // }
};
