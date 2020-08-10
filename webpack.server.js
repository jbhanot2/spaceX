const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpackNodeExternals = require('webpack-node-externals')

config = {
    // Inform webpack that we're building a bundle 
    // for nodejs, rather than browser
    target: 'node',

    // tell webpack to root file to our application
    entry: './src/index.js',

    // tell webpack to  output file that is generated 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()],
    mode: 'development',
}

module.exports = merge(baseConfig, config);