var BeepPlugin = require('webpack-beep-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/demo.js',
    output: {
        filename: 'demo.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [/reactive-store/,/patlib/,/src/],
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {test: /\.css$/, loader: 'style-loader!css-loader?sourceMap'},
            { test: /\.less$/,loader: 'style-loader!css-loader?sourceMap!less-loader?sourceMap'},
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader'
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" },
            { test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" }
        ]
    },
    devtool: "#inline-source-map",
    resolve: {
        alias: {
            RS: __dirname + '/src/RS',
            patlib: 'patlib/components',
            Component: 'patlib/components/Component',
            PureRenderComponent: 'patlib/components/PureRenderComponent',
            style: `${__dirname}/src/style`,
            GetText: `${__dirname}/src/GetText`
        }
    },
    node: {
        fs: "empty"
    },
    plugins: [
        new BeepPlugin(),
        new webpack.ProvidePlugin({
            $j: "jquery",
            _: "lodash",
            R: 'ramda',
            Col: 'react-bootstrap/lib/Col',
            Row: 'react-bootstrap/lib/Row',
            Grid: 'react-bootstrap/lib/Grid',
            PureRenderComponent: 'patlib/components/PureRenderComponent',
            Component: 'patlib/components/Component',
            M: 'simple-monads'
        })
    ]


};