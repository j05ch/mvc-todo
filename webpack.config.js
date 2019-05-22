const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: {
        index: './src/index.tsx'
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: `Joschi's To-Do️`,
            template: 'src/index.html'
        }),
        // new Dotenv()
    ]
};
