var BeepPlugin = require('webpack-beep-plugin');
var webpack = require('webpack');
var path = require('path');

var patlib = path.normalize(__dirname + '/node_modules/patlib');

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
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?name=../public/fonts/[name].[ext]&limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=../public/fonts/[name].[ext]" }
        ]
    },
    devtool: "#inline-source-map",
    resolve: {
        alias: {
            RS: __dirname + '/../retailportal/client/RS',
            patlib: `${patlib}/components`,
            Component: `${patlib}/components/Component`,
            PureRenderComponent: `${patlib}/components/PureRenderComponent`,
            style: `${__dirname}/src/style`,
            GetText: `${__dirname}/src/GetText`
        }
    },
    plugins: [
        new BeepPlugin(),
        new webpack.ProvidePlugin({
            $j: "jquery",
            _: "lodash",
            Col: 'react-bootstrap/lib/Col',
            Row: 'react-bootstrap/lib/Row',
            Grid: 'react-bootstrap/lib/Grid',
            PureRenderComponent: `${patlib}/components/PureRenderComponent`,
            Component: `${patlib}/components/Component`
        })
    ]


};