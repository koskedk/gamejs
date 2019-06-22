const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/index.js'
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ],


    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: [/node_modules/],
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: ['file-loader']
            }
        ]
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/
                }
            },

            chunks: 'async',
            minChunks: 1,
            minSize: 30000,
            name: true
        }
    },

    devServer: {
        open: true
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
};
