/**
 * 开发服务器
 */
const allPaths = require('../allPaths.js');

module.exports = {
  contentBase: allPaths.devServer.contentBase,
  compress: true,
  port: allPaths.devServer.port,
  open: true,
  hot: true,
  overlay: true,
  inline: true,
  stats: {
    all: undefined,
    assets: false,
    builtAt: false,
    cached: false,
    children: false,
    chunks: false,
    chunkModules: false,
    chunkOrigins: false,
    modules: false,
    performance: false,
  },
  clientLogLevel: "none",
}