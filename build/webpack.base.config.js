const path = require('path');

const baseWebpackConfig = {
  entry: {
    'main': './src/main',
  },
  output: {
    path: path.join(__dirname, '../dist'), // 要求为绝对路径
    publicPath: '/dist/', // 对于按需加载(on-demand-load)或加载外部资源(external resources)（如图片、文件等）来说，output.publicPath 是很重要的选项。如果指定了一个错误的值，则在加载这些资源时会收到 404 错误。
    filename: 'main.js', // 每个输出 bundle 的名称。如：filename: "[name].[hash].bundle.js"
  }
}

module.exports = baseWebpackConfig;
