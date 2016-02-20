var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/index.js',
    output: {
        library: 'RProgress',
        path: __dirname + '/lib',
        filename: 'rprogress.js',
        publicPath: '/lib',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.jsx', '.css', '.js']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: "babel-loader"},
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'postcss-loader'
                )
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('rprogress-styles.css', { allChunks: true })
    ],
    postcss: function () {
        return [
            autoprefixer({browsers: [
                'last 2 Chrome versions',
                'last 2 Firefox versions',
                'Firefox ESR',
                'Firefox 24',
                'last 2 Opera versions',
                'last 2 Safari versions',
                'last 2 iOS versions',
                'Explorer >= 10',
                'last 2 ChromeAndroid versions',
                'Android >= 4.0'
            ]})
        ];
    }
};
