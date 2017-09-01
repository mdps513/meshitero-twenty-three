var DEBUG = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined;
var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var devtool = DEBUG ? '#inline-source-map' : '#eval';
var plugins = [ new webpack.ProvidePlugin({ jQuery: "jquery", $: "jquery", jquery: "jquery" }), new ExtractTextPlugin('stylesheets/[name].bundle.css') ];

if (DEBUG) {
  LOG_ENV = true;
}

plugins.push( new webpack.DefinePlugin( { DEBUG_LOG_ENV: LOG_ENV  }) );

module.exports = {
    entry: {
        'application': './src/webpackEnvironment.js',
    },
    output: {
        path: `${__dirname}/public/`,
        filename: 'javascripts/[name].bundle.js'
    },
    devtool: devtool,
    plugins: plugins,
    resolve: {
      modules: [ path.join(__dirname, "node_modules") ],
      extensions: ['*', '.js', '.css']
    },
    module: {
        loaders: [
            // **IMPORTANT** This is needed so that each bootstrap js file required by
            // bootstrap-webpack has access to the jQuery object
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

            // loads css
            { test: /\.css$/, loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"}) },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?mimetype=image/svg+xml' },
            { test: /\.woff(\d+)?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?mimetype=application/font-woff' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?mimetype=application/font-woff' }
        ]
    }
};