const path = require('path');
const pkg = require('package.json');

let libraryName = pkg.name;


module.exports = {
    entry: {
        [libraryName]: path.resolve('src/index.ts'),
    },
    devtool: 'source-map',
    mode: 'development',
    output: {
        path: path.resolve('lib'),
        filename: "[name].js",
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: '(typeof global!=="undefined"?global:window)'
    },
    rules: [{
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
    resolve: {
        modules: [
            path.resolve('node_modules'),
            path.resolve('src')
        ],
        extensions: ['.json', '.js', '.ts']
    },
    optimization: {
        minimize: false,
        splitChunks: {
            chunks: 'all',
            minChunks: 1,
            cacheGroups: { 
                node_modules: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "node_modules",
                    priority: 10,
                    enforce: true,
                    minChunks: 1,
                    minSize: 0
                }
            },
        },
        occurrenceOrder: true,
        namedModules: true,
        namedChunks: true,

        removeAvailableModules: true,
        mergeDuplicateChunks: true,
        providedExports: true,
        usedExports: true,
        concatenateModules: true,
    },
}