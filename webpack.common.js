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
      template: './src/tests/test_one.html',
      filename: './tests/test_one.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/veruneveru.html',
      filename: './veruneveru.html'
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
