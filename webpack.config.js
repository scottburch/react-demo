// webpack.config.js
module.exports = {
    entry: './src/demo.js',
    output: {
        filename: 'demo.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader' }
        ]
    },
    devtool: "#inline-source-map",
    resolve: {
        alias: {
            RS: __dirname+'/../retailportal/client/RS',
            Component: __dirname+'/../retailportal/client/components/Component.js',
            PureRenderComponent: __dirname+'/../retailportal/client/components/PureRenderComponent.js'
        }
    }

};