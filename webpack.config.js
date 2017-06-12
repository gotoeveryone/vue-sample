const path = require('path');

module.exports = {
    entry: './assets/js/app.js',
    output: {
        path: path.join(__dirname, 'public/js'),
        filename: 'app.js',
    },
    resolve: {
        extensions: ['.vue', '.js'],
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'buble-loader'
                    }
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'buble-loader',
            },
        ],
    },
};