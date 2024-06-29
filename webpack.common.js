const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.svg/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),

    //Section

    //Article
    new HtmlWebpackPlugin({
      template: './src/investigations/scarlet.html',
      filename: './investigations/scarlet.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/investigations/deepfake.html',
      filename: './investigations/deepfake.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/investigations/guzeeva.html',
      filename: './investigations/guzeeva.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/investigations/nasekomoe.html',
      filename: './investigations/nasekomoe.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/investigations/kirkorov.html',
      filename: './investigations/kirkorov.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/investigations/pivo.html',
      filename: './investigations/pivo.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/investigations/pohudenie.html',
      filename: './investigations/pohudenie.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/investigations/samka.html',
      filename: './investigations/samka.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/investigations/zamok.html',
      filename: './investigations/zamok.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/investigations/star.html',
      filename: './investigations/star.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/investigations/atom.html',
      filename: './investigations/atom.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/investigations/nlo.html',
      filename: './investigations/nlo.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/investigations/apple.html',
      filename: './investigations/apple.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/investigations/ugli.html',
      filename: './investigations/ugli.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/investigations/plane.html',
      filename: './investigations/plane.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/vanga.html',
      filename: './library/vanga.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/burger.html',
      filename: './library/burger.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/number.html',
      filename: './library/number.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/gravity.html',
      filename: './library/gravity.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/carrot.html',
      filename: './library/carrot.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/travel.html',
      filename: './library/travel.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/cyber.html',
      filename: './library/cyber.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/tower.html',
      filename: './library/tower.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/bars.html',
      filename: './library/bars.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/mike.html',
      filename: './library/mike.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/mask.html',
      filename: './library/mask.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/kadir.html',
      filename: './library/kadir.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/martins.html',
      filename: './library/martins.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/covid.html',
      filename: './library/covid.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/newyear.html',
      filename: './library/newyear.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/fish.html',
      filename: './library/fish.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/panda.html',
      filename: './library/panda.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/school.html',
      filename: './library/school.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/car.html',
      filename: './library/car.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/humster.html',
      filename: './library/humster.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/huawei.html',
      filename: './library/huawei.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/srach.html',
      filename: './library/srach.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/berry.html',
      filename: './library/berry.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library/money.html',
      filename: './library/money.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/test_one_one.html',
      filename: './tests/test_one_one.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/test_one_two.html',
      filename: './tests/test_one_two.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/test_one_three.html',
      filename: './tests/test_one_three.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/test_one_four.html',
      filename: './tests/test_one_four.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/test_one_five.html',
      filename: './tests/test_one_five.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/test_one_six.html',
      filename: './tests/test_one_six.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/test_one_seven.html',
      filename: './tests/test_one_seven.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/test_two_one.html',
      filename: './tests/test_two_one.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/test_two_two.html',
      filename: './tests/test_two_two.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/test_two_three.html',
      filename: './tests/test_two_three.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/test_two_four.html',
      filename: './tests/test_two_four.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/test_two_five.html',
      filename: './tests/test_two_five.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/test_three_one.html',
      filename: './tests/test_three_one.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/test_three_two.html',
      filename: './tests/test_three_two.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/test_three_three.html',
      filename: './tests/test_three_three.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/test_three_four.html',
      filename: './tests/test_three_four.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/test_three_five.html',
      filename: './tests/test_three_five.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/veruneveru.html',
      filename: './veruneveru.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/404.html',
      filename: './404.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/505.html',
      filename: './505.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/library.html',
      filename: './library.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tests.html',
      filename: './tests.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/search.html',
      filename: './search.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/investigations.html',
      filename: './investigations.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/zaglushka.html',
      filename: './zaglushka.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html'
    }),

    //Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
