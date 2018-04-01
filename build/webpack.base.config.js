const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseWebpackConfig = {
  entry: {
    'main': './src/main.js',
  },
  output: {
    path: path.join(__dirname, '../dist'), // 要求为绝对路径
    publicPath: '/dist/', // 对于按需加载(on-demand-load)或加载外部资源(external resources)（如图片、文件等）来说，output.publicPath 是很重要的选项。如果指定了一个错误的值，则在加载这些资源时会收到 404 错误。
    filename: 'main.js', // 每个输出 bundle 的名称。如：filename: "[name].[hash].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
  ],
}

module.exports = baseWebpackConfig;
