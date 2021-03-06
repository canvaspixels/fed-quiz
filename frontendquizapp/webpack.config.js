var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        './www/js/app.js'
    ],
    output: {
        path: __dirname + '/www',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js|\.jsx$/,
                loaders: [
                    'babel'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new BrowserSyncPlugin({
            // BrowserSync options
            // browse to http://localhost:3000/ during development
            host: 'localhost',
            port: 3000,
            // proxy the Webpack Dev Server endpoint
            // (which should be serving on http://localhost:3100/)
            // through BrowserSync
            proxy: 'http://localhost:8080/',
            files: [
                'www/css/*.css',
                'www/img/**',
                'www/build/**',
                // 'www/js/*.js',
                'www/*.html'
            ]
        },
        // plugin options
        {
            // prevent BrowserSync from reloading the page
            // and let Webpack Dev Server take care of this
            // reload: false
        })
    ]

};