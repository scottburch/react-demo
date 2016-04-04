var BeepPlugin = require('webpack-beep-plugin');
var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
var RewirePlugin = require("rewire-webpack");

var patlib = path.normalize(`${__dirname}/../node_modules/patlib`);

module.exports = {
    entry: glob.sync('./spec/**/*.js'),
    output: {
        filename: 'tests.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [/reactive-store/, /patlib/, /src/, /spec/,/ReactHelpers/],
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {test: /\.css$/, loader: 'style-loader!css-loader?sourceMap'},
            {test: /\.less$/, loader: 'style-loader!css-loader?sourceMap!less-loader?sourceMap'},
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?name=../public/fonts/[name].[ext]&limit=10000&minetype=application/font-woff"
            },
            {test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=../public/fonts/[name].[ext]"}
        ]
    },
    devtool: "#inline-source-map",
    resolve: {
        alias: {
            RS: path.normalize(__dirname + '/../src/RS'),
            patlib: `${patlib}/components`,
            Component: `${patlib}/components/Component`,
            PureRenderComponent: `${patlib}/components/PureRenderComponent`,
            style: path.normalize(`${__dirname}/../src/style`),
            GetText: path.normalize(`${__dirname}/../src/GetText`),
            ReactHelpers: path.normalize(`${__dirname}/ReactHelpers`)
        }
    },
    node: {
        fs: "empty"
    },
    plugins: [
        new RewirePlugin(),
        new BeepPlugin(),
        new webpack.ProvidePlugin({
            $j: "jquery",
            _: "lodash",
            R: 'ramda',
            Col: 'react-bootstrap/lib/Col',
            Row: 'react-bootstrap/lib/Row',
            Grid: 'react-bootstrap/lib/Grid',
            PureRenderComponent: `${patlib}/components/PureRenderComponent`,
            Component: `${patlib}/components/Component`
        })
    ]


};