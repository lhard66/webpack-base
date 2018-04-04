const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const baseWebpackConfig = {
  entry: {
    'main': './src/main.js',
  },
  output: {
    path: resolve('dist'), // 要求为绝对路径
    publicPath: '/dist/', // 对于按需加载(on-demand-load)或加载外部资源(external resources)（如图片、文件等）来说，output.publicPath 是很重要的选项。如果指定了一个错误的值，则在加载这些资源时会收到 404 错误。
    filename: 'main.js', // 每个输出 bundle 的名称。如：filename: "[name].[hash].bundle.js"
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [resolve('src')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter'),
      //     emitWarning: true,
      //   },
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: ['css-loader', 'less-loader'],
              fallback: 'vue-style-loader',
            }),
            less: ExtractTextPlugin.extract({
              use: ['css-loader', 'less-loader'],
              fallback: 'vue-style-loader',
            }),
            // 不需要提取css的写法
            // less: [
            //   'vue-style-loader',
            //   {
            //     loader: 'css-loader',
            //     options: {
            //         sourceMap: true,
            //     },
            //   },
            //   {
            //     loader: 'less-loader',
            //     options: {
            //         sourceMap: true,
            //     },
            //   },
            // ],
          },
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // exclude: /node_modules/,
        include: [resolve('src')],
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader'],
        }),
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
    // 定义项目环境，开发环境或生产环境
    new webpack.DefinePlugin({
      // 'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
}

module.exports = baseWebpackConfig;
