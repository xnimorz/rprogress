var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: './example/example.js',
    output: {
        path: __dirname + '/example',
        filename: 'example.bundle.js',
        publicPath: '/lib'
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
                    'css?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'postcss-loader'
                )
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('rprogress.css', { allChunks: true })
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
