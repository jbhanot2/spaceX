var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
      // tell webpack to run babel every file it run through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        'react', 
                        'stage-0',
                        ['env', { targets: {browser:['last 2 versions']}}]
                    ]
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                          // publicPath: '/dist/',
                          sourceMap: true
                      }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
              }
        ]
    },
    plugins: [
        ///...
        new MiniCssExtractPlugin({
          filename:  '[name].css',
          chunkFilename:  '[id].css' 
       })
      ]
}