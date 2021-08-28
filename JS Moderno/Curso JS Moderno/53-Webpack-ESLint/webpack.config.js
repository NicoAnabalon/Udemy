const path = require('path');

module.exports = {
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js'
    }, 
    mode: 'development', 
    devServer: {
        static: {
            directory: path.join(__dirname, '/'),
            publicPath: "/",
            watch: true
        },
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'eslint-loader',
                options: {
                    fix: true
                }
            }
        ]
    }
}