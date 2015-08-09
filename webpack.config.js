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
            RS: __dirname+'/../retailportal/public/javascripts/react/RS',
            Component: __dirname+'/../retailportal/public/javascripts/react/components/Component.js'
        }
    }

};