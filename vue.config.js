const webpack = require("webpack");

module.exports = {
  publicPath: './',
  assetsDir: "static",  //静态资源目录
  // 输出文件目录
  outputDir: 'dist',
 configureWebpack: {
   plugins: [
     new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery",
       "window.jQuery": "jquery",
       Popper: ["popper.js", "default"]
     })
   ]
 }
};