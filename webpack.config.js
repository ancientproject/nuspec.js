const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        "index": path.resolve('src/index.ts')
    },
    devtool: 'source-map',
    mode: 'development',
    output: {
        path: path.resolve('dist'),
        libraryTarget: 'commonjs',
        filename: 'index.js'
    },
    module:{
        rules: [
            {
                test: /(\.ts)$/,
                loaders: ['babel-loader', 'ts-loader'],
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /(\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            }
        ],
    },
    resolve: {
        modules: [
            path.resolve('node_modules'),
            path.resolve('src')
        ],
        extensions: ['.json', '.js', '.ts']
    },
    plugins:[
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
              from: './package.json',
              to: '../dist/package.json',
            },
        ])
    ]
}