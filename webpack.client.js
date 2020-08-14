const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

config = {

    // tell webpack to root file to our application
    entry: './src/client/client.js',

    // tell webpack to  output file that is generated 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
module.exports = merge(baseConfig, config);
